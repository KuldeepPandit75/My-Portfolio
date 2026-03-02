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

  useGSAP(
    () => {
      // On small screens, the pinned + flip interaction is hard to use.
      // Keep the layout responsive and only enable the scroll/pin animation on md+.
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
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
          "#card1",
          {
            x: -50,
            ease: "power2.out",
          },
          ">",
        );

        tl.to(
          "#card2",
          {
            x: 50,
            ease: "power2.out",
          },
          "<",
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
    },
    { scope: experience },
  );

  return (
    <section
      className="py-16 md:py-[150px] lg:py-0 px-[40px] sm:px-10 md:px-0 lg:px-[200px] lg:h-[calc(100vh+800px)] lg:relative"
      ref={experience}
    >
      <div className="lg:sticky lg:top-0 lg:h-screen lg:w-full lg:flex lg:flex-col lg:justify-center overflow-hidden lg:overflow-visible">
        <h1
          className="sm:px-10 md:px-[120px] lg:px-[160px] xl:px-[200px] font-coolvetica text-xs sm:text-sm md:text-md tracking-[4px] opacity-70 mb-[5vh] md:mb-[8vh] lg:hidden"
          style={{ color: secondaryColor }}
        >
          EXPERIENCE
        </h1>
        <h1
          id="exhead"
          className="font-sugo text-xl sm:text-2xl md:text-3xl text-center tracking-[3px] sm:tracking-[4px] opacity-0 -mb-[1vh] hidden lg:block"
          style={{ color: secondaryColor }}
        >
          EXPERIENCE
        </h1>
        <div
          className="flex flex-col md:flex-row items-center lg:items-stretch justify-center card-container gap-8 md:-space-x-[125px] lg:space-x-0  lg:gap-0 xl:scale-100 lg:scale-90"
          ref={cards}
        >
          <div
            id="card1"
            className="relative card w-full lg:max-w-[440px] md:max-w-[400px] md:min-w-[400px] flex flex-col rounded-[16px] md:rounded-[16px] lg:rounded-[16px_0_0_16px] rotate-y-180 md:rotate-y-180 md:rotate-z-6 lg:rotate-y-0 lg:rotate-z-0 lg:min-w-[440px] md:scale-75 lg:scale-100"
          >
            <div className="card-front h-[450px] sm:h-[420px] md:h-[500px] overflow-hidden">
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
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-8 md:gap-10 px-6 lg:ml-[20px]">
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
            className="card w-full md:max-w-[400px] lg:max-w-[440px] md:min-w-[400px] flex flex-col rounded-[16px] md:rounded-[16px] lg:rounded-[0_16px_16px_0] md:rotate-y-180 rotate-y-180 md:-rotate-z-6 lg:rotate-y-0 lg:rotate-z-0 lg:min-w-[440px] md:scale-75 lg:scale-100"
          >
            <div className="card-front h-[400px] sm:h-[420px] md:h-[500px] overflow-hidden">
              <Image
                src="/images/cright.png"
                className="brightness-70 w-full h-full object-cover"
                alt="cl"
                width={900}
                height={900}
                sizes="(max-width: 1024px) 90vw, 400px"
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
      </div>
    </section>
  );
});

export default Experience;
