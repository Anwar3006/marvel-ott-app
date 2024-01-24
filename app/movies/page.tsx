"use client";
import { Movie } from "@prisma/client";
import React from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import useMovies from "@/hooks/useMovies";
import MovieCard from "@/components/MovieCard";
import Search from "@/components/Search";
import Navbar from "@/components/Navbar";
import MovieSkeleton from "./skeleton";

const Movies = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = Number(searchParams["page"]) || 1;
  const limit = Number(searchParams["limit"]) || 8;
  const search = searchParams["search"]?.toString() || "";

  // console.log(page);
  const { data: movies, error, isLoading } = useMovies(page, limit, search);

  if (error) {
    return <p>Error loading movies.</p>;
  }

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="mt-[6rem] md:mt-[7rem] lg:mt-[11rem] px-4 mb-14">
          <div className="flex flex-row justify-center gap-[8rem] md:gap-[18rem] lg:gap-[40rem] px-5 md:px-10 mb-8">
            <h1 className="text-2xl md:text-3xl text-white mb-3 md:mb-5">
              Movies
            </h1>
            <Search />
          </div>
          <MovieSkeleton limit={limit} />;
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="mt-[6rem] md:mt-[7rem] lg:mt-[11rem] px-4 mb-14">
        <div className="flex flex-row justify-center gap-[8rem] md:gap-[18rem] lg:gap-[40rem] px-5 md:px-10 mb-8">
          <h1 className="text-2xl md:text-3xl text-white mb-3 md:mb-5">
            Movies
          </h1>
          <Search />
        </div>

        <div className="mx-auto flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-9 2xl:grid-cols-5 2xl:gap-6 gap-3">
            {movies?.map((movie: Movie) => (
              <MovieCard
                key={movie?.id}
                title={movie?.title}
                thumbnailUrl={movie?.thumbnailUrl}
                id={movie?.id}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 px-5 space-x-5 gap-5 ">
          <div
            className={`flex justify-center items-center bg-black p-2 md:p-3 rounded-md ${
              page <= 1 && `pointer-events-none bg-opacity-50`
            }`}>
            {!isLoading && (
              <Link
                href={`/movies${page > 1 ? `?page=${page - 1}` : ""}`}
                scroll={false}>
                <FaChevronLeft size={30} className="text-white" />
                <p className="text-white text-sm md:text-xl">Prev</p>
              </Link>
            )}
          </div>

          <div
            className={`flex justify-center items-center bg-black p-2 md:p-3 rounded-md
          ${movies?.length < limit && `pointer-events-none bg-opacity-50`}`}>
            {!isLoading && (
              <Link href={`/movies?page=${page + 1}`} scroll={false}>
                <FaChevronRight size={30} className="text-white" />
                <p className="text-white text-sm md:text-xl">Next</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
