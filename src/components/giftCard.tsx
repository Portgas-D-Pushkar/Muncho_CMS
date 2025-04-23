"use client";

import Image from "next/image";
import BigBtn from "./common/BigBtn";

const GiftCardSection = () => {
  return (
    <section className="flex w-full self-center flex-col-reverse gap-2 md:flex-row  font-inter items-center justify-between text-black md:px-[108px] px-4 py-12">
      {/* Text Section */}
      <div className="flex-1 text-left space-y-3 lg:space-y-6 max-w-xl">
        <h2 className="font-medium text-[24px] lg:text-[56px] lg:leading-[62px] tracking-[-2.8px] text-black">
          Gift Cards
        </h2>
        <p className="text-[#4D4D4D] text-[16px] lg:leading-[22px] font-medium tracking-[-0.2px]">
          Savor the flavor of Talkin&apos; Tacos® with our gift cards! Give the
          gift of delicious experiences, treating your friends and family to a
          fiesta of taste at our restaurant.
        </p>

        <BigBtn title={" Explore Gift Cards"} link={"/"} />
      </div>

      {/* Image Section */}
      <div className="flex-1 mt-10 md:mt-0 md:ml-12 rounded-2xl overflow-hidden">
        <Image
          src="/images/GiftCard.png"
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
