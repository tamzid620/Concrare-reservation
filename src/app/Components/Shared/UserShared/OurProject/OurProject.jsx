import React from "react";
import sidePattern from "@/app/assests/images/side-pattern-bg.png";
import sidePattern1 from "@/app/assests/images/side-pattern-bg-short.png";
import sideImage from "@/app/assests/images/side-image01.jpg";
import m2Icon from "@/app/assests/icons/icon-m2.png";
import Image from "next/image";
import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display ({
   weight: [ "400", "900"],
    subsets: ["latin"],
     preload: true, 
});

const poppins = Poppins({
   weight: ["300", "400", "700", "900"], 
   subsets: ["latin"],
    preload: true, 
});


const OurProject = () => {
  return (
    <div className="bg-[#cfaf6e1e] pt-32 pb-20 ">
        <div className="lg:max-w-7xl md:max-w-full sm: max-w-full lg:mx-auto  md:mx-6 sm: mx-4">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 items-center gap-10">
        <section className="relative">
          <Image
            src={sidePattern1}
            alt="side pattern background"
            className="bg-[#CFAF6E] relative "
          />
          <Image
            src={sideImage}
            alt="side image"
            className="absolute lg:-top-20 md:top-0 sm: top-0 lg:left-20 shadow-2xl"
          />
        </section>
        <section className={`${playfair.className} ${poppins.className}`}>
            <h1 className={`${playfair.className} text-4xl mb-4 `}> <span className="text-[#CFAF6E]">Concrare</span> Construction LLC</h1>
            <h2 className="mb-5 font-semibold text-2xl">Living spaces for creative peoples</h2>
            <p>The smaller male cones release pollen, <br /> which fertilizes the female</p>
            <p className="flex items-center gap-4 mt-7">
                <span><Image src={m2Icon} alt="m2 icon" className=""/></span>
                <span className="font-bold hover:text-[#CFAF6E]">See our projects</span>
            </p>
        </section>
      </div>
        </div>
    </div>
  );
};

export default OurProject;
