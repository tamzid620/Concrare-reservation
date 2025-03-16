import React from "react";
import Image from "next/image";
import textLogo from "@/app/assests/icons/concrare-main-logo(white).png";
import buildingLogo from "@/app/assests/icons/residential.png";
import { playfair, poppins } from "@/config/fonts";
import { Link } from "lucide-react";

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

  return (
    <div className="bg-gray-900 py-24 ">
      <div
        className={` ${poppins.className} text-white py-10 px-6 lg:max-w-7xl md:max-w-full sm:max-w-full lg:mx-auto md:mx-6 sm: mx-4 `}
      >
        <section>
          {/* main icon section  */}
          <div className={`${playfair.className} mb-4 flex items-center gap-1`}>
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
              <span className="absolute text-sm top-7 ms-2 text-white">
                Creative Houses
              </span>
            </p>
          </div>
          <p>
            By aiming to take the life quality to an upper level with the whole
            realized Projects, Homepark continues to be the address of luxury.
          </p>
        </section>
        <section>
          <ul>
            {navul1.map(({ path, title }, index) => (
                <li  key={index} className="text-white text-4xl">
              <Link href={path}>
                    {title}
              </Link>
                    </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Footer;
