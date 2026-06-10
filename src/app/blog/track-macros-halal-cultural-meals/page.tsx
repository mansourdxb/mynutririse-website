import type { Metadata } from "next";
import { ArticleCta } from "../ArticleCta";
import { JsonLd } from "@/components/ui/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Tracking Macros with Halal & Cultural Meals",
  description:
    "Kabuli pulao, mandi, biryani — traditional dishes deserve proper tracking. How to log cultural cuisine accurately.",
  datePublished: "2026-06-09",
  dateModified: "2026-06-10",
  author: { "@id": "https://www.mynutririse.com/#organization" },
  publisher: { "@id": "https://www.mynutririse.com/#organization" },
  mainEntityOfPage: "https://www.mynutririse.com/blog/track-macros-halal-cultural-meals",
};

export const metadata: Metadata = {
  title: "Tracking Macros with Halal & Cultural Meals",
  description:
    "Kabuli pulao, mandi, biryani — traditional dishes deserve proper tracking. How to log cultural cuisine accurately.",
  alternates: { canonical: "/blog/track-macros-halal-cultural-meals" },
};

export default function Article() {
  return (
    <div className="bg-white pt-24">
      <article className="mx-auto max-w-3xl px-6 py-16">
        <JsonLd data={articleJsonLd} />
        <Breadcrumbs
          items={[
            { name: "Blog", href: "/blog" },
            { name: "Tracking Macros", href: "/blog/track-macros-halal-cultural-meals" },
          ]}
        />
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
          Tracking Macros with Halal &amp; Cultural Meals
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          <time dateTime="2026-06-09">June 9, 2026</time> &middot; 5 min read
        </p>

        <div className="mt-10 space-y-6 text-base leading-7 text-slate-600">
          <p>
            Most nutrition apps were built around Western menus. Search for
            &ldquo;kabuli pulao&rdquo;, &ldquo;mandi&rdquo;, or
            &ldquo;machher jhol&rdquo; and you&apos;ll often find nothing — or
            a generic &ldquo;rice with meat&rdquo; entry that misses the mark.
            That&apos;s a real problem: if your food isn&apos;t in the
            database, you either guess badly or stop tracking altogether.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            Why cultural dishes are tricky to track
          </h2>
          <p>
            Traditional dishes are usually mixed: rice, meat, oils, nuts, and
            sauces cooked together. The macros depend heavily on preparation —
            a home-style biryani and a restaurant one can differ by hundreds of
            calories per serving, mostly from cooking fat. Generic database
            entries can&apos;t capture that range, and weighing every
            ingredient of a family recipe is unrealistic.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            A practical approach
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Use an app with cultural cuisine libraries.</strong>{" "}
              Purpose-built entries for Afghan, Arabic &amp; Middle Eastern,
              Bangladeshi, and other cuisines get you far closer than generic
              equivalents.
            </li>
            <li>
              <strong>Photo-scan plated meals.</strong> AI scanning estimates
              the actual portion in front of you — especially useful for
              shared, family-style serving where &ldquo;one serving&rdquo; is
              fuzzy.
            </li>
            <li>
              <strong>Watch the cooking fat, not the spices.</strong> Spices
              are nutritionally trivial; ghee and oil are where the hidden
              calories live. If a dish looks glossy, nudge the fat estimate up.
            </li>
            <li>
              <strong>Log your staples once.</strong> Save your household&apos;s
              regular dishes as meal templates so repeat logging takes one tap.
            </li>
          </ul>

          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            Macros for popular dishes (per serving)
          </h2>
          <p>
            Real numbers from the MyNutriRise food library — use them as
            reference points when you estimate restaurant or home portions:
          </p>
          <div className="overflow-hidden rounded-2xl ring-1 ring-slate-100">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-emerald-50/60 text-left">
                  <th className="px-4 py-3 font-semibold text-slate-700">Dish</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">kcal</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Protein</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Carbs</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">Fat</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Chicken Biryani (Pakistani)", "480", "28g", "52g", "18g"],
                  ["Kabuli Pulao (Afghan)", "480", "28g", "55g", "16g"],
                  ["Nihari (Pakistani)", "450", "35g", "15g", "28g"],
                  ["Chicken Tagine (Moroccan)", "380", "30g", "25g", "18g"],
                  ["Adana Kebab (Turkish)", "380", "32g", "8g", "24g"],
                  ["Koshari (Egyptian)", "380", "14g", "62g", "8g"],
                  ["Shakshuka", "354", "18g", "14g", "24g"],
                ].map(([dish, kcal, pr, cb, ft]) => (
                  <tr key={dish} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-medium text-slate-700">{dish}</td>
                    <td className="px-4 py-3">{kcal}</td>
                    <td className="px-4 py-3">{pr}</td>
                    <td className="px-4 py-3">{cb}</td>
                    <td className="px-4 py-3">{ft}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            More dishes with full nutrition are on our{" "}
            <a href="/recipes" className="font-medium text-emerald-600 hover:text-emerald-700">recipes page</a>;
            to turn your calorie goal into gram targets, use the{" "}
            <a href="/tools/macro-calculator" className="font-medium text-emerald-600 hover:text-emerald-700">macro calculator</a>.
          </p>

          <h2 className="pt-4 text-2xl font-bold text-slate-800">
            Halal tracking is about more than ingredients
          </h2>
          <p>
            Eating halal while pursuing a fitness goal shouldn&apos;t mean
            forcing yourself onto chicken-and-broccoli meal plans. The
            sustainable path is keeping the food you love and adjusting
            portions and frequency — which is exactly what proper tracking
            makes possible. During Ramadan, pairing meal logging with a fasting
            tracker also helps you keep suhoor and iftar balanced instead of
            swinging between extremes. For the full picture of halal-friendly
            tracking, see our{" "}
            <a href="/halal-nutrition-app" className="font-medium text-emerald-600 hover:text-emerald-700">halal nutrition app</a>{" "}
            page.
          </p>
        </div>

        <ArticleCta
          heading="Your food, tracked properly"
          body="MyNutriRise includes halal-friendly recipes and cultural cuisine libraries — Afghan, Arabic, Bangladeshi, and more."
        />
      </article>
    </div>
  );
}
