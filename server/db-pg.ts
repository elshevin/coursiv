import { eq, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { 
  users, 
  demoUsers, 
  emailUsers, 
  userStreaks, 
  dailyActivity, 
  userCourseProgress,
  type User,
  type InsertUser,
  type DemoUser,
  type InsertDemoUser,
  type EmailUser,
  type InsertEmailUser,
  type UserStreak,
  type InsertUserStreak,
  type DailyActivity,
  type InsertDailyActivity,
  type UserCourseProgress,
  type InsertUserCourseProgress
} from "../drizzle/schema-pg";
import bcrypt from "bcryptjs";

// Re-export types
export type { User, InsertUser, DemoUser, InsertDemoUser, EmailUser, InsertEmailUser, UserStreak, DailyActivity, UserCourseProgress };

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.warn("[Database] No DATABASE_URL configured");
}

// Create postgres client
const client = connectionString ? postgres(connectionString) : null;
const db = client ? drizzle(client) : null;

export async function getDb() {
  return db;
}

const SALT_ROUNDS = 10;

// ============================================
// Email/Password User Functions
// ============================================

export async function createEmailUser(
  email: string,
  password: string,
  name?: string,
  quizAnswers?: Record<string, string>
): Promise<EmailUser | null> {
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
  if (!db) {
    console.warn("[Database] Cannot get email user: database not available");
    return null;
  }

  const result = await db.select().from(emailUsers).where(eq(emailUsers.email, email)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function getEmailUserById(id: number): Promise<EmailUser | null> {
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
  if (db) {
    await db.update(emailUsers).set({ lastLoginAt: new Date() }).where(eq(emailUsers.id, user.id));
  }

  return user;
}

export async function updateEmailUserSettings(
  id: number,
  settings: { testModeEnabled?: boolean; darkModeEnabled?: boolean }
): Promise<void> {
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
  if (!db) {
    console.warn("[Database] Cannot create demo user: database not available");
    return null;
  }

  try {
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
    
    const result = await db.select().from(demoUsers).where(eq(demoUsers.username, username)).limit(1);
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("[Database] Failed to create demo user:", error);
    throw error;
  }
}

export async function getDemoUserById(id: number): Promise<DemoUser | null> {
  if (!db) {
    console.warn("[Database] Cannot get demo user: database not available");
    return null;
  }

  const result = await db.select().from(demoUsers).where(eq(demoUsers.id, id)).limit(1);
  return result.length > 0 ? result[0] : null;
}

export async function updateDemoUserLastLogin(id: number): Promise<void> {
  if (!db) {
    console.warn("[Database] Cannot update demo user: database not available");
    return;
  }

  await db.update(demoUsers).set({ lastLoginAt: new Date() }).where(eq(demoUsers.id, id));
}

// ============================================
// Streak Functions
// ============================================

export async function getUserStreak(userId: number, userType: string): Promise<UserStreak | null> {
  if (!db) return null;

  const result = await db.select().from(userStreaks)
    .where(and(eq(userStreaks.userId, userId), eq(userStreaks.userType, userType)))
    .limit(1);
  
  return result.length > 0 ? result[0] : null;
}

export async function updateUserStreak(userId: number, userType: string): Promise<UserStreak | null> {
  if (!db) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const existing = await getUserStreak(userId, userType);
  
  if (!existing) {
    const values: InsertUserStreak = {
      userId,
      userType,
      currentStreak: 1,
      longestStreak: 1,
      lastActivityDate: today,
    };
    await db.insert(userStreaks).values(values);
    return getUserStreak(userId, userType);
  }

  const lastActivity = existing.lastActivityDate ? new Date(existing.lastActivityDate) : null;
  if (lastActivity) {
    lastActivity.setHours(0, 0, 0, 0);
  }

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  let newStreak = existing.currentStreak || 0;
  
  if (lastActivity && lastActivity.getTime() === today.getTime()) {
    return existing;
  } else if (lastActivity && lastActivity.getTime() === yesterday.getTime()) {
    newStreak += 1;
  } else {
    newStreak = 1;
  }

  const newLongest = Math.max(newStreak, existing.longestStreak || 0);

  await db.update(userStreaks)
    .set({ 
      currentStreak: newStreak, 
      longestStreak: newLongest, 
      lastActivityDate: today,
      updatedAt: new Date()
    })
    .where(eq(userStreaks.id, existing.id));

  return getUserStreak(userId, userType);
}

// ============================================
// Daily Activity Functions
// ============================================

export async function getDailyActivity(userId: number, userType: string, date: Date): Promise<DailyActivity | null> {
  if (!db) return null;

  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);

  const result = await db.select().from(dailyActivity)
    .where(and(
      eq(dailyActivity.userId, userId),
      eq(dailyActivity.userType, userType)
    ))
    .limit(100);

  const filtered = result.filter(r => {
    const actDate = new Date(r.activityDate);
    return actDate >= startOfDay && actDate <= endOfDay;
  });

  return filtered.length > 0 ? filtered[0] : null;
}

export async function recordDailyActivity(
  userId: number, 
  userType: string, 
  lessonsCompleted: number = 1, 
  xpEarned: number = 50
): Promise<DailyActivity | null> {
  if (!db) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const existing = await getDailyActivity(userId, userType, today);

  if (existing) {
    await db.update(dailyActivity)
      .set({ 
        lessonsCompleted: (existing.lessonsCompleted || 0) + lessonsCompleted,
        xpEarned: (existing.xpEarned || 0) + xpEarned
      })
      .where(eq(dailyActivity.id, existing.id));
    return getDailyActivity(userId, userType, today);
  }

  const values: InsertDailyActivity = {
    userId,
    userType,
    activityDate: today,
    lessonsCompleted,
    xpEarned,
  };

  await db.insert(dailyActivity).values(values);
  return getDailyActivity(userId, userType, today);
}

export async function getActivityHistory(userId: number, userType: string, days: number = 30): Promise<DailyActivity[]> {
  if (!db) return [];

  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);
  startDate.setHours(0, 0, 0, 0);

  const result = await db.select().from(dailyActivity)
    .where(and(
      eq(dailyActivity.userId, userId),
      eq(dailyActivity.userType, userType)
    ))
    .limit(days);

  return result.filter(r => new Date(r.activityDate) >= startDate);
}

