import React from "react";
import { motion } from "framer-motion";

// components
import DishesCard from "./DishesCard";

// Json
import TemplateData from "@/data/template.data.json";

function Dishes() {
  return (
    <div className="w-full min-h-fit relative">
      {/* Texts */}
      <div className="w-fit h-fit flex flex-col justify-center items-center mx-auto">
        <h1 className="w-[180px] sm:w-fit text-center text-black text-[1.5rem] md:text-[2rem] font-['Inter-Med'] leading-6">
          {TemplateData.dishes.heading.title}
        </h1>
        <h6 className="w-[180px] sm:w-fit text-center text-[#4D4D4D] text-[0.7rem] font-['Inter-Reg'] mt-4">
          {TemplateData.dishes.heading.subtitle}
        </h6>
      </div>

      {/* Scrollable & Draggable Dish Cards */}
      <motion.div
        className="w-full cursor-grab mt-12"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: -800, right: 0 }}
          className="flex gap-4 w-max"
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
