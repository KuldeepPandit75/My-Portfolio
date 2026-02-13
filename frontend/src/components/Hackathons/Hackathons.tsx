"use client";

import { useThemeStore } from "@/src/Zustand_Store/ThemeStore";
import Image from "next/image";
import { useState } from "react";

const Hackathons = () => {
  const { primaryColor, secondaryColor, tertialColor } = useThemeStore();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [imgSrc, setImgSrc] = useState<string | null>("/images/veshack.jpg");

  const workItems = [
    {
      text: "VESHACK'24",
      highlight: false,
      img: "/images/veshack.jpg",
    },
    {
      text: "CONVERGEX",
      highlight: false,
      img: "/images/convergex.jpg",
    },
    {
      text: "IGNITION HACK",
      highlight: false,
      img: "/images/ignition.jpg",
    },
  ];

  const mouseEnter= (index:number)=>{
    setHoveredIndex(index);
    setImgSrc(workItems[index].img);
  }

  const mouseLeave= ()=>{
    setHoveredIndex(null);
    setImgSrc(null);
  }

  return (
    <section className="pb-[80px] md:pb-[100px] relative">
      <h1
        className="px-6 sm:px-10 md:px-[120px] lg:px-[160px] xl:px-[200px] font-coolvetica text-xs sm:text-sm md:text-md tracking-[4px] opacity-70 mb-[5vh] md:mb-[8vh]"
        style={{ color: secondaryColor }}
      >
        HACKATHONS
      </h1>

      <div className="space-y-0">
        {workItems.map((item, index) => (
          <div
            key={index}
            className="border-t py-6 md:py-8 relative overflow-hidden flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-center justify-between px-6 sm:px-10 md:px-[120px] lg:px-[160px] xl:px-[200px]"
            style={{ borderColor: `${secondaryColor}50` }}
            onMouseEnter={() => mouseEnter(index)}
            onMouseLeave={mouseLeave}
          >
            {/* Base text layer in secondary color */}
            <h2
              className="text-[clamp(1.8rem,5vw,5rem)] font-coolvetica font-black tracking-[4px] leading-tight md:leading-10 relative z-10 cursor-pointer"
              style={{ color: secondaryColor }}
            >
              {item.text}
            </h2>

            {/* Expanding overlay background */}
            <div
              className="absolute top-1/2 left-0 w-full transition-all duration-300 ease-in-out z-20"
              style={{
                backgroundColor: primaryColor,
                transform: "translateY(-50%)",
                height: hoveredIndex === index ? "100%" : "0%",
              }}
            />

            {/* Dark text layer clipped to overlay */}
            <h2
              className="absolute top-0 left-0 text-[clamp(1.8rem,5vw,5rem)] font-coolvetica font-black tracking-[4px] leading-tight md:leading-10 px-6 sm:px-10 md:px-[120px] lg:px-[200px] py-6 md:py-8 z-30 pointer-events-none transition-all duration-300 ease-in-out"
              style={{
                color: "#1e1e1e",
                clipPath:
                  hoveredIndex === index
                    ? "inset(0 0 0 0)"
                    : "inset(50% 0 50% 0)",
              }}
            >
              {item.text}
            </h2>
          </div>
        ))}
        {/* Bottom border for the last item */}
        <div
          className="border-t border-opacity-20"
          style={{ borderColor: `${secondaryColor}50` }}
        />
      </div>

      {imgSrc && (
        <Image
          src={imgSrc}
          alt="hackathon"
          className="hidden sm:block absolute top-[120px] right-[40px] md:right-[120px] lg:right-[180px] xl:right-[200px] h-[260px] w-[220px] lg:h-[250px] lg:w-[200px] xl:h-[300px] xl:w-[250px] object-cover rounded-2xl z-40 pointer-events-none"
          style={{
            // border: `10px solid ${primaryColor}`
          }}
          width={500}
          height={500}
        />
      )}
      <p
        className=" text-[clamp(2rem,4vw,3rem)] px-6 sm:px-10 md:px-[120px] lg:px-[160px] xl:px-[200px] tracking-[8px] sm:tracking-[10px] md:tracking-[12px] font-baloo"
        style={{
          WebkitTextStroke: `1px ${secondaryColor}`,
          color: secondaryColor,
        }}
      >
        ...
      </p>
    </section>
  );
};

export default Hackathons;
