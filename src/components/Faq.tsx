"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faq } from "../data/template.data.json"; // Adjust path as needed

function Index() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [, setActiveItem] = useState<
    | {
        title: string;
        description: string;
      }
    | undefined
  >(faq.questions[0]);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    const newActiveItem = faq.questions.find((_, i) => i === index);
    setActiveItem(newActiveItem);
  };

  return (
    <div className="lg:px-[110px] pt-[124px] px-1 text-center lg:text-left">
      <h1 className="capitalize font-semibold font-inter text-[24px] lg:text-[56px] leading-[28.8px] lg:leading-[62px] lg:tracking-[-2.8px] lg:font-medium pb-[64px] lg:w-full ">
        {faq.heading.title}
      </h1>
      
      <div className="h-fit p-2 bg-[#ffffff]">
        {faq.questions.map((tab, index) => (
          <motion.div
            key={index}
            className={`overflow-hidden ${
              index !== faq.questions.length - 1 ? "border-b" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <button
              type="button"
              className="p-3 font-inter font-medium px-2 w-full cursor-pointer sm:text-base text-xs items-center transition-all text-[20px] leading-[26px] tracking-[-0.5px] text-black   flex gap-2"
            >
              {tab.title}
            </button>
            <AnimatePresence mode="sync">
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.14,
                  }}
                >
                  <p className="text-black p-3 xl:text-base sm:text-sm text-xs pt-0 w-[90%]">
                    {tab.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Index;
