import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const unSecurePages  = ["/login", "/"];

  console.log(pathname);

  console.log("Middleware called for portal matcher");

  // return NextResponse.redirect(new URL('/login', req.url));
  if(unSecurePages.includes(pathname)) {
    return NextResponse.next();
  }
  console.log("Called for secure page.");
  return NextResponse.next();
};

export const config = {
  matcher : [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ]
}