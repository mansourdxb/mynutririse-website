import Image from "next/image";
import { AppStoreButton } from "@/components/ui/Button";
import { PhoneMockup } from "@/components/ui/PhoneMockup";

const featurePills = [
  { label: "AI Meal Scan", top: "10%", right: "-8%", delay: 0.6 },
  { label: "Halal & Cultural Diets", top: "45%", right: "-12%", delay: 0.75 },
  { label: "9000+ Recipes", bottom: "18%", left: "-6%", delay: 0.9 },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f5faf6] to-white pt-32 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32">
      {/* Ambient background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[10%] h-[500px] w-[500px] rounded-full bg-emerald-300/15 blur-[120px]" />
        <div className="absolute -bottom-32 -left-16 h-[450px] w-[450px] rounded-full bg-emerald-200/10 blur-[100px]" />
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.07] blur-[140px]" />
        <div className="absolute right-[30%] top-[20%] h-[200px] w-[200px] rounded-full bg-amber-300/10 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Wellness badge */}
            <div className="anim-fade-up" style={{ animationDelay: "0.05s" }}>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 ring-1 ring-emerald-200/60">
                ✨ Trusted by 150,000+ health-conscious people
              </span>
            </div>

            {/* Headline */}
            <h1
              className="anim-fade-up mt-6 text-5xl font-bold tracking-tight text-slate-800 sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "0.15s" }}
            >
              Nutrition &amp; Fitness tracking{" "}
              <span className="text-emerald-600">for real life</span>
            </h1>

            {/* Subtitle */}
            <p
              className="anim-fade-up mt-6 max-w-xl text-lg leading-relaxed text-slate-500"
              style={{ animationDelay: "0.25s" }}
            >
              Snap a photo and AI logs your meal. Follow halal and cultural
              meal plans, track fasting and workouts, and get intelligent
              coaching — everything you need for a healthier, happier life.
            </p>

            {/* Warm gold accent line */}
            <div
              className="anim-fade-up mx-auto mt-8 h-0.5 w-12 rounded-full bg-gradient-to-r from-amber-300 to-amber-200 lg:mx-0"
              style={{ animationDelay: "0.3s" }}
            />

            {/* App Store buttons */}
            <div
              className="anim-fade-up mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
              style={{ animationDelay: "0.35s" }}
            >
              <AppStoreButton store="apple" />
              <AppStoreButton store="google" />
            </div>

            {/* Risk reversal + quiz link */}
            <p
              className="anim-fade-up mt-4 text-sm text-slate-500"
              style={{ animationDelay: "0.45s" }}
            >
              Free to download &middot; Premium optional &middot; Cancel anytime
            </p>
            <p
              className="anim-fade-up mt-3 text-sm"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href="/quiz"
                className="font-semibold text-emerald-600 transition-colors hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-sm"
              >
                Not sure where to start? Get your custom plan in 1 minute →
              </a>
            </p>
          </div>

          {/* Phone mockup area */}
          <div className="relative flex-1">
            {/* Emerald glow behind phone */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.12] blur-[80px]" />
            <div className="pointer-events-none absolute left-[40%] top-[40%] h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/20 blur-[60px]" />

            {/* Floating phone */}
            <div className="anim-float relative flex justify-center">
              <PhoneMockup>
                <div className="relative aspect-[9/19.5] w-full">
                  <Image
                    src="/screenshots/today.png"
                    alt="MyNutriRise Dashboard"
                    fill
                    className="object-cover object-top"
                    sizes="300px"
                    priority
                  />
                </div>
              </PhoneMockup>
            </div>

            {/* Floating feature pills */}
            {featurePills.map((pill) => (
              <span
                key={pill.label}
                className="anim-fade-up absolute hidden rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-200/60 backdrop-blur-sm md:block"
                style={{
                  top: pill.top,
                  right: pill.right,
                  bottom: pill.bottom,
                  left: pill.left,
                  animationDelay: `${pill.delay}s`,
                }}
              >
                {pill.label}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="anim-bounce-soft mt-16 flex justify-center">
          <svg
            className="h-5 w-5 text-slate-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
