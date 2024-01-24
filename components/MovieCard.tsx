import React from "react";
import Link from "next/link";

interface MovieCardProps {
  title: string;
  thumbnailUrl: string;
  id: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, thumbnailUrl, id }) => {
  return (
    <div
      className="
        bg-zinc-600 rounded-md w-[15rem] 2xl:w-[17rem] shadow-2xl h-[17rem] md:h-[280px] lg:h-[26rem] 
        hover:scale-105 transition duration-300 ease-out group col-span
        ">
      <div
        style={{ backgroundImage: `url('${thumbnailUrl}')` }}
        className={`w-full h-full bg-cover bg-center bg-no-repeat rounded-md`}>
        <div className="flex flex-col justify-center items-center h-full w-full bg-black bg-opacity-0 rounded-md group-hover:bg-opacity-60">
          <Link href={`/movies/${id}`}>
            <div className="opacity-0 group-hover:opacity-100">
              <svg
                width="100"
                height="100"
                viewBox="0 0 142 142"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="71"
                  cy="71"
                  r="71"
                  fill="url(#paint0_linear_80_4)"
                />
                <path
                  d="M98.7053 66.8313C101.691 68.8085 101.691 73.1915 98.7053 75.1687L61.7608 99.6354C58.437 101.837 54 99.4532 54 95.4667L54 46.5333C54 42.5468 58.437 40.1634 61.7608 42.3646L98.7053 66.8313Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_80_4"
                    x1="8.5"
                    y1="15.5"
                    x2="127.5"
                    y2="108"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0.273768" stopColor="#E70000" />
                    <stop
                      offset="0.952987"
                      stopColor="#D400E7"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </Link>

          <p className="text-white text-lg font-semibold mt-10 mx-auto opacity-0 group-hover:opacity-100 md:px-6">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
