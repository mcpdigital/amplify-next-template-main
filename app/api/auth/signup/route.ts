import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, password } = body;
    const user = await prisma.user.create({
      data: { name, email, password },
    });
    console.log(body);
    return NextResponse.json(user);
  } catch (error: any) {
    console.log({ error });
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
