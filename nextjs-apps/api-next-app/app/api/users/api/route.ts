import { prisma } from "@/libs/db";
import { NextResponse } from "next/server";

// import { NextRequest, NextResponse } from "next/server";

// const prisma = new PrismaClient();

export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json(users);
}

export async function POST(request: NextResponse) {
  const body = await request.json();
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return Response.json(user);
}

// export async function GET() {
//   return NextResponse.json({status: 1, message: "We started the api response."});
// }

// export async function POST(
//   req: NextRequest
// ) {
//   const body = await req.json();
//   return NextResponse.json({ status: 1, data: body });
// }