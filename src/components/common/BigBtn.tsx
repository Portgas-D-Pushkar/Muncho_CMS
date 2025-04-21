import React from "react";
import Link from "next/link";

// components
import { ChevronRight } from "lucide-react";

function BigBtn({ title, link, styles = "" }) {
  return (
    <Link
      className={`flex justify-center items-center max-w-fit bg-[#06B906] text-black text-[0.8rem] font-['Inter-Reg'] rounded-[0.5rem] gap-1 px-3 py-1.5 ${styles}`}
      href={link}
    >
      {title}
      <ChevronRight size={16} color="black" />
    </Link>
  );
}

export default BigBtn;
