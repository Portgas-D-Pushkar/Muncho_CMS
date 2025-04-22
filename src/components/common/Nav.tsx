import React, { useState } from "react";
import Link from "next/link";

// images
import Logo from "../../../public/Images/logo.png";

// components
import { AlignJustify, ChevronDown } from "lucide-react";
import Image from "next/image";
import BigBtn from "./BigBtn";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-screen h-fit flex justify-between items-center relative px-8 lg:px-14 py-4 md:py-6 z-30">
      <AlignJustify
        className="sm:hidden cursor-pointer"
        size={25}
        color="black"
      />

      {/* left  */}
      <div className="w-fit h-fit flex justify-center items-center sm:gap-5">
        <div className="w-[50px] h-fit overflow-hidden relative ml-8 sm:ml-0">
          <Image className="w-full h-fit object-cover" src={Logo} alt="logo" />
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
      {isMenuOpen && (
        <div className="hidden sm:flex w-[82%] h-fit bg-white rounded-[0.8rem] justify-between items-center absolute top-[80px] left-1/2 -translate-x-1/2 py-3 px-24">
          <div className="w-fit h-fit flex flex-col items-start justify-center gap-5">
            <Link
              className="bg-[#EBEBEC] text-black text-[0.8rem] font-['Inter-Med'] rounded-[0.5rem] px-2 py-1.5"
              href="/"
            >
              Home
            </Link>

            <Link
              className="text-[#4D4D4D] text-[0.8rem] font-['Inter-Reg']"
              href="/"
            >
              Catering
            </Link>

            <Link
              className="text-[#4D4D4D] text-[0.8rem] font-['Inter-Reg']"
              href="/"
            >
              Gift Cards
            </Link>
          </div>

          <div className="w-fit h-fit flex flex-col items-start justify-center gap-5">
            <Link
              className="text-[#4D4D4D] text-[0.8rem] font-['Inter-Reg']"
              href="/"
            >
              Menu
            </Link>

            <Link
              className="text-[#4D4D4D] text-[0.8rem] font-['Inter-Reg']"
              href="/"
            >
              Careers
            </Link>

            <Link
              className="text-[#4D4D4D] text-[0.8rem] font-['Inter-Reg']"
              href="/"
            >
              Press
            </Link>
          </div>

          <div className="w-fit h-fit flex flex-col items-start justify-center gap-5">
            <Link
              className="text-[#4D4D4D] text-[0.8rem] font-['Inter-Reg']"
              href="/"
            >
              Story
            </Link>

            <Link
              className="text-[#4D4D4D] text-[0.8rem] font-['Inter-Reg']"
              href="/"
            >
              Meet our team
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;
