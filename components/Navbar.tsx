import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-2 items-center bg-black">
      <Link href={"/"}>
        <h1 className="text-3xl bg-gradient-to-l  text-transparent from-green-500 to-green-700 bg-clip-text  text-gray-800">
          <strong >CLUES</strong>
        </h1>
      </Link>
      <ul className="flex gap-5 last:mr-5">
      <Link href={"/players"}>
        <li>
          <p className="font-semibold text-white">Players</p>
        </li>
        </Link>
        <Link href={"/singleplayer"}>
        <li>
          <p className="font-semibold text-white">Single-Player</p>
        </li>
        </Link>
        <Link href={"/mentor"}>
        <li>
          <p className="font-semibold text-white">حَكم</p>
        </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
