"use client";

import Image from "next/image";
import BigBtn from "./common/BigBtn";
import { giftCard } from "../data/template.data.json"; // Adjust path as needed

const GiftCardSection = () => {
  return (
    <section className="flex w-full max-w-[1440px] mx-auto self-center flex-col-reverse gap-2 md:flex-row font-inter items-center justify-center text-black md:px-[108px] px-4 py-12">
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left space-y-3 lg:space-y-6 max-w-xl">
        <h2 className="font-medium text-[24px] lg:text-[56px] lg:leading-[62px] tracking-[-2.8px] text-black">
          {giftCard.heading}
        </h2>
        <p className="text-[#4D4D4D] text-[16px] lg:leading-[22px] font-medium tracking-[-0.2px]">
          {giftCard.description}
        </p>

        <div className="flex justify-center md:justify-start">
          <BigBtn title={"Explore gift cards"} link={"/"} />
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 mt-10 md:mt-0 md:ml-12 rounded-2xl overflow-hidden flex justify-center">
        <Image
          src={giftCard.image}
          alt="Gift Card Taco"
          width={520}
          height={520}
          className="rounded-2xl object-cover"
        />
      </div>
    </section>
  );
};

export default GiftCardSection;
