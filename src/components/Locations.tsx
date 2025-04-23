"use client";

import { useState } from "react";
import { locations } from "@/data/location";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Locations() {
  const [selected, setSelected] = useState(0);

  const handleScroll = (dir: "left" | "right") => {
    const container = document.getElementById("location-scroll");
    if (container) {
      container.scrollBy({
        left: dir === "right" ? 300 : -300,
        behavior: "smooth",
      });
    }
  };

  const loc = locations[selected];

  return (
    <section className="w-full px-4 md:px-[110px] py-[100px] md:py-[196px] font-inter">
      <h1 className="capitalize text-[32px] md:text-[56px] leading-[1.2] tracking-tight font-medium pb-10 md:pb-[64px]">
        Our locations
      </h1>

      <div className="relative mb-6">
        <div
          className="flex overflow-x-auto gap-3 no-scrollbar scroll-smooth"
          id="location-scroll"
        >
          {locations.map((location, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition ${
                selected === i
                  ? "bg-white text-black border border-[#EBEBEC]"
                  : "bg-[#EBEBEC] text-black"
              }`}
            >
              {location.name}
            </button>
          ))}
        </div>

        {/* Arrows (hidden on small screens) */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 gap-2 hidden sm:flex">
          <button
            onClick={() => handleScroll("left")}
            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
            title="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
            title="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Map + Info Block */}
      <div className="bg-[#EBEBEC] p-6 rounded-2xl flex flex-col lg:flex-row gap-6">
        <iframe
          title="Map"
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            loc.mapQuery
          )}&output=embed`}
          className="w-full lg:w-[397px] h-[280px] md:h-[353px] rounded-[14px] border-0"
        />

        <div className="flex-1 flex flex-col gap-8 md:gap-[98px]">
          {/* Location Name & City */}
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">{loc.name}</h3>
              <p className="text-lg text-gray-700">{loc.city}</p>
            </div>

            <div className="flex justify-start md:justify-end">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  loc.mapQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#D6D6D6] px-4 py-2 rounded-lg hover:bg-gray-200 transition text-sm flex items-center gap-1"
              >
                Get Directions <ChevronRight size={16} />
              </a>
            </div>
          </div>

          {/* Address and Contacts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t pt-4 text-sm text-gray-800">
            <div>
              <p className="font-medium mb-1">Address</p>
              <p>{loc.address}</p>
            </div>
            <div>
              <p className="font-medium mb-1">Contacts</p>
              <p>{loc.phone}</p>
              <p>{loc.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
