import { prisma } from "@/libs/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } } 
) {
  try {
    const param = await params;
    const res = await prisma.product.findFirst({
        where: { id: parseInt(param?.id) }
    })
    return NextResponse.json({
      status: res ? 1 : 0,
      records: res,
    })
  } catch (e: any) {
    return NextResponse.json({
      status: -1,
      error: "Found some api error",
    })
  }
}

export async function PATCH(
    req: NextRequest,
    { params }: { params: { id: string } } 
) {
  try {
    const data = await req.json();
    const param = await params;
    const res = await prisma.product.update({
        where: { id: parseInt(param?.id) },
        data
    },);
    return NextResponse.json({
      status: res ? 1 : 0,
      records: res,
    })
  } catch (e: any) {
    return NextResponse.json({
      status: -1,
      error: "Found some api error",
    })
  }
}

export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } } 
) {
  try {
    const data = await req.json();
    const param = await params;
    const res = await prisma.product.update({
        where: { id: parseInt(param?.id) },
        data
    },);
    return NextResponse.json({
      status: res ? 1 : 0,
      records: res,
    })
  } catch (e: any) {
    return NextResponse.json({
      status: -1,
      error: "Found some api error",
    })
  }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } } 
) {
  try {
    const param = await params;
    const res = await prisma.product.delete({
        where: { id: parseInt(param?.id) }
    })
    return NextResponse.json({
      status: res ? 1 : 0,
      message: "Removed successfully",
      records: res,
    })
  } catch (e: any) {
    return NextResponse.json({
      status: -1,
      error: "Found some api error",
    })
  }
}