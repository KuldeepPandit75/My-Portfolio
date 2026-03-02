"use client";

import { useThemeStore } from "@/src/Zustand_Store/ThemeStore";
import { useStore } from "@/src/Zustand_Store/Store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { memo, useState } from "react";

const Hero = memo(() => {
  const { primaryColor } = useThemeStore();
  const { animationStarted, setHeroAnimationComplete } = useStore();
  const [greetings, setGreetings] = useState("नमस्ते!");

  const words = [
    "你好!",
    "HOLA!",
    "HALLO!",
    "안녕하세요!",
    "BONJOUR!",
    "HELLO,",
  ];

  useGSAP(() => {
    // Only run animations if start button has been clicked
    if (!animationStarted) return;

    const tl2 = gsap.timeline({
      delay: 0.5,
      onComplete: () => {
        // Notify that hero animation is complete so Navbar and HUD can animate
        setHeroAnimationComplete(true);
      },
    });

    words.forEach((word) => {
      tl2.call(() => setGreetings(word));
      tl2.to({}, { duration: 0.2 });
    });

    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 639px)",
        isDesktop: "(min-width: 640px)",
      },
      (context) => {
        const { isMobile } = context.conditions as { isMobile: boolean };

        // Animate from center to original position
        tl2.to(
          "#hello",
          {
            top: isMobile ? "23vh" : "26vh",
            left: isMobile ? "-4vw" : "-30vw",
            translateX: "0%",
            translateY: "0%",
            ease: "power2.out",
            duration: 1,
            scale: 1,
          },
          "<", // Ensure it starts after the words finish, like it was before
        );
        tl2.to(
          "#im",
          {
            opacity: 1,
            duration: 0.5,
          },
          "-=0.5",
        );
    tl2.to("#name", {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
    },"-=0.3");
        tl2.to(
          "#characters",
          {
            opacity: 1,
            duration: 0.5,
          },
          "-=0.8",
        );
      },
    );

    // Scroll animation for hero section
    const tl = gsap.timeline();

    tl.to("#hello", {
      y: 100,
      ease: "power2.out",
    });
    tl.to(
      "#name",
      {
        y: 100,
        ease: "power2.out",
      },
      "<",
    );

    tl.to(
      "#characters",
      {
        y: 100,
        ease: "power2.out",
      },
      "<",
    );

    ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      end: "+=1200px",
      scrub: 1,
      animation: tl,
    });
  }, [animationStarted, setHeroAnimationComplete]);

  return (
    <div
      id="hero"
      className="relative pt-[10vh] h-screen pb-[35vh] px-[80px] select-none w-full overflow-hidden"
    >
      <div>
        <h2
          id="hello"
          className=" text-3xl sm:text-[clamp(1rem,4vw,4rem)] font-black font-sugo tracking-[2px] absolute top-[50vh] left-[50vw] -translate-x-[40%] sm:-translate-x-[45%] -translate-y-1/2 text-center w-screen scale-200"
        >
          {greetings}{" "}
          <b id="im" className="opacity-0" style={{ color: primaryColor }}>
            I'M
          </b>
        </h2>
        <h1
          className="text-[4.5rem] font-sugo tracking-[2px] absolute top-[30vh] left-1/2 -translate-x-1/2 opacity-0"
          style={{ color: primaryColor }}
          id="name"
        >
          <b className="text-center block text-[100px] sm:text-[clamp(10rem,20vw,20rem)] leading-none tracking-wider">
            KULDEEP
          </b>
        </h1>
      </div>

      {/* Characters */}

      <div
        id="characters"
        className="relative top-[75vh] sm:top-[80vh] w-full flex justify-around items-end px-8 opacity-0"
      >
        <Image
          src="/images/bgirl.png"
          alt="blue girl"
          className="h-[clamp(180px,18vw,280px)] w-auto object-contain absolute -left-32 sm:left-[12vw] xl:left-[15vw] 2xl:left-[15vw] bottom-6 z-10"
          width={300}
          height={400}
        />
        <Image
          src="/images/boy.png"
          alt="boy1"
          className="h-[clamp(200px,20vw,300px)] w-auto object-contain absolute -left-8 sm:left-[27vw] lg:left-[30vw] xl:left-[30vw] 2xl:left-[32vw] z-20"
          width={300}
          height={400}
        />
        <Image
          src="/images/boy2.png"
          alt="boy2"
          className="h-[clamp(190px,19vw,290px)] w-auto object-contain absolute -right-24 sm:right-[20vw] lg:right-[23vw] xl:right-[22vw] 2xl:right-[26vw] bottom-5 z-10"
          width={300}
          height={400}
        />
        <Image
          src="/images/sgirl.png"
          alt="standing girl"
          className="h-[clamp(320px,33vw,480px)] w-auto object-contain absolute -right-40 sm:right-[10vw] lg:right-[14vw] xl:right-[13vw] 2xl:right-[15vw] bottom-8 z-5"
          width={300}
          height={400}
        />
      </div>
    </div>
  );
});

export default Hero;
