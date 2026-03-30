"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const icons = [
  // Far left column
  {
    icon: "terminal",
    color: "bg-gray-800",
    size: "w-12 h-12",
    rounded: "rounded-xl",
    position: "-top-20 -left-40",
    rotate: 10,
    delay: 0,
    duration: 6,
    y: [-8, 8, -8],
    x: [0, 5, 0],
  },
  {
    icon: "javascript",
    color: "bg-yellow-500",
    size: "w-14 h-14",
    rounded: "rounded-2xl",
    position: "top-8 -left-48",
    rotate: -8,
    delay: 1.2,
    duration: 7,
    y: [6, -10, 6],
    x: [-4, 4, -4],
  },
  {
    icon: "code",
    color: "bg-primary",
    size: "w-11 h-11",
    rounded: "rounded-lg",
    position: "top-36 -left-36",
    rotate: 15,
    delay: 0.5,
    duration: 5.5,
    y: [-5, 7, -5],
    x: [3, -3, 3],
  },
  {
    icon: "cloud",
    color: "bg-sky-500",
    size: "w-13 h-13",
    rounded: "rounded-full",
    position: "bottom-4 -left-44",
    rotate: -12,
    delay: 1.8,
    duration: 8,
    y: [5, -8, 5],
    x: [-6, 2, -6],
  },
  {
    icon: "dns",
    color: "bg-indigo-500",
    size: "w-10 h-10",
    rounded: "rounded-xl",
    position: "-bottom-16 -left-32",
    rotate: 20,
    delay: 0.8,
    duration: 6.5,
    y: [-7, 5, -7],
    x: [4, -4, 4],
  },
  // Far right column
  {
    icon: "html",
    color: "bg-orange-600",
    size: "w-14 h-14",
    rounded: "rounded-2xl",
    position: "-top-16 -right-40",
    rotate: -10,
    delay: 0.3,
    duration: 7.5,
    y: [8, -8, 8],
    x: [-3, 6, -3],
  },
  {
    icon: "css",
    color: "bg-blue-500",
    size: "w-12 h-12",
    rounded: "rounded-xl",
    position: "top-12 -right-48",
    rotate: 12,
    delay: 1.5,
    duration: 5,
    y: [-6, 10, -6],
    x: [5, -2, 5],
  },
  {
    icon: "storage",
    color: "bg-emerald-600",
    size: "w-11 h-11",
    rounded: "rounded-full",
    position: "top-32 -right-36",
    rotate: -18,
    delay: 0.6,
    duration: 6,
    y: [7, -7, 7],
    x: [-5, 3, -5],
  },
  {
    icon: "php",
    color: "bg-purple-600",
    size: "w-13 h-13",
    rounded: "rounded-xl",
    position: "bottom-0 -right-44",
    rotate: 8,
    delay: 2,
    duration: 7,
    y: [-9, 6, -9],
    x: [3, -5, 3],
  },
  {
    icon: "cloud_upload",
    color: "bg-cyan-500",
    size: "w-10 h-10",
    rounded: "rounded-lg",
    position: "-bottom-14 -right-32",
    rotate: -15,
    delay: 1,
    duration: 5.5,
    y: [4, -8, 4],
    x: [-4, 6, -4],
  },
  // Extra scattered top/bottom
  {
    icon: "hub",
    color: "bg-pink-500",
    size: "w-10 h-10",
    rounded: "rounded-full",
    position: "-top-24 left-20",
    rotate: 6,
    delay: 0.9,
    duration: 6.5,
    y: [-6, 9, -6],
    x: [2, -4, 2],
  },
  {
    icon: "cloud_sync",
    color: "bg-teal-500",
    size: "w-10 h-10",
    rounded: "rounded-lg",
    position: "-top-24 right-20",
    rotate: -9,
    delay: 1.6,
    duration: 7,
    y: [5, -7, 5],
    x: [-3, 5, -3],
  },
  {
    icon: "database",
    color: "bg-amber-600",
    size: "w-11 h-11",
    rounded: "rounded-xl",
    position: "-bottom-20 left-24",
    rotate: 14,
    delay: 0.4,
    duration: 5,
    y: [-8, 6, -8],
    x: [4, -2, 4],
  },
  {
    icon: "api",
    color: "bg-red-500",
    size: "w-11 h-11",
    rounded: "rounded-full",
    position: "-bottom-20 right-24",
    rotate: -7,
    delay: 1.3,
    duration: 6,
    y: [7, -9, 7],
    x: [-5, 3, -5],
  },
  // Flutter / Dart
  {
    icon: "flutter_dash",
    color: "bg-sky-400",
    size: "w-13 h-13",
    rounded: "rounded-2xl",
    position: "-top-28 -left-28",
    rotate: -14,
    delay: 0.7,
    duration: 6,
    y: [7, -6, 7],
    x: [-3, 5, -3],
  },
  // Android
  {
    icon: "android",
    color: "bg-green-600",
    size: "w-14 h-14",
    rounded: "rounded-full",
    position: "top-24 -left-52",
    rotate: 9,
    delay: 1.1,
    duration: 7.5,
    y: [-7, 9, -7],
    x: [4, -3, 4],
  },
  // Ruby (diamond icon)
  {
    icon: "diamond",
    color: "bg-red-600",
    size: "w-11 h-11",
    rounded: "rounded-xl",
    position: "-bottom-24 -left-40",
    rotate: -11,
    delay: 0.2,
    duration: 5.5,
    y: [6, -8, 6],
    x: [-5, 4, -5],
  },
  // Linux
  {
    icon: "memory",
    color: "bg-gray-700",
    size: "w-12 h-12",
    rounded: "rounded-lg",
    position: "top-40 -right-50",
    rotate: 16,
    delay: 1.9,
    duration: 6.5,
    y: [-9, 7, -9],
    x: [3, -6, 3],
  },
  // Go
  {
    icon: "speed",
    color: "bg-cyan-600",
    size: "w-12 h-12",
    rounded: "rounded-full",
    position: "-top-28 -right-28",
    rotate: -13,
    delay: 0.6,
    duration: 5,
    y: [5, -10, 5],
    x: [-4, 3, -4],
  },
  // Node.js
  {
    icon: "hexagon",
    color: "bg-green-500",
    size: "w-13 h-13",
    rounded: "rounded-xl",
    position: "-bottom-24 -right-40",
    rotate: 11,
    delay: 1.4,
    duration: 7,
    y: [-6, 8, -6],
    x: [5, -4, 5],
  },
  // Docker / Container
  {
    icon: "inventory_2",
    color: "bg-[#7db1ff]",
    size: "w-10 h-10",
    rounded: "rounded-lg",
    position: "bottom-16 -left-52",
    rotate: -17,
    delay: 0.1,
    duration: 6,
    y: [8, -6, 8],
    x: [-3, 5, -3],
  },
  // TypeScript
  {
    icon: "data_array",
    color: "bg-blue-700",
    size: "w-11 h-11",
    rounded: "rounded-2xl",
    position: "-top-32 left-40",
    rotate: 7,
    delay: 2.1,
    duration: 5.5,
    y: [-5, 9, -5],
    x: [4, -3, 4],
  },
  // React
  {
    icon: "sync",
    color: "bg-cyan-400",
    size: "w-12 h-12",
    rounded: "rounded-full",
    position: "-top-32 right-40",
    rotate: -10,
    delay: 0.4,
    duration: 8,
    y: [6, -7, 6],
    x: [-5, 4, -5],
  },
  // Git
  {
    icon: "account_tree",
    color: "bg-orange-500",
    size: "w-10 h-10",
    rounded: "rounded-xl",
    position: "-bottom-28 left-44",
    rotate: 18,
    delay: 1.7,
    duration: 6,
    y: [-8, 5, -8],
    x: [3, -5, 3],
  },
  // Firebase
  {
    icon: "local_fire_department",
    color: "bg-amber-500",
    size: "w-11 h-11",
    rounded: "rounded-lg",
    position: "-bottom-28 right-44",
    rotate: -6,
    delay: 0.8,
    duration: 7,
    y: [7, -9, 7],
    x: [-4, 6, -4],
  },
  // Swift / Apple
  {
    icon: "apple",
    color: "bg-gray-900",
    size: "w-12 h-12",
    rounded: "rounded-full",
    position: "bottom-20 -right-52",
    rotate: 13,
    delay: 2.3,
    duration: 5.5,
    y: [-6, 8, -6],
    x: [5, -3, 5],
  },
  // Python
  {
    icon: "data_object",
    color: "bg-yellow-600",
    size: "w-10 h-10",
    rounded: "rounded-xl",
    position: "-top-32 -left-48",
    rotate: -20,
    delay: 1.0,
    duration: 6.5,
    y: [9, -7, 9],
    x: [-3, 5, -3],
  },
  // Kubernetes
  {
    icon: "sailing",
    color: "bg-blue-500",
    size: "w-11 h-11",
    rounded: "rounded-2xl",
    position: "-top-32 -right-48",
    rotate: 5,
    delay: 0.5,
    duration: 7.5,
    y: [-7, 6, -7],
    x: [4, -4, 4],
  },
];

export default function FloatingIcons() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { rootMargin: "200px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (!isVisible) return <div ref={ref} />;

  return (
    <div ref={ref}>
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute ${item.position} ${item.size} ${item.color} ${item.rounded} flex items-center justify-center shadow-lg opacity-60 max-md:scale-[0.6] max-md:opacity-40`}
          style={{ rotate: item.rotate }}
          animate={{
            y: item.y,
            x: item.x,
            rotate: [item.rotate, item.rotate + 5, item.rotate],
            scale: [1, 1.05, 1],
          }}
          transition={{
            y: { duration: item.duration, repeat: Infinity, ease: "easeInOut", delay: item.delay },
            x: { duration: item.duration + 1, repeat: Infinity, ease: "easeInOut", delay: item.delay },
            rotate: { duration: item.duration + 2, repeat: Infinity, ease: "easeInOut", delay: item.delay },
            scale: { duration: item.duration + 0.5, repeat: Infinity, ease: "easeInOut", delay: item.delay },
          }}
        >
          <span className="material-icons text-white text-xl drop-shadow-md">
            {item.icon}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
