"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

import NavItems from "./NavItems";
import MobileMenu from "./MobileMenu";
import SecondaryNav from "./SecondaryNav";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenu((current) => !current);
  }, [setMobileMenu]);

  useEffect(() => {
    if (mobileMenu) {
      setTimeout(() => {
        setMobileMenu(false);
      }, 1500);
    }
  });

  return (
    <nav className="bg-gradient-to-b from-red-500 from-40% w-full fixed z-40">
      <div
        className="
            py-6 px-4 md:px-16
            flex flex-row items-center
            transition duration-500">
        {/* Primary nav */}
        <div className="hidden lg:flex flex-row gap-6">
          <NavItems title="Home" address="/" />
          <NavItems title="Movies" address="/movies" />
          <NavItems title="Tv Shows" address="/tvShows" />
        </div>

        {/* Mobile menu - Primary nav */}
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden relative flex flex-row items-center gap-1 cursor-pointer">
          <p className="text-white text-sm md:text-md">Browse</p>
          <BsChevronDown className="text-white" />
          <MobileMenu visible={mobileMenu} />
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center mx-auto">
          <Link href="/">
            <div className="flex flex-col items-center uppercase">
              <h1 className="text-xl sm:text-2xl md:text-4xl tracking-tight leading-6 font-extrabold">
                Marvel
              </h1>
              <h3 className="text-base sm:text-xl  md:text-2xl text-white tracking-wide font-normal">
                Cinematic Universe
              </h3>
            </div>
          </Link>
        </div>

        {/* Secondary nav */}
        <SecondaryNav />
      </div>
    </nav>
  );
};

export default Navbar;
