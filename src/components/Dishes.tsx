import React from "react";

// components
import BigBtn from "./common/BigBtn";
import DishesCard from "./DishesCard";

function Dishes() {
  return (
    <div className="w-screen h-screen min-h-fit flex flex-col justify-evenly items-center gap-5 overflow-hidden relative px-7 py-5">
      <div className="w-fit h-fit flex flex-col justify-center items-center">
        <h1 className="w-[180px] sm:w-fit text-center text-black text-[1.5rem] md:text-[2rem] font-['Inter-Med'] leading-6">
          Try our most popular items
        </h1>
        <h6 className="w-[180px] sm:w-fit text-center text-[#4D4D4D] text-[0.7rem] font-['Inter-Reg'] mt-4">
          Treat yourself to our must-try list that has everyone talking
        </h6>
        <BigBtn title={"View Full Menu"} link={"/"} styles="mt-6" />
      </div>

      <div className="w-fit flex justify-center items-center gap-3">
        <DishesCard />
        <DishesCard />
        <DishesCard />
        <DishesCard />
        <DishesCard />
        <DishesCard />
        <DishesCard />
      </div>
    </div>
  );
}

export default Dishes;
