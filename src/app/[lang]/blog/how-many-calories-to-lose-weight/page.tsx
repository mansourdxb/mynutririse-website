import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { ArticlePage, articleMetadata } from "../ArticlePage";

export async function generateMetadata({ params }: PageProps<"/[lang]/blog/how-many-calories-to-lose-weight">): Promise<Metadata> {
  return articleMetadata((await params).lang as Locale, "how-many-calories-to-lose-weight");
}

export default async function CaloriesToLosePost({ params }: PageProps<"/[lang]/blog/how-many-calories-to-lose-weight">) {
  return <ArticlePage lang={(await params).lang as Locale} slug="how-many-calories-to-lose-weight" />;
}
