"use client";

import React from "react";

// images
import HeroImage from "../../public/Images/hero_image.jpeg";

// components
import Nav from "./common/Nav";
import BigBtn from "./common/BigBtn";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-screen h-fit overflow-hidden relative">
      <div className="w-screen h-screen min-h-fit flex flex-col justify-center items-center overflow-hidden relative">
        <Nav />

        <div className="w-screen flex-1 overflow-hidden relative px-7 pb-3">
          <div className="w-full h-full overflow-hidden relative">
            {/* texts  */}
            <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-start gap-3 rounded-2xl z-20 px-6 sm:px-12 md:px-28">
              <div className="w-fit flex justify-center items-center gap-2">
                <div className="h-[30px] border-[3.5px] border-white"></div>
                <h4 className="text-white text-[0.8rem] md:text-[1rem] font-['Inter-Reg']">
                  Best Tacos In Town
                </h4>
              </div>
              <h1 className="w-full max-w-[650px] text-white text-[2rem] md:text-[3.5rem] font-['Inter-Med'] leading-11 md:leading-16">
                FREE DELIVERY TACO TUESDAY COUPON AT CHECKOUT: LOVETT
              </h1>
              <BigBtn title={"Order Online"} link={"/"} />
            </div>

            {/* overlay  */}
            <div className="w-full h-full bg-black/20 absolute top-0 left-0 rounded-2xl z-10"></div>
            <Image
              className="w-full h-full rounded-2xl object-cover overflow-hidden relative z-0"
              src={HeroImage}
              alt="hero_image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
