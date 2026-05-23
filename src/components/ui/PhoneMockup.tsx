"use client";

import { motion } from "framer-motion";

export function PhoneMockup({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`relative ${className}`}
    >
      <div className="relative mx-auto w-[280px] sm:w-[300px]">
        {/* Phone frame */}
        <div className="relative rounded-[3rem] border-[8px] border-slate-800 bg-slate-900 p-2 shadow-2xl dark:border-slate-600">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-slate-800 dark:bg-slate-600" />
          {/* Screen */}
          <div className="relative overflow-hidden rounded-[2.25rem] bg-white">
            {children || <PhonePlaceholderScreen />}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PhonePlaceholderScreen() {
  return (
    <div className="flex aspect-[9/19.5] flex-col bg-[#faf8f4] overflow-hidden">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 pt-8 text-[10px] text-slate-500 font-medium">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/></svg>
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.076 13.308-5.076 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.414 5 5 0 017.072 0 1 1 0 01-1.415 1.414zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/></svg>
          <div className="flex items-center">
            <div className="w-5 h-2.5 rounded-sm border border-slate-400 relative">
              <div className="absolute inset-[1px] right-[2px] rounded-[1px] bg-emerald-500 w-[70%]" />
            </div>
          </div>
        </div>
      </div>

      {/* App header bar */}
      <div className="flex items-center justify-between px-4 mt-2">
        <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7 7 0 010 .255c-.007.378.138.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a7 7 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a7 7 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a7 7 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
        <span className="text-[13px] font-bold text-emerald-600 tracking-tight">mynutririse</span>
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-400">
          <span className="text-[11px] font-bold text-white">F</span>
        </div>
      </div>

      {/* Premium badge */}
      <div className="flex justify-center mt-1.5">
        <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-100 to-emerald-100 px-3 py-0.5 border border-amber-200/60">
          <span className="text-[8px]">✨</span>
          <span className="text-[8px] font-semibold text-amber-700">Premium Active</span>
        </div>
      </div>

      {/* Steps card */}
      <div className="mx-3 mt-2 rounded-2xl bg-white p-3 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold text-slate-700">
              <span className="text-[15px] font-bold text-slate-800">2,014</span>{" "}
              steps
            </p>
            <p className="text-[8px] text-slate-400 mt-0.5">30 mins · 59 kcal</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-100 to-sky-100 flex items-center justify-center">
            <span className="text-[16px]">🌍</span>
          </div>
        </div>
      </div>

      {/* Carousel dots */}
      <div className="flex justify-center gap-1 mt-2">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
      </div>

      {/* Water & Streak row */}
      <div className="mx-3 mt-2 grid grid-cols-2 gap-2">
        {/* Water card */}
        <div className="rounded-xl bg-white p-2.5 shadow-sm border border-slate-100">
          <div className="flex items-center gap-1">
            <span className="text-[12px]">💧</span>
            <span className="text-[9px] font-semibold text-slate-600">Water</span>
          </div>
          <p className="text-[13px] font-bold text-slate-800 mt-1">
            6.5 <span className="text-[9px] font-normal text-slate-400">/ 8 cups</span>
          </p>
          <div className="mt-1 h-1 overflow-hidden rounded-full bg-sky-100">
            <div className="h-full w-[81%] rounded-full bg-sky-400" />
          </div>
          <p className="text-[7px] text-sky-500 mt-0.5">1.5 more to go</p>
        </div>

        {/* Streak card */}
        <div className="rounded-xl bg-white p-2.5 shadow-sm border border-slate-100">
          <div className="flex items-center gap-1">
            <span className="text-[12px]">🔥</span>
            <span className="text-[9px] font-semibold text-slate-600">Streak</span>
          </div>
          <p className="text-[13px] font-bold text-slate-800 mt-1">
            1 <span className="text-[9px] font-normal text-slate-400">days</span>
          </p>
          <div className="mt-1 h-1 overflow-hidden rounded-full bg-orange-100">
            <div className="h-full w-[14%] rounded-full bg-orange-400" />
          </div>
          <p className="text-[7px] text-orange-500 mt-0.5">Keep it going!</p>
        </div>
      </div>

      {/* Sleep card */}
      <div className="mx-3 mt-2 rounded-xl bg-white p-2.5 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-[12px]">🌙</span>
            <div>
              <p className="text-[9px] font-semibold text-slate-600">Sleep</p>
              <p className="text-[12px] font-bold text-slate-800">3h 0m</p>
            </div>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5">
            <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
            <span className="text-[7px] font-medium text-red-500">Quality: Low</span>
          </div>
        </div>
      </div>

      {/* Up Next card */}
      <div className="mx-3 mt-2 rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100/50 p-2.5 border border-emerald-200/50">
        <p className="text-[8px] font-semibold text-emerald-600 uppercase tracking-wider">Up Next</p>
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px]">🥗</span>
            <div>
              <p className="text-[10px] font-semibold text-slate-700">Snack</p>
              <p className="text-[7px] text-slate-400">Suggested: Easy C... · 89 kcal</p>
            </div>
          </div>
          <span className="text-[7px] font-medium text-emerald-600 bg-emerald-100 rounded-full px-1.5 py-0.5">Now</span>
        </div>
      </div>

      {/* Today's Meals */}
      <div className="mx-3 mt-2">
        <p className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Today&apos;s Meals</p>
        <div className="rounded-xl bg-white p-2.5 shadow-sm border border-slate-100">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-amber-50 flex items-center justify-center">
              <span className="text-[14px]">🥣</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold text-slate-700">Greek Yogurt Bowl</p>
              <p className="text-[8px] text-slate-400">Breakfast · 08:25</p>
            </div>
            <span className="text-[9px] font-semibold text-slate-600">300 kcal</span>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="mt-auto border-t border-slate-100 bg-white px-2 py-1.5">
        <div className="flex items-center justify-between">
          {[
            { icon: "📊", label: "Today", active: true },
            { icon: "📋", label: "Diet Plans", active: false },
            { icon: "🧬", label: "Nutri Hub", active: false },
            { icon: "🍽️", label: "Recipes", active: false },
            { icon: "🤖", label: "AI Coach", active: false },
          ].map((tab) => (
            <div key={tab.label} className="flex flex-col items-center gap-0.5 px-1">
              <span className={`text-[11px] ${tab.active ? "" : "opacity-50"}`}>{tab.icon}</span>
              <span className={`text-[6px] font-medium ${tab.active ? "text-emerald-600" : "text-slate-400"}`}>
                {tab.label}
              </span>
            </div>
          ))}
        </div>
        {/* Home indicator */}
        <div className="mx-auto mt-1 h-1 w-24 rounded-full bg-slate-200" />
      </div>
    </div>
  );
}
