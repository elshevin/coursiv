import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { 
  createDemoUser, 
  getDemoUserById, 
  updateDemoUserLastLogin,
  createEmailUser,
  getEmailUserById,
  verifyEmailUserPassword,
  updateEmailUserSettings,
  getUserStreak,
  createOrUpdateStreak,
  getWeeklyActivity,
  recordDailyActivity,
  getUserCourseProgress,
  getAllUserCourseProgress,
  updateCourseProgress,
  markCourseCompleted
} from "./db";
import { SignJWT, jwtVerify } from "jose";
import { z } from "zod";

const DEMO_COOKIE_NAME = "demo_session";
const EMAIL_COOKIE_NAME = "coursiv_session";

// Helper function to get JWT secret - ensures env var is read at runtime
function getJwtSecret(): Uint8Array {
  return new TextEncoder().encode(process.env.JWT_SECRET || "demo-secret-key");
}

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Email/Password authentication
  emailAuth: router({
    // Get current user from cookie
    me: publicProcedure.query(async ({ ctx }) => {
      const cookie = ctx.req.cookies?.[EMAIL_COOKIE_NAME];
      console.log('[Auth] Checking cookie:', EMAIL_COOKIE_NAME, 'exists:', !!cookie);
      console.log('[Auth] All cookies:', Object.keys(ctx.req.cookies || {}));
      if (!cookie) return null;

      try {
        console.log('[Auth] Verifying JWT token...');
        const { payload } = await jwtVerify(cookie, getJwtSecret());
        const userId = payload.userId as number;
        console.log('[Auth] JWT verified, userId:', userId);
        
        // Try to get user from database first
        const user = await getEmailUserById(userId);
        console.log('[Auth] Database user:', user ? 'found' : 'not found');
        if (user) {
          // Return user without password hash
          const { passwordHash, ...safeUser } = user;
          return safeUser;
        }
        
        // Demo mode: if no user in database but valid JWT, return mock user
        // This happens when user registered in demo mode (no database)
        console.log('[Auth] Returning demo user');
        const demoUser = {
          id: userId,
          email: 'demo@example.com',
          name: 'Demo User',
          avatarUrl: null,
          quizAnswers: null,
          testModeEnabled: false,
          darkModeEnabled: false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString(),
        };
        return demoUser;
      } catch (err) {
        console.log('[Auth] JWT verification failed:', err);
        return null;
      }
    }),

    // Register new user (Demo mode - skip database)
    register: publicProcedure
      .input(z.object({
        email: z.string().email(),
        password: z.string().min(6),
        name: z.string().optional(),
        quizAnswers: z.record(z.string(), z.string()).optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        // Demo mode: create a mock user without database
        const mockUser = {
          id: Date.now(),
          email: input.email,
          name: input.name || input.email.split('@')[0],
          avatarUrl: null,
          quizAnswers: input.quizAnswers ? JSON.stringify(input.quizAnswers) : null,
          testModeEnabled: false,
          darkModeEnabled: false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString(),
        };

        const user = mockUser;

        // Create JWT token
        const token = await new SignJWT({ userId: user.id })
          .setProtectedHeader({ alg: "HS256" })
          .setExpirationTime("7d")
          .sign(getJwtSecret());

        // Set cookie
        const cookieOptions = getSessionCookieOptions(ctx.req);
        console.log('[Register] Setting cookie with options:', cookieOptions);
        console.log('[Register] User ID:', user.id);
        ctx.res.cookie(EMAIL_COOKIE_NAME, token, {
          ...cookieOptions,
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        // Return user (demo mode)
        return user;
      }),

    // Login with email and password (Demo mode - accept any credentials)
    login: publicProcedure
      .input(z.object({
        email: z.string().email(),
        password: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        // Demo mode: create a mock user for any login
        const mockUser = {
          id: Date.now(),
          email: input.email,
          name: input.email.split('@')[0],
          avatarUrl: null,
          quizAnswers: null,
          testModeEnabled: false,
          darkModeEnabled: false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString(),
        };

        // Create JWT token
        const token = await new SignJWT({ userId: mockUser.id })
          .setProtectedHeader({ alg: "HS256" })
          .setExpirationTime("7d")
          .sign(getJwtSecret());

        // Set cookie
        const cookieOptions = getSessionCookieOptions(ctx.req);
        ctx.res.cookie(EMAIL_COOKIE_NAME, token, {
          ...cookieOptions,
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        // Return user (demo mode)
        return mockUser;
      }),

    // Logout
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(EMAIL_COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true };
    }),

    // Update settings (test mode, dark mode)
    updateSettings: publicProcedure
      .input(z.object({
        testModeEnabled: z.boolean().optional(),
        darkModeEnabled: z.boolean().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        const cookie = ctx.req.cookies?.[EMAIL_COOKIE_NAME];
        if (!cookie) {
          throw new Error("Not authenticated");
        }

        try {
          const { payload } = await jwtVerify(cookie, getJwtSecret());
          const userId = payload.userId as number;
          
          await updateEmailUserSettings(userId, input);
          
          return { success: true };
        } catch {
          throw new Error("Not authenticated");
        }
      }),
  }),

  // Demo authentication for testing (legacy, keeping for backward compatibility)
  demo: router({
    // Get current demo user from cookie
    me: publicProcedure.query(async ({ ctx }) => {
      const cookie = ctx.req.cookies?.[DEMO_COOKIE_NAME];
      if (!cookie) return null;

      try {
        const { payload } = await jwtVerify(cookie, getJwtSecret());
        const userId = payload.userId as number;
        const user = await getDemoUserById(userId);
        return user;
      } catch {
        return null;
      }
    }),

    // Create new demo user and set session cookie
    login: publicProcedure.mutation(async ({ ctx }) => {
      const user = await createDemoUser();
      if (!user) {
        throw new Error("Failed to create demo user");
      }

      // Create JWT token
      const token = await new SignJWT({ userId: user.id })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("7d")
        .sign(getJwtSecret());

      // Set cookie
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.cookie(DEMO_COOKIE_NAME, token, {
        ...cookieOptions,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      return user;
    }),

    // Logout demo user
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(DEMO_COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true };
    }),
  }),

  // Streak system
  streaks: router({
    // Get current user's streak
    get: publicProcedure.query(async ({ ctx }) => {
      const cookie = ctx.req.cookies?.[EMAIL_COOKIE_NAME];
      if (!cookie) return null;

      try {
        const { payload } = await jwtVerify(cookie, getJwtSecret());
        const userId = payload.userId as number;
        const streak = await getUserStreak(userId, 'email');
        return streak;
      } catch {
        return null;
      }
    }),

    // Record activity and update streak
    recordActivity: publicProcedure
      .input(z.object({
        testMode: z.boolean().optional(),
        lessonsCompleted: z.number().optional(),
        xpEarned: z.number().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        const cookie = ctx.req.cookies?.[EMAIL_COOKIE_NAME];
        if (!cookie) {
          throw new Error("Not authenticated");
        }

        try {
          const { payload } = await jwtVerify(cookie, getJwtSecret());
          const userId = payload.userId as number;
          
          // Update streak
          const streak = await createOrUpdateStreak(userId, 'email', input.testMode || false);
          
          // Record daily activity
          await recordDailyActivity(
            userId,
            'email',
            input.lessonsCompleted || 1,
            input.xpEarned || 50
          );
          
          return streak;
        } catch {
          throw new Error("Not authenticated");
        }
      }),

    // Get weekly activity for calendar
    getWeeklyActivity: publicProcedure.query(async ({ ctx }) => {
      const cookie = ctx.req.cookies?.[EMAIL_COOKIE_NAME];
      if (!cookie) return [];

      try {
        const { payload } = await jwtVerify(cookie, getJwtSecret());
        const userId = payload.userId as number;
        const activity = await getWeeklyActivity(userId, 'email');
        return activity;
      } catch {
        return [];
      }
    }),
  }),

  // Course progress system
  courses: router({
    // Get all courses progress for current user
    getAllProgress: publicProcedure.query(async ({ ctx }) => {
      const cookie = ctx.req.cookies?.[EMAIL_COOKIE_NAME];
      if (!cookie) return [];

      try {
        const { payload } = await jwtVerify(cookie, getJwtSecret());
        const userId = payload.userId as number;
        const progress = await getAllUserCourseProgress(userId, 'email');
        return progress;
      } catch {
        return [];
      }
    }),

    // Get progress for a specific course
    getProgress: publicProcedure
      .input(z.object({ courseId: z.string() }))
      .query(async ({ ctx, input }) => {
        const cookie = ctx.req.cookies?.[EMAIL_COOKIE_NAME];
        if (!cookie) return null;

        try {
          const { payload } = await jwtVerify(cookie, getJwtSecret());
          const userId = payload.userId as number;
          const progress = await getUserCourseProgress(userId, 'email', input.courseId);
          return progress;
        } catch {
          return null;
        }
      }),

    // Update course progress (complete a module)
    completeModule: publicProcedure
      .input(z.object({
        courseId: z.string(),
        moduleId: z.string(),
        nextModuleId: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        const cookie = ctx.req.cookies?.[EMAIL_COOKIE_NAME];
        if (!cookie) {
          throw new Error("Not authenticated");
        }

        try {
          const { payload } = await jwtVerify(cookie, getJwtSecret());
          const userId = payload.userId as number;
          
          // Get current progress
          const currentProgress = await getUserCourseProgress(userId, 'email', input.courseId);
          const completedModules = currentProgress?.completedModules 
            ? JSON.parse(currentProgress.completedModules) 
            : [];
          
          // Add module if not already completed
          if (!completedModules.includes(input.moduleId)) {
            completedModules.push(input.moduleId);
          }
          
          // Update progress
          const progress = await updateCourseProgress(
            userId,
            'email',
            input.courseId,
            completedModules,
            input.nextModuleId
          );
          
          return progress;
        } catch {
          throw new Error("Not authenticated");
        }
      }),

    // Mark course as completed
    completeCourse: publicProcedure
      .input(z.object({ courseId: z.string() }))
      .mutation(async ({ ctx, input }) => {
        const cookie = ctx.req.cookies?.[EMAIL_COOKIE_NAME];
        if (!cookie) {
          throw new Error("Not authenticated");
        }

        try {
          const { payload } = await jwtVerify(cookie, getJwtSecret());
          const userId = payload.userId as number;
          
          await markCourseCompleted(userId, 'email', input.courseId);
          
          return { success: true };
        } catch {
          throw new Error("Not authenticated");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
