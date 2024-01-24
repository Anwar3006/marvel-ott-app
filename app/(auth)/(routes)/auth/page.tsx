"use client";

import React, { useCallback, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import Input from "@/components/Input";
import toast from "react-hot-toast";
import Image from "next/image";

const SignInLoginPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Register/Login Variant
  const [variant, setVariant] = useState("register");
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "register" ? "login" : "register"
    );
  }, [setVariant]);

  // Login
  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      }).then(() => toast.success("Login Successful, Welcome!"));
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  // Register
  const register = useCallback(async () => {
    try {
      await axios
        .post("/api/register", {
          username,
          email,
          password,
        })
        .then(() => toast.success("Account created!"));

      login();
    } catch (error) {
      console.log(error);
    }
  }, [username, email, password, login]);

  return (
    <>
      <div className="w-full h-full bg-black lg:bg-opacity-80">
        <nav className="bg-black bg-opacity-70 w-full z-10 px-12 py-5">
          <div className="flex items-center justify-center ">
            <Image
              src="https://res.cloudinary.com/daffqurhi/image/upload/v1706047328/nwgrufbwwnuq0qd8vniy.jpg"
              alt="Logo"
              className="h-10"
            />
          </div>
        </nav>
        <div className="flex justify-center">
          <div className="bg-black/50 p-4 md:p-6 lg:p-16 rounded-md mt-5 self-center lg:w-2/5 lg;max-w-md w-full">
            <h2 className="text-white text-2xl md:text-4xl font-semibold mb-8">
              {variant === "register" ? "Register" : "Login"}
            </h2>

            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  label="Username"
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e: any) => setUsername(e.target.value)}
                />
              )}
              <Input
                label="Email"
                id="email"
                type="email"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Input
                label="Password"
                id="password"
                type="password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-row gap-4 md:gap-8 items-center justify-center mt-8">
              <div
                onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                className="bg-white hover:bg-gray-200 transition duration-200 h-10 w-10 lg:h-12 lg:w-12 rounded-full flex items-center justify-center cursor-pointer">
                <FcGoogle size={40} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                className="bg-white hover:bg-gray-200 transition duration-200 h-10 w-10 lg:h-12 lg:w-12 rounded-full flex items-center justify-center cursor-pointer">
                <FaGithub size={40} />
              </div>
            </div>

            <button
              onClick={variant === "register" ? register : login}
              className="bg-red-600 hover:bg-red-700 text-white hover:text-gray-400 font-bold py-2 mt-8 w-full rounded-md transition duration-500">
              {variant === "register" ? "Sign Up" : "Login"}
            </button>

            <p className="text-gray-400 text-md md:text-lg mt-6">
              {variant === "register"
                ? "Already have an Account?"
                : "Don't have an Account?"}
              <span
                onClick={toggleVariant}
                className="text-white text-lg ml-1 hover:underline cursor-pointer">
                {variant === "register" ? "Login" : "Create an Account"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInLoginPage;
