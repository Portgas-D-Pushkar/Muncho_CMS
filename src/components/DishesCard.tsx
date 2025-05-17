import React from "react";

import Image from "next/image";

// Images 
import Dish_1 from "../../public/Images/Dishes/dish_1.jpeg";

function DishesCard() {
  return (
    <div className="w-[280px] h-fit overflow-hidden rounded-[1rem] relative p-2">
      <div className="w-full h-full bg-black/55 absolute top-0 left-0 z-10"></div>
      <Image
        className="w-full h-full object-cover blur-xl absolute top-0 left-0 z-0"
        src={Dish_1}
        alt="dish_1"
      />

      {/* content  */}
      <div className="w-full h-fit flex flex-col justify-center items-center gap-2 relative z-20">
        <Image
          className="w-full aspect-square object-cover rounded-[1rem] "
          src={Dish_1}
          alt="dish_1"
        />

        {/* text  */}
        <div className="w-full">
          <h1 className="text-white text-[0.9rem] font-['Inter-Reg']">
            Veg small combo
          </h1>
          <p className="text-[#C4C4C4] text-[0.65rem] font-['Inter-Lig'] line-clamp-2">
            A delicious Mexican dish featuring a crispy or soft tortilla filled
            with flavorful
          </p>
        </div>

        <button className="w-full bg-[#FFFFFF12] cursor-pointer text-center text-white font-['Inter-Lig'] text-[0.65rem] rounded-[0.5rem] py-2.5">
          Add Item
        </button>
      </div>
    </div>
  );
}

export default DishesCard;
