import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Skip static assets
  if (url.pathname.startsWith("/_next/") || url.pathname.includes(".")) {
    return NextResponse.next();
  }

  // Check for cookie or header with valid Turnstile token
  const token = req.cookies.get("turnstile_token")?.value || req.headers.get("x-turnstile-token");

  if (!token) {
    // Redirect to CAPTCHA page if token missing
    url.pathname = "/captcha"; // a page where user solves Turnstile
    return NextResponse.redirect(url);
  }

  // Verify token server-side
  const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY!,
      response: token,
    }),
  });

  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    // Invalid token, redirect to CAPTCHA
    url.pathname = "/captcha";
    return NextResponse.redirect(url);
  }

  // Token valid → allow request
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|favicon.ico).*)"], // Apply to all routes except static files
};
