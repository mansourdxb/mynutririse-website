import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { ArticlePage, articleMetadata } from "../ArticlePage";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/blog/track-macros-halal-cultural-meals">): Promise<Metadata> {
  return articleMetadata((await params).lang as Locale, "halalMacros");
}

export default async function Article({
  params,
}: PageProps<"/[lang]/blog/track-macros-halal-cultural-meals">) {
  const lang = (await params).lang as Locale;
  return (
    <ArticlePage
      lang={lang}
      articleKey="halalMacros"
      links={{
        recipes: "/recipes",
        macroCalculator: "/tools/macro-calculator",
        halalApp: "/halal-nutrition-app",
      }}
    />
  );
}
