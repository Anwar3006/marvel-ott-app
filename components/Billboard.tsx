import useBillboard from "@/hooks/useBillboard";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const Billboard = () => {
  const router = useRouter();
  const { data: movie, error, isLoading } = useBillboard();

  if (isLoading) {
    return (
      <div className="relative h-[70.25vw] md:h-[56.25vw] animate-pulse bg-gray-600 mb-7 mb:mb-10">
        <div className="absolute top-[35%] md:top-[40%] ml-4 md:ml-16 lg:w-[70vw] w-[85vw]"></div>
      </div>
    );
  }

  return (
    <div className="relative h-[70.25vw] md:h-[56.25vw]">
      <iframe
        className="w-full h-[70.25vw] md:h-[56.25vw] object-cover brightness-[60%]"
        src={movie?.trailer}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
      <div className="absolute top-[35%] md:top-[40%] ml-4 md:ml-16 lg:w-[70vw] w-[85vw]">
        <p className="text-white text-1xl md:text-3xl lg:text-5xl h-full w-[50%] lg:w-[80%] font-bold drop-shadow-xl">
          {movie?.title}
        </p>

        <p className="text-white text-[8px] md:text-base mt-2 md:mt-4 lg:mt-7 xl:text-2xl w-[90%] md:w-[80%] drop-shadow-xl">
          {movie?.description.slice(0, 200)} {isLoading ? "" : "..."}
        </p>

        {!isLoading && (
          <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
            <button
              onClick={() => router.push(`/movies/${movie?.id}`)}
              className="flex flex-row items-center bg-white bg-opacity-30 text-white py-1 px-3 md:py-2 md:px-4 font-semibold rounded-md 
                        w-auto text-xs lg:text-lg hover:bg-opacity-20 transition">
              <FaPlayCircle className="mr-2" />
              Play This
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Billboard;
