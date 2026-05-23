"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AppStoreButton } from "@/components/ui/Button";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const featurePills = [
  { label: "AI Meal Scan", top: "10%", right: "-8%", delay: 0.8 },
  { label: "Fasting", top: "45%", right: "-12%", delay: 1.1 },
  { label: "9000+ Recipes", bottom: "18%", left: "-6%", delay: 1.4 },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFBF5] via-[#f5faf6] to-[#FFFBF5] py-20 md:py-28 lg:py-32">
      {/* Ambient background gradients */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top-right sage/emerald orb */}
        <div className="absolute -top-24 right-[10%] h-[500px] w-[500px] rounded-full bg-emerald-300/15 blur-[120px]" />
        {/* Bottom-left mint orb */}
        <div className="absolute -bottom-32 -left-16 h-[450px] w-[450px] rounded-full bg-emerald-200/10 blur-[100px]" />
        {/* Center subtle sage glow */}
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.07] blur-[140px]" />
        {/* Warm gold accent orb */}
        <div className="absolute right-[30%] top-[20%] h-[200px] w-[200px] rounded-full bg-amber-300/10 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Text content */}
          <AnimatedSection className="flex-1 text-center lg:text-left">
            {/* Wellness badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 ring-1 ring-emerald-200/60">
                ✨ Trusted by 150,000+ health-conscious people
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="mt-6 text-5xl font-bold tracking-tight text-slate-800 sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              Your Complete{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                Wellness
              </span>{" "}
              Companion
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Track nutrition, scan meals with AI, follow personalized plans,
              monitor fasting, and get intelligent coaching — everything you need
              for a healthier, happier life.
            </motion.p>

            {/* Warm gold accent line */}
            <motion.div
              className="mx-auto mt-8 h-0.5 w-12 rounded-full bg-gradient-to-r from-amber-300 to-amber-200 lg:mx-0"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            />

            {/* App Store buttons */}
            <motion.div
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <AppStoreButton store="apple" />
              <AppStoreButton store="google" />
            </motion.div>
          </AnimatedSection>

          {/* Phone mockup area */}
          <AnimatedSection className="relative flex-1">
            {/* Emerald glow behind phone */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.12] blur-[80px]" />
            <div className="pointer-events-none absolute left-[40%] top-[40%] h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/20 blur-[60px]" />

            {/* Floating phone */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex justify-center"
            >
              <PhoneMockup>
                <div className="relative aspect-[9/19.5] w-full">
                  <Image
                    src="/screenshots/IMG_5840.PNG"
                    alt="MyNutriRise Dashboard"
                    fill
                    className="object-cover object-top"
                    sizes="300px"
                    priority
                  />
                </div>
              </PhoneMockup>
            </motion.div>

            {/* Floating feature pills */}
            {featurePills.map((pill) => (
              <motion.span
                key={pill.label}
                className="absolute hidden rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-200/60 backdrop-blur-sm md:block"
                style={{
                  top: pill.top,
                  right: pill.right,
                  bottom: pill.bottom,
                  left: pill.left,
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: pill.delay,
                  ease: "easeOut",
                }}
              >
                {pill.label}
              </motion.span>
            ))}
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            className="h-5 w-5 text-slate-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
