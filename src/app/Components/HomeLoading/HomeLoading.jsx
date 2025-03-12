import React from 'react';
import textLogo from "@/app/assests/icons/concrare-main-logo(white).png";
import buildingLogo from "@/app/assests/icons/residential.png";
import { playfair } from '@/config/fonts';
import Image from 'next/image';

const HomeLoading = () => {


    return (
        <div className='w-full h-screen bg-[#CFAF6E] text-white flex justify-center items-center'>
             {/* main icon section  */}
                          <div className={`${playfair.className} flex items-center gap-1`}>
                            <p className="">
                              <Image
                                src={buildingLogo}
                                alt="building logo"
                                className="w-[60px]"
                              />
                            </p>
                            <p className="relative ">
                              <span>
                                <Image
                                  src={textLogo}
                                  alt="building logo"
                                  className="relative w-[150px]"
                                />
                              </span>
                              <span className="absolute top-8 ms-2 text-white">
                                Creative Houses
                              </span>
                            </p>
                          </div>
        </div>
    );
};

export default HomeLoading;