import React from "react";

import BigBtn from "./common/BigBtn";
import Image from "next/image";

import TemplateData from "@/data/template.data.json";

const Catering = () => {
  return (
    <div className="w-full h-fit relative">
      {/* Background Image */}

      <div className="w-full h-[600px] relative rounded-[30px] overflow-hidden">
        <Image
          fill
          src={TemplateData.catering.image}
          alt="Catering Img"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Card Content */}
      <div className="w-[90%] sm:w-fit h-fit bg-white/80 backdrop-blur-md absolute bottom-4 sm:top-1/2 sm:-translate-y-1/2 left-1/2 -translate-x-1/2 sm:left-10 sm:-translate-x-0 space-y-6 rounded-4xl px-10 py-10 sm:py-40">
        <h1 className=" text-5xl font-medium tracking-tight text-black font-inter">
          {TemplateData.catering.text.title}
        </h1>
        <p className="w-full max-w-[425px] font-inter text-[14px] text-[#4D4D4D] tracking-tight leading-[17px]">
          {TemplateData.catering.text.description}
        </p>
        <BigBtn title={"Arrange Your Fiesta!"} link={"/"} />
      </div>
    </div>
  );
};

export default Catering;
