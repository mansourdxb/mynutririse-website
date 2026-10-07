import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { ArticlePage, articleMetadata } from "../ArticlePage";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/blog/ai-photo-calorie-tracking">): Promise<Metadata> {
  return articleMetadata((await params).lang as Locale, "aiPhoto");
}

export default async function Article({
  params,
}: PageProps<"/[lang]/blog/ai-photo-calorie-tracking">) {
  const lang = (await params).lang as Locale;
  return <ArticlePage lang={lang} articleKey="aiPhoto" />;
}
