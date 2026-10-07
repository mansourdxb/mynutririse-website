import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { Messages } from "@/i18n/messages";
import { rich } from "@/i18n/rich";

// Screens shown in the feature deep-dive phones (Today, AI Coach, Recipes,
// Routines, Cardio, Scan, Leaderboard) are intentionally excluded here.
const row1Screens = [
  { src: "/screenshots/analytics.png" },
  { src: "/screenshots/IMG_5847.PNG" },
  { src: "/screenshots/IMG_5849.PNG" },
  { src: "/screenshots/food-log.png" },
  { src: "/screenshots/exercises.png" },
  { src: "/screenshots/IMG_5873.PNG" },
  { src: "/screenshots/IMG_5852.PNG" },
  { src: "/screenshots/IMG_5869.PNG" },
  { src: "/screenshots/IMG_5844.PNG" },
  { src: "/screenshots/IMG_5858.PNG" },
];

const row2Screens = [
  { src: "/screenshots/diet-plans.png" },
  { src: "/screenshots/IMG_5879.PNG" },
  { src: "/screenshots/IMG_5880.PNG" },
  { src: "/screenshots/IMG_5882.PNG" },
  { src: "/screenshots/weekly-report.png" },
  { src: "/screenshots/IMG_5867.PNG" },
  { src: "/screenshots/IMG_5857.PNG" },
  { src: "/screenshots/IMG_5887.PNG" },
  { src: "/screenshots/cultural-diets.png" },
  { src: "/screenshots/IMG_5864.PNG" },
];

function ScreenCard({ src, label }: { src: string; label: string }) {
  return (
    <div className="group relative flex-shrink-0 w-[160px] sm:w-[190px] lg:w-[210px] transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
      <div className="relative overflow-hidden rounded-2xl bg-surface shadow-lg shadow-slate-200/60 ring-1 ring-line transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-emerald-200/30 group-hover:ring-emerald-200 dark:group-hover:ring-emerald-400/20">
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
        <div className="absolute bottom-0 start-0 end-0 p-3 opacity-100 transition-all duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
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
  items: { src: string; label: string }[];
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
            className="flex shrink-0 gap-4 pe-4 sm:gap-5 sm:pe-5"
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

export function AppShowcase({ t }: { t: Messages["home"]["showcase"] }) {
  const row1 = row1Screens.map((s, i) => ({ ...s, label: t.row1[i] }));
  const row2 = row2Screens.map((s, i) => ({ ...s, label: t.row2[i] }));

  return (
    <section className="relative overflow-hidden wash-mint section-y">
      <div className="container-page">
        <AnimatedSection className="mx-auto max-w-2xl text-center mb-14">
          <p className="eyebrow mb-4">
            {t.eyebrow}
          </p>
          <h2 className="text-h2 text-ink">
            {rich(t.title, {
              hl: (c) => <span className="text-emerald-600 dark:text-emerald-400">{c}</span>,
            })}
          </h2>
          <p className="mt-4 text-lead text-ink-3">
            {t.lead}
          </p>
        </AnimatedSection>
      </div>

      <div className="space-y-5 sm:space-y-6">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 start-0 w-20 sm:w-32 bg-gradient-to-r from-canvas to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 end-0 w-20 sm:w-32 bg-gradient-to-l from-canvas to-transparent z-10" />
    </section>
  );
}
