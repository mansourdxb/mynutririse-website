"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { AppStoreButton } from "@/components/ui/Button";

export function CTA() {
  return (
    <section id="download" className="relative bg-[#FFFBF5] px-4 py-16 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 via-emerald-400 to-teal-400 py-20 lg:py-28">
        {/* Floating decorative elements */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 left-[8%] h-48 w-48 rounded-full bg-white/10 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 15, 0], x: [0, -12, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 right-[12%] h-64 w-64 rounded-full bg-teal-200/15 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-[25%] h-32 w-32 rounded-full bg-emerald-200/10 blur-2xl"
          />
          <motion.div
            animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-16 left-[30%] h-40 w-40 rounded-full bg-white/5 blur-2xl"
          />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8 lg:px-12">
          <AnimatedSection>
            <h2 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
              Start Your Wellness Journey Today
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Join thousands eating smarter and living better. Your healthier
              life is one download away.
            </p>
          </AnimatedSection>

          <AnimatedSection
            delay={0.2}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <AppStoreButton store="apple" />
            <AppStoreButton store="google" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
