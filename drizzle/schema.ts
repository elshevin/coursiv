import { boolean, int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Email/Password users table for Coursiv authentication
export const emailUsers = mysqlTable("email_users", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  passwordHash: varchar("passwordHash", { length: 255 }).notNull(),
  name: varchar("name", { length: 128 }),
  avatarUrl: text("avatarUrl"),
  // Quiz answers stored as JSON string
  quizAnswers: text("quizAnswers"),
  // Settings
  testModeEnabled: boolean("testModeEnabled").default(false),
  darkModeEnabled: boolean("darkModeEnabled").default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastLoginAt: timestamp("lastLoginAt").defaultNow().notNull(),
});

export type EmailUser = typeof emailUsers.$inferSelect;
export type InsertEmailUser = typeof emailUsers.$inferInsert;

// Demo users table for testing purposes (keeping for backward compatibility)
export const demoUsers = mysqlTable("demo_users", {
  id: int("id").autoincrement().primaryKey(),
  username: varchar("username", { length: 64 }).notNull().unique(),
  displayName: varchar("displayName", { length: 128 }),
  avatarUrl: text("avatarUrl"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  lastLoginAt: timestamp("lastLoginAt").defaultNow().notNull(),
});

export type DemoUser = typeof demoUsers.$inferSelect;
export type InsertDemoUser = typeof demoUsers.$inferInsert;

// User streaks table for tracking learning consistency
export const userStreaks = mysqlTable("user_streaks", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  userType: varchar("userType", { length: 16 }).notNull(), // 'demo' or 'email'
  currentStreak: int("currentStreak").default(0),
  longestStreak: int("longestStreak").default(0),
  lastActivityDate: timestamp("lastActivityDate"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type UserStreak = typeof userStreaks.$inferSelect;
export type InsertUserStreak = typeof userStreaks.$inferInsert;

// User course progress tracking
export const userCourseProgress = mysqlTable("user_course_progress", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  userType: varchar("userType", { length: 16 }).notNull(), // 'demo' or 'email'
  courseId: varchar("courseId", { length: 64 }).notNull(),
  completedModules: text("completedModules"), // JSON array of module IDs
  currentModuleId: varchar("currentModuleId", { length: 64 }),
  startedAt: timestamp("startedAt").defaultNow().notNull(),
  lastAccessedAt: timestamp("lastAccessedAt").defaultNow().onUpdateNow().notNull(),
  completedAt: timestamp("completedAt"),
});

export type UserCourseProgress = typeof userCourseProgress.$inferSelect;
export type InsertUserCourseProgress = typeof userCourseProgress.$inferInsert;

// Daily activity log for streak calendar
export const dailyActivity = mysqlTable("daily_activity", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  userType: varchar("userType", { length: 16 }).notNull(),
  activityDate: timestamp("activityDate").notNull(),
  lessonsCompleted: int("lessonsCompleted").default(0),
  xpEarned: int("xpEarned").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type DailyActivity = typeof dailyActivity.$inferSelect;
export type InsertDailyActivity = typeof dailyActivity.$inferInsert;
