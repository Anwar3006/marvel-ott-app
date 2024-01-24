import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prismadb from "@/lib/prismadb";

export const POST = async (req: Request) => {
  try {
    if (req.method !== "POST") {
      return new NextResponse("Method not allowed", { status: 405 });
    }

    const { username, email, password } = await req.json();
    if (!username || !email || !password) {
      return new NextResponse("Missing fields", { status: 400 });
    }

    // check if user already exists
    const userExists = await prismadb.user.findUnique({
      where: {
        email,
      },
    });
    if (userExists) {
      return new NextResponse("User already exists", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const registerUser = await prismadb.user.create({
      data: {
        name: username,
        email,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    return NextResponse.json(registerUser);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
