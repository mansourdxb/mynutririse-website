import { CountUp } from "@/components/ui/CountUp";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";

const stats = [
  {
    label: "Meals Tracked",
    count: { target: 2, decimals: 0, suffix: "M+" },
  },
  {
    label: "Wellness Journeys Started",
    count: { target: 150, decimals: 0, suffix: "K+" },
  },
  {
    label: "App Store Rating",
    count: { target: 4.8, decimals: 1, suffix: " ★" },
  },
];

export function StatsBand() {
  return (
    <section className="relative border-y border-emerald-100/60 bg-emerald-50/40 py-10">
      <StaggerContainer className="mx-auto grid max-w-4xl grid-cols-3 gap-4 px-6">
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <div className="text-center">
              <p className="text-2xl font-bold text-slate-800 sm:text-4xl">
                <CountUp
                  target={stat.count.target}
                  decimals={stat.count.decimals}
                  suffix={stat.count.suffix}
                />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
