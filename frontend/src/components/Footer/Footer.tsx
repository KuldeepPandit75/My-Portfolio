"use client";

import { useThemeStore } from "@/src/Zustand_Store/ThemeStore";
import { useStore } from "@/src/Zustand_Store/Store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { memo, useRef } from "react";
import Link from "next/link";

const Footer = memo(() => {
  const { secondaryColor } = useThemeStore();
  const { heroAnimationComplete } = useStore();
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!heroAnimationComplete) return;

    gsap.to(footerRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      delay: 0.5, // Small delay after Hero completes
    });
  }, [heroAnimationComplete]);

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="flex flex-col lg:flex-row items-stretch opacity-0"
      style={{
        backgroundColor: "#111111",
        color: secondaryColor,
      }}
    >
      <div className="px-[40px] sm:px-10 md:px-[150px] lg:pl-[200px] lg:pr-[100px] xl:pl-[250px] xl:pr-[120px] py-12 md:py-0 md:h-[50vh] border-b lg:border-b-0 lg:border-r border-[#8f8f8f30] flex flex-col justify-center relative xl:px-0 xl:pt-5">
        <h3 className="font-coolvetica tracking-[4px] mb-8 md:mb-10 text-sm md:text-base">
          CONNECT
        </h3>
        <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-0 w-full lg:w-[clamp(200px,36vw,550px)]">
          <ul className="flex flex-col gap-5 md:gap-7">
            <li className="flex gap-7">
              <Image
                src="/icons/bulletTri.svg"
                alt="bullet"
                width={12}
                height={12}
                className="h-[clamp(5px,0.8vw,12px)] w-[clamp(5px,0.8vw,12px)]"
              />
              <Link
                href="https://www.youtube.com/@kuldeepk.pandit/shorts"
                target="_blank"
                className="font-coolvetica text-[clamp(1rem,2.5vw,2rem)] leading-5"
              >
                YouTube
              </Link>
            </li>
            <li className="flex gap-7 ">
              <Image
                src="/icons/bulletTri.svg"
                alt="bullet"
                width={12}
                height={12}
                className="h-[clamp(5px,0.8vw,12px)] w-[clamp(5px,0.8vw,12px)]"
              />
              <Link
                href="https://www.instagram.com/vaultechi/"
                target="_blank"
                className="font-coolvetica text-[clamp(1rem,2.5vw,2rem)] leading-5"
              >
                Instagram
              </Link>
            </li>
            <li className="flex gap-7">
              <Image
                src="/icons/bulletTri.svg"
                alt="bullet"
                width={12}
                height={12}
                className="h-[clamp(5px,0.8vw,12px)] w-[clamp(5px,0.8vw,12px)]"
              />
              <Link
                href="https://www.linkedin.com/in/kuldeepk-pandit/"
                target="_blank"
                className="font-coolvetica text-[clamp(1rem,2.5vw,2rem)] leading-5"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-5 md:gap-7">
            <li className="flex gap-7">
              <Image
                src="/icons/bulletTri.svg"
                alt="bullet"
                width={12}
                height={12}
                className="h-[clamp(5px,0.8vw,12px)] w-[clamp(5px,0.8vw,12px)]"
              />
              <Link
                href="https://github.com/kuldeeppandit75"
                target="_blank"
                className="font-coolvetica text-[clamp(1rem,2.5vw,2rem)] leading-5"
              >
                GitHub
              </Link>
            </li>
          </ul>
        </div>
        <Image
          src="/images/footer.png"
          alt="footer"
          width={220}
          height={220}
          className="absolute bottom-0 right-0 max-h-[100px] sm:max-h-[150px] w-auto"
        />
      </div>
      <div className="flex flex-col w-full lg:pl-[clamp(50px,6vw,120px)] py-10 lg:py-0 gap-5 md:gap-6 lg-gap-10 justify-center lg:px-0 px-[40px] sm:px-[150px] hidden sm:flex">
        <div className="font-coolvetica mt-2 lg:mt-[60px] xl:mt-[80px]">
          <p className="text-lg md:text-xl">Email</p>
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kuldeepk11139@gmail.com"
            target="_blank"
            className="opacity-50 text-sm md:text-base"
          >
            kuldeepk11139@gmail.com
          </Link>
        </div>
        <div className="font-coolvetica">
          <p className="text-lg md:text-xl">Phone</p>
          <Link
            href="https://wa.me/+917701855045"
            target="_blank"
            className="opacity-50 text-sm md:text-base"
          >
            +91 7701855045
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-full lg:pl-[clamp(50px,6vw,120px)] py-10 lg:py-0 gap-5 md:gap-6 justify-center lg:px-0 px-[40px] sm:px-[150px] sm:hidden">
        <div className="font-coolvetica mt-2 lg:mt-[60px] xl:mt-[80px]">
          <p className="text-lg md:text-xl">Email</p>
          <Link
            href="mailto:kuldeepk11139@gmail.com"
            className="opacity-50 text-sm md:text-base"
          >
            kuldeepk11139@gmail.com
          </Link>
        </div>
        <div className="font-coolvetica">
          <p className="text-lg md:text-xl">Phone</p>
          <Link
            href="tel:+917701855045"
            className="opacity-50 text-sm md:text-base"
          >
            +91 7701855045
          </Link>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
