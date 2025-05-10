import React, { useState } from "react";
import Link from "next/link";

// components
import { AlignJustify, ChevronDown } from "lucide-react";
import Image from "next/image";
import BigBtn from "./BigBtn";
import Menu from "../Menu";

// Json
import TemplateData from "@/data/template.data.json";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full h-fit flex justify-between items-center relative ">
      <AlignJustify
        onClick={toggleMenu}
        className="sm:hidden cursor-pointer"
        size={25}
        color="black"
      />

      {/* left  */}
      <div className="w-fit h-fit flex justify-center items-center sm:gap-5">
        <div className="w-fit h-fit overflow-hidden relative ml-8 sm:ml-0">
          <Image
            className="object-cover"
            width={50}
            height={50}
            src={TemplateData.home.nav.logo}
            alt="logo"
          />
        </div>
        <Link
          className="hidden sm:block bg-[#EBEBEC] text-black text-[0.8rem] font-['Inter-Med'] rounded-[0.5rem] px-2 py-1.5"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hidden sm:block text-[#4D4D4D] text-[0.8rem] font-['Inter-Reg']"
          href="/"
        >
          Menu
        </Link>
        <Link
          className="hidden sm:block text-[#4D4D4D] text-[0.8rem] font-['Inter-Reg']"
          href="/"
        >
          SweepStake
        </Link>

        <button
          onClick={toggleMenu}
          className="hidden sm:flex text-[#4D4D4D] text-[0.8rem] font-['Inter-Reg'] justify-center items-center gap-1 cursor-pointer"
        >
          Menu
          <ChevronDown size={15} color="#4D4D4D" />
        </button>
      </div>

      {/* right  */}
      <div className="w-fit h-fit flex justify-center items-center sm:gap-2">
        <Link
          className="text-[#4D4D4D] text-[0.8rem] font-['Inter-Reg'] border border-[#D6D6D6] rounded-[0.5rem] px-3 py-1.5"
          href="/"
        >
          Sign in
        </Link>

        <BigBtn title={"Order Online"} link={"/"} styles="hidden sm:flex" />
      </div>

      {/* menu  */}

      {isMenuOpen && <Menu />}
    </nav>
  );
}

export default Nav;
