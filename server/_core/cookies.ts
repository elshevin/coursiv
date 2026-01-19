import type { CookieOptions, Request } from "express";

export function getSessionCookieOptions(
  req: Request
): Pick<CookieOptions, "domain" | "httpOnly" | "path" | "sameSite" | "secure"> {
  // Check if request is over HTTPS (via proxy or direct)
  const isHttps = 
    req.secure || 
    req.headers["x-forwarded-proto"] === "https" ||
    req.protocol === "https";
  
  // Log for debugging
  console.log('[Cookie] req.secure:', req.secure);
  console.log('[Cookie] x-forwarded-proto:', req.headers["x-forwarded-proto"]);
  console.log('[Cookie] req.protocol:', req.protocol);
  console.log('[Cookie] isHttps:', isHttps);
  console.log('[Cookie] NODE_ENV:', process.env.NODE_ENV);
  
  // Use secure cookies when on HTTPS
  return {
    httpOnly: true,
    path: "/",
    sameSite: isHttps ? "none" : "lax",  // Use 'none' for HTTPS to allow cross-site
    secure: isHttps,
  };
}
