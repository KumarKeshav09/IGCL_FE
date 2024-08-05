// middleware.js
import { NextResponse } from "next/server";
import cookie from "cookie";

// Example middleware for logging requests
export function middleware(req) {
  const { pathname } = req.nextUrl;
  console.log(`Request made to: ${pathname}`);

  // Middleware to parse cookies
  const cookies = cookie.parse(req.headers.get("cookie") || "");

  // Example: Check for a specific cookie (e.g., an auth token)
  const token = cookies.authToken;

  // Basic authentication check
  if (pathname.startsWith("/protected") && !token) {
    // Redirect to login page if token is missing for protected routes
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Continue processing the request
  return NextResponse.next();
}

// Optional: Define a custom config if needed
export const config = {
  matcher: ["/testimonials/:path*", "/FAQ/:path*", ], // Specify paths to which this middleware should apply
};
