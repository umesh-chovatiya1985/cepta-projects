import { sign } from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(req: Request) { 
    const { mobile_no } = await req.json();

    const token = sign(
        { contact: mobile_no },
        process.env.NEXTAUTH_SECRET!,
        { expiresIn: "7d" }
    );

    return NextResponse.json({ token });
}