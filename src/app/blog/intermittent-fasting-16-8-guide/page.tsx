import type { Metadata } from "next";
import { ArticleCta } from "../ArticleCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Intermittent Fasting 16:8 — A Beginner's Guide",
  description:
    "What the 16:8 fasting method is, how it works, who it suits, and how to start without making the common mistakes.",
  datePublished: "2026-06-09",
  dateModified: "2026-06-10",
  author: { "@id": "https://www.mynutririse.com/#organization" },
  publisher: { "@id": "https://www.mynutririse.com/#organization" },
  mainEntityOfPage: "https://www.mynutririse.com/blog/intermittent-fasting-16-8-guide",
};

export const metadata: Metadata = {
  title: "Intermittent Fasting 16:8 — A Beginner's Guide",
  description:
    "What the 16:8 fasting method is, how it works, who it suits, and how to start without making the common mistakes.",
  alternates: { canonical: "/blog/intermittent-fasting-16-8-guide" },
};

export default function Article() {
  return (
    <div className="bg-white pt-24">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <JsonLd data={articleJsonLd} />
        <Breadcrumbs
          items={[
            { name: "Blog", href: "/blog" },
            { name: "Intermittent Fasting 16:8", href: "/blog/intermittent-fasting-16-8-guide" },
          ]}
        />
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
          Intermittent Fasting 16:8 — A Beginner&apos;s Guide
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          <time dateTime="2026-06-09">June 9, 2026</time> &middot; 5 min read
        </p>

        <div className="mt-10 space-y-6 text-base leading-7 text-slate-600">
          <p>
            The 16:8 method is the most popular form of intermittent fasting,
            and for good reason: it&apos;s simple. You eat during an 8-hour
            window each day and fast for the remaining 16 hours — most of which
            you spend asleep anyway.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-slate-800">How it works</h2>
          <p>
            A typical 16:8 schedule means finishing dinner by 8 PM and eating
            your first meal at noon the next day. During the fasting window you
            drink water, black coffee, or unsweetened tea. Rather than changing
            <em> what</em> you eat, 16:8 changes <em>when</em> — which for many
            people naturally reduces late-night snacking and total calorie
            intake.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            Picking your eating window
          </h2>
          <p>
            The best window is the one that fits your life. Early risers often
            prefer 10 AM–6 PM; social eaters tend toward 12–8 PM so dinner with
            family stays on the table. If 16 hours feels hard at first, start
            with 12:12 or 14:10 and extend gradually — consistency beats
            intensity.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            Common beginner mistakes
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Overeating in the window.</strong> Fasting doesn&apos;t
              cancel out calories; track your meals so the window doesn&apos;t
              become a free-for-all.
            </li>
            <li>
              <strong>Skimping on protein.</strong> With fewer meals it&apos;s
              easy to under-eat protein — aim to anchor each meal around a
              protein source.
            </li>
            <li>
              <strong>Forgetting hydration.</strong> Much of your usual fluid
              intake comes from food. Drink more water than feels necessary.
            </li>
            <li>
              <strong>All-or-nothing thinking.</strong> Breaking your fast
              early occasionally changes very little. What matters is the
              weekly pattern.
            </li>
          </ul>

          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            16:8 and Ramadan — how they differ
          </h2>
          <p>
            Ramadan fasting runs roughly dawn to sunset with no food
            <em> or fluids</em>, while 16:8 allows water and unsweetened drinks
            throughout. That makes hydration the key difference: in Ramadan,
            front-load fluids at suhoor and iftar. The nutrition logic is the
            same in both — your daily calorie needs do not change, so plan
            your two meals to cover them. Use our free{" "}
            <a href="/tools/calorie-calculator" className="font-medium text-emerald-600 hover:text-emerald-700">
              calorie calculator
            </a>{" "}
            to find that number, and note that MyNutriRise includes a
            dedicated Ramadan schedule among its 25 fasting protocols.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            Who should be careful
          </h2>
          <p>
            Intermittent fasting isn&apos;t for everyone. If you are pregnant,
            breastfeeding, under 18, have a history of disordered eating, or
            manage a condition like diabetes, talk to your doctor before
            changing your meal timing.
          </p>
        </div>

        <ArticleCta
          heading="Track your fast automatically"
          body="MyNutriRise includes 16:8, 5:2 and more fasting protocols with timers, insights, and meal logging in one app."
        />
      </article>
    </div>
  );
}
