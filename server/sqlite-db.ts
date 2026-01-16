import { eq, and } from "drizzle-orm";
import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "../drizzle/sqlite-schema";
import bcrypt from "bcryptjs";
import path from "path";
import fs from "fs";

const SALT_ROUNDS = 10;

// SQLite database path
const DB_PATH = path.join(process.cwd(), "data", "coursiv.db");

// Ensure data directory exists
const dataDir = path.dirname(DB_PATH);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Create SQLite connection
const sqlite = new Database(DB_PATH);
const db = drizzle(sqlite, { schema });

// Initialize tables
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS email_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    passwordHash TEXT NOT NULL,
    name TEXT,
    avatarUrl TEXT,
    quizAnswers TEXT,
    testModeEnabled INTEGER DEFAULT 0,
    darkModeEnabled INTEGER DEFAULT 0,
    createdAt TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updatedAt TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
    lastLoginAt TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL
  );

  CREATE TABLE IF NOT EXISTS demo_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    displayName TEXT,
    avatarUrl TEXT,
    createdAt TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
    lastLoginAt TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL
  );

  CREATE TABLE IF NOT EXISTS user_streaks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER NOT NULL,
    userType TEXT NOT NULL,
    currentStreak INTEGER DEFAULT 0,
    longestStreak INTEGER DEFAULT 0,
    lastActivityDate TEXT,
    createdAt TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updatedAt TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL
  );

  CREATE TABLE IF NOT EXISTS user_course_progress (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER NOT NULL,
    userType TEXT NOT NULL,
    courseId TEXT NOT NULL,
    completedModules TEXT,
    currentModuleId TEXT,
    startedAt TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
    lastAccessedAt TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
    completedAt TEXT
  );

  CREATE TABLE IF NOT EXISTS daily_activity (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER NOT NULL,
    userType TEXT NOT NULL,
    activityDate TEXT NOT NULL,
    lessonsCompleted INTEGER DEFAULT 0,
    xpEarned INTEGER DEFAULT 0,
    createdAt TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL
  );
