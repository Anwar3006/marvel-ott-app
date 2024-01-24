import React, { Suspense, useState } from "react";

import MovieCard from "./MovieCard";
import useMovies from "@/hooks/useMovies";
import MovieSkeleton from "@/app/movies/skeleton";
import { useRouter } from "next/navigation";

interface HomeCardsProps {
  title: string;
}

interface Movie {
  id: string;
  title: string;
  thumbnailUrl: string;
  trailer: string;
  release: string;
  description: string;
  videoUrl: string;
  duration: string;
  rating: string;
}

const HomeCards: React.FC<HomeCardsProps> = ({ title }) => {
  const router = useRouter();

  const { data: allMovies, error, isLoading } = useMovies();

  if (isLoading) {
    return <MovieSkeleton limit={6} />;
  }

  // if (error) {
  //   console.log("Error fetching movies", error);
  //   return <p>Error loading movies.</p>;
  // }

  const moviesToDisplay: Movie[] = allMovies.slice(0, 6);
  return (
    <div className="mt-4 md:mt-6 mx-auto px-4 sm:px-6 md:px-8">
      <h2 className="text-1xl md:text-2xl text-white drop-shadow-xl mb-2 md:mb-4 ml-4 md:ml-6 flex justify-center">
        {title}
      </h2>

      <div className="mx-auto flex justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-14 2xl:grid-cols-5 2xl:gap-6 gap-3">
          {moviesToDisplay.map((movie: Movie) => (
            <MovieCard
              key={movie?.id}
              title={movie?.title}
              thumbnailUrl={movie?.thumbnailUrl}
              id={movie?.id}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center mt-4">
        <button
          onClick={() => router.push("/movies")}
          className="bg-zinc-800 hover:cursor-pointer hover:bg-opacity-80 rounded-xl py-2 px-4 md:py-2 md:px-5 xl:px-7 xl:py-3 text-white md:font-semibold">
          Load More!
        </button>
      </div>
    </div>
  );
};

export default HomeCards;
