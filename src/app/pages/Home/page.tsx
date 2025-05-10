"use client";

import React from "react";

// Components
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Dishes from "@/components/Dishes";
import Faq from "@/components/Faq";
import Locations from "@/components/Locations";
import Catering from "@/components/Catering";
import GiftCardSection from "@/components/giftCard";
import Footer from "@/components/footer";

// Gallery Images
import { Gallery1_Images, Gallery2_Images } from "@/data/Gallery";

function Home() {
  return (
    <div className="w-screen h-fit overflow-hidden relative">
      <Hero />

      {/* Gallery 1  */}
      <div className="w-full h-fit relative py-10">
        {/* Headings  */}
        <div className="w-fit h-fit mx-auto">
          <h1 className="text-center text-black text-[1.5rem] md:text-[2rem] font-['Inter-Med'] leading-6">
            Talkin&apos; Tacos®
          </h1>
          <h6 className="text-center text-[#4D4D4D] text-[0.7rem] font-['Inter-Reg'] mt-4">
            Less Talkin&apos; More Tacos ™
          </h6>
        </div>

        <Gallery images={Gallery1_Images} styles="mt-12" />
      </div>

      <Catering />

      {/* Gallery 2  */}
      <div className="w-full h-fit relative py-10">
        {/* Headings  */}
        <div className="w-fit h-fit mx-auto">
          <h1 className="text-center text-black text-[1.5rem] md:text-[2rem] font-['Inter-Med'] leading-8">
            Florida, Atlanta, <br /> Washington D.C, New <br /> York, North
            Carolina, <br />
            Texas and growing!
          </h1>
        </div>
        <Gallery images={Gallery2_Images} styles="mt-12" />
      </div>

      <Dishes />
      <GiftCardSection />
      <Faq/>
      <Locations />
      <Footer/>
    </div>
  );
}

export default Home;
