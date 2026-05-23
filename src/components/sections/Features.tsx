"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

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
          <span className="mt-0.5 flex-shrink-0 rounded-full bg-emerald-100 p-1 text-emerald-600">
            <CheckIcon className="w-3.5 h-3.5" />
          </span>
          <span className="text-[15px] leading-relaxed text-slate-600">
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
          <span className="text-sm font-bold text-slate-800">{value}</span>
          <span className="text-[9px] text-slate-400">{unit}</span>
        </div>
      </div>
      <span className="text-[11px] font-medium" style={{ color }}>
        {label}
      </span>
      <span className="text-[9px] text-slate-400">
        / {total}
        {unit}
      </span>
    </div>
  );
}

/* ================================================================== */
/*  Block 1 : Smart Nutrition Intelligence                            */
/* ================================================================== */

function NutritionCards() {
  return (
    <div className="relative w-full h-[440px] sm:h-[480px]">
      {/* Calories card */}
      <motion.div
        animate={float1}
        className="absolute top-4 left-4 sm:left-8 w-56 rounded-2xl bg-white/90 backdrop-blur border border-emerald-100/60 shadow-lg shadow-emerald-900/5 p-5"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
          Calories
        </p>
        <div className="flex items-end gap-1.5">
          <span className="text-3xl font-bold text-slate-800">1,693</span>
          <span className="text-sm text-slate-400 mb-1">/ 2,100 kcal</span>
        </div>
        <div className="mt-3 h-2 rounded-full bg-emerald-100 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500"
            initial={{ width: 0 }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          />
        </div>
        <p className="mt-2 text-xs text-emerald-600 font-medium">
          407 kcal remaining
        </p>
      </motion.div>

      {/* Macros rings card */}
      <motion.div
        animate={float2}
        className="absolute top-28 right-0 sm:right-4 w-60 rounded-2xl bg-white/90 backdrop-blur border border-purple-100/60 shadow-lg shadow-purple-900/5 p-5"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
          Macros
        </p>
        <div className="flex justify-around">
          <MacroRing
            label="Protein"
            value={120}
            total={150}
            unit="g"
            color="#8B5CF6"
            percent={80}
            delay={0.3}
          />
          <MacroRing
            label="Carbs"
            value={159}
            total={230}
            unit="g"
            color="#F59E0B"
            percent={69}
            delay={0.5}
          />
          <MacroRing
            label="Fat"
            value={53}
            total={70}
            unit="g"
            color="#FF7A6B"
            percent={76}
            delay={0.7}
          />
        </div>
      </motion.div>

      {/* Micronutrients badge */}
      <motion.div
        animate={float3}
        className="absolute bottom-12 left-6 sm:left-12 rounded-xl bg-white/90 backdrop-blur border border-teal-100/60 shadow-md shadow-teal-900/5 px-4 py-3"
      >
        <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
          Micronutrients
        </p>
        <div className="flex items-center gap-3">
          {[
            { name: "Iron", pct: 100, color: "bg-emerald-500" },
            { name: "Calcium", pct: 100, color: "bg-teal-500" },
            { name: "Vit C", pct: 92, color: "bg-amber-500" },
          ].map((m) => (
            <div key={m.name} className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-full ${m.color}`} />
              <span className="text-[11px] text-slate-600 font-medium">
                {m.name} {m.pct}%
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* AI Scan badge */}
      <motion.div
        animate={float4}
        className="absolute bottom-4 right-4 sm:right-10 flex items-center gap-2.5 rounded-xl bg-white/90 backdrop-blur border border-emerald-100/60 shadow-md shadow-emerald-900/5 px-4 py-2.5"
      >
        <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4.5 h-4.5 text-emerald-600"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-700">AI Meal Scan</p>
          <p className="text-[11px] text-emerald-600">Snap &rarr; instant nutrition</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Block 2 : Your Wellness Ecosystem                                 */
/* ================================================================== */

function WellnessCards() {
  return (
    <div className="relative w-full h-[440px] sm:h-[480px]">
      {/* Fasting timer circle */}
      <motion.div
        animate={float2}
        className="absolute top-4 left-4 sm:left-8 w-48 rounded-2xl bg-white/90 backdrop-blur border border-emerald-100/60 shadow-lg shadow-emerald-900/5 p-5 flex flex-col items-center"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
          Fasting
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
            <span className="text-lg font-bold text-slate-800">16:08</span>
            <span className="text-[10px] text-emerald-600 font-medium">
              remaining
            </span>
          </div>
        </div>
        <p className="mt-2 text-xs text-slate-500">16:8 Protocol</p>
      </motion.div>

      {/* Recipe card */}
      <motion.div
        animate={float1}
        className="absolute top-6 right-0 sm:right-4 w-52 rounded-2xl bg-white/90 backdrop-blur border border-amber-100/60 shadow-lg shadow-amber-900/5 p-4"
      >
        <div className="w-full h-20 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center mb-3">
          <span className="text-3xl">🥗</span>
        </div>
        <p className="text-sm font-semibold text-slate-700">
          9,000+ Recipes
        </p>
        <p className="text-xs text-slate-400 mt-0.5">
          Mediterranean, Keto, Vegan &amp; more
        </p>
        <div className="mt-2 flex gap-1.5">
          <span className="px-2 py-0.5 text-[10px] rounded-full bg-emerald-50 text-emerald-600 font-medium">
            Cultural Diets
          </span>
          <span className="px-2 py-0.5 text-[10px] rounded-full bg-amber-50 text-amber-600 font-medium">
            Import URL
          </span>
        </div>
      </motion.div>

      {/* Exercise stats card */}
      <motion.div
        animate={float3}
        className="absolute bottom-20 left-6 sm:left-10 w-56 rounded-2xl bg-white/90 backdrop-blur border border-blue-100/60 shadow-lg shadow-blue-900/5 p-4"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
          This Week&apos;s Activity
        </p>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-blue-500"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700">1,429 kcal</p>
            <p className="text-[11px] text-slate-400">
              230 min &middot; 6 exercises
            </p>
          </div>
        </div>
        {/* Water tracker */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-sky-50 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-sky-400">
              <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex justify-between text-[11px] mb-0.5">
              <span className="text-slate-500">Water</span>
              <span className="text-sky-600 font-medium">6.5 / 8 cups</span>
            </div>
            <div className="h-1.5 rounded-full bg-sky-100 overflow-hidden flex gap-[2px]">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-full ${
                    i < 6 ? "bg-sky-400" : i === 6 ? "bg-sky-200" : "bg-sky-100"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Sleep badge */}
      <motion.div
        animate={float4}
        className="absolute bottom-4 right-4 sm:right-8 flex items-center gap-2.5 rounded-xl bg-white/90 backdrop-blur border border-indigo-100/60 shadow-md shadow-indigo-900/5 px-4 py-3"
      >
        <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-indigo-500">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-700">7h 42m Sleep</p>
          <p className="text-[11px] text-indigo-500">Good quality</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Block 3 : Intelligent Coaching & Insights                         */
/* ================================================================== */

function CoachingCards() {
  return (
    <div className="relative w-full h-[440px] sm:h-[480px]">
      {/* AI Coach chat */}
      <motion.div
        animate={float1}
        className="absolute top-4 left-2 sm:left-6 w-64 rounded-2xl bg-white/90 backdrop-blur border border-emerald-100/60 shadow-lg shadow-emerald-900/5 p-5"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M12 2l2.09 4.26L19 7.27l-3.5 3.41.82 4.82L12 13.4l-4.32 2.1.82-4.82L5 7.27l4.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-700">
              AI Wellness Coach
            </p>
            <p className="text-[10px] text-emerald-500">Online</p>
          </div>
        </div>
        <div className="space-y-2.5">
          <div className="bg-emerald-50 rounded-2xl rounded-tl-sm px-3.5 py-2.5">
            <p className="text-xs text-slate-700 leading-relaxed">
              Based on your patterns, try adding more protein at breakfast. Your mornings average only 15g.
            </p>
          </div>
          <div className="bg-slate-50 rounded-2xl rounded-tr-sm px-3.5 py-2.5 ml-6">
            <p className="text-xs text-slate-600 leading-relaxed">
              Good idea! What do you suggest?
            </p>
          </div>
          <div className="bg-emerald-50 rounded-2xl rounded-tl-sm px-3.5 py-2.5">
            <p className="text-xs text-slate-700 leading-relaxed">
              Greek yogurt with nuts &mdash; 28g protein! Added to your meal plan.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Wellness Score ring */}
      <motion.div
        animate={float3}
        className="absolute top-6 right-0 sm:right-6 w-48 rounded-2xl bg-white/90 backdrop-blur border border-emerald-100/60 shadow-lg shadow-emerald-900/5 p-5 flex flex-col items-center"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
          Wellness Score
        </p>
        <div className="relative w-24 h-24">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#f1f5f9"
              strokeWidth="8"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="url(#wellnessGrad)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={264}
              initial={{ strokeDashoffset: 264 }}
              whileInView={{ strokeDashoffset: 264 * 0.22 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
            <defs>
              <linearGradient id="wellnessGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-slate-800">78</span>
            <span className="text-[10px] text-emerald-600 font-medium">
              Great
            </span>
          </div>
        </div>
        {/* Breakdown bars */}
        <div className="mt-3 w-full space-y-1.5">
          {[
            { label: "Nutrition", pct: 85, color: "bg-emerald-400" },
            { label: "Hydration", pct: 75, color: "bg-sky-400" },
            { label: "Activity", pct: 90, color: "bg-blue-400" },
            { label: "Fasting", pct: 70, color: "bg-teal-400" },
            { label: "Consistency", pct: 65, color: "bg-purple-400" },
            { label: "Sleep", pct: 80, color: "bg-indigo-400" },
          ].map((h) => (
            <div key={h.label} className="flex items-center gap-2">
              <span className="text-[9px] text-slate-500 w-16 text-right">
                {h.label}
              </span>
              <div className="flex-1 h-1 rounded-full bg-slate-100 overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${h.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${h.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Weekly report card */}
      <motion.div
        animate={float2}
        className="absolute bottom-6 left-8 sm:left-14 w-56 rounded-2xl bg-white/90 backdrop-blur border border-violet-100/60 shadow-lg shadow-violet-900/5 p-4"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-violet-500"
            >
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          </div>
          <p className="text-xs font-semibold text-slate-700">Weekly Report</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-violet-50/60 rounded-lg p-2 text-center">
            <p className="text-sm font-bold text-violet-600">14%</p>
            <p className="text-[9px] text-slate-500">Consistency</p>
          </div>
          <div className="bg-emerald-50/60 rounded-lg p-2 text-center">
            <p className="text-sm font-bold text-emerald-600">2,113</p>
            <p className="text-[9px] text-slate-500">Avg kcal</p>
          </div>
        </div>
        <p className="mt-2 text-[10px] text-slate-400 text-center">
          Shareable &middot; PDF Export
        </p>
      </motion.div>

      {/* Glucose badge */}
      <motion.div
        animate={float4}
        className="absolute bottom-8 right-4 sm:right-10 flex items-center gap-2 rounded-xl bg-white/90 backdrop-blur border border-rose-100/60 shadow-md shadow-rose-900/5 px-4 py-2.5"
      >
        <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-rose-500">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-700">Glucose</p>
          <p className="text-[11px] text-rose-500">98 mg/dL &middot; A1C 5.2%</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ================================================================== */
/*  Block 4 : Stay Motivated Together                                 */
/* ================================================================== */

function MotivationCards() {
  return (
    <div className="relative w-full h-[440px] sm:h-[480px]">
      {/* Achievement badge */}
      <motion.div
        animate={float1}
        className="absolute top-4 right-0 sm:right-6 w-52 rounded-2xl bg-white/90 backdrop-blur border border-amber-100/60 shadow-lg shadow-amber-900/5 p-5"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-amber-500">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800">Level 3</p>
            <p className="text-[11px] text-amber-600 font-medium">240 XP</p>
          </div>
        </div>
        <div className="h-2 rounded-full bg-amber-100 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-400"
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
        <p className="mt-1.5 text-[10px] text-slate-400 text-right">240 / 400 XP</p>
      </motion.div>

      {/* Streak fire */}
      <motion.div
        animate={float3}
        className="absolute top-8 left-4 sm:left-8 w-40 rounded-2xl bg-white/90 backdrop-blur border border-orange-100/60 shadow-lg shadow-orange-900/5 p-4 flex flex-col items-center"
      >
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mb-2">
          <span className="text-2xl">🔥</span>
        </div>
        <p className="text-2xl font-bold text-slate-800">7</p>
        <p className="text-xs text-slate-500">Day Streak</p>
        <div className="mt-2 flex gap-0.5">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <div
              key={`${d}-${i}`}
              className="w-4 h-4 rounded-full text-[8px] flex items-center justify-center font-medium bg-emerald-100 text-emerald-600"
            >
              ✓
            </div>
          ))}
        </div>
      </motion.div>

      {/* Challenge card */}
      <motion.div
        animate={float2}
        className="absolute bottom-20 left-6 sm:left-10 w-56 rounded-2xl bg-white/90 backdrop-blur border border-sky-100/60 shadow-lg shadow-sky-900/5 p-4"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-sky-500">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 3v12" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-700">Hydrate Habit</p>
            <p className="text-[10px] text-sky-500">Weekly Challenge</p>
          </div>
        </div>
        <p className="text-[11px] text-slate-500 mb-2">
          Hit your water goal 4 times this week
        </p>
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {[true, true, true, false].map((done, i) => (
              <div
                key={i}
                className={`w-5 h-5 rounded-full text-[8px] flex items-center justify-center font-medium ${
                  done
                    ? "bg-sky-100 text-sky-600"
                    : "bg-slate-100 text-slate-300"
                }`}
              >
                {done ? "✓" : "·"}
              </div>
            ))}
          </div>
          <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
            +75 XP
          </span>
        </div>
      </motion.div>

      {/* Leaderboard mini */}
      <motion.div
        animate={float4}
        className="absolute bottom-4 right-2 sm:right-8 w-48 rounded-2xl bg-white/90 backdrop-blur border border-violet-100/60 shadow-lg shadow-violet-900/5 p-4"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
          Leaderboard
        </p>
        <div className="space-y-2">
          {[
            { rank: 1, name: "Sarah M.", xp: "1,240 XP", highlight: false },
            { rank: 2, name: "James K.", xp: "1,180 XP", highlight: false },
            { rank: 3, name: "You", xp: "1,050 XP", highlight: true },
          ].map((u) => (
            <div
              key={u.rank}
              className={`flex items-center gap-2 px-2 py-1.5 rounded-lg ${
                u.highlight ? "bg-emerald-50/80" : ""
              }`}
            >
              <span
                className={`text-xs font-bold ${
                  u.rank === 1
                    ? "text-amber-500"
                    : u.rank === 2
                    ? "text-slate-400"
                    : "text-emerald-500"
                }`}
              >
                #{u.rank}
              </span>
              <span
                className={`text-xs flex-1 ${
                  u.highlight
                    ? "font-semibold text-emerald-700"
                    : "text-slate-600"
                }`}
              >
                {u.name}
              </span>
              <span className="text-[10px] text-slate-400">{u.xp}</span>
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
  name: string;
  desc: string;
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
    name: "Meal Photos",
    desc: "Visual food diary with every meal",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
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
    name: "Nutrition Calendar",
    desc: "Monthly consistency tracking view",
    color: "text-blue-600",
    bg: "bg-blue-50",
    screenshot: "/screenshots/IMG_5868.PNG",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    name: "Color Guide",
    desc: "6 food color groups with health benefits",
    color: "text-orange-600",
    bg: "bg-orange-50",
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
    name: "Compare Foods",
    desc: "Head-to-head nutrition comparison",
    color: "text-purple-600",
    bg: "bg-purple-50",
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
    name: "Cultural Diets",
    desc: "Afghan, Arabic, Bangladeshi & more",
    color: "text-teal-600",
    bg: "bg-teal-50",
    screenshot: "/screenshots/IMG_5861.PNG",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    name: "Import Recipes",
    desc: "From AllRecipes, BBC Good Food & more",
    color: "text-rose-600",
    bg: "bg-rose-50",
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
    name: "Grocery List",
    desc: "Categorized by Produce, Dairy, Meat, Grains",
    color: "text-lime-600",
    bg: "bg-lime-50",
    screenshot: "/screenshots/IMG_5866.PNG",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    name: "Meal Templates",
    desc: "Quick-log your frequent meals",
    color: "text-amber-600",
    bg: "bg-amber-50",
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
    name: "Meal Prep",
    desc: "Weekly planner with auto grocery list",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
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
    name: "Export Data",
    desc: "PDF reports from 7 to 90 day range",
    color: "text-slate-600",
    bg: "bg-slate-50",
    screenshot: "/screenshots/IMG_5885.PNG",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    name: "Daily Lessons",
    desc: "Nutrition education with streaks",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    screenshot: "/screenshots/IMG_5878.PNG",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    name: "Glucose Tracker",
    desc: "7-day average & estimated A1C",
    color: "text-rose-600",
    bg: "bg-rose-50",
    screenshot: "/screenshots/IMG_5874.PNG",
  },
];

function FlipCard({
  item,
  isAutoFlipped,
  onUserInteract,
}: {
  item: (typeof featureGridItems)[number];
  isAutoFlipped?: boolean;
  onUserInteract?: () => void;
}) {
  const [manualFlip, setManualFlip] = useState<boolean | null>(null);

  const showBack = manualFlip !== null ? manualFlip : !!isAutoFlipped;

  const handleClick = () => {
    onUserInteract?.();
    setManualFlip((prev) => (prev !== null ? !prev : !isAutoFlipped));
  };

  useEffect(() => {
    if (manualFlip === null) return;
    setManualFlip(null);
  // reset manual override when auto-flip target changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoFlipped]);

  return (
    <div
      className="relative cursor-pointer [perspective:1000px]"
      style={{ minHeight: showBack ? 320 : "auto" }}
      onClick={handleClick}
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
          className={`group rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 p-4 flex items-start gap-3 ${
            showBack ? "invisible" : ""
          }`}
        >
          <div
            className={`flex-shrink-0 w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center ${item.color}`}
          >
            {item.icon}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-slate-700 group-hover:text-emerald-600 transition-colors">
              {item.name}
            </p>
            <p className="text-[12px] leading-relaxed text-slate-400 mt-0.5">
              {item.desc}
            </p>
          </div>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="flex-shrink-0 mt-0.5 text-emerald-300 group-hover:text-emerald-500 transition-colors"
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
          className="rounded-xl bg-white border border-slate-200 shadow-lg overflow-hidden"
        >
          <div className="relative aspect-[9/16] w-full bg-slate-50">
            <Image
              src={item.screenshot}
              alt={`${item.name} screen`}
              fill
              className="object-contain object-top"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="p-3 flex items-center justify-between border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-700">{item.name}</span>
            <span className="text-[10px] text-emerald-500 font-medium flex items-center gap-1">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H4.598a.75.75 0 00-.75.75v3.634a.75.75 0 001.5 0v-2.033l.312.311a7 7 0 0011.712-3.138.75.75 0 00-1.06-.18zm-1.624-7.848a7 7 0 00-11.712 3.138.75.75 0 001.06.18 5.5 5.5 0 019.201-2.466l.312.311H10.116a.75.75 0 000 1.5h3.634a.75.75 0 00.75-.75V1.855a.75.75 0 00-1.5 0v2.033l-.312-.312z" clipRule="evenodd" />
              </svg>
              Tap to flip back
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function FeatureGrid() {
  const [autoIndex, setAutoIndex] = useState(0);
  const [autoActive, setAutoActive] = useState(true);

  useEffect(() => {
    if (!autoActive) return;
    const timer = setInterval(() => {
      setAutoIndex((prev) => (prev + 1) % featureGridItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [autoActive]);

  const stopAuto = useCallback(() => setAutoActive(false), []);

  return (
    <div>
      <div className="flex items-center justify-center gap-2 mb-6">
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-emerald-400"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
            <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
          </svg>
        </motion.span>
        <span className="text-sm text-slate-400 font-medium">Tap any card to preview the screen</span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {featureGridItems.map((f, i) => (
          <FlipCard
            key={f.name}
            item={f}
            isAutoFlipped={autoActive && i === autoIndex}
            onUserInteract={stopAuto}
          />
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Main Features Component                                           */
/* ================================================================== */

export function Features() {
  return (
    <section className="relative overflow-hidden">
      {/* ---------------------------------------------------------- */}
      {/*  Section header                                            */}
      {/* ---------------------------------------------------------- */}
      <div className="py-20 lg:py-28 px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-emerald-600 mb-5">
            95+ Screens &middot; 40+ Feature Modules
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold leading-tight tracking-tight text-slate-800">
            One app for your entire{" "}
            <br className="hidden sm:block" />
            wellness journey
          </h2>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-500 max-w-2xl mx-auto">
            From AI-powered meal scanning to personalized coaching, MyNutriRise
            brings every aspect of healthy living into one beautiful experience.
          </p>
        </AnimatedSection>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  Block 1 — Smart Nutrition Intelligence                    */}
      {/* ---------------------------------------------------------- */}
      <div className="bg-gradient-to-b from-emerald-50/60 via-emerald-50/30 to-transparent">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Visual side */}
            <AnimatedSection className="order-2 lg:order-1">
              <NutritionCards />
            </AnimatedSection>

            {/* Text side */}
            <AnimatedSection delay={0.15} className="order-1 lg:order-2">
              <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3">
                Nutrition
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-800">
                Smart Nutrition{" "}
                <span className="text-emerald-600">Intelligence</span>
              </h3>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-500">
                Every bite, fully understood. Our AI analyzes your meals in
                real-time, tracking not just calories and macros, but 20+
                essential micronutrients to give you the complete picture of
                your nutrition.
              </p>
              <BulletList
                items={[
                  "AI Meal Scan — snap a photo for instant nutrition breakdown",
                  "Smart calorie & macro tracking with food database",
                  "20+ micronutrient analysis (Iron, Calcium, Vitamins A-D-B12 & more)",
                  "Compare foods head-to-head with health scores",
                  "Meal timing analytics — eating patterns by time of day",
                  "Barcode scanner & voice logging for hands-free tracking",
                ]}
              />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  Block 2 — Your Wellness Ecosystem                        */}
      {/* ---------------------------------------------------------- */}
      <div className="bg-gradient-to-b from-white via-[#FFFBF5] to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text side */}
            <AnimatedSection>
              <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3">
                Ecosystem
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-800">
                Your Wellness{" "}
                <span className="text-emerald-600">Ecosystem</span>
              </h3>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-500">
                Fasting, fitness, hydration, sleep, recipes, and meal
                plans — all working together. MyNutriRise connects every
                wellness habit into a single, intelligent system that adapts to
                your lifestyle.
              </p>
              <BulletList
                items={[
                  "Intermittent fasting with 5+ protocols (16:8, 5:2, OMAD) + Masterclass",
                  "9,000+ recipes with cultural diets (Afghan, Arabic, Bangladeshi & more)",
                  "AI meal plans — daily/weekly for Keto, Mediterranean, Vegan & more",
                  "Meal prep planner with auto-generated grocery lists",
                  "1,000+ exercises — Walking, Running, Cycling, Gym, Yoga, Sports",
                  "Water & sleep monitoring with daily targets",
                ]}
              />
            </AnimatedSection>

            {/* Visual side */}
            <AnimatedSection delay={0.15}>
              <WellnessCards />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  Block 3 — Intelligent Coaching & Insights                 */}
      {/* ---------------------------------------------------------- */}
      <div className="bg-gradient-to-b from-violet-50/40 via-fuchsia-50/20 to-[#FFFBF5]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Visual side */}
            <AnimatedSection className="order-2 lg:order-1">
              <CoachingCards />
            </AnimatedSection>

            {/* Text side */}
            <AnimatedSection delay={0.15} className="order-1 lg:order-2">
              <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3">
                AI Coaching
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-800">
                Intelligent Coaching{" "}
                <span className="text-emerald-600">& Insights</span>
              </h3>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-500">
                Your personal AI wellness coach understands your goals, habits,
                and preferences. It connects every data point — from nutrition
                to sleep — to deliver actionable guidance that actually helps
                you improve.
              </p>
              <BulletList
                items={[
                  "AI nutritional coach with personalized meal ideas & guidance",
                  "Wellness score (0-100) with 6-habit breakdown",
                  "Weekly reports with consistency %, daily averages & sharing",
                  "Daily nutrition lessons with streaks & action items",
                  "Glucose tracking with 7-day average & estimated A1C",
                  "Wearable sync — Apple Health, Google Fit, step tracking",
                ]}
              />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  Block 4 — Stay Motivated Together                        */}
      {/* ---------------------------------------------------------- */}
      <div className="bg-gradient-to-b from-[#FFFBF5] via-amber-50/20 to-[#FFFBF5]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text side */}
            <AnimatedSection>
              <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3">
                Community
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-800">
                Stay Motivated{" "}
                <span className="text-emerald-600">Together</span>
              </h3>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-500">
                Wellness is better with friends. Earn achievements, compete on
                leaderboards, tackle weekly challenges, and share your progress.
                MyNutriRise turns healthy habits into a rewarding journey.
              </p>
              <BulletList
                items={[
                  "37 achievement badges & XP-based leveling system",
                  "Daily & weekly challenges — Hydrate Habit, Fast Five, Streak Builder",
                  "Friends & leaderboards for Streak, XP, Meals & Accuracy",
                  "Streak tracking with daily & weekly motivation",
                  "Progress photos & body measurements (waist, chest, arms)",
                  "Shareable weekly reports & Premium/Pro features",
                ]}
              />
            </AnimatedSection>

            {/* Visual side */}
            <AnimatedSection delay={0.15}>
              <MotivationCards />
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- */}
      {/*  Feature Grid — "Everything you need"                     */}
      {/* ---------------------------------------------------------- */}
      <div className="bg-gradient-to-b from-[#FFFBF5] to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-28">
          <AnimatedSection className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 mb-3">
              And So Much More
            </p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-800">
              Everything you need
            </h3>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-500 max-w-2xl mx-auto">
              Every tool, every insight, every feature — designed to support your
              complete wellness journey.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <FeatureGrid />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
