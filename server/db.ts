import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, demoUsers, InsertDemoUser, DemoUser, emailUsers, InsertEmailUser, EmailUser } from "../drizzle/schema";
import { ENV } from './_core/env';
import bcrypt from "bcryptjs";

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// ============================================
// Email/Password User Functions
// ============================================

const SALT_ROUNDS = 10;

export async function createEmailUser(
  email: string,
  password: string,
  name?: string,
  quizAnswers?: Record<string, string>
): Promise<EmailUser | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create email user: database not available");
    return null;
  }

  try {
    // Check if user already exists
    const existing = await db.select().from(emailUsers).where(eq(emailUsers.email, email)).limit(1);
    if (existing.length > 0) {
      throw new Error("User with this email already exists");
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    const values: InsertEmailUser = {
      email,
      passwordHash,
      name: name || email.split("@")[0],
      quizAnswers: quizAnswers ? JSON.stringify(quizAnswers) : null,
    };

    await db.insert(emailUsers).values(values);

    // Fetch the created user
    const result = await db.select().from(emailUsers).where(eq(emailUsers.email, email)).limit(1);
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("[Database] Failed to create email user:", error);
    throw error;
  }
}

export async function getEmailUserByEmail(email: string): Promise<EmailUser | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get email user: database not available");
    return null;
  }

  const result = await db.select().from(emailUsers).where(eq(emailUsers.email, email)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function getEmailUserById(id: number): Promise<EmailUser | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get email user: database not available");
    return null;
  }

  const result = await db.select().from(emailUsers).where(eq(emailUsers.id, id)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function verifyEmailUserPassword(email: string, password: string): Promise<EmailUser | null> {
  const user = await getEmailUserByEmail(email);
  if (!user) {
    return null;
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) {
    return null;
  }

  // Update last login time
  const db = await getDb();
  if (db) {
    await db.update(emailUsers).set({ lastLoginAt: new Date() }).where(eq(emailUsers.id, user.id));
  }

  return user;
}

export async function updateEmailUserSettings(
  id: number,
  settings: { testModeEnabled?: boolean; darkModeEnabled?: boolean }
): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update email user settings: database not available");
    return;
  }

  await db.update(emailUsers).set(settings).where(eq(emailUsers.id, id));
}

// ============================================
// Demo user functions for testing (legacy)
// ============================================

export async function createDemoUser(): Promise<DemoUser | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create demo user: database not available");
    return null;
  }

  try {
    // Generate unique username with timestamp and random suffix
    const timestamp = Date.now();
    const randomSuffix = Math.random().toString(36).substring(2, 6);
    const username = `demo_${timestamp}_${randomSuffix}`;
    const displayName = `Demo User ${randomSuffix.toUpperCase()}`;
    
    const values: InsertDemoUser = {
      username,
      displayName,
      avatarUrl: null,
    };

    await db.insert(demoUsers).values(values);
    
    // Fetch the created user
    const result = await db.select().from(demoUsers).where(eq(demoUsers.username, username)).limit(1);
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("[Database] Failed to create demo user:", error);
    throw error;
  }
}

export async function getDemoUserById(id: number): Promise<DemoUser | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get demo user: database not available");
    return null;
  }

  const result = await db.select().from(demoUsers).where(eq(demoUsers.id, id)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function updateDemoUserLastLogin(id: number): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update demo user: database not available");
    return;
  }

  await db.update(demoUsers).set({ lastLoginAt: new Date() }).where(eq(demoUsers.id, id));
}

// ============================================
// Streak Functions
// ============================================

import { userStreaks, dailyActivity, userCourseProgress, UserStreak, DailyActivity, UserCourseProgress } from "../drizzle/schema";
import { and, gte, lte, sql } from "drizzle-orm";

