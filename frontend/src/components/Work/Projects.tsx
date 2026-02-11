import { memo, useRef } from "react";
import { useThemeStore } from "@/src/Zustand_Store/ThemeStore";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Projects = memo(() => {
  const { primaryColor, secondaryColor } = useThemeStore();
  const project = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const children = project.current?.children;
    if (children) {
      Array.from(children).forEach((child, idx) => {
        ScrollTrigger.create({
          trigger: child,
          start: "top 25%",
          end: "+=2000",
          scrub: true,
          // markers:true,
          animation: gsap.to(child, {
            scale: 0.8,
            backgroundColor: "#B9B3AF",
            y: -100,
          }),
        });
      });
    }
  });

  return (
    <div className="pt-[210px]">
      <h1
        className="px-[200px] font-coolvetica text-md tracking-[4px] opacity-70 mb-[8vh]"
        style={{ color: secondaryColor }}
      >
        PROJECTS
      </h1>
      <div className="px-[250px]" ref={project}>
        {/* VaultMeet */}
        <div
          className="h-[65vh] rounded-4xl sticky top-[25vh]"
          style={{ backgroundColor: secondaryColor }}
        >
          <div className="w-full mx-[50px] py-[30px] flex font-coolvetica items-center text-[1.8rem] tracking-widest">
            <Image
              src="/icons/vm.svg"
              alt="vm"
              className="mt-[10px]"
              width={80}
              height={80}
            />
            <h2>VaultMeet</h2>
          </div>
          <div className="flex justify-between mx-[50px] font-coolvetica items-center gap-[50px] h-[60%]">
            <div className="flex flex-col gap-[30px]">
              <p className="tracking-[4px]">SAAS PLATFORM</p>
              <p className="text-4xl">Where Virtual Events Feel Real.</p>
              <div className="flex gap-[20px] items-center mt-[20px]">
                <a
                  href="https://vaultmeet.xyz"
                  target="_blank"
                  className="px-[20px] py-[10px] rounded-full"
                  style={{ backgroundColor: primaryColor, color: "white" }}
                >
                  Visit Platform &nbsp; &nbsp; &nbsp; --&gt;
                </a>
              </div>
            </div>
            <div className="-mt-[80px]">
              <Image src="/images/vm.svg" alt="vm" width={500} height={500} />
            </div>
          </div>
        </div>
        {/* VedicVerse */}
        <div
          className="h-[65vh] rounded-4xl sticky top-[25vh] mt-[50px]"
          style={{ backgroundColor: secondaryColor }}
        >
          <div className="w-full mx-[50px] py-[30px] flex items-center text-[1.8rem] gap-6">
            <Image
              src="/icons/om.svg"
              alt="vm"
              className=""
              width={50}
              height={50}
            />
            <h2 className="font-samarkan tracking-normal text-4xl">
              VedicVerse
            </h2>
          </div>
          <div className="flex justify-between mx-[50px] font-coolvetica items-center gap-[50px] h-[70%]">
            <div className="flex flex-col gap-[30px]">
              <p className="tracking-[4px]">VEDIC KNOWLEDGE PLATFORM</p>
              <p className="text-3xl">
                Play, Explore, and Learn the Vedic World.
              </p>
              <div className="flex gap-[20px] items-center mt-[20px]">
                <a
                  href="https://vedic-verse.vercel.app/"
                  target="_blank"
                  className="px-[20px] py-[10px] rounded-full"
                  style={{ backgroundColor: primaryColor, color: "white" }}
                >
                  Visit Platform &nbsp; &nbsp; &nbsp; --&gt;
                </a>
              </div>
            </div>
            <div className="">
              <Image src="/images/vv.svg" alt="vv" width={800} height={800} />
            </div>
          </div>
        </div>
        {/* BirlaAI */}
        <div
          className="h-[65vh] rounded-4xl sticky top-[25vh] mt-[50px]"
          style={{ backgroundColor: secondaryColor }}
        >
          <div className="w-full mx-[50px] gap-4 py-[30px] flex items-center text-[1.8rem]">
            <Image
              src="/icons/pracai.svg"
              alt="vm"
              className=""
              width={60}
              height={60}
            />
            <h2 className="font-baloo">BirlaAI</h2>
          </div>
          <div className="flex justify-between mx-[50px] font-coolvetica items-center gap-[50px] h-[60%]">
            <div className="flex flex-col gap-[30px]">
              <p className="tracking-[4px]">EDTECH PLATFORM</p>
              <p className="text-4xl">Meta Space for Learning AI</p>
              <div className="flex gap-[20px] items-center mt-[20px]">
                <a
                  href="https://birlaai.in/"
                  target="_blank"
                  className="px-[20px] py-[10px] rounded-full"
                  style={{ backgroundColor: primaryColor, color: "white" }}
                >
                  Visit Platform &nbsp; &nbsp; &nbsp; --&gt;
                </a>
              </div>
            </div>
            <div className="">
              <Image
                src="/images/birlai.svg"
                alt="vm"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
        {/* Chat Analyzer */}
        <div
          className="h-[65vh] rounded-4xl sticky top-[25vh] mt-[50px]"
          style={{ backgroundColor: secondaryColor }}
        >
          <div className="w-full mx-[50px] py-[40px] flex font-coolvetica items-center text-[1.8rem] gap-5">
            <Image
              src="/icons/chat.svg"
              alt="vm"
              className=""
              width={45}
              height={45}
            />
            <h2>Chat Analyzer</h2>
          </div>
          <div className="flex justify-between mx-[50px] font-coolvetica items-center gap-[50px] h-[60%]">
            <div className="flex flex-col gap-[30px]">
              <p className="tracking-[4px]">CHAT ANALYZING PLATFORM</p>
              <p className="text-4xl">Read the Real Story Behind Chats.</p>
              <div className="flex gap-[20px] items-center mt-[20px]">
                <a
                  href="https://whatsapp-chat-analyzer-tan.vercel.app/"
                  target="_blank"
                  className="px-[20px] py-[10px] rounded-full"
                  style={{ backgroundColor: primaryColor, color: "white" }}
                >
                  Visit Platform &nbsp; &nbsp; &nbsp; --&gt;
                </a>
              </div>
            </div>
            <div className="mt-[50px]">
              <Image src="/images/chat.svg" alt="vm" width={500} height={500} />
            </div>
          </div>
        </div>
        {/* VaulTrade */}
        <div
          className="h-[65vh] rounded-4xl sticky top-[25vh] mt-[50px]"
          style={{ backgroundColor: secondaryColor }}
        >
          <div className="w-full mx-[50px] py-[40px] flex font-coolvetica items-center text-[1.8rem] gap-5">
            <Image
              src="/icons/vt.svg"
              alt="vm"
              className=""
              width={45}
              height={45}
            />
            <h2>VaulTrade</h2>
          </div>
          <div className="flex justify-between mx-[50px] font-coolvetica items-center gap-[50px] h-[60%]">
            <div className="flex flex-col gap-[30px]">
              <p className="tracking-[4px]">PAPER TRADING PLATFORM</p>
              <p className="text-4xl">Your Safe Space to Master Trading.</p>
              <div className="flex gap-[20px] items-center mt-[20px]">
                <a
                  href="https://vault-trade-omega.vercel.app/"
                  target="_blank"
                  className="px-[20px] py-[10px] rounded-full"
                  style={{ backgroundColor: primaryColor, color: "white" }}
                >
                  Visit Platform &nbsp; &nbsp; &nbsp; --&gt;
                </a>
              </div>
            </div>
            <div className="mt-[40px]">
              <Image src="/images/vt.svg" alt="vm" width={600} height={600} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;
