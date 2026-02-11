"use client";

import { lazy, Suspense, useEffect, useRef } from "react";
import { useThemeStore } from "../Zustand_Store/ThemeStore";
import { useStore } from "../Zustand_Store/Store";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import StartButton from "../components/StartButton/StartButton";
import { useRouter } from "next/router";

const LazyHero = lazy(() =>
  import("@/src/components/Hero/Hero").then((module) => ({
    default: module.default,
  })),
);

const LazyAbout = lazy(() =>
  import("@/src/components/About/About").then((module) => ({
    default: module.default,
  })),
);

const LazyWork = lazy(() =>
  import("@/src/components/Work/Work").then((module) => ({
    default: module.default,
  })),
);

const LazySkills = lazy(() =>
  import("@/src/components/Work/Skills").then((module) => ({
    default: module.default,
  })),
);

const LazyProjects = lazy(() =>
  import("@/src/components/Work/Projects").then((module) => ({
    default: module.default,
  })),
);

const LazyExperience = lazy(() =>
  import("@/src/components/Work/Experience").then((module) => ({
    default: module.default,
  })),
);

const LazyHackathons = lazy(() =>
  import("@/src/components/Hackathons/Hackathons").then((module) => ({
    default: module.default,
  })),
);

const LazyMotto = lazy(() =>
  import("@/src/components/Motto/Motto").then((module) => ({
    default: module.default,
  })),
);

export default function Home() {
  const { tertialColor } = useThemeStore();
  const { loadingComplete, animationStarted } = useStore();

  const router=useRouter();

  useEffect(() => {
    router.prefetch("/about")
  },[])

  useEffect(()=>{
    const images=[
      "/images/aboutHead2.svg",
      "/images/aboutInfo.svg",
      "/images/jss.png",
      "/images/community1.svg",
      "/images/community2.svg",
      "/images/hobby2.svg"
    ]
    images.forEach((image)=>{
      const img=new Image();
      img.src=image;
    })
  },[])

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
        <LazyHero />
      </div>
      <div className="mt-[100vh]" style={{ backgroundColor: tertialColor }}>
        <Suspense fallback={<div />}>
          <LazyAbout />
        </Suspense>
        <Suspense fallback={<div />}>
          <LazyWork />
        </Suspense>
        <Suspense fallback={<div />}>
          <LazySkills />
        </Suspense>
        <Suspense fallback={<div />}>
          <LazyProjects />
        </Suspense>
        <div className="overflow-x-hidden">
          <LazyExperience />
        </div>
        <Suspense fallback={<div />}>
          <LazyHackathons />
        </Suspense>
        <Suspense fallback={<div />}>
          <LazyMotto />
        </Suspense>
      </div>
    </>
  );
}
