"use client" ;
import React, { useEffect } from "react";
import Image from "next/image";
import { MdOutlineArrowRight } from "react-icons/md";
import certificateImage1 from "@/app/assests/images/certificate01.jpg";
import certificateImage2 from "@/app/assests/images/certificate02.jpg";
import certificateImage3 from "@/app/assests/images/certificate03.jpg";
import certificateImage4 from "@/app/assests/images/certificate04.jpg";
import { playfair, poppins } from "@/config/fonts";
import AOS from 'aos';
import 'aos/dist/aos.css';

const certificatedata = [
  {
    img: certificateImage1,
  },
  {
    img: certificateImage2,
  },
  {
    img: certificateImage3,
  },
  {
    img: certificateImage4,
  },
];
const OurCertificates = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="pt-44 lg:pb-48 md:pb-28 sm: pb-28 bg-gray-100">
      <div className=" lg:max-w-7xl md:max-w-full sm: max-w-full lg:mx-auto  md:mx-6 sm: mx-4 ">
        <div
          className={` ${poppins.className} grid lg:grid-cols-2 md:grid-cols-1 sm: grid-cols-1 items-center `}
        >
          <section className="lg:text-start md:text-center sm: text-center">
            <h1 data-aos="fade-right" data-aos-duration="2000" className={`${playfair.className} text-4xl mb-2 `}>
              <span className="text-[#CFAF6E]">Property</span> Certificates
            </h1>
            <p data-aos="zoom-in" data-aos-duration="2000" className="uppercase">Smaller male cones </p>
          </section>
          <div className="flex justify-center md:mt-10 sm: mt-10">
          <section className="lg:w-5/4 lg:-ms-40 md:ms-0 grid lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-1 gap-3">
            {certificatedata.map(({ img }, index) => (
              <div key={index}>
                <Image
                data-aos="zoom-in" data-aos-duration="2000"
                  src={img}
                  alt="certificate image"
                  className=" bg-[#CFAF6E]"
                />
              </div>
            ))}
          </section>
        </div>
        </div>
      </div>
    </div>
  );
};

export default OurCertificates;
