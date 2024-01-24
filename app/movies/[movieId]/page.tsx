"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

import useGetMovie from "@/hooks/useGetMovie";

const Movie = () => {
  const router = useRouter();

  const { movieId }: { movieId: string } = useParams();
  const { data: movie, error, isLoading } = useGetMovie(movieId);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed flex flex-row z-10 items-center w-full py-2 px-4 md:px-8 bg-slate-500/70 gap-8">
        <AiOutlineArrowLeft
          onClick={() => router.back()}
          size={30}
          className="text-white cursor-pointer"
        />
        <div className="flex flex-row items-center gap-4">
          <h1 className="text-white text-xl md:text-3xl">Watching:</h1>
          <p className="text-white text-xl md:text-3xl font-bold">
            {movie?.title}
          </p>
        </div>
      </nav>

      <iframe
        id="playit"
        allowFullScreen
        height={"100%"}
        width={"100%"}
        src={movie?.videoUrl}></iframe>
    </div>
  );
};

export default Movie;
