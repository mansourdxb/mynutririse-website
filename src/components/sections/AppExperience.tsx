"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const floatingAnimation = (delay: number, y: number = 8) => ({
  y: [-y, y, -y],
  transition: {
    duration: 5 + delay,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay,
  },
});

function MacroRing({
  label,
  value,
  color,
  percent,
  size = 72,
}: {
  label: string;
  value: string;
  color: string;
  percent: number;
  size?: number;
}) {
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#f1f5f9"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="text-sm font-semibold text-slate-700">{value}</span>
      <span className="text-xs text-slate-400">{label}</span>
    </div>
  );
}

function WellnessScoreRing({
  score,
  size = 120,
}: {
  score: number;
  size?: number;
}) {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#f1f5f9"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#10B981"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-2xl font-bold text-slate-700">{score}</span>
        <span className="text-[10px] text-slate-400">/100</span>
      </div>
    </div>
  );
}

/* ─── Row 1: Daily Dashboard ─── */

function CaloriesCard() {
  return (
    <motion.div
      animate={floatingAnimation(0)}
      className="absolute top-[8%] left-[5%] z-20 w-[65%] sm:w-[55%] lg:left-[10%] lg:w-[45%]"
    >
      <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/50 sm:p-6">
        <p className="mb-1 text-xs font-medium tracking-wide text-slate-400 uppercase">
          Calories Today
        </p>
        <div className="flex items-end gap-1.5">
          <span className="text-3xl font-bold text-emerald-500 sm:text-4xl">
            1,693
          </span>
          <span className="mb-1 text-sm text-slate-400">/ 2,100 kcal</span>
        </div>
        <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-emerald-50 sm:mt-4">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500"
            style={{ width: "80%" }}
          />
        </div>
        <p className="mt-2 text-[11px] text-slate-400 sm:text-xs">
          Eaten: 1,693 · Burned: 88 · Nutrition: 67%
        </p>
      </div>
    </motion.div>
  );
}

function MacrosCard() {
  return (
    <motion.div
      animate={floatingAnimation(0.8, 6)}
      className="absolute top-[5%] right-[2%] z-10 w-[48%] sm:w-[42%] lg:right-[5%] lg:w-[38%]"
    >
      <div className="rounded-3xl border border-slate-100 bg-white p-4 shadow-xl shadow-slate-200/50 sm:p-5">
        <p className="mb-3 text-xs font-medium tracking-wide text-slate-400 uppercase sm:mb-4">
          Macros
        </p>
        <div className="flex items-center justify-around">
          <MacroRing
            label="Protein"
            value="120g"
            color="#8B5CF6"
            percent={75}
          />
          <MacroRing
            label="Carbs"
            value="159g"
            color="#F59E0B"
            percent={65}
          />
          <MacroRing
            label="Fat"
            value="53g"
            color="#FF7A6B"
            percent={55}
          />
        </div>
      </div>
    </motion.div>
  );
}