`);

console.log("[SQLite] Database initialized at:", DB_PATH);

// ============================================
// Email/Password User Functions
// ============================================

export async function createEmailUser(
  email: string,
  password: string,
  name?: string,
  quizAnswers?: Record<string, string>
): Promise<schema.EmailUser | null> {
  try {
    // Check if user already exists
    const existing = db.select().from(schema.emailUsers).where(eq(schema.emailUsers.email, email)).get();
    if (existing) {
      throw new Error("User with this email already exists");
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    const now = new Date().toISOString();

    const result = db.insert(schema.emailUsers).values({
      email,
      passwordHash,
      name: name || email.split("@")[0],
      quizAnswers: quizAnswers ? JSON.stringify(quizAnswers) : null,
      createdAt: now,
      updatedAt: now,
      lastLoginAt: now,
    }).returning().get();

    return result || null;
  } catch (error) {
    console.error("[SQLite] Failed to create email user:", error);
    throw error;
  }
}

export async function getEmailUserByEmail(email: string): Promise<schema.EmailUser | null> {
  const result = db.select().from(schema.emailUsers).where(eq(schema.emailUsers.email, email)).get();
  return result || null;
}

export async function getEmailUserById(id: number): Promise<schema.EmailUser | null> {
  const result = db.select().from(schema.emailUsers).where(eq(schema.emailUsers.id, id)).get();
  return result || null;
}

export async function verifyEmailUserPassword(email: string, password: string): Promise<schema.EmailUser | null> {
  const user = await getEmailUserByEmail(email);
  if (!user) {
    return null;
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) {
    return null;
  }

  // Update last login time
  db.update(schema.emailUsers)
    .set({ lastLoginAt: new Date().toISOString() })
    .where(eq(schema.emailUsers.id, user.id))
    .run();

  return user;
}

export async function updateEmailUserSettings(
  id: number,
  settings: { testModeEnabled?: boolean; darkModeEnabled?: boolean }
): Promise<void> {
  db.update(schema.emailUsers)
    .set({ ...settings, updatedAt: new Date().toISOString() })
    .where(eq(schema.emailUsers.id, id))
    .run();
}

// ============================================
// Demo user functions
// ============================================

export async function createDemoUser(): Promise<schema.DemoUser | null> {
  try {
    const timestamp = Date.now();
    const randomSuffix = Math.random().toString(36).substring(2, 6);
    const username = `demo_${timestamp}_${randomSuffix}`;
    const displayName = `Demo User ${randomSuffix.toUpperCase()}`;
    const now = new Date().toISOString();

    const result = db.insert(schema.demoUsers).values({
      username,
      displayName,
      avatarUrl: null,
      createdAt: now,
      lastLoginAt: now,
    }).returning().get();

    return result || null;
  } catch (error) {
    console.error("[SQLite] Failed to create demo user:", error);
    throw error;
  }
}

export async function getDemoUserById(id: number): Promise<schema.DemoUser | null> {
  const result = db.select().from(schema.demoUsers).where(eq(schema.demoUsers.id, id)).get();
  return result || null;
}

export async function updateDemoUserLastLogin(id: number): Promise<void> {
  db.update(schema.demoUsers)
    .set({ lastLoginAt: new Date().toISOString() })
    .where(eq(schema.demoUsers.id, id))
    .run();
}

// ============================================
// Streak Functions
// ============================================

export async function getUserStreak(userId: number, userType: string): Promise<schema.UserStreak | null> {
  const result = db.select().from(schema.userStreaks)
    .where(and(eq(schema.userStreaks.userId, userId), eq(schema.userStreaks.userType, userType)))
    .get();
  return result || null;
}

export async function createOrUpdateStreak(
  userId: number,
  userType: string,
  testMode: boolean = false
): Promise<schema.UserStreak | null> {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  let streak = await getUserStreak(userId, userType);
  
  if (!streak) {
    const result = db.insert(schema.userStreaks).values({
      userId,
      userType,
      currentStreak: 1,
      longestStreak: 1,
      lastActivityDate: now.toISOString(),
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
    }).returning().get();
    return result || null;
  }

  const lastActivity = streak.lastActivityDate ? new Date(streak.lastActivityDate) : null;
  const lastActivityDay = lastActivity ? new Date(lastActivity.getFullYear(), lastActivity.getMonth(), lastActivity.getDate()) : null;
  
  let newStreak = streak.currentStreak || 0;
  
  if (testMode) {
    newStreak += 1;
  } else {
    if (!lastActivityDay || today.getTime() > lastActivityDay.getTime()) {
      const dayDiff = lastActivityDay ? Math.floor((today.getTime() - lastActivityDay.getTime()) / (1000 * 60 * 60 * 24)) : 1;
      
      if (dayDiff === 1) {
        newStreak += 1;
      } else if (dayDiff > 1) {
        newStreak = 1;
      }
    }
  }
  
  const newLongest = Math.max(streak.longestStreak || 0, newStreak);
  
  db.update(schema.userStreaks).set({
    currentStreak: newStreak,
    longestStreak: newLongest,
    lastActivityDate: now.toISOString(),
    updatedAt: now.toISOString(),
  }).where(eq(schema.userStreaks.id, streak.id)).run();
  
  return getUserStreak(userId, userType);
}

export async function getWeeklyActivity(userId: number, userType: string): Promise<schema.DailyActivity[]> {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const daysToSaturday = (dayOfWeek + 1) % 7;
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - daysToSaturday);
  startOfWeek.setHours(0, 0, 0, 0);

  const results = db.select().from(schema.dailyActivity)
    .where(and(
      eq(schema.dailyActivity.userId, userId),
      eq(schema.dailyActivity.userType, userType)
    ))
    .all();

  return results.filter(r => new Date(r.activityDate) >= startOfWeek);
}

export async function recordDailyActivity(
  userId: number,
  userType: string,
  lessonsCompleted: number = 1,
  xpEarned: number = 10
): Promise<void> {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();

  const existing = db.select().from(schema.dailyActivity)
    .where(and(
      eq(schema.dailyActivity.userId, userId),
      eq(schema.dailyActivity.userType, userType),
      eq(schema.dailyActivity.activityDate, today)
    ))
    .get();

  if (existing) {
    db.update(schema.dailyActivity).set({
      lessonsCompleted: (existing.lessonsCompleted || 0) + lessonsCompleted,
      xpEarned: (existing.xpEarned || 0) + xpEarned,
    }).where(eq(schema.dailyActivity.id, existing.id)).run();
  } else {
    db.insert(schema.dailyActivity).values({
      userId,
      userType,
      activityDate: today,
      lessonsCompleted,
      xpEarned,
      createdAt: now.toISOString(),
    }).run();
  }
}

// ============================================
// Course Progress Functions
// ============================================

export async function getUserCourseProgress(
  userId: number,
  userType: string,
  courseId: string
): Promise<schema.UserCourseProgress | null> {
  const result = db.select().from(schema.userCourseProgress)
    .where(and(
      eq(schema.userCourseProgress.userId, userId),
      eq(schema.userCourseProgress.userType, userType),
      eq(schema.userCourseProgress.courseId, courseId)
    ))
    .get();
  return result || null;
}

export async function getAllUserCourseProgress(
  userId: number,
  userType: string
): Promise<schema.UserCourseProgress[]> {
  return db.select().from(schema.userCourseProgress)
    .where(and(
      eq(schema.userCourseProgress.userId, userId),
      eq(schema.userCourseProgress.userType, userType)
    ))
    .all();
}

export async function updateCourseProgress(
  userId: number,
  userType: string,
  courseId: string,
  moduleId: string
): Promise<void> {
  const now = new Date().toISOString();
  let progress = await getUserCourseProgress(userId, userType, courseId);

  if (!progress) {
    db.insert(schema.userCourseProgress).values({
      userId,
      userType,
      courseId,
      completedModules: JSON.stringify([moduleId]),
      currentModuleId: moduleId,
      startedAt: now,
      lastAccessedAt: now,
    }).run();
  } else {
    const completedModules: string[] = progress.completedModules 
      ? JSON.parse(progress.completedModules) 
      : [];
    
    if (!completedModules.includes(moduleId)) {
      completedModules.push(moduleId);
    }

    db.update(schema.userCourseProgress).set({
      completedModules: JSON.stringify(completedModules),
      currentModuleId: moduleId,
      lastAccessedAt: now,
    }).where(eq(schema.userCourseProgress.id, progress.id)).run();
  }
}

export async function markCourseCompleted(
  userId: number,
  userType: string,
  courseId: string
): Promise<void> {
  const progress = await getUserCourseProgress(userId, userType, courseId);
  if (progress) {
    db.update(schema.userCourseProgress).set({
      completedAt: new Date().toISOString(),
    }).where(eq(schema.userCourseProgress.id, progress.id)).run();
  }
}

// Export db for direct access if needed
export { db };
