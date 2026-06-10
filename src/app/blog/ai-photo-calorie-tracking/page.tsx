import type { Metadata } from "next";
import { ArticleCta } from "../ArticleCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How AI Photo Calorie Tracking Actually Works",
  description:
    "Snap a photo, get calories and macros. Here's what happens behind the scenes — and how to get the most accurate results.",
  datePublished: "2026-06-09",
  dateModified: "2026-06-10",
  author: { "@id": "https://www.mynutririse.com/#organization" },
  publisher: { "@id": "https://www.mynutririse.com/#organization" },
  mainEntityOfPage: "https://www.mynutririse.com/blog/ai-photo-calorie-tracking",
};

export const metadata: Metadata = {
  title: "How AI Photo Calorie Tracking Actually Works",
  description:
    "Snap a photo, get calories and macros. Here's what happens behind the scenes — and how to get the most accurate results.",
  alternates: { canonical: "/blog/ai-photo-calorie-tracking" },
};

export default function Article() {
  return (
    <div className="bg-white pt-24">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <JsonLd data={articleJsonLd} />
        <Breadcrumbs
          items={[
            { name: "Blog", href: "/blog" },
            { name: "How AI Photo Calorie Trackin", href: "/blog/ai-photo-calorie-tracking" },
          ]}
        />
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
          How AI Photo Calorie Tracking Actually Works
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          <time dateTime="2026-06-09">June 9, 2026</time> &middot; 4 min read
        </p>

        <div className="mt-10 space-y-6 text-base leading-7 text-slate-600">
          <p>
            The biggest reason people quit calorie tracking is friction:
            searching databases, weighing portions, logging ingredient by
            ingredient. AI photo tracking attacks that friction directly — you
            photograph your plate and the app does the rest.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            What happens when you snap a photo
          </h2>
          <p>
            Modern food-recognition models work in three steps. First, the AI
            detects the individual foods on the plate — rice, grilled chicken,
            salad, sauce. Second, it estimates portion sizes from visual cues
            like plate diameter, food height, and density. Third, it maps each
            item to a nutrition database to calculate calories, protein, carbs,
            and fat — and presents the result for you to confirm or adjust.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            How accurate is it?
          </h2>
          <p>
            For everyday meals, photo estimation typically lands close enough
            to keep your daily totals meaningful — and crucially, it&apos;s
            accurate <em>consistently</em>, which matters more than perfection.
            A tracking method you actually use every day beats a precise one
            you abandon after a week. Mixed dishes, hidden oils, and stacked
            foods are the hardest cases, which is why a good app lets you edit
            the AI&apos;s guess in one tap.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            Five tips for better scans
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Shoot from a slight angle (30–45°), not directly overhead — it helps the AI judge food height.</li>
            <li>Get the whole plate in frame, with the rim visible for scale.</li>
            <li>Good lighting matters more than a good camera.</li>
            <li>For mixed dishes like biryani or stews, name the dish when the app asks — it sharpens the estimate.</li>
            <li>Spot-check the portion the AI guessed for calorie-dense items like rice, oil, and nuts.</li>
          </ul>

          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            When to use other logging methods
          </h2>
          <p>
            Photos are perfect for plated meals. For packaged foods, a barcode
            scan is faster and exact. For a quick coffee or a handful of dates,
            voice logging ("two dates and a latte") wins. The best workflow
            mixes all three.
          </p>
        </div>

        <ArticleCta
          heading="Try AI meal scanning"
          body="MyNutriRise identifies your food, estimates portions, and logs calories and macros from a single photo."
        />
      </article>
    </div>
  );
}
