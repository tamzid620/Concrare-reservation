"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ImagesSlider } from "@/components/ui/images-slider";

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
    <div>
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
          className="z-50 flex flex-col justify-center items-center text-white uppercase"
        >
          <motion.h1 className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 mt-64">
            {slides[index].title}
          </motion.h1>
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            {slides[index].subtitle}
          </motion.p>
        </motion.div>
      </ImagesSlider>
    </div>
  );
};

export default Banner;
