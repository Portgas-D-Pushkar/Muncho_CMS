import React from "react";
import Hero from "@/components/Hero";
import Dishes from "@/components/Dishes";
import Gallery from "@/components/Gallery";

function page() {
  return (
    <>
      <Hero />
      <Gallery/>
      <Dishes />
    </>
  );
}

export default page;
