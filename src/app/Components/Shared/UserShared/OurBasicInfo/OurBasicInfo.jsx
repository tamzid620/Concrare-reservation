import React from "react";
import Image from "next/image";
import { playfair, poppins } from "@/config/fonts";
import icon1 from '@/app/assests/icons/footer-icon01.png' ;
import icon2 from '@/app/assests/icons/footer-icon02.png' ;
import icon3 from '@/app/assests/icons/footer-icon03.png' ;

const basicData = [
    {
        icon: icon1 , 
        title: "Address Infos",
        location: "Dhaka | G. Banani Avenue, 6",
        address: "Vilnius | Antakalnio St. 17",
    },
    {
        icon: icon2 ,  
        title: "Working Hours",
        location: "Sunday to Thrusday 09:00 to 18:30",
        address: "Saturday we work until 15:30",
    },
    {
        icon: icon3 ,  
        title: "Sales Office",
        location: "South Khulshi 124 B Block Chattogram",
        address: "Alif Plaza - Chattogram",
    },
]

const OurBasicInfo = () => {



  return (
    <div className="bg-white pb-16 lg:hidden md:block sm: block">
      <div
        className={` ${poppins.className} bg-[#CFAF6E] py-12 px-6 lg:max-w-7xl md:max-w-full sm:max-w-full lg:mx-auto md:mx-6 sm: mx-4 `}
      >
        <div className="grid justify-center lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-10">
            {
              basicData.map(({icon, title, location, address}, index) => (
                <div key={index} className="flex items-center gap-5 text-white">
                    <div>
                        <Image src={icon} alt="icon" className="w-24"/>
                    </div>
                    <div>
                        <h1 className={`${playfair.className} text-2xl  mb-3 `}>{title}</h1>
                        <h2 className="text-sm font-semibold">{location}</h2>
                        <h3  className="text-sm font-semibold">{address}</h3>
                    </div>
                </div>
              ))  
            }
        </div>
      </div>
    </div>
  );
};

export default OurBasicInfo;
