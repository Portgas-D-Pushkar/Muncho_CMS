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
import TemplateData from "@/data/template.data.json";

function Home() {
  return (
    <div className="w-screen h-fit overflow-hidden relative">
      {/* Hero  */}
      <div className="w-full h-fit px-5">
      <Hero />
      </div>

      {/* Gallery 1  */}
      <div className="w-full h-fit relative px-5 md:px-28 py-16">
        {/* Headings  */}
        <div className="w-fit h-fit mx-auto">
          <h1 className="text-center text-black text-[1.5rem] md:text-[2rem] font-['Inter-Med'] leading-6">
            {TemplateData.gallery_1.heading.title}
          </h1>
          <h6 className="text-center text-[#4D4D4D] text-[0.7rem] font-['Inter-Reg'] mt-4">
            {TemplateData.gallery_1.heading.subtitle}
          </h6>
        </div>

        <Gallery images={TemplateData.gallery_1.images} styles="mt-12" />
      </div>

      {/* Catering  */}
      <div className="w-full h-fit relative px-5 md:px-28 py-16">
        <Catering />
      </div>

      {/* Gallery 2  */}
      <div className="w-full h-fit relative px-5 md:px-28 py-16">
        {/* Headings  */}
        <h1 className="w-full max-w-[300px] mx-auto text-center text-black text-[1.5rem] md:text-[2rem] font-['Inter-Med'] leading-8">
          {TemplateData.gallery_2.heading.title}
        </h1>
        <Gallery images={TemplateData.gallery_2.images} styles="mt-12" />
      </div>

      <Dishes />
      <GiftCardSection />
      <Faq />
      <Locations />
      <Footer />
    </div>
  );
}

export default Home;
