import { useThemeStore } from "@/src/Zustand_Store/ThemeStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { memo, useRef } from "react";

const Experience = memo(() => {
  const { primaryColor, secondaryColor } = useThemeStore();
  const experience = useRef<HTMLDivElement>(null);
  const cards = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // On small screens, the pinned + flip interaction is hard to use.
    // Keep the layout responsive and only enable the scroll/pin animation on md+.
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline();
      let hasFlipped = false;

      tl.to(
        ".card-container",
        {
          scale: 0.8,
          ease: "power2.out",
        },
        0,
      );

      tl.to(
        "#exhead",
        {
          opacity: 1,
          y: -10,
          ease: "power2.out",
        },
        0,
      );

      tl.to(
        ".card-container",
        {
          gap: "100px",
          ease: "power2.out",
        },
        ">",
      );

      tl.to(
        ".card",
        {
          borderRadius: "16px",
          ease: "power2.out",
        },
        "<",
      );

      ScrollTrigger.create({
        trigger: experience.current,
        start: "top top",
        end: "+=800",
        animation: tl,
        scrub: true,
        pin: true,
        // markers:true,
        onUpdate: (self) => {
          const progress = self.progress;

          if (progress >= 0.9 && !hasFlipped) {
            hasFlipped = true;
            gsap.to(".card", {
              rotateY: 180,
              duration: 0.5,
              ease: "power2.out",
            });
            gsap.to("#card1", {
              rotateZ: -6,
              duration: 0.5,
              ease: "power2.out",
            });
            gsap.to("#card2", {
              rotateZ: 6,
              duration: 0.5,
              ease: "power2.out",
            });
          } else if (progress < 0.9 && hasFlipped) {
            // Reset flag if scrolling back
            hasFlipped = false;
            gsap.to(".card", {
              rotateY: 0,
              duration: 0.5,
              rotateZ: 0,
              ease: "power2.out",
            });
          }
        },
      });
    });

    return () => mm.revert();
  }, { scope: experience });

  return (
    <section
      className="py-16 md:py-[150px] px-6 sm:px-10 md:px-[120px] lg:px-[200px]"
      ref={experience}
    >
      <h1
        id="exhead"
        className="font-sugo text-xl sm:text-2xl md:text-3xl text-center tracking-[3px] sm:tracking-[4px] opacity-0 -mb-[1vh]"
        style={{ color: secondaryColor }}
      >
        EXPERIENCE
      </h1>
      <div
        className="flex flex-col md:flex-row items-center md:items-stretch justify-center card-container gap-8 md:gap-0"
        ref={cards}
      >
        <div
          id="card1"
          className="card w-full max-w-[440px] md:max-w-none flex flex-col rounded-[16px] md:rounded-[16px_0_0_16px] rotate-y-0 rotate-z-0"
        >
          <div className="card-front h-[360px] sm:h-[420px] md:h-[500px] overflow-hidden">
            <Image
              src="/images/cleft.png"
              className="brightness-70 w-full h-full object-cover"
              alt="cl"
              width={900}
              height={900}
              sizes="(max-width: 768px) 90vw, 400px"
            />
          </div>
          <div
            className="card-back h-[360px] sm:h-[420px] md:h-[500px] flex flex-col gap-6 md:gap-10"
            style={{
              background: `linear-gradient(to bottom, ${secondaryColor}, #898784)`,
            }}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-8 md:gap-10 px-6 md:ml-[20px]">
              <Image
                src="/icons/pv.svg"
                alt="pv"
                width={200}
                height={200}
                className="w-[140px] sm:w-[160px] md:w-[200px] h-auto"
              />
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-coolcond font-bold text-black tracking-wide"
                style={{ WebkitTextStroke: "1.3px black" }}
              >
                PERSIST VENTURES
              </h2>
            </div>
            <div className="w-full px-6 md:px-8 tracking-wider sm:tracking-widest">
              <h2
                className="font-coolcond text-lg sm:text-xl md:text-2xl"
                style={{
                  color: primaryColor,
                  WebkitTextStroke: `0.7px ${primaryColor}`,
                }}
              >
                Full-Stack Web Developer Intern
              </h2>
              <h3
                className="font-coolcond text-lg sm:text-xl md:text-2xl"
                style={{ WebkitTextStroke: `0.7px black` }}
              >
                April 2025 - June 2025 | 3 months
              </h3>
              <p className="mt-4 md:mt-5 font-coolvetica text-sm sm:text-base">
                Developed the product frontend and handled full backend
                integration.
              </p>
            </div>
            <button
              className="py-1 font-coolcond text-lg sm:text-xl md:text-2xl rounded-lg px-5 hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: primaryColor, color: secondaryColor }}
            >
              Learn More
            </button>
          </div>
        </div>
        <div
          id="card2"
          className="card w-full max-w-[440px] md:max-w-none flex flex-col rounded-[16px] md:rounded-[0_16px_16px_0] rotate-y-0 rotate-z-0"
        >
          <div className="card-front h-[360px] sm:h-[420px] md:h-[500px] overflow-hidden">
            <Image
              src="/images/cright.png"
              className="brightness-70 w-full h-full object-cover"
              alt="cl"
              width={900}
              height={900}
              sizes="(max-width: 768px) 90vw, 400px"
            />
          </div>
          <div
            className="card-back h-[360px] sm:h-[420px] md:h-[500px] flex flex-col gap-6 md:gap-10"
            style={{
              background: `linear-gradient(to bottom, ${secondaryColor}, #898784)`,
            }}
          >
            <div className="flex justify-between items-center gap-6 sm:gap-10 px-6 md:mx-2">
              <Image
                src="/icons/mmil.svg"
                alt="mmil"
                width={150}
                height={150}
                className="w-[110px] sm:w-[130px] md:w-[150px] h-auto"
              />
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-coolcond font-bold text-black tracking-wide"
                style={{ WebkitTextStroke: "1.3px black" }}
              >
                MMIL
              </h2>
            </div>
            <div className="w-full px-6 md:px-8 tracking-wider sm:tracking-widest">
              <h2
                className="font-coolcond text-lg sm:text-xl md:text-2xl"
                style={{
                  color: primaryColor,
                  WebkitTextStroke: `0.7px ${primaryColor}`,
                }}
              >
                Web Developer
              </h2>
              <h3
                className="font-coolcond text-lg sm:text-xl md:text-2xl"
                style={{ WebkitTextStroke: `0.7px black` }}
              >
                April 2024 - Present
              </h3>
              <p className="mt-4 md:mt-5 font-coolvetica text-sm sm:text-base">
                Developed the product frontend and handled full backend
                integration.
              </p>
            </div>
            <button
              className="py-1 font-coolcond text-lg sm:text-xl md:text-2xl rounded-lg px-5 hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ backgroundColor: primaryColor, color: secondaryColor }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Experience;
