import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // remember to change the cookie name back to __Secure-next-auth.session-token
  const cookie = request.cookies.get("__Secure-next-auth.session-token");

  if (cookie) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/auth", request.url));
}

export const config = { matcher: ["/", "/movies/:path*"] };
