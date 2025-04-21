"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const tabs = [
  {
    title: "What meals do you serve?",
    description:
      "UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.",
  },
  {
    title: "What meals do you serve?",
    description:
      "Some common challenges include maintaining consistency across different devices and screen sizes, ensuring compatibility with various browsers and assistive technologies, and balancing flexibility with ease of use.",
  },
  {
    title: "Do you offer delivery or takeout?",
    description:
      "     Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.",
  },
  {
    title: "What areas do you serve?",
    description:
      "     Developers can ensure the responsiveness of UI components by using techniques such as fluid layouts, flexible grids, and media queries to adapt the components to different screen sizes and orientations.",
  },
];
function Index() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<
    | {
        title: string;
        description: string;
      }
    | undefined
  >(tabs[0]);

  console.log(activeItem);
  const handleClick = async (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    const newActiveItem = tabs.find((_, i) => i === index);
    setActiveItem(newActiveItem);
  };

  return (
    <>
      <div className="px-[110px] pt-[124px]">
        <h1 className="capitalize font-inter text-[56px] leading-[62px] tracking-[-2.8px] font-medium pb-[64px]">
          Frequently asked questions
        </h1>
        <div className="h-fit p-2  bg-[#Ffffff]">
          {tabs.map((tab, index) => (
            <motion.div
              key={index}
              className={`overflow-hidden ${
                index !== tabs.length - 1 ? "border-b " : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <button
                type="button"
                className={`p-3 font-inter font-medium px-2 w-full cursor-pointer sm:text-base text-xs items-center transition-all text-[20px] leading-[26px] tracking-[-0.5px] text-black   flex gap-2 
               `}
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
                    <p
                      className={` text-black p-3 xl:text-base sm:text-sm text-xs pt-0 w-[90%]`}
                    >
                      {tab.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Index;
