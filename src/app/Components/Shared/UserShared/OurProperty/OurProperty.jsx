'use client' ;
import React, { useEffect } from "react";
import icon1 from "@/app/assests/icons/icon-benefits01.png";
import icon2 from "@/app/assests/icons/icon-benefits02.png";
import icon3 from "@/app/assests/icons/icon-benefits03.png";
import icon4 from "@/app/assests/icons/icon-benefits04.png";
import icon5 from "@/app/assests/icons/icon-benefits05.png";
import { playfair, poppins } from "@/config/fonts";
import Image from "next/image";
import CountUp from "react-countup";
import AOS from 'aos';
import 'aos/dist/aos.css';

const propertyData = [
  {
    icon: icon1,
    title: "Near to Subway",
    number: 28,
    disc: "min",
  },
  {
    icon: icon2,
    title: "Spaces in Bangladesh",
    number: 32,
    disc: "+",
  },
  {
    icon: icon3,
    title: "Spaces in Bangladesh",
    number: 15,
    disc: "%",
  },
  {
    icon: icon4,
    title: "Spaces in Bangladesh",
    number: 3,
    disc: "years",
  },
  {
    icon: icon5,
    title: "Spaces in Bangladesh",
    number: 79,
    disc: "m",
  },
];

const OurProperty = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gray-100 text-black py-32 ">
      <div className="lg:max-w-7xl md:max-w-full sm: max-w-full lg:mx-8 md:mx-6 sm: mx-4">
        <div className={` ${poppins.className} text-center`}>
          <h1 data-aos="fade-up" data-aos-duration="2000" className={`${playfair.className} text-4xl mb-4 `}>
            {" "}
            <span className="text-[#CFAF6E]">Homepark </span>Property
          </h1>
          <h2 data-aos="fade-up" data-aos-duration="2000" className="mb-5 font-semibold text-2xl">
            Decorated Flats in Bangladesh
          </h2>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm: grid-cols-1 gap-20 mt-16">
            {/* icon section 1 */}
            <section>
              <div className="flex justify-center mb-6">
                <Image src={icon1} alt="icon image" className="w-[70px]" />
              </div>
              <h1 className="font-bold mb-2">Near to Subway</h1>
              <p data-aos="fade-up" data-aos-duration="1200">
                <span className="font-bold text-5xl"><CountUp start={0} end={28} delay={1} duration={3.75}/></span>
                <span className="font-bold text-xl">
                  <sub>min</sub>
                </span>
              </p>
            </section>
            {/* icon section 2 */}
            <section >
              <div className="flex justify-center mb-6">
                <Image src={icon2} alt="icon image" className="w-12" />
              </div>
              <h1 className="font-bold mb-2">Spaces in Pozniaky</h1>
              <p data-aos="fade-up" data-aos-duration="1300">
                <span className="font-bold text-5xl"><CountUp start={0} end={32} delay={1} duration={3.75}/></span>
                <span className="font-bold text-4xl">
                  <sub>+</sub>
                </span>
              </p>
            </section>
            {/* icon section 3 */}
            <section >
              <div className="flex justify-center mb-6">
                <Image src={icon3} alt="icon image" className="w-16" />
              </div>
              <h1 className="font-bold mb-2">Spaces in Pozniaky</h1>
              <p data-aos="fade-up" data-aos-duration="1400">
                <span className="font-bold text-5xl"><CountUp start={0} end={15} delay={1} duration={3.75}/></span>
                <span className="font-bold text-3xl">
                  <sub>%</sub>
                </span>
              </p>
            </section>
            {/* icon section 4 */}
            <section >
              <div className="flex justify-center mb-6">
                <Image src={icon4} alt="icon image" className="w-16" />
              </div>
              <h1 className="font-bold mb-2">Spaces in Pozniaky</h1>
              <p data-aos="fade-up" data-aos-duration="1500">
                <span className="font-bold text-5xl"><CountUp start={0} end={3} delay={1} duration={1.75}/></span>
                <span className="font-bold text-xl">
                  <sub>years</sub>
                </span>
              </p>
            </section>
            {/* icon section 5 */}
            <section >
              <div className="flex justify-center mb-6">
                <Image src={icon5} alt="icon image" className="w-16" />
              </div>
              <h1 className="font-bold mb-2">Spaces in Pozniaky</h1>
              <p data-aos="fade-up" data-aos-duration="1600">
                <span className="font-bold text-5xl"><CountUp start={0} end={79} delay={1} duration={3.75}/></span>
                <span className="font-bold text-xl">
                  <sub>
                    m <sup>2</sup>
                  </sub>
                </span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProperty;
