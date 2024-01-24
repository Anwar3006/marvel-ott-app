"use client";

import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa6";
import { BsChevronDown } from "react-icons/bs";
import AccountMenu from "./AccountMenu";

const SecondaryNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMobileMenu = () => {
    setOpenMenu((current) => !current);
  };

  useEffect(() => {
    if (openMenu) {
      setTimeout(() => {
        setOpenMenu(false);
      }, 1500);
    }
  }, [openMenu]);

  return (
    <div className="flex flex-row items-center gap-5">
      <>
        <FaBell
          size={20}
          className="text-white hover:text-gray-200 hover:cursor-pointer"
        />

        {/* Account Menu */}
        <div
          onClick={toggleMobileMenu}
          className="flex flex-row items-center hover:cursor-pointer">
          <div
            onClick={() => {}}
            className="rounded-md bg-[url('/images/default-green.png')] bg-cover bg-no-repeat bg-center h-8 w-8 md:h-12 md:w-12"
          />
          <BsChevronDown className="text-white" />
          <AccountMenu visible={openMenu} />
        </div>
      </>
    </div>
  );
};

export default SecondaryNav;
