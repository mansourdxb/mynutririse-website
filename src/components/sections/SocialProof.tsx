"use client";

import { motion } from "framer-motion";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";

const stats = [
  {
    value: "2M+",
    label: "Meals Tracked",
    bg: "bg-emerald-50",
    accent: "text-emerald-500",
    icon: (
      <svg
        className="h-6 w-6 text-emerald-400"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-3.223-3.223A8.963 8.963 0 0 0 12 15.75a8.963 8.963 0 0 0-5.777-2.223L3 16.75"
        />
      </svg>
    ),
  },
  {
    value: "150K+",
    label: "Wellness Journeys Started",
    bg: "bg-amber-50",
    accent: "text-amber-500",
    icon: (
      <svg
        className="h-6 w-6 text-amber-400"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
        />
      </svg>
    ),
  },
  {
    value: "4.8",
    label: "App Store Rating",
    bg: "bg-emerald-50/70",
    accent: "text-emerald-500",
    icon: (
      <svg
        className="h-6 w-6 text-emerald-400"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
    suffix: " ★",
  },
];

const testimonials = [
  {
    quote:
      "MyNutriRise completely changed how I think about food. The AI meal scan saves me so much time — I just snap a photo and everything is logged automatically.",
    name: "Sarah M.",
    role: "Fitness Enthusiast",
  },
  {
    quote:
      "The fasting tracker and personalized meal plans helped me lose 20 pounds in 3 months. It feels like having a nutritionist in my pocket.",
    name: "James K.",
    role: "Software Engineer",
  },
  {
    quote:
      "I love the micronutrient tracking — no other app gives me this level of detail. The AI coach suggestions are incredibly helpful and actually personalized.",
    name: "Dr. Emma R.",
    role: "Nutritionist",
  },
];

function Stars() {
  return (
    <div className="mb-3 flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-amber-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function AppStoreBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/60 px-5 py-2.5">
      <svg
        className="h-5 w-5 text-amber-400"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <span className="text-sm font-semibold text-slate-700">
        Rated 4.8 on the App Store
      </span>
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="relative bg-[#FFFBF5] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mx-auto mb-6 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
            Loved by people building healthier habits
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mx-auto mb-16 max-w-xl text-center">
          <p className="text-base leading-relaxed text-slate-500">
            Join a growing community of health-conscious people transforming
            their relationship with food and wellness.
          </p>
        </AnimatedSection>

        {/* Stats Row */}
        <StaggerContainer className="mx-auto mb-20 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div
                className={`flex flex-col items-center rounded-2xl ${stat.bg} px-6 py-8 text-center`}
              >
                <div className="mb-3">{stat.icon}</div>
                <span className="text-4xl font-bold text-slate-800">
                  {stat.value}
                </span>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Testimonials */}
        <StaggerContainer className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="group flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                {/* Decorative quote mark */}
                <span
                  className="mb-2 block text-3xl leading-none text-emerald-300"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <Stars />

                <blockquote className="mb-6 flex-1 text-[15px] italic leading-relaxed text-slate-600">
                  {t.quote}
                </blockquote>

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* App Store Badge */}
        <AnimatedSection delay={0.3} className="mt-14 text-center">
          <AppStoreBadge />
        </AnimatedSection>
      </div>
    </section>
  );
}
