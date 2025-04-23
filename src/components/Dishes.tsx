import React from "react";
import { motion } from "framer-motion";

// components
import DishesCard from "./DishesCard";

function Dishes() {
  return (
    <div className="w-screen min-h-fit flex flex-col justify-evenly items-center gap-5 overflow-hidden relative px-7 py-5">
      {/* Title Section */}
      <div className="w-fit h-fit flex flex-col justify-center items-center">
        <h1 className="w-[180px] sm:w-fit text-center text-black text-[1.5rem] md:text-[2rem] font-['Inter-Med'] leading-6">
          Try our most popular items
        </h1>
        <h6 className="w-[180px] sm:w-fit text-center text-[#4D4D4D] text-[0.7rem] font-['Inter-Reg'] mt-4">
          Treat yourself to our must-try list that has everyone talking
        </h6>
      </div>

      {/* Scrollable & Draggable Dish Cards */}
      <motion.div
        className="w-full cursor-grab overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: -800, right: 0 }}
          className="flex gap-4 px-4 py-2 w-max"
        >
          <DishesCard />
          <DishesCard />
          <DishesCard />
          <DishesCard />
          <DishesCard />
          <DishesCard />
          <DishesCard />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Dishes;
