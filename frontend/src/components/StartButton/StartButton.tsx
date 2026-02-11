"use client";

import { useStore } from "@/src/Zustand_Store/Store";
import { useThemeStore } from "@/src/Zustand_Store/ThemeStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

const StartButton = () => {
  const { primaryColor, secondaryColor, tertialColor } = useThemeStore();
  const { loadingComplete, animationStarted, setAnimationStarted, audioElement } = useStore();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Entrance animation after loading completes
  useGSAP(() => {
    if (loadingComplete && !animationStarted && buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
      );
    }
  }, [loadingComplete, animationStarted]);

  const handleClick = () => {
    audioElement?.play();
    // Animate button and container out
    const tl = gsap.timeline({
      onComplete: () => {
        setAnimationStarted(true);
      },
    });

    tl.to(buttonRef.current, {
      scale: 1.2,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
    });

    tl.to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      },
      "-=0.3",
    );
  };

  // Don't render if loading not complete or animations have started
  if (!loadingComplete || animationStarted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-9999 flex items-center justify-center"
      style={{
        backgroundColor: secondaryColor,
      }}
    >
      <button
        ref={buttonRef}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative px-12 py-2 text-2xl font-sugo tracking-[4px] font-black rounded-full cursor-pointer transition-all hover:scale-105 active:scale-95"
        style={{
          color: isHovered ? secondaryColor : tertialColor,
          border: `2px solid ${tertialColor}`,
          backgroundColor: isHovered ? tertialColor : "transparent",
          transition: "background-color 0.3s ease, color 0.3s ease",
        }}
      >
        START
      </button>
    </div>
  );
};

export default StartButton;
