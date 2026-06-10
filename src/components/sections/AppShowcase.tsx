import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

// Screens shown in the feature deep-dive phones (Today, AI Coach, Recipes,
// Routines, Cardio, Scan, Leaderboard) are intentionally excluded here.
const row1 = [
  { src: "/screenshots/analytics.png", label: "Analytics & Trends" },
  { src: "/screenshots/IMG_5847.PNG", label: "Fasting Timer" },
  { src: "/screenshots/IMG_5849.PNG", label: "AI Meal Plans" },
  { src: "/screenshots/food-log.png", label: "Food Search" },
  { src: "/screenshots/exercises.png", label: "Exercise Library" },
  { src: "/screenshots/IMG_5873.PNG", label: "Wellness Score" },
  { src: "/screenshots/IMG_5852.PNG", label: "Micronutrients" },
  { src: "/screenshots/IMG_5869.PNG", label: "Meal Log" },
  { src: "/screenshots/IMG_5844.PNG", label: "Recipe Categories" },
  { src: "/screenshots/IMG_5858.PNG", label: "Meal Templates" },
];

const row2 = [
  { src: "/screenshots/diet-plans.png", label: "Diet Plans" },
  { src: "/screenshots/IMG_5879.PNG", label: "Wearables" },
  { src: "/screenshots/IMG_5880.PNG", label: "Achievements" },
  { src: "/screenshots/IMG_5882.PNG", label: "Challenges" },
  { src: "/screenshots/weekly-report.png", label: "Weekly Report" },
  { src: "/screenshots/IMG_5867.PNG", label: "Weight Progress" },
  { src: "/screenshots/IMG_5857.PNG", label: "Meal Timing" },
  { src: "/screenshots/IMG_5887.PNG", label: "Quick Actions" },
  { src: "/screenshots/cultural-diets.png", label: "Cultural Diets" },
  { src: "/screenshots/IMG_5864.PNG", label: "Compare Foods" },
];

function ScreenCard({ src, label }: { src: string; label: string }) {
  return (
    <div className="group relative flex-shrink-0 w-[160px] sm:w-[190px] lg:w-[210px] transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-200/60 ring-1 ring-slate-100 transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-emerald-200/30 group-hover:ring-emerald-200">
        <div className="relative aspect-[9/19.5] w-full">
          <Image
            src={src}
            alt={label}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 160px, 210px"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 p-3 opacity-100 transition-all duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <span className="text-xs font-semibold text-white drop-shadow-sm">{label}</span>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
}: {
  items: typeof row1;
  direction?: "left" | "right";
}) {
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex w-max hover:[animation-play-state:paused] active:[animation-play-state:paused] focus-within:[animation-play-state:paused] ${
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        }`}
      >
        {[0, 1].map((half) => (
          <div
            key={half}
            aria-hidden={half === 1}
            className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5"
          >
            {items.map((s) => (
              <ScreenCard key={`${s.src}-${half}`} src={s.src} label={s.label} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function AppShowcase() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-emerald-600 mb-4">
            See It In Action
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-800">
            Beautiful screens,{" "}
            <span className="text-emerald-600">
              endless possibilities
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Every screen designed with care. Explore the complete MyNutriRise experience.
          </p>
        </AnimatedSection>
      </div>

      <div className="space-y-5 sm:space-y-6">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />
    </section>
  );
}
