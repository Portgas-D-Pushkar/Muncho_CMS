import React from "react";
import CateringImg from "../../public/Images/CateringImg.png";
import BigBtn from "./common/BigBtn";
import Image from "next/image";

const Catering = () => {
  return (
    <div className="relative mt-[225px] flex w-full self-center justify-center items-center">
      <Image src={CateringImg} alt="Catering Img" width={1409} height={800} />
      <div className="flex absolute left-40 top-20 rounded-[50px] items-center bg-[#FFFFFFCC]  justify-center  w-[632px] h-[640px]">
        <div className=" p-10 rounded-xl ">
          <h1 className="capitalize font-inter text-[56px] leading-[62px] tracking-[-2.8px] font-medium pb-[64px] text-black">
            Catering & Events
          </h1>
          <p className="text-[16px] font-inter font-medium leading-[22px] tracking-[-0.2px] text-[#4D4D4D] w-[472px] mb-[40px]">
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
