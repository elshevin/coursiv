import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createDemoUser, getDemoUserById, updateDemoUserLastLogin } from "./db";
import { SignJWT, jwtVerify } from "jose";

const DEMO_COOKIE_NAME = "demo_session";
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "demo-secret-key");

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

  // Demo authentication for testing
  demo: router({
    // Get current demo user from cookie
    me: publicProcedure.query(async ({ ctx }) => {
      const cookie = ctx.req.cookies?.[DEMO_COOKIE_NAME];
      if (!cookie) return null;

      try {
        const { payload } = await jwtVerify(cookie, JWT_SECRET);
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
        .sign(JWT_SECRET);

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
});

export type AppRouter = typeof appRouter;
