import React from "react";
import Link from "next/link";

// images
import Logo from "../../../public/Images/logo.png";

// components
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import BigBtn from "./BigBtn";

function Nav() {
  return (
    <nav className="w-screen h-fit flex justify-between items-center relative px-8 lg:px-14 py-6 ">
      <AlignJustify
        className="sm:hidden cursor-pointer"
        size={25}
        color="black"
      />

      {/* left  */}
      <div className="w-fit h-fit flex justify-center items-center sm:gap-5">
        <div className="w-[50px] h-fit overflow-hidden relative">
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

        <select className="hidden sm:block text-[#4D4D4D] text-[0.8rem] font-['Inter-Reg'] focus:outline-none">
          <option>More</option>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
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
    </nav>
  );
}

export default Nav;
