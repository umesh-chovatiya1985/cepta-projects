import { prisma } from "@/libs/db";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    try {
        const res = await prisma.product.findMany();
        return NextResponse.json({
            status: res.length > 0 ? 1 : 0,
            records: res
        })
    } catch(e: any) {
        return NextResponse.json({
            status: -1,
            error: "Found some api error"
        })
    }
}

export async function POST(
    req: NextRequest
) {
    try {
        const data = await req.json();
        const res = await prisma.product.create({ data });
        return NextResponse.json({
            status: 1,
            result: res
        })
    }   
     catch(e: any) {
        return NextResponse.json({
            status: -1,
            error: "Found some api error" + e.toString()
        })
    }
}