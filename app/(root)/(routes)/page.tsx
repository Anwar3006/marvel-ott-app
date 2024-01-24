"use client";

import Navbar from "@/components/Navbar";
import HomeCards from "@/components/HomeCards";
import Billboard from "@/components/Billboard";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <HomeCards title="Movies" />
      </div>
    </div>
  );
}
