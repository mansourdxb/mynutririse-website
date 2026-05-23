"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const row1 = [
  { src: "/screenshots/IMG_5840.PNG", label: "Smart Dashboard" },
  { src: "/screenshots/IMG_5854.PNG", label: "Macro Tracking" },
  { src: "/screenshots/IMG_5842.PNG", label: "AI Coach" },
  { src: "/screenshots/IMG_5847.PNG", label: "Fasting Timer" },
  { src: "/screenshots/IMG_5843.PNG", label: "9,000+ Recipes" },
  { src: "/screenshots/IMG_5849.PNG", label: "AI Meal Plans" },
  { src: "/screenshots/IMG_5850.PNG", label: "Food Search" },
  { src: "/screenshots/IMG_5851.PNG", label: "Exercise Tracker" },
  { src: "/screenshots/IMG_5873.PNG", label: "Wellness Score" },
  { src: "/screenshots/IMG_5852.PNG", label: "Micronutrients" },
  { src: "/screenshots/IMG_5869.PNG", label: "Meal Log" },
];

const row2 = [
  { src: "/screenshots/IMG_5877.PNG", label: "Exercise Log" },
  { src: "/screenshots/IMG_5841.PNG", label: "Diet Plans" },
  { src: "/screenshots/IMG_5879.PNG", label: "Wearables" },
  { src: "/screenshots/IMG_5880.PNG", label: "Achievements" },
  { src: "/screenshots/IMG_5882.PNG", label: "Challenges" },
  { src: "/screenshots/IMG_5853.PNG", label: "Weekly Report" },
  { src: "/screenshots/IMG_5867.PNG", label: "Weight Progress" },
  { src: "/screenshots/IMG_5857.PNG", label: "Meal Timing" },
  { src: "/screenshots/IMG_5876.PNG", label: "Fasting Masterclass" },
  { src: "/screenshots/IMG_5887.PNG", label: "Quick Actions" },
  { src: "/screenshots/IMG_5861.PNG", label: "Cultural Diets" },
];

function ScreenCard({ src, label }: { src: string; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex-shrink-0 w-[160px] sm:w-[190px] lg:w-[210px] cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-200/60 ring-1 ring-slate-100 transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-emerald-200/30 group-hover:ring-emerald-200">
        <div className="relative aspect-[9/19.5] w-full">
          <Image
            src={src}
            alt={label}
            fill
            className="object-cover object-top"
            sizes="210px"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="text-xs font-semibold text-white drop-shadow-sm">{label}</span>
        </div>
      </div>
    </motion.div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
  speed = 30,
}: {
  items: typeof row1;
  direction?: "left" | "right";
  speed?: number;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-4 sm:gap-5"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {doubled.map((s, i) => (
          <ScreenCard key={`${s.src}-${i}`} src={s.src} label={s.label} />
        ))}
      </motion.div>
    </div>
  );
}

export function AppShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-gradient-to-b from-[#FFFBF5] via-emerald-50/30 to-[#FFFBF5] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-emerald-600 mb-4">
            See It In Action
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-800">
            Beautiful screens,{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              endless possibilities
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Every screen designed with care. Explore the complete MyNutriRise experience.
          </p>
        </AnimatedSection>
      </div>

      <motion.div style={{ opacity }} className="space-y-5 sm:space-y-6">
        <MarqueeRow items={row1} direction="left" speed={40} />
        <MarqueeRow items={row2} direction="right" speed={45} />
      </motion.div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#FFFBF5] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#FFFBF5] to-transparent z-10" />
    </section>
  );
}
