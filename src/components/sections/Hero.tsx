import Image from "next/image";
import { AppStoreButton } from "@/components/ui/Button";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { RECIPES } from "@/data/facts";

const featurePills = [
  { label: "AI Meal Scan", dot: "bg-emerald-500", top: "12%", right: "-4%", delay: 0.6 },
  { label: "Halal & Cultural Diets", dot: "bg-teal-500", top: "48%", right: "-10%", delay: 0.75 },
  { label: `${RECIPES} Recipes`, dot: "bg-amber-500", bottom: "16%", left: "-4%", delay: 0.9 },
];

export function Hero() {
  return (
    <section className="overflow-hidden wash-mint pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000_60%,transparent)]" aria-hidden="true">
        <div className="absolute -top-32 right-[8%] h-[520px] w-[520px] rounded-full bg-emerald-300/20 blur-[130px] dark:bg-emerald-500/10" />
        <div className="absolute -bottom-40 -left-24 h-[420px] w-[420px] rounded-full bg-amber-200/20 blur-[120px] dark:bg-amber-500/5" />
      </div>

      <div className="relative container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <h1
              className="anim-fade-up text-display text-ink"
              style={{ animationDelay: "0.1s" }}
            >
              Nutrition &amp; Fitness tracking{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent dark:from-emerald-300 dark:to-teal-300">
                for real life
              </span>
            </h1>

            <p
              className="anim-fade-up mx-auto mt-6 max-w-xl text-lead text-ink-3 lg:mx-0"
              style={{ animationDelay: "0.2s" }}
            >
              Snap a photo and AI logs your meal. Follow halal and cultural
              meal plans, track fasting and workouts, and get intelligent
              coaching — everything you need for a healthier, happier life.
            </p>

            <div
              className="anim-fade-up mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
              style={{ animationDelay: "0.3s" }}
            >
              <AppStoreButton store="apple" />
              <AppStoreButton store="google" />
            </div>

            <p
              className="anim-fade-up mt-5 text-sm text-ink-3"
              style={{ animationDelay: "0.4s" }}
            >
              Free to download &middot; Premium optional &middot; Cancel anytime
            </p>
            <p
              className="anim-fade-up mt-3 text-sm"
              style={{ animationDelay: "0.45s" }}
            >
              <a
                href="/quiz"
                className="rounded-sm font-semibold text-accent-strong transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                Not sure where to start? Get your custom plan in 1 minute →
              </a>
            </p>
          </div>

          {/* Device */}
          <div className="relative mx-auto w-full max-w-[420px]">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-emerald-300/40 to-teal-200/30 blur-[70px] dark:from-emerald-500/20 dark:to-teal-500/10"
              aria-hidden="true"
            />
            <div className="anim-float relative">
              <PhoneMockup>
                <div className="relative aspect-[9/19.5] w-full">
                  <Image
                    src="/screenshots/today.png"
                    alt="MyNutriRise Dashboard"
                    fill
                    className="object-cover object-top"
                    sizes="290px"
                    priority
                  />
                </div>
              </PhoneMockup>
            </div>

            {featurePills.map((pill) => (
              <span
                key={pill.label}
                className="anim-fade-up glass absolute hidden items-center gap-2 rounded-2xl px-3.5 py-2 text-xs font-semibold text-ink md:inline-flex"
                style={{
                  top: pill.top,
                  right: pill.right,
                  bottom: pill.bottom,
                  left: pill.left,
                  animationDelay: `${pill.delay}s`,
                }}
              >
                <span className={`h-2 w-2 rounded-full ${pill.dot}`} aria-hidden="true" />
                {pill.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
