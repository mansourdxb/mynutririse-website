"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { CountUpValue } from "@/components/ui/CountUp";
import { CUISINE_COUNT, CUISINE_FLOOR } from "@/data/facts";
import { localePath, type Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { fill, rich } from "@/i18n/rich";

type T = Messages["features"];
type CardsT = T["cards"];

const hl = (c: React.ReactNode) => (
  <span className="text-emerald-600 dark:text-emerald-400">{c}</span>
);

function BlockPhone({ src, alt }: { src: string; alt: string }) {
  return (
    <PhoneMockup>
      <div className="relative aspect-[9/19.5] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="300px"
          loading="lazy"
        />
      </div>
    </PhoneMockup>
  );
}

/* ------------------------------------------------------------------ */
/*  Tiny icon components                                              */
/* ------------------------------------------------------------------ */

function CheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Floating card animation helpers                                   */
/* ------------------------------------------------------------------ */

const float1 = {
  y: [0, -8, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
};
const float2 = {
  y: [0, -6, 0],
  transition: {
    duration: 4.5,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: 0.8,
  },
};
const float3 = {
  y: [0, -10, 0],
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: 1.5,
  },
};
const float4 = {
  y: [0, -7, 0],
  transition: {
    duration: 4.2,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: 0.4,
  },
};

/* ------------------------------------------------------------------ */
/*  Bullet list helper                                                */
/* ------------------------------------------------------------------ */

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex-shrink-0 rounded-full bg-emerald-100 dark:bg-emerald-400/15 p-1 text-emerald-600 dark:text-emerald-400">
            <CheckIcon className="w-3.5 h-3.5" />
          </span>
          <span className="text-[15px] leading-relaxed text-ink-2">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/*  SVG circle ring helper                                            */
/* ------------------------------------------------------------------ */

function MacroRing({
  label,
  value,
  total,
  unit,
  color,
  percent,
  size = 72,
  strokeWidth = 6,
  delay = 0,
}: {
  label: string;
  value: number;
  total: number;
  unit: string;
  color: string;
  percent: number;
  size?: number;
  strokeWidth?: number;
  delay?: number;
}) {
  const r = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - percent / 100);

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full h-full -rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="#f1f5f9"
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-sm font-bold text-ink">{value}</span>
          <span className="text-[9px] text-ink-3">{unit}</span>
        </div>
      </div>
      <span className="text-[11px] font-medium" style={{ color }}>
        {label}
      </span>
      <span className="text-[9px] text-ink-3">
        / {total}
        {unit}
      </span>
    </div>
  );
}

/* ================================================================== */
/*  Block 1 : Smart Nutrition Intelligence                            */
/* ================================================================== */

function NutritionCards({ t }: { t: CardsT }) {
  return (
    <div className="relative mx-auto w-full max-w-md py-6">
      <BlockPhone
        src="/screenshots/scanned-food.png"
        alt={t.nutritionAlt}
      />
      {/* Calories card */}
      <motion.div
        animate={float1}
        className="relative mx-auto mt-4 sm:mx-0 sm:mt-0 sm:absolute sm:top-10 sm:start-0 w-56 rounded-2xl bg-surface/90 backdrop-blur border border-emerald-100/60 dark:border-emerald-400/20 shadow-lg shadow-emerald-900/5 p-5"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-3 mb-2">
          {t.calories}
        </p>
        <div className="flex items-end gap-1.5">
          <span className="text-3xl font-bold text-ink">
            <CountUpValue target={1693} />
          </span>
          <span className="text-sm text-ink-3 mb-1">{fill(t.caloriesOf, { n: "2,100" })}</span>
        </div>
        <div className="mt-3 h-2 rounded-full bg-emerald-100 dark:bg-emerald-400/15 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500"
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          />
        </div>
        <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
          {fill(t.kcalRemaining, { n: 407 })}
        </p>
      </motion.div>

      {/* Macros rings card */}
      <motion.div
        animate={float2}
        className="relative mx-auto mt-4 sm:mx-0 sm:mt-0 sm:absolute sm:bottom-16 sm:end-0 w-60 rounded-2xl bg-surface/90 backdrop-blur border border-purple-100/60 dark:border-purple-400/20 shadow-lg shadow-purple-900/5 p-5"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-3 mb-4">
          {t.macros}
        </p>
        <div className="flex justify-around">
          <MacroRing
            label={t.protein}
            value={120}
            total={150}
            unit={t.gramUnit}
            color="#8B5CF6"
            percent={80}
            delay={0.3}
          />
          <MacroRing
            label={t.carbs}
            value={159}
            total={230}
            unit={t.gramUnit}
            color="#F59E0B"
            percent={69}
            delay={0.5}
          />
          <MacroRing
            label={t.fat}
            value={53}
            total={70}
            unit={t.gramUnit}
            color="#FF7A6B"
            percent={76}
            delay={0.7}
          />
        </div>
      </motion.div>

    </div>
  );
}

