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

    tl.to(
      "#mobile-sound",
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
      {/* Mobile Sound Button - Creative Circular Design */}
      <div id="mobile-sound" className="sm:hidden fixed bottom-6 right-6 z-100 opacity-0">
        <button
          onClick={() => setSound(!sound)}
          aria-label="Toggle Sound"
          className="relative w-[80px] h-[80px] flex items-center justify-center active:scale-95 transition-transform duration-150"
          style={{ background: "transparent", border: "none", cursor: "pointer" }}
        >
          {/* Rotating SVG ring with "SOUND - SOUND - SOUND - SOUND -" text */}
          <svg
            viewBox="0 0 80 80"
            width="80"
            height="80"
            className="absolute inset-0"
            style={{
              animation: "mobileSoundSpin 6s linear infinite",
            }}
          >
            <defs>
              <path
                id="soundCirclePath"
                d="M40,40 m-28,0 a28,28 0 1,1 56,0 a28,28 0 1,1 -56,0"
              />
            </defs>
            <text
              className="font-sugo"
              style={{
                fontSize: "8px",
                letterSpacing: "3.5px",
                fill: secondaryColor,
                fontWeight: "bold",
              }}

            >
              <textPath href="#soundCirclePath" startOffset="0%" className="mix-blend-difference">
                SOUND &nbsp; - SOUND &nbsp;- SOUND -&nbsp;
              </textPath>
            </text>
          </svg>

          {/* Center circle with ON/OFF */}
          <div
            className="relative z-10 w-[44px] h-[44px] rounded-full flex items-center justify-center shadow-lg"
            style={{
              backgroundColor: primaryColor,
              boxShadow: `0 0 18px ${primaryColor}88`,
            }}
          >
            <span
              className="font-sugo text-white select-none"
              style={{ fontSize: "10px", letterSpacing: "1px" }}
            >
              {sound ? "ON" : "OFF"}
            </span>
          </div>
        </button>

        {/* Keyframe for spin animation injected via style tag */}
        <style>{`
          @keyframes mobileSoundSpin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default HUD;
