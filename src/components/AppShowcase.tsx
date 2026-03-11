"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const apps = [
  { video: "/videos/app-1.mp4" },
  { video: "/videos/app-2.mp4" },
  { video: "/videos/app-3.mp4" },
  { video: "/videos/app-4.mp4" },
  { video: "/videos/app-5.mp4" },
  { video: "/videos/app-6.mp4" },
  { video: "/videos/app-7.mp4" },
  { video: "/videos/app-8.mp4" },
  { video: "/videos/app-9.mp4" },
  { video: "/videos/app-10.mp4" },
  { video: "/videos/app-11.mp4" },
  { video: "/videos/app-12.mp4" },
];

// Duplicate for seamless infinite scroll
const allApps = [...apps, ...apps];

export default function AppShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5; // pixels per frame

    const scroll = () => {
      scrollPos += speed;
      // Reset when we've scrolled through the first set
      const halfWidth = container.scrollWidth / 2;
      if (scrollPos >= halfWidth) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-24 overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white leading-[1.1] mb-6"
        >
          Apps we&apos;ve brought to life.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-medium"
        >
          Real products, real users — crafted from the ground up.
        </motion.p>
      </div>

      {/* Scrolling phone carousel */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden px-6"
        style={{ scrollBehavior: "auto" }}
      >
        {allApps.map((app, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[220px] md:w-[260px]"
          >
            {/* iPhone frame */}
            <div className="relative bg-black rounded-[2.5rem] p-[6px] shadow-xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90px] h-[22px] bg-black rounded-b-2xl z-10" />
              {/* Screen */}
              <div className="relative rounded-[2.2rem] overflow-hidden bg-gray-900 aspect-[9/19.5]">
                <video
                  src={app.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Home indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-[4px] bg-gray-600 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
