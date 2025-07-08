"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { playfair, poppins } from "@/config/fonts";


const slides = [
  {
    image: "https://i.ibb.co.com/4gKbn2yT/slider-image3.jpg",
    title: "The Crest of",
    subtitle: "Luxury Living",
  },
  {
    image: "https://i.ibb.co.com/5gsV86tK/slider-image1.jpg",
    title: "Designs Narrating",
    subtitle: "Timeless Stories",
  },
  {
    image: "https://i.ibb.co.com/TqvgXR4d/slider-image2.jpg",
    title: "You imagine",
    subtitle: "We Create",
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const duration = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 -mt-[160px]">
      <ImagesSlider
        className="h-screen w-full"
        images={slides.map((s) => s.image)}
      >
        <motion.div
          key={index}
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.6 }}
          className={` ${poppins.className} z-50 flex flex-col justify-center items-center text-white uppercase`}
        >
          <motion.h1 className="font-bold  md:text-6xl sm: text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600 py-4 mt-64">
            {slides[index].title}
          </motion.h1>
          <motion.p className="font-bold md:text-6xl sm: text-4xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-50 py-4 -mt-7">
            {slides[index].subtitle}
          </motion.p>
        </motion.div>
      </ImagesSlider>
    </div>
  );
};

export default Banner;