// ============================================
// Course Progress Functions
// ============================================

export async function getCourseProgress(userId: number, userType: string, courseId: string): Promise<UserCourseProgress | null> {
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

export async function getAllCourseProgress(userId: number, userType: string): Promise<UserCourseProgress[]> {
  if (!db) return [];

  return db.select().from(userCourseProgress)
    .where(and(
      eq(userCourseProgress.userId, userId),
      eq(userCourseProgress.userType, userType)
    ));
}

export async function updateCourseProgress(
  userId: number, 
  userType: string, 
  courseId: string, 
  moduleId: string
): Promise<UserCourseProgress | null> {
  if (!db) return null;

  const existing = await getCourseProgress(userId, userType, courseId);

  if (!existing) {
    const values: InsertUserCourseProgress = {
      userId,
      userType,
      courseId,
      completedModules: JSON.stringify([moduleId]),
      currentModuleId: moduleId,
    };
    await db.insert(userCourseProgress).values(values);
    return getCourseProgress(userId, userType, courseId);
  }

  let completedModules: string[] = [];
  try {
    completedModules = existing.completedModules ? JSON.parse(existing.completedModules) : [];
  } catch {
    completedModules = [];
  }

  if (!completedModules.includes(moduleId)) {
    completedModules.push(moduleId);
  }

  await db.update(userCourseProgress)
    .set({ 
      completedModules: JSON.stringify(completedModules),
      currentModuleId: moduleId,
      lastAccessedAt: new Date()
    })
    .where(eq(userCourseProgress.id, existing.id));

  return getCourseProgress(userId, userType, courseId);
}

export async function markCourseCompleted(userId: number, userType: string, courseId: string): Promise<void> {
  if (!db) return;

  const existing = await getCourseProgress(userId, userType, courseId);
  if (existing) {
    await db.update(userCourseProgress)
      .set({ completedAt: new Date() })
      .where(eq(userCourseProgress.id, existing.id));
  }
}

// ============================================
// OAuth User Functions (for Manus OAuth)
// ============================================

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const existing = await db.select().from(users).where(eq(users.openId, user.openId)).limit(1);
    
    if (existing.length > 0) {
      // Update existing user
      const updateSet: Partial<InsertUser> = {
        lastSignedIn: new Date(),
        updatedAt: new Date(),
      };
      if (user.name) updateSet.name = user.name;
      if (user.email) updateSet.email = user.email;
      if (user.loginMethod) updateSet.loginMethod = user.loginMethod;
      if (user.role) updateSet.role = user.role;

      await db.update(users).set(updateSet).where(eq(users.openId, user.openId));
    } else {
      // Insert new user
      const values: InsertUser = {
        openId: user.openId,
        name: user.name || null,
        email: user.email || null,
        loginMethod: user.loginMethod || null,
        role: user.role || "user",
        lastSignedIn: new Date(),
      };
      await db.insert(users).values(values);
    }
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string): Promise<User | undefined> {
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}
