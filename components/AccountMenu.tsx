"use client";
import { Session } from "next-auth";
import { getSession, signOut } from "next-auth/react";
import React, { useEffect, useState } from "react";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const session = await getSession();
      setSession(session);
    };
    fetchData();
  }, []);
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-zinc-600 absolute top-24 right-4 border-2 border-gray-300 rounded-md w-40">
      <div className="flex flex-col items-center">
        <div className="text-white text-xs md:txt-base px-2 py-1 mb-1">
          {session?.user?.name}
        </div>

        <hr className="w-full" />

        <div
          onClick={() => signOut()}
          className="text-white px-6 py-1 hover:cursor-pointer hover:underline mb-1">
          Logout
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
