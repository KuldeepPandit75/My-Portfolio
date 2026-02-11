"use client";

import { useStore } from "@/src/Zustand_Store/Store";
import { useThemeStore } from "@/src/Zustand_Store/ThemeStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";

// Define all resources that need to be loaded
const RESOURCES = {
  images: [
    "/images/bgirl.png",
    "/images/boy.png",
    "/images/boy2.png",
    "/images/sgirl.png",
    "/images/footer.png",
    "/icons/bulletTri.svg",
    "/icons/logo.png",
  ],
  fonts: [
    { family: "Sugo", weight: "900" },
    { family: "Coolvetica", weight: "400" },
  ],
  sections: ["Hero", "About", "Projects", "Skills", "Experience", "Hackathons"],
};

type LoadingItem = {
  name: string;
  status: "pending" | "loading" | "loaded" | "error";
  type: "image" | "font" | "section";
};

const LoadingScreen = () => {
  const { primaryColor, secondaryColor, tertialColor } = useThemeStore();
  const { loadingComplete, setLoadingComplete } = useStore();
  const [loadingItems, setLoadingItems] = useState<LoadingItem[]>([]);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    // Initialize loading items
    const items: LoadingItem[] = [
      ...RESOURCES.images.map((url) => ({
        name: url.split("/").pop()?.split(".")[0] || url,
        status: "pending" as const,
        type: "image" as const,
      })),
      ...RESOURCES.fonts.map((font) => ({
        name: `${font.family} Font`,
        status: "pending" as const,
        type: "font" as const,
      })),
      ...RESOURCES.sections.map((section) => ({
        name: section,
        status: "pending" as const,
        type: "section" as const,
      })),
    ];
    setLoadingItems(items);

    // Start loading resources
    loadAllResources(items);
  }, []);

  const loadAllResources = async (items: LoadingItem[]) => {
    const totalItems = items.length;
    let loadedCount = 0;

    const updateProgress = (
      itemName: string,
      status: "loading" | "loaded" | "error",
    ) => {
      setLoadingItems((prev) =>
        prev.map((item) =>
          item.name === itemName ? { ...item, status } : item,
        ),
      );

      if (status === "loaded" || status === "error") {
        loadedCount++;
        const newProgress = Math.round((loadedCount / totalItems) * 100);
        setProgress(newProgress);

        // Check if all items are loaded
        if (loadedCount === totalItems) {
          setTimeout(() => {
            // Animate out
            if (containerRef.current) {
              gsap.to(containerRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut",
                onComplete: () => {
                  setLoadingComplete(true);
                },
              });
            }
          }, 500);
        }
      }
    };

    // Load images
    const imagePromises = RESOURCES.images.map((url, index) => {
      return new Promise<void>((resolve) => {
        const itemName = url.split("/").pop()?.split(".")[0] || url;

        // Stagger the start of image loading
        setTimeout(() => {
          updateProgress(itemName, "loading");

          const img = new Image();
          img.onload = () => {
            updateProgress(itemName, "loaded");
            resolve();
          };
          img.onerror = () => {
            updateProgress(itemName, "error");
            resolve();
          };
          img.src = url;
        }, index * 100); // Stagger by 100ms
      });
    });

    // Load fonts
    const fontPromises = RESOURCES.fonts.map((font, index) => {
      return new Promise<void>((resolve) => {
        const itemName = `${font.family} Font`;

        setTimeout(
          () => {
            updateProgress(itemName, "loading");

            if (document.fonts && document.fonts.load) {
              document.fonts
                .load(`${font.weight} 1em ${font.family}`)
                .then(() => {
                  updateProgress(itemName, "loaded");
                  resolve();
                })
                .catch(() => {
                  updateProgress(itemName, "error");
                  resolve();
                });
            } else {
              // Fallback if Font Loading API is not available
              setTimeout(() => {
                updateProgress(itemName, "loaded");
                resolve();
              }, 300);
            }
          },
          (RESOURCES.images.length + index) * 100,
        );
      });
    });

    // Simulate section preparation
    const sectionPromises = RESOURCES.sections.map((section, index) => {
      return new Promise<void>((resolve) => {
        setTimeout(
          () => {
            updateProgress(section, "loading");
            setTimeout(() => {
              updateProgress(section, "loaded");
              resolve();
            }, 200);
          },
          (RESOURCES.images.length + RESOURCES.fonts.length + index) * 100,
        );
      });
    });

    // Wait for all resources
    await Promise.all([...imagePromises, ...fontPromises, ...sectionPromises]);
  };

  // Animate progress bar
  useGSAP(() => {
    if (progressRef.current) {
      const circle = progressRef.current;
      const radius = 70;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (progress / 100) * circumference;

      gsap.to(circle, {
        strokeDashoffset: offset,
        duration: 0.5,
        ease: "power2.out",
      });

      // When 100%, animate the start point to end point (complete circle)
      if (progress === 100) {
        setTimeout(() => {
          gsap.to(circle, {
            strokeDasharray: `${circumference} 0`,
            duration: 0.8,
            ease: "power2.inOut",
          });
        }, 300);
      }
    }
  }, [progress]);

  // Don't render if loading is complete
  if (loadingComplete) return null;

  const loadedItems = loadingItems.filter(
    (item) => item.status === "loaded" || item.status === "error",
  );

  // Circle properties
  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-10000 flex flex-col items-center justify-center"
      style={{
        backgroundColor: secondaryColor,
      }}
    >
      <div className="w-full max-w-md px-8 flex flex-col items-center">
        {/* Loading Title */}
        {/* <h1
          className="text-4xl font-sugo font-black tracking-[4px] mb-8 text-center"
          style={{ color: primaryColor }}
        >
          LOADING
        </h1> */}

        {/* Loading Items List */}
        {/* <div className="mb-8 min-h-[200px] max-h-[300px] overflow-y-auto">
          {loadedItems.map((item, index) => (
            <div
              key={item.name}
              className="flex items-center gap-3 mb-3 font-sugo tracking-[2px] text-sm"
              style={{
                animation: `fadeInUp 0.3s ease-out both`,
              }}
            >
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{
                  backgroundColor:
                    item.status === "error" ? "#f00" : primaryColor,
                }}
              />
              <span
                className="truncate flex-1"
                style={{ color: primaryColor, opacity: 0.8 }}
              >
                {item.name}
              </span>
              <span
                className="ml-auto text-sm shrink-0"
                style={{ color: primaryColor, opacity: 0.5 }}
              >
                {item.status === "loaded"
                  ? "✓"
                  : item.status === "error"
                    ? "✗"
                    : "..."}
              </span>
            </div>
          ))}
        </div> */}

        {/* Circular Progress Bar */}
        <div className="relative w-48 h-48 mb-8">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 160 160"
          >
            {/* Progress Circle */}
            <circle
              ref={progressRef}
              cx="80"
              cy="80"
              r={radius}
              fill="none"
              stroke={tertialColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              style={{
                transition: "stroke-dashoffset 0.5s ease-out",
              }}
            />
          </svg>

          {/* Percentage Text in Center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p
              className="text-5xl font-coolcond font-black tracking-wider"
              style={{ color: tertialColor }}
            >
              {progress}%
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
