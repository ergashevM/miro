"use client";

import React, { useEffect, useState } from "react";
import Walmart from "../assets/walmart.svg";
import Cisco from "../assets/cisco.svg";
import Volvo from "../assets/volvo.svg";
import Deloitte from "../assets/deloitte.svg";
import Okta from "../assets/okta.svg";

const brands = [
  { src: Walmart, alt: "Walmart" },
  { src: Cisco, alt: "Cisco" },
  { src: Volvo, alt: "Volvo" },
  { src: Deloitte, alt: "Deloitte" },
  { src: Okta, alt: "Okta" },
];

const Sponsors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[1120px] lg:h-[200px] h-auto flex flex-col justify-center mx-auto text-center overflow-hidden gap-y-15 mt-20">
      <h3 className="font-normal text-lg font-inter text-[#05003899]">
        Trusted by 45M+ users
      </h3>
      <div className="flex items-center lg:justify-between justify-center flex-wrap lg:px-5 px-0">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={`flex transition-transform duration-500 ${
              index === currentIndex
                ? "scale-130 opacity-100"
                : "scale-100 opacity-80"
            }`}
          >
            <img src={brand.src} alt={brand.alt} className="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
