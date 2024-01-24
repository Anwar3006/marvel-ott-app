"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { LuConstruction } from "react-icons/lu";

const TvShows = () => {
  const router = useRouter();

  return (
    <>
      <div
        onClick={() => router.back()}
        className="flex flex-row items-center justify-center h-screen text-white hover:cursor-pointer">
        <AiOutlineArrowLeft className="text-white" size={40} />
        <LuConstruction className="mr-2" size={40} />
        <LuConstruction className="mr-2" size={40} />
        <p className="text-2xl">Content Under Construction</p>
        <LuConstruction className="ml-2" size={40} />
        <LuConstruction className="ml-2" size={40} />
      </div>
    </>
  );
};

export default TvShows;