export async function getUserStreak(userId: number, userType: string): Promise<UserStreak | null> {
  const db = await getDb();
  if (!db) return null;

  const result = await db.select().from(userStreaks)
    .where(and(eq(userStreaks.userId, userId), eq(userStreaks.userType, userType)))
    .limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function createOrUpdateStreak(
  userId: number,
  userType: string,
  testMode: boolean = false
): Promise<UserStreak | null> {
  const db = await getDb();
  if (!db) return null;

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  // Get existing streak
  let streak = await getUserStreak(userId, userType);
  
  if (!streak) {
    // Create new streak record
    await db.insert(userStreaks).values({
      userId,
      userType,
      currentStreak: 1,
      longestStreak: 1,
      lastActivityDate: now,
    });
    streak = await getUserStreak(userId, userType);
  } else {
    const lastActivity = streak.lastActivityDate ? new Date(streak.lastActivityDate) : null;
    const lastActivityDay = lastActivity ? new Date(lastActivity.getFullYear(), lastActivity.getMonth(), lastActivity.getDate()) : null;
    
    let newStreak = streak.currentStreak || 0;
    
    if (testMode) {
      // In test mode, always increment streak
      newStreak += 1;
    } else {
      // Normal mode: check if it's a new day
      if (!lastActivityDay || today.getTime() > lastActivityDay.getTime()) {
        const dayDiff = lastActivityDay ? Math.floor((today.getTime() - lastActivityDay.getTime()) / (1000 * 60 * 60 * 24)) : 1;
        
        if (dayDiff === 1) {
          // Consecutive day
          newStreak += 1;
        } else if (dayDiff > 1) {
          // Streak broken
          newStreak = 1;
        }
        // If dayDiff === 0, same day, don't increment
      }
    }
    
    const newLongest = Math.max(streak.longestStreak || 0, newStreak);
    
    await db.update(userStreaks).set({
      currentStreak: newStreak,
      longestStreak: newLongest,
      lastActivityDate: now,
    }).where(eq(userStreaks.id, streak.id));
    
    streak = await getUserStreak(userId, userType);
  }
  
  return streak;
}

export async function getWeeklyActivity(userId: number, userType: string): Promise<DailyActivity[]> {
  const db = await getDb();
  if (!db) return [];

  const now = new Date();
  // Get start of week (Saturday)
  const dayOfWeek = now.getDay();
  const daysToSaturday = (dayOfWeek + 1) % 7;
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - daysToSaturday);
  startOfWeek.setHours(0, 0, 0, 0);
  
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999);

  const result = await db.select().from(dailyActivity)
    .where(and(
      eq(dailyActivity.userId, userId),
      eq(dailyActivity.userType, userType),
      gte(dailyActivity.activityDate, startOfWeek),
      lte(dailyActivity.activityDate, endOfWeek)
    ));
  
  return result;
}

// ============================================
// Course Progress Functions
// ============================================

export async function getUserCourseProgress(userId: number, userType: string, courseId: string): Promise<UserCourseProgress | null> {
  const db = await getDb();
  if (!db) return null;

  const result = await db.select().from(userCourseProgress)
    .where(and(
      eq(userCourseProgress.userId, userId),
      eq(userCourseProgress.userType, userType),
      eq(userCourseProgress.courseId, courseId)
    ))
    .limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function getAllUserCourseProgress(userId: number, userType: string): Promise<UserCourseProgress[]> {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(userCourseProgress)
    .where(and(
      eq(userCourseProgress.userId, userId),
      eq(userCourseProgress.userType, userType)
    ));
}

export async function updateCourseProgress(
  userId: number,
  userType: string,
  courseId: string,
  completedModules: string[],
  currentModuleId?: string
): Promise<UserCourseProgress | null> {
  const db = await getDb();
  if (!db) return null;

  const existing = await getUserCourseProgress(userId, userType, courseId);
  
  if (existing) {
    await db.update(userCourseProgress)
      .set({
        completedModules: JSON.stringify(completedModules),
        currentModuleId: currentModuleId || existing.currentModuleId,
      })
      .where(eq(userCourseProgress.id, existing.id));
  } else {
    await db.insert(userCourseProgress).values({
      userId,
      userType,
      courseId,
      completedModules: JSON.stringify(completedModules),
      currentModuleId,
    });
  }
  
  return getUserCourseProgress(userId, userType, courseId);
}

export async function markCourseCompleted(userId: number, userType: string, courseId: string): Promise<void> {
  const db = await getDb();
  if (!db) return;

  const existing = await getUserCourseProgress(userId, userType, courseId);
  if (existing) {
    await db.update(userCourseProgress)
      .set({ completedAt: new Date() })
      .where(eq(userCourseProgress.id, existing.id));
  }
}

export async function recordDailyActivity(
  userId: number,
  userType: string,
  lessonsCompleted: number = 1,
  xpEarned: number = 50
): Promise<void> {
  const db = await getDb();
  if (!db) return;

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  // Check if there's already an activity record for today
  const existing = await db.select().from(dailyActivity)
    .where(and(
      eq(dailyActivity.userId, userId),
      eq(dailyActivity.userType, userType),
      gte(dailyActivity.activityDate, today),
      lte(dailyActivity.activityDate, new Date(today.getTime() + 24 * 60 * 60 * 1000 - 1))
    ))
    .limit(1);
  
  if (existing.length > 0) {
    // Update existing record
    await db.update(dailyActivity).set({
      lessonsCompleted: sql`${dailyActivity.lessonsCompleted} + ${lessonsCompleted}`,
      xpEarned: sql`${dailyActivity.xpEarned} + ${xpEarned}`,
    }).where(eq(dailyActivity.id, existing[0].id));
  } else {
    // Create new record
    await db.insert(dailyActivity).values({
      userId,
      userType,
      activityDate: now,
      lessonsCompleted,
      xpEarned,
    });
  }
}
