import { NextResponse, NextRequest } from "next/server";

import serverAuth from "@/lib/serverAuth";

export const GET = async (req: NextRequest) => {
  try {
    const { currentUser } = await serverAuth();
    console.log(currentUser);
    if (!currentUser) {
      return NextResponse.redirect(new URL("/auth"));
    }

    return NextResponse.json(currentUser);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
export const dynamic = "force-dynamic";
