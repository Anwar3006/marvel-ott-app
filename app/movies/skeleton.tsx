import React from "react";

interface MovieSkeletonProps {
  limit: number;
}

const MovieSkeleton: React.FC<MovieSkeletonProps> = ({ limit }) => {
  return (
    <div className="mx-auto flex justify-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-14 2xl:grid-cols-5 2xl:gap-6 gap-3">
        {Array.from({ length: limit }).map((_, index) => (
          <div
            key={index}
            className="bg-gray-600 rounded-md w-[15rem] 2xl:w-[17rem] shadow-2xl h-[17rem] md:h-[280px] lg:h-[26rem] 
            col-span animate-pulse
          ">
            <div className={`w-full h-full rounded-md bg-gray-600`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSkeleton;
