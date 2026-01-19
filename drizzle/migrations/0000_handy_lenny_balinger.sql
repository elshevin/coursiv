CREATE TYPE "public"."role" AS ENUM('user', 'admin');--> statement-breakpoint
CREATE TABLE "daily_activity" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"userType" varchar(16) NOT NULL,
	"activityDate" timestamp NOT NULL,
	"lessonsCompleted" integer DEFAULT 0,
	"xpEarned" integer DEFAULT 0,
	"createdAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "demo_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar(64) NOT NULL,
	"displayName" varchar(128),
	"avatarUrl" text,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"lastLoginAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "demo_users_username_unique" UNIQUE("username")
);
--> statement-breakpoint
CREATE TABLE "email_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(320) NOT NULL,
	"passwordHash" varchar(255) NOT NULL,
	"name" varchar(128),
	"avatarUrl" text,
	"quizAnswers" text,
	"testModeEnabled" boolean DEFAULT false,
	"darkModeEnabled" boolean DEFAULT false,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"lastLoginAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "email_users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "user_course_progress" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"userType" varchar(16) NOT NULL,
	"courseId" varchar(64) NOT NULL,
	"completedModules" text,
	"currentModuleId" varchar(64),
	"startedAt" timestamp DEFAULT now() NOT NULL,
	"lastAccessedAt" timestamp DEFAULT now() NOT NULL,
	"completedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE "user_streaks" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" integer NOT NULL,
	"userType" varchar(16) NOT NULL,
	"currentStreak" integer DEFAULT 0,
	"longestStreak" integer DEFAULT 0,
	"lastActivityDate" timestamp,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"openId" varchar(64) NOT NULL,
	"name" text,
	"email" varchar(320),
	"loginMethod" varchar(64),
	"role" "role" DEFAULT 'user' NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	"lastSignedIn" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_openId_unique" UNIQUE("openId")
);
