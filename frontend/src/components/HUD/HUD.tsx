"use client";

import { useThemeStore } from "@/src/Zustand_Store/ThemeStore";
import { useStore } from "@/src/Zustand_Store/Store";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HUD = () => {
  const { primaryColor, secondaryColor, tertialColor } = useThemeStore();
  const { audioElement, setAudioElement } = useStore();
  const { heroAnimationComplete } = useStore();
  const [sound, setSound] = useState(true);
  const soundOffRef = useRef<HTMLSpanElement>(null);
  const soundOnRef = useRef<HTMLSpanElement>(null);
  const soundLabelRef = useRef<HTMLSpanElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      setSound(false);
    }
  }, []);

  useEffect(() => {
    const audio = new Audio("/bgMusic2.mp3");
    audio.loop = true;
    audio.volume = 0.08;
    setAudioElement(audio);
  }, []);

  // Animate sound toggle when state changes
  useEffect(() => {
    if (sound) {
      audioElement?.play();
      // Animate OFF out and ON in
      gsap.to(soundOffRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(soundOnRef.current, {
        y: "0%",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      audioElement?.pause();
      // Animate ON out and OFF in
      gsap.to(soundOffRef.current, {
        y: "0%",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
      gsap.to(soundOnRef.current, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [sound]);

  // Add hover effects for social icons and sound label
  useGSAP(() => {
    // Only run animations after hero animation has completed
    if (!heroAnimationComplete) return;

    const tl = gsap.timeline();

    tl.to(
      "#hud1",
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      "+=0.4",
    );

    tl.to(
      "#hud2",
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      "<",
    );

    const socialIcons = document.querySelectorAll(".social-icon");
    socialIcons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        gsap.to(icon, {
          scale: 1.1,
          duration: 0.1,
          ease: "power2.out",
        });
      });
      icon.addEventListener("mouseleave", () => {
        gsap.to(icon, {
          scale: 1,
          duration: 0.1,
          ease: "power2.out",
        });
      });
    });

    const soundLabel = soundLabelRef.current;
    if (soundLabel) {
      soundLabel.addEventListener("mouseenter", () => {
        gsap.to(soundLabel, {
          opacity: 1,
          duration: 0.1,
          ease: "power2.out",
        });
      });
      soundLabel.addEventListener("mouseleave", () => {
        gsap.to(soundLabel, {
          opacity: 0.5,
          duration: 0.1,
          ease: "power2.out",
        });
      });
    }
  }, [heroAnimationComplete]);

  return (
    <div>
      <div
        id="hud1"
        className="hidden sm:flex justify-between items-end fixed bottom-14 left-0 right-0 mx-[60px] xl:mx-[80px] pointer-events-none mix-blend-difference z-100 opacity-0"
      >
        <div className="items-center gap-[40px] flex flex-col pointer-events-auto">
          <Link
            href="https://github.com/kuldeeppandit75"
            target="_blank"
            className="social-icon cursor-pointer"
          >
            <img src="/icons/github.svg" alt="github" width={25} />
          </Link>
          <Link
            href="https://www.instagram.com/vaultechi/"
            target="_blank"
            className="social-icon cursor-pointer"
          >
            <img src="/icons/insta.svg" alt="instagram" width={20} />
          </Link>
          <Link
            href="https://www.youtube.com/@kuldeepk.pandit/shorts"
            target="_blank"
            className="social-icon cursor-pointer"
          >
            <img src="/icons/youtube.svg" alt="youtube" width={15} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kuldeepk-pandit/"
            target="_blank"
            className="social-icon cursor-pointer"
          >
            <img src="/icons/in.svg" alt="linkedin" width={20} />
          </Link>
        </div>
      </div>
      <div
        id="hud2"
        className="hidden sm:inline fixed bottom-14 right-0 mx-[80px] z-100 opacity-0"
        style={{ mixBlendMode: "difference" }}
      >
        <div className="-rotate-90" style={{ color: secondaryColor }}>
          <p
            className="font-sugo tracking-[4px] relative left-4 top-10 cursor-pointer select-none"
            style={{
              fontSize: "20px",
            }}
            onClick={() => {
              setSound(!sound);
            }}
          >
            <span ref={soundLabelRef} className="opacity-50">
              SOUND
            </span>
            <b className="inline relative" style={{ width: "50px" }}>
              <span ref={soundOffRef} className="inline-block absolute ml-2">
                OFF
              </span>
              <span
                ref={soundOnRef}
                className="inline-block absolute ml-2"
                style={{
                  transform: "translateY(100%)",
                  opacity: 0,
                }}
              >
                ON
              </span>
            </b>
          </p>
        </div>
      </div>
      <div className="sm:hidden fixed bottom-6 right-6 z-100">
        <button
          onClick={() => setSound(!sound)}
          className="w-12 h-12 rounded-full border flex items-center justify-center backdrop-blur-sm transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] active:scale-95"
          style={{
            borderColor: secondaryColor,
            color: secondaryColor,
            backgroundColor: "rgba(20, 20, 20, 0.4)",
          }}
          aria-label="Toggle Sound"
        >
          {sound ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default HUD;
