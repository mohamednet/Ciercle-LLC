"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "Banking Platform",
    video: "/videos/project-1.mp4",
  },
  {
    name: "Cybersecurity Dashboard",
    video: "/videos/project-2.mp4",
  },
  {
    name: "Crypto Landing Page",
    video: "/videos/project-3.mp4",
  },
  {
    name: "Creative Agency Website",
    video: "/videos/project-4.mp4",
  },
  {
    name: "Modern Admin Dashboard",
    video: "/videos/project-5.mp4",
  },
  {
    name: "Repair Service Website",
    video: "/videos/project-6.mp4",
  },
];

export default function BrowserPreview() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % projects.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative" ref={ref}>
      <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-soft dark:shadow-soft-dark">
        <div className="relative w-full aspect-[16/9] bg-black overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {isVisible && (
                <video
                  src={projects[current].video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover"
                />
              )}
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

          <div className="absolute bottom-0 left-0 right-0 p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[current].name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-white/60 text-sm font-medium mb-1">
                  Project {String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </p>
                <p className="text-white text-2xl font-bold">
                  {projects[current].name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
