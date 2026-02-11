'use client';
import { useThemeStore } from "@/src/Zustand_Store/ThemeStore";

const About = () => {
  const { primaryColor, tertialColor, secondaryColor } = useThemeStore();
  return (
    <section className="px-6 sm:px-10 md:px-[120px] lg:px-[200px] py-16 md:py-[180px] lg:py-[210px]">
      <h1
        className="font-coolvetica text-xs sm:text-sm md:text-md tracking-[4px] opacity-70"
        style={{ color: secondaryColor }}
      >
        ABOUT ME
      </h1>
      <p
        className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-coolvetica tracking-[1px] sm:tracking-[2px] my-[6vh] md:my-[10vh]"
        style={{ color: secondaryColor }}
      >
        <b style={{ color: primaryColor }}>Full-stack developer</b> transitioning
        into data science, focused on building data-driven systems.
      </p>
      <p
        className="text-[0.9rem] sm:text-[1rem] font-coolvetica tracking-[1px] sm:tracking-[2px] mt-[6vh] md:mt-[10vh]"
        style={{ color: secondaryColor }}
      >
        <b className="opacity-70">currently pursuing</b> B.Tech in{" "}
        <b style={{ color: primaryColor }}>CSE (Data Science)</b> - JSSATE Noida
      </p>
    </section>
  );
};

export default About;