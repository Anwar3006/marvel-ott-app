import { NextRequest, NextResponse } from "next/server";

import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";
import redis from "@/lib/redisCache";
import { Movie } from "@prisma/client";

export const GET = async (req: NextRequest) => {
  // const { currentUser } = await serverAuth();
  // if (!currentUser) {
  //   return new NextResponse("User not Signed In", { status: 401 });
  // }

  try {
    const movieCount = await prismadb.movie.count();
    const randIndex = Math.floor(Math.random() * movieCount);

    // check if movie is cached in Redis. using the random index as key
    const cachedMovie = await redis.get(randIndex.toString());
    if (cachedMovie) {
      console.log("Using cached movie");
      const fromCache = JSON.parse(cachedMovie) as Movie;
      return NextResponse.json({ ...fromCache, servedFrom: "RedisCache" });
    }

    const randomMovie = await prismadb.movie.findMany({
      take: 1,
      skip: randIndex,
    });
    if (!randomMovie) {
      return new NextResponse("No movie found", { status: 404 });
    }
    await redis.set(
      randIndex.toString(),
      JSON.stringify(randomMovie[0]),
      "EX",
      60 * 60 * 48 //expires in 48 hours
    );

    return NextResponse.json(randomMovie[0]);
  } catch (error) {
    console.error(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
