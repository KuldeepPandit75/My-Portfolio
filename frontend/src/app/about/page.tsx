"use client";

import { useThemeStore } from "@/src/Zustand_Store/ThemeStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const AboutPage = () => {
  const { primaryColor, tertialColor } = useThemeStore();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // ── Desktop (sm and above: ≥640px) ──────────────────────────────────────
    mm.add("(min-width: 640px)", () => {
      gsap.to("#profileImg", {
        y: "-150",
        ease: "none",
        scrollTrigger: {
          trigger: "#profileImg",
          start: "top 25%",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.from("#info > *", {
        y: 100,
        opacity: 0,
        stagger: { each: 0.2, from: "end" },
        scrollTrigger: {
          trigger: "#info",
          start: "top 120%",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      gsap.from("#education > *", {
        y: 100,
        opacity: 0,
        stagger: { each: 0.2 },
        scrollTrigger: {
          trigger: "#education",
          start: "top 120%",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.from("#community", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: "#community",
          start: "top 120%",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.from("#publicSpeaking>*", {
        y: 100,
        opacity: 0,
        stagger: { each: 0.2, from: "end" },
        scrollTrigger: {
          trigger: "#publicSpeaking",
          start: "top 120%",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.from("#communityGroup>*", {
        y: 100,
        opacity: 0,
        stagger: { each: 0.2, from: "end" },
        scrollTrigger: {
          trigger: "#communityGroup",
          start: "top 120%",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.from("#hobbies>*", {
        y: 100,
        opacity: 0,
        stagger: { each: 0.2, from: "end" },
        scrollTrigger: {
          trigger: "#hobbies",
          start: "top 100%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      gsap.from("#motto", {
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: "#motto",
          start: "top 120%",
          end: "bottom 80%",
          scrub: 1,
        },
      });
    });

    // ── Mobile (< 640px) ────────────────────────────────────────────────────
    // Use "top 85%" so animations trigger as sections enter the viewport,
    // not 120% below it (which leaves elements stuck off-screen on small displays).
    mm.add("(max-width: 639px)", () => {
      gsap.from("#info > *", {
        y: 60,
        opacity: 0,
        stagger: { each: 0.2, from: "start" },
        scrollTrigger: {
          trigger: "#info",
          start: "top 95%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      gsap.from("#education > *", {
        y: 60,
        opacity: 0,
        stagger: { each: 0.2 },
        scrollTrigger: {
          trigger: "#education",
          start: "top 85%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      gsap.from("#community", {
        y: 60,
        opacity: 0,
        scrollTrigger: {
          trigger: "#community",
          start: "top 85%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      gsap.from("#publicSpeaking>*", {
        y: 60,
        opacity: 0,
        stagger: { each: 0.2, from: "start" },
        scrollTrigger: {
          trigger: "#publicSpeaking",
          start: "top 85%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      gsap.from("#communityGroup>*", {
        y: 60,
        opacity: 0,
        stagger: { each: 0.2, from: "start" },
        scrollTrigger: {
          trigger: "#communityGroup",
          start: "top 85%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      gsap.from("#hobbies>*", {
        y: 60,
        opacity: 0,
        stagger: { each: 0.2, from: "start" },
        scrollTrigger: {
          trigger: "#hobbies",
          start: "top 85%",
          end: "bottom 65%",
          scrub: 1,
        },
      });

      gsap.from("#motto", {
        y: 60,
        opacity: 0,
        scrollTrigger: {
          trigger: "#motto",
          start: "top 95%",
          end: "bottom 65%",
          scrub: 1,
        },
      });
    });
  });

  return (
    <div id="about" className="px-6 sm:px-10 md:px-[120px] lg:px-[180px]">
      <div
        id="title"
        className="flex sm:flex-row flex-col-reverse justify-between items-center h-[62vh] sm:h-[80vh] sm:ml-10 mb-[50px] mt-[22vh] sm:mt-[12vh]"
      >
        <div className="text-center sm:text-left">
          <h1
            className="text-[clamp(40px,5vw,80px)] font-coolvetica sm:w-[30vw] sm:leading-[100px] tracking-widest text-center sm:text-left w-full"
            style={{ color: primaryColor }}
          >
            Kuldeep Pandit
          </h1>
          <h1
            className="text-3xl font-coolvetica mt-4"
            style={{ WebkitTextStroke: `2px ${tertialColor}` }}
          >
            &#60; कुलदीप पंडित / &#62;
          </h1>
        </div>
        <Image
          src="/images/aboutHead24.webp"
          alt="profile"
          id="profileImg"
          width={600}
          height={600}
        />
        <div
          style={{
            background:
              "radial-gradient(60.87% 40.94% at 54.79% 56.77%, rgba(255, 255, 255, 0.00) 0%, #F0EBE7 100%)",
          }}
          className="absolute  top-0 right-0 w-screen h-[95vh] opacity-70"
        ></div>
      </div>
      <div
        id="info"
        className="flex sm:flex-row flex-col justify-center items-center relative mb-[150px]"
      >
        <div className="w-full sm:w-[50%] flex justify-center sm:justify-end mb-8 sm:mb-0">
          <div className="relative sm:right-[90px] w-[80%] max-w-[400px] sm:max-w-none sm:h-[80vh] sm:w-fit">
            <Image
              src="/images/aboutInfo.webp"
              alt="profile"
              className="w-full h-auto sm:h-full sm:w-auto object-contain"
              width={500}
              height={500}
            />
            <div
              className="absolute inset-0 pointer-events-none opacity-70"
              style={{
                background:
                  "radial-gradient(78.05% 80.37% at 54.53% 44.08%, rgba(240, 235, 231, 0.00) 0%, #F0EBE7 86.18%)",
              }}
            ></div>
          </div>
        </div>

        <div className="sm:w-[50%]">
          <h1
            className="font-coolvetica text-xs sm:text-sm md:text-md tracking-[4px] text-left mb-8"
            style={{ color: primaryColor }}
          >
            INFO
          </h1>
          <p className="font-coolvetica text-lg sm:text-sm md:text-lg text-left opacity-65">
            I’m an undergraduate student at the JSS Academy of Technical
            Education, Noida, pursuing CSE - Data Science, graduating in
            September 2027.
            <br />
            <br />
            My journey into technology began through development, driven by a
            deep fascination with the ability to build and bring ideas to life.
            During my early academic years, I focused heavily on software
            development, where I built multiple secure web applications, SaaS
            platforms, and gained industry exposure through an internship at a
            startup. This phase helped me develop a strong foundation in system
            design, problem solving, and scalable application architecture.
            <br />
            <br />
            As I progressed, my curiosity expanded beyond building interfaces
            and systems toward understanding the intelligence behind data-driven
            decision making. This led me to transition deeper into data science,
            where I began focusing on algorithmic thinking, analytical modeling,
            and extracting meaningful insights from data. By combining my
            development background with data science, I aim to create solutions
            that are not only technically robust but also intelligent, scalable,
            and impactful. I continue to explore the intersection of software
            engineering and data science, constantly learning, building, and
            experimenting with technologies that enable smarter digital
            experiences.
          </p>
        </div>

        <div></div>
      </div>

      <div
        id="education"
        className="mt-24 mb-32 flex sm:flex-row flex-col justify-between items-center gap-10 relative"
      >
        {/* Left: text */}
        <div className="w-full sm:w-[50%]">
          <h2
            className="font-coolvetica text-xs sm:text-sm md:text-md tracking-[4px] mb-10"
            style={{ color: primaryColor }}
          >
            EDUCATION
          </h2>

          <div className=" max-w-[540px] bg-[#F0EBE7]/40">
            <h3 className="font-coolvetica text-2xl sm:text-3xl md:text-4xl leading-snug mb-4">
              JSS Academy of Technical
              <br />
              Education, Noida
            </h3>

            <p className="font-coolvetica text-xs sm:text-sm md:text-base opacity-40 mb-2">
              2023 - 2027
            </p>

            <p className="font-coolvetica text-xs sm:text-sm md:text-lg opacity-65">
              Bachelor of Technology in Computer Science - Data Science
            </p>
          </div>
        </div>

        {/* Right: image with radial overlay */}
        <div className="w-full sm:w-[50%] flex justify-end">
          <div className="relative w-full max-w-[600px] h-[260px] sm:h-[320px] md:h-[360px] overflow-hidden">
            <Image
              src="/images/jss.webp"
              alt="JSS Academy of Technical Education, Noida campus"
              fill
              className="object-cover mt-8"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(60.07% 74.47% at 50% 50%, rgba(217, 217, 217, 0.00) 0%, #F0EBE7 100%)",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Community & Presence section */}
      <section className="mb-32">
        <h2
          className="font-coolvetica text-xs sm:text-sm md:text-md tracking-[4px] mb-10"
          style={{ color: primaryColor }}
          id="community"
        >
          COMMUNITY &amp; PRESENCE
        </h2>

        <div
          id="publicSpeaking"
          className="grid md:grid-cols-2 gap-16 items-center mb-20"
        >
          {/* Top-left: text about public speaking */}
          <div>
            <p
              className="font-coolvetica text-lg sm:text-sm md:text-lg leading-relaxed max-w-xl"
              style={{ color: `#00000090` }}
            >
              I&apos;ve received multiple opportunities in{" "}
              <span className="font-semibold" style={{ color: `#000000` }}>
                public speaking
              </span>
              , each helping me grow more confident and expressive. I enjoy
              sharing ideas, simplifying technical concepts, and interacting
              with diverse audiences, allowing me to communicate thoughts
              clearly beyond code.
            </p>
          </div>

          {/* Top-right: smaller community image with overlay */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[420px] h-[320px] overflow-hidden rounded-[32px]">
              <Image
                src="/images/community1.webp"
                alt="Speaking and community events"
                fill
                className="object-contain"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(93.27% 78.91% at 61.38% 50%, rgba(240, 235, 231, 0.00) 0%, #F0EBE7 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div
          id="communityGroup"
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Bottom-left: large community image with overlay */}
          <div className="flex">
            <div className="relative w-full max-w-[520px] h-[280px] sm:h-[320px] overflow-hidden rounded-[32px]">
              <Image
                src="/images/community2.webp"
                alt="Community group and hackathon moments"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(93.2% 78.91% at 61.38% 50%, rgba(240, 235, 231, 0.00) 0%, #F0EBE7 100%)",
                }}
              ></div>
            </div>
          </div>

          {/* Bottom-right: text about events & hackathons */}
          <div className="flex items-center">
            <p
              className="font-coolvetica text-lg sm:text-sm md:text-lg leading-relaxed max-w-xl text-right"
              style={{ color: `#00000090` }}
            >
              I&apos;ve participated in and won multiple technical{" "}
              <span className="font-semibold" style={{ color: `#000000` }}>
                events and hackathons
              </span>
              , gaining experience in teamwork, problem solving, and building
              innovative solutions. These experiences also helped me build
              valuable connections with developers, mentors, and professionals
              across the{" "}
              <span className="font-semibold" style={{ color: `#000000` }}>
                tech community
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Motto & Hobbies section */}
      <div className="grid md:grid-cols-[1.2fr,1fr] gap-16 items-start">
        {/* Right: hobby image with overlay */}
        <div
          id="hobbies"
          className="flex sm:flex-row flex-col justify-between items-center"
        >
          <div className="w-full">
            <h3
              className="font-coolvetica text-xs sm:text-sm md:text-md tracking-[4px] mb-6 sm:mb-14"
              style={{ color: primaryColor }}
            >
              THINGS I LOVE TO DO
            </h3>
            <p className="font-coolvetica text-xl sm:text-lg md:text-4xl   leading-relaxed max-w-xl text-center sm:text-left mb-10 sm:mb-0">
              Travelling to new places
              <br />
              Playing Guitar
              <br />
              Working Out
            </p>
          </div>
          <div className="relative w-full max-w-[460px] h-[220px] sm:h-[320px] overflow-hidden rounded-[32px]">
            <Image
              src="/images/hobby.webp"
              alt="Hobbies collage"
              fill
              className="object-contain"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(85.87% 71.98% at 50% 50%, rgba(217, 217, 217, 0.00) 0%, #F0EBE7 100%)",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Left: text blocks */}
      <div className="space-y-16 my-26">
        <div id="motto">
          <h3
            className="font-coolvetica text-xs sm:text-sm md:text-md tracking-[4px] mb-14"
            style={{ color: primaryColor }}
          >
            MY MOTTO
          </h3>
          <p className="font-coolvetica text-2xl sm:text-xl md:text-4xl leading-relaxed w-full text-center ">
            “I work until the work speaks for itself.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
