import React from "react";
import Image from "next/image";
import textLogo from "@/app/assests/icons/concrare-main-logo(white).png";
import buildingLogo from "@/app/assests/icons/residential.png";
import { playfair, poppins } from "@/config/fonts";
import Link from "next/link";
import socialmedia1 from "@/app/assests/icons/facebook.png";
import socialmedia2 from "@/app/assests/icons/instagram.png";
import socialmedia3 from "@/app/assests/icons/linkedin.png";
import icon1 from "@/app/assests/icons/footer-icon01.png";
import icon2 from "@/app/assests/icons/footer-icon02.png";
import icon3 from "@/app/assests/icons/footer-icon03.png";
const Footer = () => {

  const navul1 = [
    {
      path: "/",
      title: "Homepark",
    },
    {
      path: "/",
      title: "Apartments",
    },
    {
      path: "/",
      title: "Facilities",
    },
    {
      path: "/",
      title: "News",
    },
    {
      path: "/",
      title: "Contact",
    },
  ];

  const navul2 = [
    {
      path: "/",
      title: "Suits",
    },
    {
      path: "/",
      title: "Apartments",
    },
    {
      path: "/",
      title: "Villas & Houses",
    },
    {
      path: "/",
      title: "Butique Room",
    },
    {
      path: "/",
      title: "Buildings",
    },
  ];

  const basicData = [
    {
      icon: icon1,
      title: "Address Infos",
      location: "Dhaka | G. Banani Avenue, 6",
      address: "Vilnius | Antakalnio St. 17",
    },
    {
      icon: icon2,
      title: "Working Hours",
      location: "Sunday to Thrusday 09:00 to 18:30",
      address: "Saturday we work until 15:30",
    },
    {
      icon: icon3,
      title: "Sales Office",
      location: "South Khulshi 124 B Block Chattogram",
      address: "Alif Plaza - Chattogram",
    },
  ];

  return (
    <div className="relative bg-gray-900 text-white pt-36 pb-24 ">
      <div
        className={` ${poppins.className} py-10 px-6 lg:max-w-7xl md:max-w-full sm:max-w-full lg:mx-auto md:mx-6 sm: mx-4 `}
      >
        {/* <<<<<<<<<<<<<<<<<<<<<<<<< NAVUL MAIN PART >>>>>>>>>>>>>>>>>>>>>>>> */}
        <main className="relative grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 justify-center gap-10">
          {/* section -1  */}
          <section>
            {/* main icon section  */}
            <div
              className={`${playfair.className} mb-4 flex items-center gap-1`}
            >
              <p className="">
                <Image
                  src={buildingLogo}
                  alt="building logo"
                  className="w-[50px]"
                />
              </p>
              <p className="relative ">
                <span>
                  <Image
                    src={textLogo}
                    alt="building logo"
                    className="relative w-[120px]"
                  />
                </span>
                <span className="absolute text-sm top-7 ms-2 ">
                  Creative Houses
                </span>
              </p>
            </div>
            <p>
              By aiming to take the life quality to an upper level with the
              whole realized Projects, Homepark continues to be the address of
              luxury.
            </p>
          </section>
          {/* section -2  */}
          <section>
            <div className="flex justify-between">
              <ul>
                {navul1.map(({ path, title }, index) => (
                  <Link href={path} key={index}>
                    <li className=" text-center text-4xl leading-9">
                      {title}
                    </li>
                  </Link>
                ))}
              </ul>
              <ul>
                {navul2.map(({ path, title }, index) => (
                  <Link href={path} key={index}>
                    <li className=" text-center text-4xl leading-9">
                      {title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </section>
          {/* section -3  */}
          <section>
            <div className="lg:text-end">
              <h1 className={`${playfair.className} uppercase text-2xl mb-3`}>
                Call Center
              </h1>

              <p>
                <span className=" font-bold text-xl ">
                  +380(98)298-59-73
                </span>{" "}
                <br />
                <span className=" text-sm ">hello@concrare.com</span>
              </p>
              <div className="flex lg:justify-end gap-2 mt-4">
                <span className="p-2 bg-gray-700 hover:bg-gray-900">
                  <Image
                    className="w-4 "
                    src={socialmedia1}
                    alt="social media logo"
                  />
                </span>{" "}
                <br />
                <span className="p-2 bg-gray-700 hover:bg-gray-900">
                  <Image
                    className="w-4"
                    src={socialmedia2}
                    alt="social media logo"
                  />
                </span>{" "}
                <br />
                <span className="p-2 bg-gray-700 hover:bg-gray-900">
                  <Image
                    className="w-4"
                    src={socialmedia3}
                    alt="social media logo"
                  />
                </span>
              </div>
            </div>
          </section>
        </main>
                {/* <<<<<<<<<<<<<<<<<<<<<<<<< LOGO MAIN PART >>>>>>>>>>>>>>>>>>>>>>>> */}
        <main className="absolute lg:-top-28 lg:block md:hidden sm: hidden">
          <div
            className={` ${poppins.className} bg-[#CFAF6E] py-12 px-6 lg:w-[1210px] md:max-w-full sm:max-w-full lg:mx-auto md:mx-6 sm: mx-4 `}
          >
            <div className="grid justify-center lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-10">
              {basicData.map(({ icon, title, location, address }, index) => (
                <div key={index} className="flex items-center gap-5 ">
                  <div>
                    <Image src={icon} alt="icon" className="w-24" />
                  </div>
                  <div>
                    <h1 className={`${playfair.className} text-2xl  mb-3 `}>
                      {title}
                    </h1>
                    <h2 className="text-sm font-semibold">{location}</h2>
                    <h3 className="text-sm font-semibold">{address}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Footer;
