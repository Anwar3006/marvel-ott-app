import Link from "next/link";
import React from "react";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-zinc-600 absolute top-6 left-1 border-2 border-gray-300 rounded-md w-40">
      <div className="flex flex-col items-center">
        <Link href="/movies">
          <div className="text-white px-6 py-1 hover:cursor-pointer hover:underline mb-1">
            Movies
          </div>
        </Link>

        <Link href="/tvShows">
          <div className="text-white px-6 py-1 hover:cursor-pointer hover:underline">
            Tv Shows
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
