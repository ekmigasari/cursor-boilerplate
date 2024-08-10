import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { lucia } from "@/utils/lucia";

export async function middleware(request: NextRequest) {
  // Check if the request path starts with /dashboard
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    // Get the session cookie
    const cookieStore = request.cookies.get(lucia.sessionCookieName)?.value;

    if (!cookieStore) {
      // Redirect to login if there's no session cookie
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      // Validate the session
      const { session } = await lucia.validateSession(cookieStore);

      if (!session) {
        // Redirect to login if the session is invalid
        return NextResponse.redirect(new URL("/login", request.url));
      }

      // Session is valid, allow the request to proceed
      return NextResponse.next();
    } catch (error) {
      console.error("Error validating session:", error);
      // Redirect to login on error
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // For non-dashboard routes, allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
