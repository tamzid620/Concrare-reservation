"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "./OurClients.css";
import { playfair, poppins } from "@/config/fonts";

const OurClients = () => {
  const slideRowRef = useRef(null);
  const mainRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateSlide = () => {
      if (!slideRowRef.current || !mainRef.current) return;

      const mainWidth = mainRef.current.offsetWidth;
      slideRowRef.current.style.transform = `translateX(${
        -currentIndex * mainWidth
      }px)`;
    };

    updateSlide(); // Run once on mount
    window.addEventListener("resize", updateSlide);
    return () => window.removeEventListener("resize", updateSlide);
  }, [currentIndex]);

  return (
    <div className="py-36 bg-white">
            <h1 className={`${playfair.className} text-center text-4xl mb-20 `}>
              {" "}
              <span className="text-[#CFAF6E] ">Our </span> Client
            </h1>
      <div
        className={` ${poppins.className} lg:max-w-7xl md:max-w-full sm:max-w-full lg:mx-auto md:mx-6 sm: mx-4 `}
      >
        <div className="sectionbody lg:mx-0 md:mx-10">
          <main className="main" ref={mainRef}>

            <div className="slider">
              <div className="slide-row" id="slide-row" ref={slideRowRef}>
                {[
                  {
                    name: "Zen",
                    role: "Author",
                    text: "Zen Doan is a business analyst, entrepreneur, and media proprietor. She is also known as the best-selling book author.",
                    img: "https://user-images.githubusercontent.com/13468728/234031693-6bbaba7d-632c-4d7d-965f-75a76a549ce2.jpg",
                  },
                  {
                    name: "Jonathan",
                    role: "Treymont Inc.",
                    text: "Jonathan Koletic is an American internet entrepreneur and media proprietor. He is the founder of the multi-national technology company Treymont.",
                    img: "https://user-images.githubusercontent.com/13468728/234031617-2dfb19ea-01d0-4370-b63b-bb6bdfb4f78e.jpg",
                  },
                  {
                    name: "Charlie",
                    role: "Hallmark Inc.",
                    text: "Charlie Green is a European entrepreneur and media consultant. He is the founder of Hallmark Inc.",
                    img: "https://user-images.githubusercontent.com/13468728/234031646-10533999-39e5-4c7b-ab54-d0299b13ce74.jpg",
                  },
                  {
                    name: "Sarah",
                    role: "Zara Inc.",
                    text: "Sarah Dam is an American internet entrepreneur and media proprietor. She is the founder of the multi-national technology company Zara.",
                    img: "https://github.com/ecemgo/ecemgo/assets/13468728/55116c98-5f9a-4b0a-9fdb-4911b52d5ef3",
                  },
                ].map((client, index) => (
                  <div className="slide-col" key={index}>
                    <div className="content">
                      <p>{client.text}</p>
                      <h2>{client.name}</h2>
                      <p>{client.role}</p>
                    </div>
                    <div className="hero">
                      <Image
                        src={client.img}
                        alt={client.name}
                        width={500}
                        height={300}
                        className=""
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="indicator">
              {[0, 1, 2, 3].map((index) => (
                <span
                  key={index}
                  className={`btn ${currentIndex === index ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
          </main>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default OurClients;
