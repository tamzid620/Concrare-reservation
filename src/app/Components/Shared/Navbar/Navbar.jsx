"use client";
import React, { useState } from "react";
import './Navbar.css' ;
import Image from "next/image";
import textLogo from "@/app/assests/icons/concrare-main-logo(white).png";
import buildingLogo from "@/app/assests/icons/residential.png";
import phoneLogo from "@/app/assests/icons/phone-digital-communication-tool.png";
import menuLogo from "@/app/assests/icons/menu.png";
import { Playfair_Display, Poppins } from "next/font/google";
import { IoMdArrowDropdown } from "react-icons/io";

const playfair = Playfair_Display({
  weight: ["400", "900"],
  subsets: ["latin"],
  preload: true,
});

const poppins = Poppins({
  weight: ["300", "400","600", "700", "900"],
  subsets: ["latin"],
  preload: true,
});

const Navbar = () => {
  const [viewSidebar, setViewSidebar] = useState(false);
  const [largenavli, setLargenavli] = useState(false);

  const toggleSidebar = () => {
    setViewSidebar(!viewSidebar);
  };
  const togglelargeNavli = () => {
    setLargenavli(!largenavli);
  };

  return (
    <nav className={` ${poppins.className} `}>
      <div className="lg:max-w-7xl md:max-w-3xl sm: max-w-sm mx-auto ">
        {/* large and medium device ------------------------------------------- */}
        <div className="lg:block md:block sm: hidden px-3 py-4">
          <div className="flex justify-between items-center">
            <section>
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
            </section>
            <section className="flex items-center gap-6">
              {/* number section  */}
              <div className={`flex items-center `}>
                <p className="relative ">
                  <span>
                    <span className="relative font-bold text-lg text-white">
                      +380(98)298-59-73
                    </span>
                  </span>{" "}
                  <br />
                  <span className="absolute top-5 right-0 text-sm text-white">
                    hello@concrare.com
                  </span>
                </p>
                <p className="">
                  <Image
                    src={phoneLogo}
                    alt="building logo"
                    className="w-[40px] pt-3"
                  />
                </p>
              </div>
              <p className=" opacity-40 border mt-3 h-10"></p>
              {/* menu icon  */}
              <div>
                <Image
                  onClick={toggleSidebar}
                  src={menuLogo}
                  alt="building logo"
                  className="w-[30px] pt-3"
                />
              </div>
            </section>
          </div>
          <hr  className="my-3 opacity-40"/>
          {/* nav ul  */}
          <div>
<ul className="flex justify-end gap-10 py-2">
    <li>Home</li>
    <li>About</li>
    <li 
    onClick={togglelargeNavli} 
    className="flex items-center gap-1 relative group">
        Project <IoMdArrowDropdown />
        </li>
        {
            largenavli ? 
<div className="absolute top-32 right-[450px]">
<p className="relative bg-gray-900 shadow-[#CFAF6E] shadow-md w-44 py-3 text-center mt-5 leading-10">
<span className="absolute -top-2 right-4 w-4 h-4 bg-gray-900 rotate-45"></span>
   <ul>
    <li>Residential</li>
    <li>Collections</li>
    <li>Commercial</li>
    <li>For Rental</li>
   </ul>
</p>
</div>
: <></>
        }
    <li>Contact</li>
</ul>
          </div>

        </div>
      </div>
      {/*   SideBar */}
      <div className={`fixed top-0 left-0 h-full w-[350px] bg-white shadow-md shadow-[#F26626] transform transition-transform duration-300 ease-in-out ${viewSidebar ? "translate-x-0" : "-translate-x-full"} z-50`}>
       
        {viewSidebar ? (
          <div className=" bg-[#1C1C44] w-[350px] shadow-md shadow-[#CFAF6E] h-screen z-10 transition ease-in duration-700 ">
            
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
