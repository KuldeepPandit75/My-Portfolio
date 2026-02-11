"use client";

import { useThemeStore } from "@/src/Zustand_Store/ThemeStore";

import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Skills data for each category
const skillsData = {
  languages: ["JavaScript", "Python", "Java", "C++", "SQL"],
  libraries: [
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "TailwindCSS",
    "Socket.io",
    "GSAP",
    "Phaser.js",
  ],
  tools: ["Docker", "Figma", "Postman", "Nginx", "MongoDB", "Redis", "Mermaid"],
  versionControl: ["Git", "GitLab", "Vercel", "OnRender"],
};

const Skills = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const container = useRef<HTMLDivElement>(null);

  const handleCardClick = (cardName: string) => {
    setActiveCard(activeCard === cardName ? null : cardName);
  };

  const { primaryColor, secondaryColor } = useThemeStore();

  return (
    <section className="relative">
      {/* Heading scrolls normally */}
      <h1
        className="px-[200px] font-coolvetica text-md tracking-[4px] opacity-70 mb-[8vh]"
        style={{ color: secondaryColor }}
      >
        SKILLS
      </h1>

      {/* Scroll spacer */}
      <div className="relative h-[150vh]">
        {/* Sticky only grid */}
        <div className="sticky top-0 h-screen">
          <div className="grid gap-2 grid-cols-4 w-full overflow-hidden h-full px-2">
            {/* LANGUAGES Column */}
            <div
              className={`relative transition-all duration-600 ease-in-out cursor-pointer group ${
                activeCard === "languages"
                  ? "bottom-[80px]"
                  : "bottom-0 hover:bottom-[80px]"
              }`}
              onClick={() => handleCardClick("languages")}
            >
              <div className="overflow-hidden">
                <Image
                  src="/images/langs.png"
                  alt="langs"
                  width={500}
                  height={500}
                  className={`h-screen w-full object-cover object-center transition-all duration-600 ease-in-out relative ${
                    activeCard === "languages"
                      ? "grayscale-0 top-[50px]"
                      : "grayscale group-hover:grayscale-0 top-0 group-hover:top-[50px]"
                  }`}
                />
                {activeCard === "languages" && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 px-8 animate-fadeIn top-[12vh]">
                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/30 shadow-2xl w-full max-w-sm">
                      <div className="flex flex-col gap-6 items-center">
                        {skillsData.languages.map((skill, idx) => (
                          <div
                            key={idx}
                            className="text-white text-3xl font-bold transition-all duration-300 hover:scale-110 hover:text-[var(--hover-color)]"
                            style={
                              {
                                fontFamily: "coolvetica",
                                "--hover-color": primaryColor,
                              } as React.CSSProperties
                            }
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <p className="absolute mx-4 font-sugo w-full -bottom-16 pt-20 text-white text-5xl font-bold uppercase tracking-widest">
                Languages
              </p>
            </div>

            {/* LIBRARIES Column */}
            <div
              className={`relative transition-all duration-600 ease-in-out cursor-pointer group ${
                activeCard === "libraries"
                  ? "bottom-[80px]"
                  : "bottom-0 hover:bottom-[80px]"
              }`}
              onClick={() => handleCardClick("libraries")}
            >
              <div className="overflow-hidden">
                <Image
                  src="/images/libraries.png"
                  alt="libraries"
                  width={500}
                  height={500}
                  className={`h-screen w-full object-cover object-center transition-all duration-600 ease-in-out relative ${
                    activeCard === "libraries"
                      ? "grayscale-0 top-[50px]"
                      : "grayscale group-hover:grayscale-0 top-0 group-hover:top-[50px]"
                  }`}
                />
                {activeCard === "libraries" && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 px-8 animate-fadeIn top-[12vh]">
                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/30 shadow-2xl w-full max-w-sm">
                      <div className="flex flex-col gap-6 items-center">
                        {skillsData.libraries.map((skill, idx) => (
                          <div
                            key={idx}
                            className="text-white text-3xl font-bold transition-all duration-300 hover:scale-110 hover:text-[var(--hover-color)]"
                            style={
                              {
                                fontFamily: "coolvetica",
                                "--hover-color": primaryColor,
                              } as React.CSSProperties
                            }
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <p className="absolute mx-4 font-sugo w-full -bottom-16 pt-20 text-white text-5xl font-bold uppercase tracking-widest">
                Libraries
              </p>
            </div>

            {/* TOOLS Column */}
            <div
              className={`relative transition-all duration-600 ease-in-out cursor-pointer group ${
                activeCard === "tools"
                  ? "bottom-[80px]"
                  : "bottom-0 hover:bottom-[80px]"
              }`}
              onClick={() => handleCardClick("tools")}
            >
              <div className="overflow-hidden">
                <Image
                  src="/images/tools.png"
                  alt="tools"
                  width={500}
                  height={500}
                  className={`h-screen w-full object-cover object-center transition-all duration-600 ease-in-out relative ${
                    activeCard === "tools"
                      ? "grayscale-0 top-[50px]"
                      : "grayscale group-hover:grayscale-0 top-0 group-hover:top-[50px]"
                  }`}
                />
                {activeCard === "tools" && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 px-8 animate-fadeIn top-[12vh]">
                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/30 shadow-2xl w-full max-w-sm">
                      <div className="flex flex-col gap-6 items-center">
                        {skillsData.tools.map((skill, idx) => (
                          <div
                            key={idx}
                            className="text-white text-3xl font-bold transition-all duration-300 hover:scale-110 hover:text-[var(--hover-color)]"
                            style={
                              {
                                fontFamily: "coolvetica",
                                "--hover-color": primaryColor,
                              } as React.CSSProperties
                            }
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <p
                className="absolute mx-4 font-sugo w-full -bottom-16 pt-20 text-5xl font-bold uppercase tracking-widest"
                style={{
                  color: secondaryColor,
                }}
              >
                Tools
              </p>
            </div>

            {/* VERSION CONTROL Column */}
            <div
              className={`relative transition-all duration-600 ease-in-out cursor-pointer group ${
                activeCard === "versionControl"
                  ? "bottom-[120px]"
                  : "bottom-0 hover:bottom-[120px]"
              }`}
              onClick={() => handleCardClick("versionControl")}
            >
              <div className="overflow-hidden">
                <Image
                  src="/images/versionControl.png"
                  alt="version control"
                  width={500}
                  height={500}
                  className={`h-screen w-full object-cover object-center transition-all duration-600 ease-in-out relative ${
                    activeCard === "versionControl"
                      ? "grayscale-0 top-[50px]"
                      : "grayscale group-hover:grayscale-0 top-0 group-hover:top-[50px]"
                  }`}
                />
                {activeCard === "versionControl" && (
                  <div className="absolute inset-0 flex items-center justify-center z-10 px-8 animate-fadeIn top-[12vh]">
                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/30 shadow-2xl w-full max-w-sm">
                      <div className="flex flex-col gap-6 items-center">
                        {skillsData.versionControl.map((skill, idx) => (
                          <div
                            key={idx}
                            className="text-white text-3xl font-bold transition-all duration-300 hover:scale-110 hover:text-[var(--hover-color)]"
                            style={
                              {
                                fontFamily: "coolvetica",
                                "--hover-color": primaryColor,
                              } as React.CSSProperties
                            }
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <p className="absolute mx-4 font-sugo w-full -bottom-26 pt-20 text-white text-5xl font-bold uppercase tracking-widest">
                Version Control
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
