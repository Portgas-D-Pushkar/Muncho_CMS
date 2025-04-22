import React from "react";
import Image from "next/image";

function Gallery({ images, styles = "" }) {
  return (
    <div
      className={`w-full h-fit grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 overflow-hidden relative px-7 sm:px-18 lg:px-24 ${styles}`}
    >
      {images.length > 0 &&
        images.map((elem, i) => (
          <div key={i} className="relative aspect-square w-full min-w-[80px]">
            <Image
              src={elem}
              alt="gallery_image"
              fill
              className="rounded-[0.5rem] md:rounded-[0.8rem] object-cover"
            />
          </div>
        ))}
    </div>
  );
}

export default Gallery;
