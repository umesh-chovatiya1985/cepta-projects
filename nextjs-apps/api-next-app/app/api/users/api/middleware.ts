import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  console.log("Middleware called", pathname);
  return NextResponse.redirect(new URL('/login', req.url));

  // return NextResponse.next();
};