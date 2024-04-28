import { NextRequest, NextResponse } from "next/server";

import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";

export const GET = async (
  req: NextRequest,
  { params }: { params: { movieId: string } }
) => {
  // const { currentUser } = await serverAuth();
  // if (!currentUser) {
  //   return new NextResponse("User not Signed In", { status: 401 });
  // }

  const { movieId } = params;
  if (!movieId) {
    return new NextResponse("Bad Request", { status: 400 });
  }

  const movie = await prismadb.movie.findUnique({
    where: {
      id: movieId,
    },
  });

  return NextResponse.json(movie);
};
