"use client";
import { useThemeStore } from "@/src/Zustand_Store/ThemeStore";
import { useStore } from "@/src/Zustand_Store/Store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { Router } from "next/router";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const { primaryColor, secondaryColor, tertialColor } = useThemeStore();
  const {
    heroAnimationComplete,
    setHeroAnimationComplete,
    setLoadingComplete,
    setAnimationStarted,
  } = useStore();
  const pathname = usePathname();
  const isAbout = pathname === "/about";
  const isAboutRef = useRef(isAbout);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    isAboutRef.current = isAbout;
  }, [isAbout]);

  // Ensure navbar/hud/footer are visible on non-home pages where Hero doesn't run
  // Also ensure we don't show loading screen/start button if returning to home
  useEffect(() => {
    if (pathname !== "/") {
      setHeroAnimationComplete(true);
      setLoadingComplete(true);
      setAnimationStarted(true);
    }
  }, [
    pathname,
    setHeroAnimationComplete,
    setLoadingComplete,
    setAnimationStarted,
  ]);

  useGSAP(() => {
    // Only run animations after hero animation has completed
    if (!heroAnimationComplete) return;

    // Update About link opacity when page changes
    // Using simple tween with overwrite to ensure it takes precedence
    gsap.to("#about-link", {
      opacity: isAbout ? 1 : 0.5,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  }, [isAbout, heroAnimationComplete]);

  useGSAP(() => {
    // Only run entrance animations once after hero animation has completed
    if (!heroAnimationComplete || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;

    const tl = gsap.timeline();

    // Set initial state
    gsap.set("#logo", { y: -20, opacity: 0 });
    gsap.set("#nav a", { y: -20, opacity: 0 });
    gsap.set("#nav .resume-btn", { y: -20, opacity: 0 });

    // Animate to final state
    tl.to("#logo", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    });

    // Animate nav items with stagger
    const navLinks = document.querySelectorAll("#nav a");
    navLinks.forEach((link, index) => {
      // Determine target opacity based on current path at the time of entrance
      let targetOpacity = 0.5;
      if (index === 0 && isAbout) targetOpacity = 1;

      tl.to(
        link,
        {
          y: 0,
          opacity: targetOpacity,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.03,
        },
        index === 0 ? "-=0.8" : "<",
      );
    });

    tl.to(
      "#nav .resume-btn",
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.6",
    );

    // Add hover effects for all nav items
    const navItems = document.querySelectorAll("#nav > * ");
    navItems.forEach((item, index) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        });
        // Scale effect for Resume button (last item)
        if (index === navItems.length - 1) {
          gsap.to(item, {
            scale: 1.05,
            duration: 0.2,
            ease: "power2.out",
          });
        }
      });

      item.addEventListener("mouseleave", () => {
        let leaveOpacity = 0.5;

        // If it's the resume button (last item), it should be 1
        if (index === navItems.length - 1) {
          leaveOpacity = 1;
        }
        // If it's the About link (first item) and we are on About page, it should be 1
        else if (index === 0 && isAboutRef.current) {
          leaveOpacity = 1;
        }

        gsap.to(item, {
          opacity: leaveOpacity,
          duration: 0.2,
          ease: "power2.out",
        });
        // Reset scale for Resume button
        if (index === navItems.length - 1) {
          gsap.to(item, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
          });
        }
      });
    });
  }, [heroAnimationComplete]);

  return (
    <>
      {/* Logo - No blend mode */}
      <Link
        href="/"
        id="logo"
        className="fixed top-0 left-0 mt-[3vh] sm:mt-[4vh] lg:mt-[5vh] mx-4 sm:mx-8 md:mx-[60px] xl:mx-[80px] select-none opacity-0"
        style={{ zIndex: 10000 }}
      >
        <h1
          className="text-[14px] lg:text-[18px] font-sugo font-black rounded-lg px-[14px] sm:px-[18px] lg:px-[20px] py-[4px] tracking-[3px] sm:tracking-[4px]"
          style={{
            backgroundColor: primaryColor,
            color: secondaryColor,
          }}
        >
          KULDEEP K PANDIT
        </h1>
      </Link>

      {/* Menu Items - With blend mode */}
      <nav className="fixed top-0 right-0 mt-[3vh] sm:mt-[4vh] lg:mt-[5vh] mx-4 sm:mx-8 md:mx-[60px] xl:mx-[80px] mix-blend-difference select-none z-100">
        <ul className="hidden sm:flex gap-[4vw] items-center" id="nav">
          <Link
            id="about-link"
            href="/about"
            className="text-sm lg:text-xl font-sugo font-light tracking-[2px] cursor-pointer opacity-0"
            style={{
              color: secondaryColor,
              fontWeight: 300,
            }}
            prefetch={true}
          >
            About
          </Link>
          <a
            className="text-sm lg:text-xl font-sugo tracking-[2px] cursor-pointer opacity-0"
            style={{ color: secondaryColor }}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            download="resume.pdf"
            className="resume-btn text-sm lg:text-xl font-sugo tracking-[2px] px-[16px] lg:px-[20px] py-[5px] rounded-lg -ml-1 lg:-ml-2 cursor-pointer opacity-0"
            style={{
              backgroundColor: tertialColor,
              color: secondaryColor,
            }}
          >
            Resume
          </a>
        </ul>

        {/* Compact mobile menu */}
        <div className="sm:hidden flex items-center gap-3 bg-black/70 px-4 py-2 rounded-full">
          <span
            className="text-xs font-sugo tracking-[2px] uppercase"
            style={{ color: secondaryColor }}
          >
            Menu
          </span>
          <div className="flex flex-col gap-[3px]">
            <span
              className="h-[2px] w-5 rounded-full"
              style={{ backgroundColor: secondaryColor }}
            />
            <span
              className="h-[2px] w-4 rounded-full"
              style={{ backgroundColor: secondaryColor }}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
