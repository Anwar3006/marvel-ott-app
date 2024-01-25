"use client";

import useCurrentUser from "@/hooks/useCurrentUser";
import gsap from "gsap";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";

const Profile = () => {
  const ImageRef = useRef(null);
  const UsernameRef = useRef(null);
  const { data: user, isLoading } = useCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // animate logo out
      gsap.to(ImageRef.current, {
        x: -80,
        opacity: 0,
        delay: 1.6,
        ease: "expo.out",
        display: "none",
      });

      // Show name and animate it in from the right
      gsap.to(UsernameRef.current, {
        opacity: 1,
        x: -1,
        delay: 2.3,
        ease: "expo.in",
        display: "flex",
      });

      getSession().then((res) => {
        if (!res?.user) {
          toast.error("You are not Signed In", { duration: 2000 });
          router.push("/auth");
        }
      });
    }
  }, [router]);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 h-full">
        <div
          id="Logo"
          ref={ImageRef}
          className="flex flex-col items-center justify-center">
          <Image
            src="/images/Marvel.jpg"
            width={500}
            height={0}
            alt="Logo"
            className="h-[8rem] md:h-[10rem] transition-transform duration-500"
          />
          <p className="uppercase text-white font-semibold text-3xl md:text-5xl tracking-wider">
            Cinematic Universe
          </p>
        </div>

        <div
          className="hidden flex-col items-center justify-center opacity-0 group"
          ref={UsernameRef}
          onClick={() => router.push("/")}>
          <div className="flex mx-auto w-44">
            <div
              className="
                w-44 h-44
                rounded-md
                border-2 border-transparent overflow-hidden
                group-hover:cursor-pointer
                group-hover:border-white
              ">
              <Image
                width={180}
                height={100}
                src="/images/default-green.png"
                alt="Profile"
              />
            </div>
          </div>
          <div className="text-3xl md:text-5xl text-center tracking-wider text-white group-hover:text-gray-300 mt-5">
            {user?.name}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
