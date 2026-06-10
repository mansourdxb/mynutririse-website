import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    quote:
      "MyNutriRise completely changed how I think about food. The AI meal scan saves me so much time — I just snap a photo and everything is logged automatically.",
    name: "Sarah M.",
    role: "Fitness Enthusiast",
    outcome: "Logs every meal with one photo",
  },
  {
    quote:
      "The fasting tracker and personalized meal plans helped me lose 20 pounds in 3 months. It feels like having a nutritionist in my pocket.",
    name: "James K.",
    role: "Software Engineer",
    outcome: "−20 lbs in 3 months",
  },
  {
    quote:
      "I love the micronutrient tracking — no other app gives me this level of detail. The AI coach suggestions are incredibly helpful and actually personalized.",
    name: "Dr. Emma R.",
    role: "Nutritionist",
    outcome: "Tracks 20+ micronutrients",
  },
];

function Stars() {
  return (
    <div className="mb-3 flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4 text-amber-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function AppStoreBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/60 px-5 py-2.5">
      <svg
        className="h-5 w-5 text-amber-400"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <span className="text-sm font-semibold text-slate-700">
        Rated 4.8 on the App Store
      </span>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto mb-6 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
            Loved by people building healthier habits
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mx-auto mb-14 max-w-xl text-center">
          <p className="text-base leading-relaxed text-slate-500">
            Join a growing community of health-conscious people transforming
            their relationship with food and wellness.
          </p>
        </AnimatedSection>

        <StaggerContainer className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="group flex h-full flex-col rounded-2xl bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                {/* Decorative quote mark */}
                <span
                  className="mb-2 block text-3xl leading-none text-emerald-300"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                <Stars />

                <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">
                  {t.outcome}
                </span>

                <blockquote className="mb-6 flex-1 text-[15px] italic leading-relaxed text-slate-600">
                  {t.quote}
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                    {t.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .replace(".", "")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3} className="mt-14 text-center">
          <AppStoreBadge />
        </AnimatedSection>
      </div>
    </section>
  );
}
