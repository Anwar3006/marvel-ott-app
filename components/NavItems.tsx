import React from "react";
import Link from "next/link";

interface NavItemsProsps {
  title: string;
  address: string;
}

const NavItems: React.FC<NavItemsProsps> = ({ title, address }) => {
  return (
    <div className="text-white hover:text-gray-200 font-semibold text-1xl tracking-wide">
      <Link href={address}>
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default NavItems;
