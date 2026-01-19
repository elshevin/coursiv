import { eq, and } from "drizzle-orm";
import bcrypt from "bcryptjs";

// Check database type from DATABASE_URL
const DATABASE_URL = process.env.DATABASE_URL || "";
const USE_POSTGRES = DATABASE_URL.startsWith("postgresql://") || DATABASE_URL.startsWith("postgres://");
const USE_SQLITE = !DATABASE_URL;

// Conditionally import the appropriate database module
let dbModule: any = null;

async function ensureDbModule() {
  if (dbModule) return dbModule;
  
  if (USE_POSTGRES) {
    console.log("[Database] Using PostgreSQL (Supabase)");
    dbModule = await import('./db-pg');
  } else if (USE_SQLITE) {
    console.log("[Database] No DATABASE_URL configured, using SQLite for local development");
    dbModule = await import('./sqlite-db');
  } else {
    // MySQL fallback
    console.log("[Database] Using MySQL");
    const { drizzle } = await import("drizzle-orm/mysql2");
    const schema = await import("../drizzle/schema");
    const db = drizzle(DATABASE_URL);
    dbModule = { db, ...schema };
  }
  
  return dbModule;
}

// Initialize on module load
ensureDbModule().catch(err => {
  console.error("[Database] Failed to initialize:", err);
});

// Re-export types
export type { EmailUser, UserStreak, DailyActivity, UserCourseProgress } from "../drizzle/schema-pg";

const SALT_ROUNDS = 10;

// ============================================
// Email/Password User Functions
// ============================================

export async function createEmailUser(
  email: string,
  password: string,
  name?: string,
  quizAnswers?: Record<string, string>
): Promise<any> {
  const mod = await ensureDbModule();
  return mod.createEmailUser(email, password, name, quizAnswers);
}

export async function getEmailUserByEmail(email: string): Promise<any> {
  const mod = await ensureDbModule();
  return mod.getEmailUserByEmail(email);
}

export async function getEmailUserById(id: number): Promise<any> {
  const mod = await ensureDbModule();
  if (mod.getEmailUserById) {
    return mod.getEmailUserById(id);
  }
  return null;
}

export async function verifyEmailUserPassword(email: string, password: string): Promise<any> {
  const mod = await ensureDbModule();
  return mod.verifyEmailUserPassword(email, password);
}

export async function updateEmailUserSettings(
  id: number,
  settings: { testModeEnabled?: boolean; darkModeEnabled?: boolean; onboardingCompleted?: boolean }
): Promise<void> {
  const mod = await ensureDbModule();
  return mod.updateEmailUserSettings(id, settings);
}

// ============================================
// Demo user functions for testing (legacy)
// ============================================

export async function createDemoUser(): Promise<any> {
  const mod = await ensureDbModule();
  return mod.createDemoUser();
}

export async function getDemoUserById(id: number): Promise<any> {
  const mod = await ensureDbModule();
  return mod.getDemoUserById(id);
}

export async function updateDemoUserLastLogin(id: number): Promise<void> {
  const mod = await ensureDbModule();
  return mod.updateDemoUserLastLogin(id);
}

// ============================================
// Streak Functions
// ============================================

export async function getUserStreak(userId: number, userType: string): Promise<any> {
  const mod = await ensureDbModule();
  return mod.getUserStreak(userId, userType);
}

export async function createOrUpdateStreak(
  userId: number,
  userType: string,
  testMode: boolean = false
): Promise<any> {
  const mod = await ensureDbModule();
  if (mod.createOrUpdateStreak) {
    return mod.createOrUpdateStreak(userId, userType, testMode);
  }
  // Fallback to updateUserStreak for PostgreSQL module
  return mod.updateUserStreak(userId, userType);
}

export async function getWeeklyActivity(userId: number, userType: string): Promise<any[]> {
  const mod = await ensureDbModule();
  if (mod.getWeeklyActivity) {
    return mod.getWeeklyActivity(userId, userType);
  }
  // Fallback for PostgreSQL
  return mod.getActivityHistory(userId, userType, 7);
}

export async function recordDailyActivity(
  userId: number,
  userType: string,
  lessonsCompleted: number = 1,
  xpEarned: number = 10
): Promise<void> {
  const mod = await ensureDbModule();
  return mod.recordDailyActivity(userId, userType, lessonsCompleted, xpEarned);
}

// ============================================
// Course Progress Functions
// ============================================

export async function getUserCourseProgress(userId: number, userType: string, courseId: string): Promise<any> {
  const mod = await ensureDbModule();
  if (mod.getUserCourseProgress) {
    return mod.getUserCourseProgress(userId, userType, courseId);
  }
  return mod.getCourseProgress(userId, userType, courseId);
}

export async function getAllUserCourseProgress(userId: number, userType: string): Promise<any[]> {
  const mod = await ensureDbModule();
  if (mod.getAllUserCourseProgress) {
    return mod.getAllUserCourseProgress(userId, userType);
  }
  return mod.getAllCourseProgress(userId, userType);
}

export async function updateCourseProgress(
  userId: number,
  userType: string,
  courseId: string,
  completedModulesArray: string[],
  nextModuleId?: string
): Promise<any> {
  const mod = await ensureDbModule();
  return mod.updateCourseProgress(userId, userType, courseId, completedModulesArray, nextModuleId);
}

export async function markCourseCompleted(userId: number, userType: string, courseId: string): Promise<void> {
  const mod = await ensureDbModule();
  return mod.markCourseCompleted(userId, userType, courseId);
}

// ============================================
// OAuth User Functions (for Manus OAuth)
// ============================================

export async function upsertUser(user: any): Promise<void> {
  const mod = await ensureDbModule();
  if (mod.upsertUser) {
    return mod.upsertUser(user);
  }
}

export async function getUserByOpenId(openId: string): Promise<any> {
  const mod = await ensureDbModule();
  if (mod.getUserByOpenId) {
    return mod.getUserByOpenId(openId);
  }
  return undefined;
}

export async function getDb() {
  const mod = await ensureDbModule();
  if (mod.getDb) {
    return mod.getDb();
  }
  return null;
}
