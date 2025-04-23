import React from "react";
import CateringImg from "../../public/Images/CateringImg.png";
import BigBtn from "./common/BigBtn";
import Image from "next/image";

const Catering = () => {
  return (
    <div className="relative h-[618px] lg:h-auto my-[120px] md:mt-[225px] flex flex-col items-center justify-center w-full  md:px-0">
      {/* Background Image */}
      <Image
        src={CateringImg}
        alt="Catering Img"
        width={1409}
        height={800}
        className="w-full h-full"
      />

      {/* Floating Card Content */}
      <div className="absolute bottom-6 md:top-20 left-1/2 md:left-40 -translate-x-1/2 md:translate-x-0 w-[332px] md:w-[632px] h-auto md:h-[640px] bg-white/80 backdrop-blur-md rounded-[30px] md:rounded-[50px] flex items-center justify-center p-6 md:p-10">
        <div>
          <h1 className="text-[32px] md:text-[56px] leading-tight md:leading-[62px] font-medium tracking-tight text-black font-inter mb-6 md:pb-[64px]">
            Catering & Events
          </h1>
          <p className="text-[15px] md:text-[16px] leading-[22px] text-[#4D4D4D] font-medium tracking-tight font-inter mb-6 md:mb-[40px] max-w-[100%] md:w-[472px]">
            Spice up your corporate and private events with Talkin&apos; Tacos®!
            Our flavorful and festive catering services bring the fiesta to your
            workplace and private events, ensuring a memorable experience for
            all your colleagues and family!
          </p>
          <BigBtn title={"Arrange Your Fiesta!"} link={"/"} />
        </div>
      </div>
    </div>
  );
};

export default Catering;
