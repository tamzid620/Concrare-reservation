"use client" ;
import { playfair, poppins } from '@/config/fonts';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurVIsion = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    return (
        <div  className="relative w-full py-36 flex justify-center items-center ">
            <div className='absolute bg-black opacity-60 inset-0 '/>
           <div className="relative lg:max-w-7xl md:max-w-full sm: max-w-full lg:mx-8  md:mx-6 sm: mx-4 text-center text-white">
                <h1 data-aos="zoom-in" data-aos-duration="2000"
                 className={`${playfair.className} text-6xl leading-[70px]`}>
               <p> A Vision For</p> 
                <p>Luxury Living </p> 
                </h1>
                <p data-aos="zoom-in" data-aos-duration="2000" className={` ${poppins.className} mt-5`}>
                Founded in 1996, Concrare Properties has become a pioneer in residential, commercial and shopping mall development, as well as, land subdivision development. With its
                headquarters now located in Dhaka, Sanmar has grown rapidly in stature due to its pioneering, innovative and sustainable approach to real estate development.
                </p>
            </div>
        </div>
    );
};

export default OurVIsion;