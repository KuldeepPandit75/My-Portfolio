"use client";

import { useEffect } from "react";
import { useThemeStore } from "../Zustand_Store/ThemeStore";
import { useStore } from "../Zustand_Store/Store";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import StartButton from "../components/StartButton/StartButton";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "@/src/components/Hero/Hero";
import About from "@/src/components/About/About";
import Work from "@/src/components/Work/Work";
import Skills from "@/src/components/Work/Skills";
import Projects from "@/src/components/Work/Projects";
import Experience from "@/src/components/Work/Experience";
import Hackathons from "@/src/components/Hackathons/Hackathons";
import Motto from "@/src/components/Motto/Motto";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { tertialColor } = useThemeStore();
  const { loadingComplete, animationStarted } = useStore();

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
    router.prefetch("/about");
  }, [router]);

  useEffect(() => {
    if (animationStarted) {
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);

      if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          ScrollTrigger.refresh();
        });
      }

      return () => clearTimeout(timer);
    }
  }, [animationStarted]);

  // Show LoadingScreen first
  if (!loadingComplete) {
    return <LoadingScreen />;
  }

  // Show StartButton after loading completes
  if (!animationStarted) {
    return <StartButton />;
  }

  // Show portfolio after start button is clicked
  return (
    <>
      <div className="absolute top-0 w-full -z-1">
        <Hero />
      </div>
      <div className="mt-[100vh]" style={{ backgroundColor: tertialColor }}>
        <About />
        <Work />
        <Skills />
        <Projects />
        <Experience />
        <Hackathons />
        <Motto />
      </div>
    </>
  );
}