function WaterCard() {
  return (
    <motion.div
      animate={floatingAnimation(1.4, 10)}
      className="absolute bottom-[22%] left-[3%] z-10 w-[46%] sm:w-[38%] lg:bottom-[18%] lg:left-[8%] lg:w-[30%]"
    >
      <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-lg shadow-slate-200/50 sm:p-5">
        <p className="mb-2 text-xs font-medium tracking-wide text-slate-400 uppercase">
          Hydration
        </p>
        <div className="flex items-center gap-2">
          <span className="text-xl">💧</span>
          <div>
            <span className="text-lg font-bold text-slate-700 sm:text-xl">
              6.5
            </span>
            <span className="text-sm text-slate-400"> / 8 cups</span>
          </div>
        </div>
        <div className="mt-3 flex gap-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`h-5 flex-1 rounded-sm ${
                i < 6
                  ? "bg-sky-400"
                  : i === 6
                    ? "bg-sky-200"
                    : "bg-slate-100"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function StreakCard() {
  return (
    <motion.div
      animate={floatingAnimation(0.4, 7)}
      className="absolute right-[5%] bottom-[22%] z-10 w-[30%] sm:w-[24%] lg:right-[10%] lg:bottom-[18%] lg:w-[18%]"
    >
      <div className="rounded-2xl border border-orange-100 bg-white p-4 text-center shadow-lg shadow-slate-200/50 sm:p-5">
        <span className="text-2xl sm:text-3xl">🔥</span>
        <p className="mt-1 text-xl font-bold text-slate-700 sm:text-2xl">7</p>
        <p className="text-[10px] font-medium tracking-wide text-amber-500 uppercase sm:text-xs">
          Day Streak
        </p>
      </div>
    </motion.div>
  );
}

function StepsCard() {
  return (
    <motion.div
      animate={floatingAnimation(1.2, 6)}
      className="absolute top-[2%] left-[2%] z-10 w-[48%] sm:w-[38%] lg:left-[2%] lg:w-[28%]"
    >
      <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-lg shadow-slate-200/50 sm:p-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">👟</span>
          <div>
            <p className="text-sm font-semibold text-slate-700">2,014 steps</p>
            <p className="text-[11px] text-slate-400">
              30 min ·{" "}
              <span className="font-medium text-emerald-500">59 kcal</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SleepCard() {
  return (
    <motion.div
      animate={floatingAnimation(1.0, 9)}
      className="absolute top-[38%] left-[1%] z-10 w-[42%] sm:w-[34%] lg:left-[3%] lg:w-[25%]"
    >
      <div className="rounded-2xl border border-purple-100 bg-white p-3 shadow-lg shadow-slate-200/50 sm:p-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🌙</span>
          <div>
            <p className="text-sm font-semibold text-slate-700">7h 32m</p>
            <p className="text-[11px] text-slate-400">
              Quality:{" "}
              <span className="font-medium text-purple-400">Good</span>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Row 2: Wellness Intelligence ─── */

const wellnessBreakdown = [
  { label: "Nutrition", score: "25/30", color: "bg-emerald-400", pct: 83 },
  { label: "Hydration", score: "12/15", color: "bg-sky-400", pct: 80 },
  { label: "Activity", score: "10/15", color: "bg-[#FF7A6B]", pct: 67 },
  { label: "Fasting", score: "14/20", color: "bg-amber-400", pct: 70 },
  { label: "Consistency", score: "9/10", color: "bg-purple-400", pct: 90 },
  { label: "Sleep", score: "8/10", color: "bg-[#C4B5FD]", pct: 80 },
];

function WellnessScoreCard() {
  return (
    <motion.div
      animate={floatingAnimation(0.6, 7)}
      className="absolute top-[5%] left-1/2 z-20 w-[70%] -translate-x-1/2 sm:w-[55%] lg:w-[42%]"
    >
      <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/50 sm:p-6">
        <p className="mb-3 text-xs font-medium tracking-wide text-slate-400 uppercase">
          Wellness Score
        </p>
        <div className="flex items-center justify-center gap-6">
          <WellnessScoreRing score={78} />
          <div className="flex flex-col gap-0.5">
            <span className="text-lg font-bold text-emerald-500">Great</span>
            <span className="text-[11px] text-slate-400">
              Top 20% this week
            </span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
          {wellnessBreakdown.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-slate-500">
                    {item.label}
                  </span>
                  <span className="text-[10px] font-medium text-slate-600">
                    {item.score}
                  </span>
                </div>
                <div className="mt-0.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function AIInsightCard() {
  return (
    <motion.div
      animate={floatingAnimation(1.8, 5)}
      className="absolute top-[8%] right-[2%] z-10 w-[52%] sm:w-[42%] lg:right-[3%] lg:w-[32%]"
    >
      <div className="rounded-2xl border border-emerald-200 bg-white p-4 shadow-lg shadow-emerald-100/40 sm:p-5">
        <div className="flex items-start gap-2">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-sm">
            ✨
          </span>
          <div>
            <p className="mb-0.5 text-[11px] font-semibold text-emerald-600">
              AI Insight
            </p>
            <p className="text-[12px] leading-relaxed text-slate-500 sm:text-sm">
              You&apos;re on track! Protein intake improved 15% this week. Try
              adding more leafy greens for iron.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const weeklyBars = [65, 80, 45, 90, 70, 85, 60];

function WeeklyReportCard() {
  return (
    <motion.div
      animate={floatingAnimation(1.2, 8)}
      className="absolute bottom-[5%] left-[2%] z-10 w-[52%] sm:w-[42%] lg:left-[5%] lg:w-[32%]"
    >
      <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-lg shadow-slate-200/50 sm:p-5">
        <p className="mb-2 text-xs font-medium tracking-wide text-slate-400 uppercase">
          This Week
        </p>
        <div className="mb-3 flex items-end gap-[3px]">
          {weeklyBars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-emerald-400"
              style={{ height: `${h * 0.3}px` }}
            />
          ))}
        </div>
        <div className="space-y-0.5">
          <p className="text-[11px] text-slate-500">
            <span className="font-medium text-slate-700">14%</span> consistency
          </p>
          <p className="text-[11px] text-slate-500">
            <span className="font-medium text-slate-700">2,113</span> avg kcal
          </p>
          <p className="text-[11px] text-slate-500">
            <span className="font-medium text-slate-700">8</span> workouts
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function AppExperience() {
  return (
    <section
      id="wellness"
      className="relative overflow-hidden bg-gradient-to-b from-[#f0f5f0] to-[#FFFBF5] py-24 lg:py-32"
    >
      {/* Soft ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-50/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto mb-16 max-w-2xl text-center lg:mb-20">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
            Designed for how you live
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            Every screen crafted to make healthy choices feel effortless.
            Beautiful, intuitive, and deeply personal.
          </p>
        </AnimatedSection>

        {/* Row 1: Daily Dashboard */}
        <AnimatedSection delay={0.2}>
          <div className="relative mx-auto aspect-[4/3] max-w-5xl sm:aspect-[16/9]">
            <StepsCard />
            <CaloriesCard />
            <MacrosCard />
            <SleepCard />
            <WaterCard />
            <StreakCard />
          </div>
        </AnimatedSection>

        {/* Row 2: Wellness Intelligence */}
        <AnimatedSection delay={0.4} className="mt-8 lg:mt-12">
          <p className="mb-6 text-center text-sm font-medium tracking-wide text-slate-400 uppercase lg:mb-8">
            Your Wellness Intelligence
          </p>
          <div className="relative mx-auto aspect-[4/3] max-w-5xl sm:aspect-[16/9] lg:aspect-[2/1]">
            <WeeklyReportCard />
            <WellnessScoreCard />
            <AIInsightCard />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
