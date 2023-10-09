"use client";
import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";
import { useEffect, useState } from "react";
import fetchSuggestion from "@/lib/fetchSuggestion";

export default function Header() {
  const [board, searchString, setSearchString] = useBoardStore((store) => [
    store.board,
    store.searchString,
    store.setSearchString,
  ]);

  const [suggestion, setSuggestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (board.columns.size === 0) return;
    setIsLoading(true);

    const fetchSuggestionFunc = async () => {
      const suggestion = fetchSuggestion(board);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(() => false);
      }, 1000);
      setSuggestion(suggestion);
    };

    fetchSuggestionFunc();
  }, [board]);

  return (
    <header>
      <div className="flex flex-col items-center md:flex-row p-5">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] -z-10 blur-3xl rounded-md opacity-50" />

        <Image
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain cursor-pointer"
          alt="logo"
          priority
          width={300}
          height={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/2560px-Trello-logo-blue.svg.png"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-3 p-2 rounded-md shadow-md flex-1 md:flex-initial bg-white">
            <MagnifyingGlassIcon className="text-gray-400 h-6 w-6" />
            <input
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              placeholder="Search"
              className="outline-none flex-1 bg-transparent"
            />
            <button className="hidden" type="submit"></button>
          </form>
          <Avatar
            round
            name="Dev XD"
            size="40"
            color="#0055D1"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-center px-5 py-2 md:py-5 text-[#0055D1]">
        <p className="bg-white flex items-center gap-3 p-2 text-sm font-light pr-5 shadow-xl rounded-xl italic w-fit max-w-3xl">
          <UserCircleIcon
            className={`w-20 h-20 md:w-14 md:h-14 ${
              isLoading && "animate-spin"
            }`}
          />
          {suggestion ? suggestion : "Summarising By GPT-4"}
        </p>
      </div>
    </header>
  );
}
