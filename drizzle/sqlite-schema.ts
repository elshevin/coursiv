import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

/**
 * SQLite schema for local development/demo mode
 * This mirrors the MySQL schema but uses SQLite-compatible types
 */

// Email/Password users table for Coursiv authentication
export const emailUsers = sqliteTable("email_users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull().unique(),
  passwordHash: text("passwordHash").notNull(),
  name: text("name"),
  avatarUrl: text("avatarUrl"),
  quizAnswers: text("quizAnswers"),
  testModeEnabled: integer("testModeEnabled", { mode: "boolean" }).default(false),
  darkModeEnabled: integer("darkModeEnabled", { mode: "boolean" }).default(false),
  createdAt: text("createdAt").default("CURRENT_TIMESTAMP").notNull(),
  updatedAt: text("updatedAt").default("CURRENT_TIMESTAMP").notNull(),
  lastLoginAt: text("lastLoginAt").default("CURRENT_TIMESTAMP").notNull(),
});

export type EmailUser = typeof emailUsers.$inferSelect;
export type InsertEmailUser = typeof emailUsers.$inferInsert;

// Demo users table
export const demoUsers = sqliteTable("demo_users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  username: text("username").notNull().unique(),
  displayName: text("displayName"),
  avatarUrl: text("avatarUrl"),
  createdAt: text("createdAt").default("CURRENT_TIMESTAMP").notNull(),
  lastLoginAt: text("lastLoginAt").default("CURRENT_TIMESTAMP").notNull(),
});

export type DemoUser = typeof demoUsers.$inferSelect;
export type InsertDemoUser = typeof demoUsers.$inferInsert;

// User streaks table
export const userStreaks = sqliteTable("user_streaks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("userId").notNull(),
  userType: text("userType").notNull(),
  currentStreak: integer("currentStreak").default(0),
  longestStreak: integer("longestStreak").default(0),
  lastActivityDate: text("lastActivityDate"),
  createdAt: text("createdAt").default("CURRENT_TIMESTAMP").notNull(),
  updatedAt: text("updatedAt").default("CURRENT_TIMESTAMP").notNull(),
});

export type UserStreak = typeof userStreaks.$inferSelect;
export type InsertUserStreak = typeof userStreaks.$inferInsert;

// User course progress
export const userCourseProgress = sqliteTable("user_course_progress", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("userId").notNull(),
  userType: text("userType").notNull(),
  courseId: text("courseId").notNull(),
  completedModules: text("completedModules"),
  currentModuleId: text("currentModuleId"),
  startedAt: text("startedAt").default("CURRENT_TIMESTAMP").notNull(),
  lastAccessedAt: text("lastAccessedAt").default("CURRENT_TIMESTAMP").notNull(),
  completedAt: text("completedAt"),
});

export type UserCourseProgress = typeof userCourseProgress.$inferSelect;
export type InsertUserCourseProgress = typeof userCourseProgress.$inferInsert;

// Daily activity
export const dailyActivity = sqliteTable("daily_activity", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("userId").notNull(),
  userType: text("userType").notNull(),
  activityDate: text("activityDate").notNull(),
  lessonsCompleted: integer("lessonsCompleted").default(0),
  xpEarned: integer("xpEarned").default(0),
  createdAt: text("createdAt").default("CURRENT_TIMESTAMP").notNull(),
});

export type DailyActivity = typeof dailyActivity.$inferSelect;
export type InsertDailyActivity = typeof dailyActivity.$inferInsert;
