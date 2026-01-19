"use client" ;
import React, { useEffect } from "react";
import Image from "next/image";
import { MdOutlineArrowRight } from "react-icons/md";
import appartmentImage1 from "@/app/assests/images/gallery-thumb01.jpg";
import appartmentImage2 from "@/app/assests/images/gallery-thumb02.jpg";
import appartmentImage3 from "@/app/assests/images/gallery-thumb03.jpg";
import { playfair, poppins } from "@/config/fonts";
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurGallery = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="pt-44 pb-28 bg-white text-black ">
      <div className="lg:max-w-7xl md:max-w-full sm: max-w-full lg:mx-auto md:mx-6 sm: mx-4">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 items-center gap-10">
          <section className={` ${poppins.className} `}>
            <div data-aos="zoom-in" data-aos-duration="2000">
            <h1 className={`${playfair.className} text-4xl mb-4 `}>
              {" "}
              <span className="text-[#CFAF6E]">Property</span> Inner Gallery
            </h1>
            <h2 className="mb-5 font-semibold text-2xl">
              Lux Living Spaces in <br /> Bangladesh - Kiev
            </h2>
            <div className="group">
              <p className="mt-7 font-bold flex items-center group-hover:text-[#CFAF6E]">
                See All Gallery
                <MdOutlineArrowRight size={20} className="ms-2" />
              </p>
              <br />
              <p className="border border-black group-hover:border-[#CFAF6E] -mt-4 w-20 group-hover:w-36 transition-all duration-300 ease-in-out ">
              </p>
            </div>
            </div>
          </section>
          <section data-aos="zoom-in" data-aos-duration="2000"
           className="grid md:grid-cols-3 sm: grid-cols-1 gap-5 lg:mt-0 md:mt-24">
          
            <Image src={appartmentImage1} 
            alt="appartment photo "
            className="lg:w-44"
            />
            <Image src={appartmentImage2} 
            alt="appartment photo "
            className="lg:w-44 md:-mt-20"
            />
            <Image src={appartmentImage3} 
            alt="appartment photo "
            className="lg:w-44 md:-mt-6"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
