import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

type GalleryProps = {
  images: string[];
  styles?: string;
};

type AnimationProps = {
  scale?: number;
  scaleX?: number;
  scaleY?: number;
};

type ReturnGetScaleAndOpigin = {
  origin: string;
  animation: AnimationProps;
};

function Gallery({ images, styles = "" }: GalleryProps) {
  const totalItems = images?.length;

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [columns, setColumns] = useState<number>(2);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const isMobile = () => {
    if (typeof window === "undefined") return false; // For server-side rendering safety
    return window.matchMedia("(pointer: coarse)").matches;
  };

  // gives origins of the images that are affected by the hovered one
  const getAffectedOrigins = (i: number) => {
    if (hoveredIndex == null || !totalItems) return "";

    const row = Math.ceil(totalItems / columns);
    const lastRowFirstIndex = (row - 1) * columns;
    const hoverIndexRow = Math.floor(hoveredIndex / columns);
    const columnPosition = hoveredIndex % columns;

    // ------------------------------ corners ------------------------------

    // top left
    if (hoveredIndex == 0) {
      if (hoveredIndex + columns == i) return "origin-bottom-left";
      if (hoveredIndex + 1 == i) return "origin-top-right";
      if (hoveredIndex + columns + 1 == i) return "origin-bottom-right";
    }

    // top right
    if (hoveredIndex == columns - 1) {
      if (hoveredIndex + columns == i) return "origin-bottom-right";
      if (hoveredIndex - 1 == i) return "origin-top-left";
      if (hoveredIndex + columns - 1 == i) return "origin-bottom-left";
    }

    // bottom left
    if (hoveredIndex == (Math.ceil(totalItems / columns) - 1) * columns) {
      if (hoveredIndex - columns == i) return "origin-top-left";
      if (hoveredIndex + 1 == i) return "origin-bottom-right";
      if (hoveredIndex - columns + 1 == i) return "origin-top-right";
    }

    // bottom right
    if (hoveredIndex == totalItems - 1) {
      if (hoveredIndex - columns == i) return "origin-top-right";
      if (hoveredIndex - 1 == i) return "origin-bottom-left";
      if (hoveredIndex - columns - 1 == i) return "origin-top-left";
    }

    // ------------------------------ Sides ------------------------------

    if (row > 2 && hoverIndexRow != 0 && hoverIndexRow != row - 1) {
      // right side
      if (hoverIndexRow * columns == hoveredIndex) {
        if (hoveredIndex - columns == i) return "origin-top";
        if (hoveredIndex - columns + 1 == i) return "origin-top";

        if (hoveredIndex + columns == i) return "origin-bottom";
        if (hoveredIndex + columns + 1 == i) return "origin-bottom";

        if (hoveredIndex + 1 == i) return "origin-right";
      } else if (hoverIndexRow * columns + (columns - 1) == hoveredIndex) {
        // left side
        if (hoveredIndex - columns == i) return "origin-top";
        if (hoveredIndex - columns - 1 == i) return "origin-top";

        if (hoveredIndex + columns == i) return "origin-bottom";
        if (hoveredIndex + columns - 1 == i) return "origin-bottom";

        if (hoveredIndex - 1 == i) return "origin-left";
      }
    }

    // ------------------------------ Sides ------------------------------

    if (columnPosition != 0 && columnPosition != columns - 1) {
      // for last row center ones
      if (hoveredIndex > lastRowFirstIndex) {
        if (hoveredIndex - 1 == i || hoveredIndex - columns - 1 == i)
          return "origin-left";
        if (hoveredIndex + 1 == i || hoveredIndex - columns + 1 == i)
          return "origin-right";

        if (hoveredIndex - columns == i) return "origin-top";
      }

      // for other center ones
      if (hoveredIndex - 1 == i || hoveredIndex + columns - 1 == i)
        return "origin-left";
      if (hoveredIndex + 1 == i || hoveredIndex + columns + 1 == i)
        return "origin-right";
      if (hoveredIndex + columns == i) return "origin-bottom";
    }

    return "";
  };

  const getOrigin = (i: number): string => {
    if (getAffectedOrigins(i)) {
      return getAffectedOrigins(i);
    }

    const row = Math.ceil(totalItems / columns);
    const lastRowItem = (row - 1) * columns;
    const indexRow = Math.floor(i / columns);
    const indexRowFirstElem = indexRow * columns;

    // corners
    if (i == 0) return "origin-top-left";
    if (i == columns - 1) return "origin-top-right";
    if (i == lastRowItem) return "origin-bottom-left";
    if (i == totalItems - 1) return "origin-bottom-right";

    // sides
    if (row > 2 && indexRow != 0 && indexRow != row - 1) {
      if (indexRowFirstElem == i) {
        return "origin-left";
      } else if (indexRowFirstElem + (columns - 1) == i) {
        return "origin-right";
      }
    }

    // bottom middle parts
    if (i > lastRowItem) return "origin-bottom";

    return "origin-top";
  };

  // give scale and origin to each image
  const getScaleAndOrigin = (i: number): ReturnGetScaleAndOpigin => {
    if (hoveredIndex != null && isHovered && getAffectedOrigins(i)) {
      const row = Math.ceil(totalItems / columns);
      const hoverIndexRow = Math.floor(hoveredIndex / columns);
      const columnPosition = hoveredIndex % columns;

      if (row > 2 && hoverIndexRow != 0 && hoverIndexRow != row - 1) {
        // right side
        if (hoverIndexRow * columns == hoveredIndex) {
          if (hoveredIndex + 1 != i)
            return {
              origin: getAffectedOrigins(i),
              animation: { scaleY: 0.5 },
            };
        } else if (hoverIndexRow * columns + (columns - 1) == hoveredIndex) {
          // left side
          if (hoveredIndex - 1 != i)
            return {
              origin: getAffectedOrigins(i),
              animation: { scaleY: 0.5 },
            };
        }
      }

      // center ones
      if (columnPosition != 0 && columnPosition != columns - 1) {
        if (hoveredIndex + columns != i && hoveredIndex - columns != i)
          return { origin: getAffectedOrigins(i), animation: { scaleX: 0.5 } };
      }

      return { origin: getAffectedOrigins(i), animation: { scale: 0 } };
    }

    return { origin: getOrigin(i), animation: { scale: 1 } };
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    // Run once when the component mounts
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`w-full h-fit grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 overflow-hidden relative px-7 sm:px-18 lg:px-24 ${styles}`}
    >
      {images.map((elem, i) => {
        const { origin, animation } = getScaleAndOrigin(i);
        return (
          <motion.div
            key={i}
            whileHover={{
              scale: 2,
            }}
            onHoverStart={() => {
              if (!isMobile()) {
                setIsHovered(true);
                setHoveredIndex(i);
              }
            }}
            onHoverEnd={() => {
              if (!isMobile()) {
                setIsHovered(false);
                setTimeout(() => {
                  if (isHovered) return;
                  setHoveredIndex(null);
                }, 400);
              }
            }}
            onTap={() => {
              if (isMobile()) {
                if (hoveredIndex == null) {
                  setIsHovered(true);
                  setHoveredIndex(i);
                } else {
                  setIsHovered(false);
                  setTimeout(() => {
                    if (isHovered) return;
                    setHoveredIndex(null);
                  }, 400);
                }
              }
            }}
            animate={
              isMobile() && isHovered && hoveredIndex === i
                ? { scale: 2 }
                : animation
            }
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className={`relative aspect-square w-full min-w-[80px] ${origin}`}
          >
            <Image
              src={elem}
              alt="gallery_image"
              fill
              className="rounded-[0.5rem] md:rounded-[0.8rem] object-cover"
            />
          </motion.div>
        );
      })}
    </div>
  );
}

export default Gallery;
