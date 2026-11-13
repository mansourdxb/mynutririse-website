import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { ArticlePage, articleMetadata } from "../ArticlePage";

export async function generateMetadata({ params }: PageProps<"/[lang]/blog/ramadan-weight-loss-without-losing-muscle">): Promise<Metadata> {
  return articleMetadata((await params).lang as Locale, "ramadan-weight-loss-without-losing-muscle");
}

export default async function RamadanMusclePost({ params }: PageProps<"/[lang]/blog/ramadan-weight-loss-without-losing-muscle">) {
  return <ArticlePage lang={(await params).lang as Locale} slug="ramadan-weight-loss-without-losing-muscle" />;
}
