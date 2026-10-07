import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { ArticlePage, articleMetadata } from "../ArticlePage";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/blog/intermittent-fasting-16-8-guide">): Promise<Metadata> {
  return articleMetadata((await params).lang as Locale, "intermittentFasting");
}

export default async function Article({
  params,
}: PageProps<"/[lang]/blog/intermittent-fasting-16-8-guide">) {
  const lang = (await params).lang as Locale;
  return (
    <ArticlePage
      lang={lang}
      articleKey="intermittentFasting"
      links={{ calorieCalculator: "/tools/calorie-calculator" }}
    />
  );
}
