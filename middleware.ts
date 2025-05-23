import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(
    process.env.SESSION_COOKIE_NAME || "auth-token"
  )?.value;

  const isLandingPage = request.nextUrl.pathname === "/";

  // Allow landing page to display without login
  if (isLandingPage) {
    return NextResponse.next();
  }

  if (!token || token.trim() === "") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Apply to all routes except these
export const config = {
  matcher: ["/((?!api|_next|favicon.ico|login|otp|404|docs|images|fonts).*)"],
};
