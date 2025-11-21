import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } } 
) {
    const param = await params;
    console.log(param);
    return NextResponse.json({status: 1, User: "User Id" })
}

// http://localhost:3000/api/users/api/1 - body {  }
export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } } 
) {
    const data = await req.json();
    const param = await params;
    return NextResponse.json({status: 1, params: param, data })
}

export async function PATCH(
    req: NextRequest,
    { params }: { params: { id: string } } 
) {
    const data = await req.json();
    const param = await params;
    return NextResponse.json({status: 1, params: param, data })
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } } 
) {
    const param = await params;
    console.log(param);
    return NextResponse.json({status: 1, param })
}