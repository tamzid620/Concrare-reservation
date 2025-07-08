"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import Image from "next/image";
import textLogo from "@/app/assests/icons/concrare-main-logo(white).png";
import buildingLogo from "@/app/assests/icons/residential.png";
import phoneLogo from "@/app/assests/icons/phone-digital-communication-tool.png";
import menuLogo from "@/app/assests/icons/menu.png";
import appartmentImage1 from "@/app/assests/images/gallery-thumb01.jpg";
import appartmentImage2 from "@/app/assests/images/gallery-thumb02.jpg";
import appartmentImage3 from "@/app/assests/images/gallery-thumb03.jpg";
import socialmedia1 from "@/app/assests/icons/facebook.png";
import socialmedia2 from "@/app/assests/icons/instagram.png";
import socialmedia3 from "@/app/assests/icons/linkedin.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { playfair, poppins } from "@/config/fonts";
import Link from "next/link";

const Navbar = () => {
  const sidebarRef = useRef(null);
  const [viewSidebar, setViewSidebar] = useState(false);
  const [largenavli, setLargenavli] = useState(false);
  const [smallnavli, setSmallnavli] = useState(false);

  const toggleSidebar = () => {
    setViewSidebar(!viewSidebar);
  };
  const toggleLargeNavli = () => {
    setLargenavli(!largenavli);
  };
  const toggleSmallNavli = () => {
    setSmallnavli(!smallnavli);
  };

  // Close sidebar effect -----------------------
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setViewSidebar(false);
      }
    };

    if (viewSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [viewSidebar]);

  return (
    <nav className={` ${poppins.className} relative  z-10 text-white`}>
      <div className=" lg:max-w-7xl md:max-w-full sm: max-w-full mx-auto ">
        {/* large and medium device ------------------------------------------- */}
        <div className=" md:block sm: hidden px-3 py-4">
          <div className="flex justify-between items-center">
            <section>
              {/* main icon section  */}
              <Link href="/">
                <div
                  className={`${playfair.className} flex items-center gap-1`}
                >
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
              </Link>
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
                  className="w-[30px] pt-3 shadow-[#CFAF6E] hover:shadow-lg"
                />
              </div>
            </section>
          </div>
          <hr className="my-3 opacity-40" />
          {/* nav ul  */}
          <div>
            <ul className="flex justify-end gap-10 py-2">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/about">
                <li>About</li>
              </Link>
              <li
                onClick={toggleLargeNavli}
                className="flex items-center gap-1 relative group"
              >
                Project <IoMdArrowDropdown />
              </li>
              {largenavli ? (
                <div className="absolute top-32 ">
                  <p className="relative bg-gray-900 shadow-[#CFAF6E] shadow-md w-44 py-3 text-center mt-5 leading-10">
                    <span className="absolute -top-2 left-4 w-4 h-4 bg-gray-900 rotate-45"></span>
                    <ul>
                      <li>Residential</li>
                      <li>Collections</li>
                      <li>Commercial</li>
                      <li>For Rental</li>
                    </ul>
                  </p>
                </div>
              ) : (
                <></>
              )}
              <Link href="contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        {/* SMALL DEVICE   */}
        <div className="md:hidden sm: block px-3 py-3">
          <div className="flex justify-between items-center">
            {/* main icon section  */}
            <Link href="/">
              <div className={`${playfair.className} flex items-center gap-0`}>
                <p className="">
                  <Image
                    src={buildingLogo}
                    alt="building logo"
                    className="w-[50px]"
                  />
                </p>
                <p className="relative">
                  <span>
                    <Image
                      src={textLogo}
                      alt="building logo"
                      className="relative w-[100px]"
                    />
                  </span>
                  <span className="absolute top-5 ms-2 text-xs text-white">
                    Creative Houses
                  </span>
                </p>
              </div>
            </Link>
            {/* menu button  */}
            {/* menu icon  */}
            <div>
              <Image
                onClick={toggleSidebar}
                src={menuLogo}
                alt="building logo"
                className="w-[30px] pt-3 shadow-[#CFAF6E] hover:shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* SideBar-------------------------------------------- */}
      <aside
        ref={sidebarRef}
        className={` fixed top-0 left-0 h-full bg-gray-900 w-[350px] shadow-md shadow-[#CFAF6E] transform transition-transform duration-300 ease-in-out ${
          viewSidebar ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        {viewSidebar ? (
          <div className="  w-[350px] shadow-md h-screen z-10 transition ease-in duration-700 flex px-6 items-center">
            {/* large and medium device sidebar  */}
            <div className="md:block sm: hidden">
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
              <p className="my-5 text-sm">
                By aiming to take the life quality to an upper level with the
                whole realized Projects, Homepark continues to be the address of
                luxury.
              </p>
              <div className="flex justify-between">
                <Image
                  className="w-24"
                  src={appartmentImage1}
                  alt="building thumbnails"
                />
                <Image
                  className="w-24"
                  src={appartmentImage2}
                  alt="building thumbnails"
                />
                <Image
                  className="w-24"
                  src={appartmentImage3}
                  alt="building thumbnails"
                />
              </div>
              <p className="my-5 text-sm">
                Kyiv | G. Stalingrada Avenue, 6 Vilnius | Antakalnio St. 17
              </p>
              <p>
                <span className=" font-bold text-lg text-white">
                  +380(98)298-59-73
                </span>{" "}
                <br />
                <span className=" text-sm text-white">hello@concrare.com</span>
              </p>
              <div className="flex  gap-2 my-8">
                <span className="p-2 bg-gray-700 hover:bg-[#CFAF6E]">
                  <Image
                    className="w-4 "
                    src={socialmedia1}
                    alt="social media logo"
                  />
                </span>{" "}
                <br />
                <span className="p-2 bg-gray-700 hover:bg-[#CFAF6E]">
                  <Image
                    className="w-4"
                    src={socialmedia2}
                    alt="social media logo"
                  />
                </span>{" "}
                <br />
                <span className="p-2 bg-gray-700 hover:bg-[#CFAF6E]">
                  <Image
                    className="w-4"
                    src={socialmedia3}
                    alt="social media logo"
                  />
                </span>
              </div>
              <p className="text-xs">
                © 2019 Concrare | Real Estate & Luxury Homes
              </p>
            </div>
            {/* small device sidebar  */}
            <div>
              {/* nav ul  */}
              <div className="md:hidden sm: block">
                <ul className="leading-[50px] py-2 sidebar-ul">
                  <Link href="/">
                    <li>Home</li>
                  </Link>
                  <Link href="/about">
                    <li>About</li>
                  </Link>
                  <li
                    onClick={toggleSmallNavli}
                    className="flex items-center gap-1 relative group"
                  >
                    Project <IoMdArrowDropdown />
                  </li>
                  {smallnavli ? (
                    <div className="bg-gray-900 shadow-[#CFAF6E] shadow-md w-44 py-3 text-center leading-10">
                      <ul>
                        <li>Residential</li>
                        <li>Collections</li>
                        <li>Commercial</li>
                        <li>For Rental</li>
                      </ul>
                    </div>
                  ) : (
                    <></>
                  )}
                  <Link href="contact">
                    <li>Contact</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </aside>
    </nav>
  );
};

export default Navbar;
