"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useDebounce } from "use-debounce";

// import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [query] = useDebounce(searchValue, 500); //debounce by 500ms to wait for user to finish typing.

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/movies?search=${query}`);
  };

  return (
    <form
      onSubmit={onSearch}
      className="flex flex-row bg-white px-2 py-0 rounded-2xl items-center justify-between">
      <IoSearch />
      <input
        type="search"
        className="focus:outline-none px-2 py-1 md:w-full w-24 text-sm md:text-base"
        placeholder="Search"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
    </form>
  );
};

export default Search;
