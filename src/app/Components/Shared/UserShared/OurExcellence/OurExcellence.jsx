"use client";
import React from "react";
import "./OurExcellence.css";
import Image from "next/image";
import sliderImage1 from "@/app/assests/images/slider-appartment-1.jpg";
import sliderImage2 from "@/app/assests/images/slider-appartment-2.jpg";
import sliderImage3 from "@/app/assests/images/slider-appartment-3.jpg";
import sliderImage4 from "@/app/assests/images/slider-appartment-4.png";
import sliderImage5 from "@/app/assests/images/slider-appartment-5.png";
import { playfair, poppins } from "@/config/fonts";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: "Grande By Concrare",
    type: "Residential",
    location: "Chattogram",
    image: sliderImage1,
  },
  {
    title: "Concrare Orchard Garden",
    type: "Residential",
    location: "Chattogram",
    image: sliderImage2,
  },
  {
    title: "Concrare Rahim Center",
    type: "Commercial",
    location: "Chattogram",
    image: sliderImage3,
  },
  {
    title: "Grande By Concrare",
    type: "Residential",
    location: "Chattogram",
    image: sliderImage4,
  },
  {
    title: "Concrare Orchard Garden",
    type: "Residential",
    location: "Chattogram",
    image: sliderImage5,
  },
];

const OurExcellence = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      sliderRef.current.slickNext();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-36 bg-gray-100  text-black ">
      <div
        className={` ${poppins.className} lg:max-w-7xl md:max-w-full sm:max-w-full lg:mx-auto md:mx-6 sm: mx-4 `}
      >
        <h1 data-aos="zoom-in" data-aos-duration="2000"
         className={`${playfair.className} text-4xl mb-4 `}>
          {" "}
          <span className="text-[#CFAF6E] ">Property</span> Excellence
        </h1>
        <h2 data-aos="zoom-in" data-aos-duration="2000" className=" font-semibold text-2xl mb-8">Our Touch of Homepark</h2>
        <Slider ref={sliderRef} {...settings}>
          {projects.map((project) => (
            <div
              key={project.id}
              data-aos="zoom-in" data-aos-duration="2000"
              className=" text-black text-center py-1 px-1 "
            >
              <div className="flex justify-center">
                <Image
                  className="w-full h-[500px] bg-[#CFAF6E]"
                  src={project.image}
                  alt="best appartments in Bangladesh "
                />
              </div>
              <div>
                <h1
                  className={`${playfair.className} font-semibold mt-3 text-2xl`}
                >
                  {project.title}
                </h1>
                <p className=" mt-3  text-[#CFAF6E] ">
                  <span>{project.type}</span>
                  <span className="ms-3">• {project.location}</span>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurExcellence;
