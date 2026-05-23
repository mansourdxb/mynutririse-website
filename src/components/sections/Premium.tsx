"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const features = [
  {
    title: "Advanced Micronutrients",
    description:
      "Track 20+ vitamins and minerals. Understand your nutritional gaps with detailed breakdowns and smart suggestions.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714a2.25 2.25 0 0 0 .659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.46 1.46a2.25 2.25 0 0 1-1.591.659H8.051a2.25 2.25 0 0 1-1.591-.659L5 14.5m14 0V19a2.25 2.25 0 0 1-2.25 2.25H7.25A2.25 2.25 0 0 1 5 19v-4.5"
        />
      </svg>
    ),
  },
  {
    title: "AI-Powered Insights",
    description:
      "Deep analysis of eating patterns, trends, and personalized improvement plans tailored to your unique body.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
        />
      </svg>
    ),
  },
  {
    title: "Smart Meal Plans",
    description:
      "AI-generated daily and weekly plans calibrated to your goals. Keto, Mediterranean, High Protein, and more.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
        />
      </svg>
    ),
  },
  {
    title: "Enhanced Coaching",
    description:
      "Priority AI coaching with detailed meal analysis, recipe creation, and comprehensive wellness guidance.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    ),
  },
];

export function Premium() {
  return (
    <section id="premium" className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-green-50/30 to-[#FFFBF5] py-24 sm:py-32">
      {/* Soft decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-teal-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-medium tracking-wide text-emerald-600 uppercase">
            Premium
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
            Unlock your full potential
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            Premium gives you deeper insights and smarter tools for optimal
            wellness.
          </p>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group relative h-full overflow-hidden rounded-3xl border-t-[3px] border-emerald-400 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="relative">
                  <div className="mb-4 inline-flex rounded-full bg-emerald-50 p-3 text-emerald-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    {feature.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-500">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="mt-14 text-center">
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-500/25 transition-colors duration-200 hover:bg-emerald-600 hover:shadow-emerald-500/40"
          >
            Start Free Trial
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
