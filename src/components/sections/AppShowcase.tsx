import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { screenshot, type Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { rich } from "@/i18n/rich";

// Screenshot names under public/screenshots/<lang>/, one per label in t.row1 / t.row2.
const row1Screens = [
  "analytics",
  "fasting",
  "ai-coach",
  "food-search",
  "exercise",
  "wellness",
  "micros",
  "meal-log",
  "recipes",
  "meal-templates",
];

const row2Screens = [
  "diet-plans",
  "wearables",
  "achievements",
  "challenges",
  "weekly",
  "progress",
  "meal-timing",
  "quick-actions",
  "cuisines",
  "compare-foods",
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

export function AppShowcase({
  lang,
  t,
}: {
  lang: Locale;
  t: Messages["home"]["showcase"];
}) {
  const row1 = row1Screens.map((name, i) => ({ src: screenshot(lang, name), label: t.row1[i] }));
  const row2 = row2Screens.map((name, i) => ({ src: screenshot(lang, name), label: t.row2[i] }));

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