/* ================================================================== */
/*  Block 2 : Your Wellness Ecosystem                                 */
/* ================================================================== */

function WellnessCards({ t }: { t: CardsT }) {
  return (
    <div className="relative mx-auto w-full max-w-md py-6">
      <BlockPhone
        src="/screenshots/today.png"
        alt={t.wellnessAlt}
      />
      {/* Fasting timer circle */}
      <motion.div
        animate={float2}
        className="relative mx-auto mt-4 sm:mx-0 sm:mt-0 sm:absolute sm:top-10 sm:end-0 w-48 rounded-2xl bg-surface/90 backdrop-blur border border-emerald-100/60 dark:border-emerald-400/20 shadow-lg shadow-emerald-900/5 p-5 flex flex-col items-center"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-3 mb-3">
          {t.fasting}
        </p>
        <div className="relative w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#D1FAE5"
              strokeWidth="8"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="url(#fastGrad)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={264}
              initial={{ strokeDashoffset: 264 }}
              whileInView={{ strokeDashoffset: 66 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
            <defs>
              <linearGradient id="fastGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#34D399" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-bold text-ink">16:08</span>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
              {t.remaining}
            </span>
          </div>
        </div>
        <p className="mt-2 text-xs text-ink-3">{t.protocol}</p>
      </motion.div>

      {/* Sleep badge */}
      <motion.div
        animate={float4}
        className="relative mx-auto mt-4 sm:mx-0 sm:mt-0 sm:absolute sm:bottom-16 sm:start-0 flex items-center gap-2.5 rounded-xl bg-surface/90 backdrop-blur border border-indigo-100/60 dark:border-indigo-400/20 shadow-md shadow-indigo-900/5 px-4 py-3"
      >
        <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-400/10 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-indigo-500 dark:text-indigo-400">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold text-ink-2">{fill(t.sleep, { h: 7, m: 42 })}</p>
          <p className="text-[11px] text-indigo-500 dark:text-indigo-400">{t.goodQuality}</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Block 3 : Intelligent Coaching & Insights                         */
/* ================================================================== */

function CoachingCards({ t }: { t: CardsT }) {
  return (
    <div className="relative mx-auto w-full max-w-md py-6">
      <BlockPhone
        src="/screenshots/ai-coach.png"
        alt={t.coachingAlt}
      />
      {/* Weekly report card */}
      <motion.div
        animate={float2}
        className="relative mx-auto mt-4 sm:mx-0 sm:mt-0 sm:absolute sm:bottom-16 sm:start-0 w-56 rounded-2xl bg-surface/90 backdrop-blur border border-violet-100/60 dark:border-violet-400/20 shadow-lg shadow-violet-900/5 p-4"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-violet-50 dark:bg-violet-400/10 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-violet-500 dark:text-violet-400"
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          </div>
          <p className="text-xs font-semibold text-ink-2">{t.weeklyReport}</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-violet-50/60 dark:bg-violet-400/10 rounded-lg p-2 text-center">
            <p className="text-sm font-bold text-violet-600 dark:text-violet-400">
              <CountUpValue target={86} suffix="%" />
            </p>
            <p className="text-[9px] text-ink-3">{t.consistency}</p>
          </div>
          <div className="bg-emerald-50/60 dark:bg-emerald-400/10 rounded-lg p-2 text-center">
            <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
              <CountUpValue target={2113} />
            </p>
            <p className="text-[9px] text-ink-3">{t.avgKcal}</p>
          </div>
        </div>
        <p className="mt-2 text-[10px] text-ink-3 text-center">
          {t.shareable}
        </p>
      </motion.div>

      {/* AI coach reply bubble */}
      <motion.div
        animate={float4}
        className="relative mx-auto mt-4 sm:mx-0 sm:mt-0 sm:absolute sm:top-12 sm:end-0 w-52 rounded-2xl bg-surface/90 backdrop-blur border border-emerald-100/60 dark:border-emerald-400/20 shadow-lg shadow-emerald-900/5 p-4"
      >
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5"
            >
              <path d="M12 2l2.09 4.26L19 7.27l-3.5 3.41.82 4.82L12 13.4l-4.32 2.1.82-4.82L5 7.27l4.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-ink-2">{t.coachName}</p>
            <p className="text-[10px] text-emerald-500 dark:text-emerald-400">{t.online}</p>
          </div>
        </div>
        <div className="bg-emerald-50 dark:bg-emerald-400/10 rounded-2xl rounded-ss-sm px-3 py-2">
          <p className="text-[11px] text-ink-2 leading-relaxed">
            {t.coachMessage}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Block : Recipes                                                   */
/* ================================================================== */

function RecipeCards({ t }: { t: CardsT }) {
  return (
    <div className="relative mx-auto w-full max-w-md py-6">
      <BlockPhone
        src="/screenshots/recipes.png"
        alt={t.recipesAlt}
      />
      {/* Dish nutrition card */}
      <motion.div
        animate={float1}
        className="relative mx-auto mt-4 sm:mx-0 sm:mt-0 sm:absolute sm:top-10 sm:start-0 w-52 rounded-2xl bg-surface/90 backdrop-blur border border-amber-100/60 dark:border-amber-400/20 shadow-lg shadow-amber-900/5 p-4"
      >
        <div className="flex items-start justify-between mb-1.5">
          <span className="text-2xl" aria-hidden="true">🍲</span>
          <span className="rounded-full bg-emerald-50 dark:bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:text-emerald-300">
            {rich(t.dishKcal, { count: () => <CountUpValue target={380} /> })}
          </span>
        </div>
        <p className="text-sm font-semibold text-ink-2">{t.dishName}</p>
        <p className="text-[11px] text-ink-3">{t.dishCuisine}</p>
        <div className="mt-2 flex gap-2.5 text-[10px] text-ink-3">
          <span>{rich(fill(t.dishProtein, { n: 30 }), { b: (c) => <strong className="text-rose-500 dark:text-rose-400">{c}</strong> })}</span>
          <span>{rich(fill(t.dishCarbs, { n: 25 }), { b: (c) => <strong className="text-blue-500 dark:text-blue-400">{c}</strong> })}</span>
          <span>{rich(fill(t.dishFat, { n: 18 }), { b: (c) => <strong className="text-amber-500 dark:text-amber-400">{c}</strong> })}</span>
        </div>
      </motion.div>

      {/* Cuisines badge */}
      <motion.div
        animate={float3}
        className="relative mx-auto mt-4 sm:mx-0 sm:mt-0 sm:absolute sm:bottom-16 sm:end-0 w-48 rounded-2xl bg-surface/90 backdrop-blur border border-teal-100/60 dark:border-teal-400/20 shadow-lg shadow-teal-900/5 p-4"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-3 mb-2">
          {rich(t.cuisinesCount, { count: () => <CountUpValue target={CUISINE_FLOOR} suffix="+" /> })}
        </p>
        <div className="flex flex-wrap gap-1">
          {[...t.cuisineChips, `+${CUISINE_COUNT - t.cuisineChips.length}`].map(
            (c) => (
              <span
                key={c}
                className="rounded-full bg-teal-50 dark:bg-teal-400/10 px-2 py-0.5 text-[10px] font-medium text-teal-600 dark:text-teal-400"
              >
                {c}
              </span>
            )
          )}
        </div>
        <p className="mt-2 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
          {t.cultureIncluded}
        </p>
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Block : Workouts, Routines & Exercises                            */
/* ================================================================== */

function WorkoutCards({ t }: { t: CardsT }) {
  return (
    <div className="relative mx-auto w-full max-w-md py-6">
      <BlockPhone
        src="/screenshots/routines.png"
        alt={t.workoutsAlt}
      />
      {/* Cardio mini screen */}
      <motion.div
        animate={float2}
        className="relative mx-auto mt-4 sm:mx-0 sm:mt-0 sm:absolute sm:top-8 sm:end-0 w-32 rotate-3 overflow-hidden rounded-2xl border border-line/80 bg-surface shadow-lg shadow-slate-900/10"
      >
        <div className="relative aspect-[9/14] w-full">
          <Image
            src="/screenshots/cardio.png"
            alt={t.cardioAlt}
            fill
            className="object-cover object-top"
            sizes="128px"
            loading="lazy"
          />
        </div>
        <p className="border-t border-line px-2.5 py-1.5 text-[10px] font-semibold text-ink-2">
          {t.cardioTracker}
        </p>
      </motion.div>

      {/* Exercise library badge */}
      <motion.div
        animate={float1}
        className="relative mx-auto mt-4 sm:mx-0 sm:mt-0 sm:absolute sm:top-10 sm:start-0 flex items-center gap-2.5 rounded-xl bg-surface/90 backdrop-blur border border-blue-100/60 dark:border-blue-400/20 shadow-md shadow-blue-900/5 px-4 py-3"
      >
        <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-400/10 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4.5 h-4.5 text-blue-500 dark:text-blue-400"
          >
            <path d="M6.5 6.5h11M6.5 17.5h11M4 9.5v5M20 9.5v5M6.5 4v16M17.5 4v16" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold text-ink-2">{t.exercisesCount}</p>
          <p className="text-[11px] text-blue-500 dark:text-blue-400">{t.muscleTargets}</p>
        </div>
      </motion.div>

      {/* Weekly activity card */}
      <motion.div
        animate={float3}
        className="relative mx-auto mt-4 sm:mx-0 sm:mt-0 sm:absolute sm:bottom-16 sm:end-0 w-56 rounded-2xl bg-surface/90 backdrop-blur border border-emerald-100/60 dark:border-emerald-400/20 shadow-lg shadow-emerald-900/5 p-4"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-3 mb-3">
          {t.weekActivity}
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-400/10 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-emerald-500 dark:text-emerald-400"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-2">
              {rich(t.kcalBurned, { count: () => <CountUpValue target={1429} /> })}
            </p>
            <p className="text-[11px] text-ink-3">
              {fill(t.activitySummary, { min: 230, n: 6 })}
            </p>
          </div>
        </div>
        <div className="mt-3 flex gap-1">
          {[60, 80, 45, 90, 70, 100, 55].map((h, i) => (
            <div key={i} className="flex-1 flex items-end h-8">
              <motion.div
                className="w-full rounded-sm bg-emerald-200 dark:bg-emerald-400/25"
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Block 4 : Stay Motivated Together                                 */
/* ================================================================== */

function MotivationCards({ t }: { t: CardsT }) {
  return (
    <div className="relative mx-auto w-full max-w-md py-6">
      <BlockPhone
        src="/screenshots/IMG_5881.PNG"
        alt={t.motivationAlt}
      />
      {/* Achievement badge */}
      <motion.div
        animate={float1}
        className="relative mx-auto mt-4 sm:mx-0 sm:mt-0 sm:absolute sm:top-10 sm:end-0 w-52 rounded-2xl bg-surface/90 backdrop-blur border border-amber-100/60 dark:border-amber-400/20 shadow-lg shadow-amber-900/5 p-5"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 dark:from-amber-400/[0.07] to-orange-100 dark:to-orange-400/[0.07] flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-amber-500 dark:text-amber-400">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-ink">{fill(t.level, { n: 3 })}</p>
            <p className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">
              <CountUpValue target={240} suffix={t.xpSuffix} />
            </p>
          </div>
        </div>
        <div className="h-2 rounded-full bg-amber-100 dark:bg-amber-400/15 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-400"
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
        <p className="mt-1.5 text-[10px] text-ink-3 text-end">{fill(t.xpProgress, { a: 240, b: 400 })}</p>
      </motion.div>

      {/* Streak fire */}
      <motion.div
        animate={float3}
        className="relative mx-auto mt-4 sm:mx-0 sm:mt-0 sm:absolute sm:bottom-16 sm:start-0 w-40 rounded-2xl bg-surface/90 backdrop-blur border border-orange-100/60 dark:border-orange-400/20 shadow-lg shadow-orange-900/5 p-4 flex flex-col items-center"
      >
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-100 dark:from-amber-400/[0.07] to-orange-100 dark:to-orange-400/[0.07] flex items-center justify-center mb-2">
          <span className="text-2xl">🔥</span>
        </div>
        <p className="text-2xl font-bold text-ink">
          <CountUpValue target={7} duration={900} />
        </p>
        <p className="text-xs text-ink-3">{t.dayStreak}</p>
        <div className="mt-2 flex gap-0.5">
          {t.weekdayInitials.map((d, i) => (
            <div
              key={`${d}-${i}`}
              className="w-4 h-4 rounded-full text-[8px] flex items-center justify-center font-medium bg-emerald-100 dark:bg-emerald-400/15 text-emerald-600 dark:text-emerald-400"
            >
              ✓
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}

/* ================================================================== */
/*  Feature Grid — "Everything you need"                              */
/* ================================================================== */

const featureGridItems: {
  icon: React.ReactNode;
  color: string;
  bg: string;
  screenshot: string;
}[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-400/10",
    screenshot: "/screenshots/IMG_5870.PNG",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-400/10",
    screenshot: "/screenshots/IMG_5868.PNG",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-50 dark:bg-orange-400/10",
    screenshot: "/screenshots/IMG_5865.PNG",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <line x1="18" y1="20" x2="18" y2="10" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="20" x2="12" y2="4" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="6" y1="20" x2="6" y2="14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-400/10",
    screenshot: "/screenshots/IMG_5863.PNG",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-400/10",
    screenshot: "/screenshots/cultural-diets.png",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-400/10",
    screenshot: "/screenshots/IMG_5862.PNG",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 10a4 4 0 0 1-8 0" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "text-lime-600 dark:text-lime-400",
    bg: "bg-lime-50 dark:bg-lime-400/10",
    screenshot: "/screenshots/IMG_5866.PNG",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-400/10",
    screenshot: "/screenshots/IMG_5859.PNG",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-50 dark:bg-cyan-400/10",
    screenshot: "/screenshots/IMG_5860.PNG",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="14 2 14 8 20 8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "text-ink-2",
    bg: "bg-surface-2",
    screenshot: "/screenshots/IMG_5885.PNG",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-400/10",
    screenshot: "/screenshots/IMG_5878.PNG",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-400/10",
    screenshot: "/screenshots/IMG_5874.PNG",
  },
];

function FlipCard({
  item,
  t,
}: {
  item: (typeof featureGridItems)[number] & T["grid"]["items"][number];
  t: T["grid"];
}) {
  const [showBack, setShowBack] = useState(false);

  const handleFlip = () => setShowBack((prev) => !prev);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={fill(showBack ? t.hidePreview : t.showPreview, { name: item.name })}
      className="relative cursor-pointer [perspective:1000px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-xl"
      style={{ minHeight: showBack ? 320 : "auto" }}
      onClick={handleFlip}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleFlip();
        }
      }}
    >
      <motion.div
        animate={{ rotateY: showBack ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full"
      >
        {/* Front face */}
        <motion.div
          style={{ backfaceVisibility: "hidden" }}
          whileHover={{ scale: 1.03, y: -2 }}
          transition={{ duration: 0.25 }}
          className={`group rounded-xl bg-surface border border-line shadow-sm hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-400/20 transition-all duration-300 p-4 flex items-start gap-3 ${
            showBack ? "invisible" : ""
          }`}
        >
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center ${item.color}`}
          >
            {item.icon}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-ink-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {item.name}
            </p>
            <p className="text-[12px] leading-relaxed text-ink-3 mt-0.5">
              {item.desc}
            </p>
          </div>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="flex-shrink-0 mt-0.5 text-emerald-300 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
              <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </motion.span>
        </motion.div>

        {/* Back face — screenshot */}
        <motion.div
          style={{
            backfaceVisibility: "hidden",
            rotateY: 180,
            position: showBack ? "relative" : "absolute",
            top: 0,
            left: 0,
            width: "100%",
          }}
          className="rounded-xl bg-surface border border-line shadow-lg overflow-hidden"
        >
          <div className="relative aspect-[9/16] w-full bg-surface-2">
            <Image
              src={item.screenshot}
              alt={fill(t.screenAlt, { name: item.name })}
              fill
              className="object-contain object-top"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="p-3 flex items-center justify-between border-t border-line">
            <span className="text-xs font-semibold text-ink-2">{item.name}</span>
            <span className="text-[10px] text-emerald-500 dark:text-emerald-400 font-medium flex items-center gap-1">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H4.598a.75.75 0 00-.75.75v3.634a.75.75 0 001.5 0v-2.033l.312.311a7 7 0 0011.712-3.138.75.75 0 00-1.06-.18zm-1.624-7.848a7 7 0 00-11.712 3.138.75.75 0 001.06.18 5.5 5.5 0 019.201-2.466l.312.311H10.116a.75.75 0 000 1.5h3.634a.75.75 0 00.75-.75V1.855a.75.75 0 00-1.5 0v2.033l-.312-.312z" clipRule="evenodd" />
              </svg>
              {t.flipBack}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function FeatureGrid({ t }: { t: T["grid"] }) {
  return (
    <div>
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="text-emerald-400">
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
            <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
        </span>
        <span className="text-sm text-ink-3 font-medium">{t.hint}</span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {featureGridItems.map((f, i) => (
          <FlipCard key={f.screenshot} item={{ ...f, ...t.items[i] }} t={t} />
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Main Features Component                                           */
/* ================================================================== */

export function Features({
  lang,
  t,
  showGrid = false,
}: {
  lang: Locale;
  t: T;
  showGrid?: boolean;
}) {
  return (
    <section id="wellness" className="relative overflow-hidden">
      {/* ---------------------------------------------------------- */}
      {/*  Section header                                            */}
      {/* ---------------------------------------------------------- */}
      <div className="section-y px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5">
            {t.eyebrow}
          </p>
          <h2 className="text-h2 text-ink">
            {t.titleLine1}{" "}
            <br className="hidden sm:block" />
            {t.titleLine2}
          </h2>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-ink-3 max-w-2xl mx-auto">
            {t.intro}
          </p>
        </AnimatedSection>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  Block 1 — Smart Nutrition Intelligence                    */}
      {/* ---------------------------------------------------------- */}
      <div className="wash-mint">
        <div className="container-page section-y">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Visual side */}
            <AnimatedSection className="order-2 lg:order-1">
              <NutritionCards t={t.cards} />
            </AnimatedSection>

            {/* Text side */}
            <AnimatedSection delay={0.15} className="order-1 lg:order-2">
              <p className="eyebrow mb-3">
                {t.nutrition.eyebrow}
              </p>
              <h3 className="text-h3 text-ink">
                {rich(t.nutrition.title, { hl })}
              </h3>
              <p className="mt-4 text-lead text-ink-3">
                {t.nutrition.body}
              </p>
              <BulletList items={t.nutrition.bullets} />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  Block 2 — Your Wellness Ecosystem                        */}
      {/* ---------------------------------------------------------- */}
      <div className="">
        <div className="container-page section-y">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text side */}
            <AnimatedSection>
              <p className="eyebrow mb-3">
                {t.ecosystem.eyebrow}
              </p>
              <h3 className="text-h3 text-ink">
                {rich(t.ecosystem.title, { hl })}
              </h3>
              <p className="mt-4 text-lead text-ink-3">
                {t.ecosystem.body}
              </p>
              <BulletList items={t.ecosystem.bullets} />
            </AnimatedSection>

            {/* Visual side */}
            <AnimatedSection delay={0.15}>
              <WellnessCards t={t.cards} />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  Block 3 — Intelligent Coaching & Insights                 */}
      {/* ---------------------------------------------------------- */}
      <div className="wash-lilac">
        <div className="container-page section-y">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Visual side */}
            <AnimatedSection className="order-2 lg:order-1">
              <CoachingCards t={t.cards} />
            </AnimatedSection>

            {/* Text side */}
            <AnimatedSection delay={0.15} className="order-1 lg:order-2">
              <p className="eyebrow mb-3">
                {t.coaching.eyebrow}
              </p>
              <h3 className="text-h3 text-ink">
                {rich(t.coaching.title, { hl })}
              </h3>
              <p className="mt-4 text-lead text-ink-3">
                {t.coaching.body}
              </p>
              <BulletList items={t.coaching.bullets} />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  Block — Recipes                                           */}
      {/* ---------------------------------------------------------- */}
      <div className="wash-peach">
        <div className="container-page section-y">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text side */}
            <AnimatedSection>
              <p className="eyebrow mb-3">
                {t.recipes.eyebrow}
              </p>
              <h3 className="text-h3 text-ink">
                {rich(t.recipes.title, { hl })}
              </h3>
              <p className="mt-4 text-lead text-ink-3">
                {t.recipes.body}
              </p>
              <BulletList items={t.recipes.bullets} />
              <a
                href={localePath(lang, "/halal-nutrition-app")}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 transition-colors hover:text-emerald-700 dark:hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-sm"
              >
                {t.recipes.halalLink}
              </a>
            </AnimatedSection>

            {/* Visual side */}
            <AnimatedSection delay={0.15}>
              <RecipeCards t={t.cards} />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  Block — Workouts, Routines & Exercises                    */}
      {/* ---------------------------------------------------------- */}
      <div className="wash-mint">
        <div className="container-page section-y">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text side */}
            <AnimatedSection className="order-1 lg:order-2">
              <p className="eyebrow mb-3">
                {t.fitness.eyebrow}
              </p>
              <h3 className="text-h3 text-ink">
                {rich(t.fitness.title, { hl })}
              </h3>
              <p className="mt-4 text-lead text-ink-3">
                {t.fitness.body}
              </p>
              <BulletList items={t.fitness.bullets} />
            </AnimatedSection>

            {/* Visual side */}
            <AnimatedSection delay={0.15} className="order-2 lg:order-1">
              <WorkoutCards t={t.cards} />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  Block 4 — Stay Motivated Together                        */}
      {/* ---------------------------------------------------------- */}
      <div className="wash-peach">
        <div className="container-page section-y">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text side */}
            <AnimatedSection>
              <p className="eyebrow mb-3">
                {t.community.eyebrow}
              </p>
              <h3 className="text-h3 text-ink">
                {rich(t.community.title, { hl })}
              </h3>
              <p className="mt-4 text-lead text-ink-3">
                {t.community.body}
              </p>
              <BulletList items={t.community.bullets} />
            </AnimatedSection>

            {/* Visual side */}
            <AnimatedSection delay={0.15}>
              <MotivationCards t={t.cards} />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  Feature Grid — "Everything you need" (detail page only)  */}
      {/* ---------------------------------------------------------- */}
      {showGrid && (
        <div>
          <div className="container-page section-y">
            <AnimatedSection className="text-center mb-12">
              <p className="eyebrow mb-3">
                {t.grid.eyebrow}
              </p>
              <h3 className="text-h3 text-ink">
                {t.grid.title}
              </h3>
              <p className="mt-4 text-lead text-ink-3 max-w-2xl mx-auto">
                {t.grid.body}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <FeatureGrid t={t.grid} />
            </AnimatedSection>
          </div>
        </div>
      )}
    </section>
  );
}
