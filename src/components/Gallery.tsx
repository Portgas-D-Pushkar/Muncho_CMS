import React from "react";
import Image from "next/image";
import { Gallery1_Images } from "@/data/Gallery";

function Gallery() {
  return (
    <div className="w-screen h-fit overflow-hidden relative">
      <div className="w-screen h-screen min-h-fit overflow-hidden relative px-7 py-20">
        {/* Headings  */}
        <div className="w-fit h-fit mx-auto">
          <h1 className="text-center text-black text-[1.5rem] md:text-[2rem] font-['Inter-Med'] leading-6">
            Talkin' Tacos®
          </h1>
          <h6 className="text-center text-[#4D4D4D] text-[0.7rem] font-['Inter-Reg'] mt-4">
            Less Talkin' More Tacos ™
          </h6>
        </div>

        {/* Images  */}
        <div className="w-full h-fit grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 overflow-hidden relative sm:px-8 lg:px-12 xl:px-24 mt-12">
          {Gallery1_Images.length > 0 &&
            Gallery1_Images.map((elem, i) => (
              <div key={i} className="relative aspect-square w-full">
                <Image
                  src={elem}
                  alt="gallery_image"
                  fill
                  className="rounded-[0.5rem] object-cover"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
