import { NextRequest, NextResponse } from "next/server";

import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";

export const GET = async (req: NextRequest) => {
  // const { currentUser } = await serverAuth();
  // if (!currentUser) {
  //   return new NextResponse("User not Signed In", { status: 401 });
  // }

  try {
    const { searchParams } = req.nextUrl;
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 8;
    const search = searchParams.get("search") || "";

    if (search && search !== "") {
      const movies = await prismadb.movie.findMany({
        where: {
          OR: [
            {
              title: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains: search,
                mode: "insensitive",
              },
            },
          ],
        },
        skip: (page - 1) * limit,
        take: limit,
      });

      return NextResponse.json(movies);
    } else {
      const movies = await prismadb.movie.findMany({
        skip: (page - 1) * limit,
        take: limit,
      });

      return NextResponse.json(movies);
    }
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
