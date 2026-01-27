import { boolean, integer, pgEnum, pgTable, text, timestamp, varchar, serial } from "drizzle-orm/pg-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */

export const roleEnum = pgEnum("role", ["user", "admin"]);

export const users = pgTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: serial("id").primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: roleEnum("role").default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Email/Password users table for Coursiv authentication
export const emailUsers = pgTable("email_users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  passwordHash: varchar("passwordHash", { length: 255 }).notNull(),
  name: varchar("name", { length: 128 }),
  avatarUrl: text("avatarUrl"),
  // Quiz answers stored as JSON string
  quizAnswers: text("quizAnswers"),
  // Settings
  testModeEnabled: boolean("testModeEnabled").default(false),
  darkModeEnabled: boolean("darkModeEnabled").default(false),
  onboardingCompleted: boolean("onboardingCompleted").default(false),
  // Subscription status
  subscriptionStatus: varchar("subscriptionStatus", { length: 32 }).default("none"), // 'none', 'active', 'cancelled', 'expired'
  subscriptionPlan: varchar("subscriptionPlan", { length: 32 }), // 'monthly', 'yearly'
  subscriptionStartDate: timestamp("subscriptionStartDate"),
  subscriptionEndDate: timestamp("subscriptionEndDate"),
  fastspringSubscriptionId: varchar("fastspringSubscriptionId", { length: 128 }),
  fastspringAccountId: varchar("fastspringAccountId", { length: 128 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  lastLoginAt: timestamp("lastLoginAt").defaultNow().notNull(),
});

export type EmailUser = typeof emailUsers.$inferSelect;
export type InsertEmailUser = typeof emailUsers.$inferInsert;

// Demo users table for testing purposes (keeping for backward compatibility)
export const demoUsers = pgTable("demo_users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 64 }).notNull().unique(),
  displayName: varchar("displayName", { length: 128 }),
  avatarUrl: text("avatarUrl"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  lastLoginAt: timestamp("lastLoginAt").defaultNow().notNull(),
});

export type DemoUser = typeof demoUsers.$inferSelect;
export type InsertDemoUser = typeof demoUsers.$inferInsert;

// User streaks table for tracking learning consistency
export const userStreaks = pgTable("user_streaks", {
  id: serial("id").primaryKey(),
  userId: integer("userId").notNull(),
  userType: varchar("userType", { length: 16 }).notNull(), // 'demo' or 'email'
  currentStreak: integer("currentStreak").default(0),
  longestStreak: integer("longestStreak").default(0),
  lastActivityDate: timestamp("lastActivityDate"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export type UserStreak = typeof userStreaks.$inferSelect;
export type InsertUserStreak = typeof userStreaks.$inferInsert;

// User course progress tracking
export const userCourseProgress = pgTable("user_course_progress", {
  id: serial("id").primaryKey(),
  userId: integer("userId").notNull(),
  userType: varchar("userType", { length: 16 }).notNull(), // 'demo' or 'email'
  courseId: varchar("courseId", { length: 64 }).notNull(),
  completedModules: text("completedModules"), // JSON array of module IDs
  currentModuleId: varchar("currentModuleId", { length: 64 }),
  startedAt: timestamp("startedAt").defaultNow().notNull(),
  lastAccessedAt: timestamp("lastAccessedAt").defaultNow().notNull(),
  completedAt: timestamp("completedAt"),
});

export type UserCourseProgress = typeof userCourseProgress.$inferSelect;
export type InsertUserCourseProgress = typeof userCourseProgress.$inferInsert;

// Daily activity log for streak calendar
export const dailyActivity = pgTable("daily_activity", {
  id: serial("id").primaryKey(),
  userId: integer("userId").notNull(),
  userType: varchar("userType", { length: 16 }).notNull(),
  activityDate: timestamp("activityDate").notNull(),
  lessonsCompleted: integer("lessonsCompleted").default(0),
  xpEarned: integer("xpEarned").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type DailyActivity = typeof dailyActivity.$inferSelect;
export type InsertDailyActivity = typeof dailyActivity.$inferInsert;

// Password reset tokens table
export const passwordResetTokens = pgTable("password_reset_tokens", {
  id: serial("id").primaryKey(),
  userId: integer("userId").notNull(),
  token: varchar("token", { length: 64 }).notNull().unique(),
  expiresAt: timestamp("expiresAt").notNull(),
  usedAt: timestamp("usedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type PasswordResetToken = typeof passwordResetTokens.$inferSelect;
export type InsertPasswordResetToken = typeof passwordResetTokens.$inferInsert;

// User challenge progress tracking
export const userChallengeProgress = pgTable("user_challenge_progress", {
  id: serial("id").primaryKey(),
  userId: integer("userId").notNull(),
  userType: varchar("userType", { length: 16 }).notNull(), // 'demo' or 'email'
  challengeId: varchar("challengeId", { length: 64 }).notNull(),
  startedAt: timestamp("startedAt").defaultNow().notNull(),
  completedTasks: text("completedTasks"), // JSON array of completed task IDs
  lastAccessedAt: timestamp("lastAccessedAt").defaultNow().notNull(),
  completedAt: timestamp("completedAt"),
});

export type UserChallengeProgress = typeof userChallengeProgress.$inferSelect;
export type InsertUserChallengeProgress = typeof userChallengeProgress.$inferInsert;
