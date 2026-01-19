import type { CookieOptions, Request } from "express";

export function getSessionCookieOptions(
  req: Request
): Pick<CookieOptions, "domain" | "httpOnly" | "path" | "sameSite" | "secure"> {
  // Always use secure cookies in production (Railway uses HTTPS)
  const isProduction = process.env.NODE_ENV === "production";
  
  // Log for debugging
  console.log('[Cookie] NODE_ENV:', process.env.NODE_ENV);
  console.log('[Cookie] isProduction:', isProduction);
  console.log('[Cookie] x-forwarded-proto:', req.headers["x-forwarded-proto"]);
  
  if (isProduction) {
    // Production: use secure cookies with SameSite=None for cross-origin
    return {
      httpOnly: true,
      path: "/",
      sameSite: "lax",  // Use 'lax' for same-site navigation
      secure: true,
    };
  } else {
    // Development: no secure flag needed
    return {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: false,
    };
  }
}
