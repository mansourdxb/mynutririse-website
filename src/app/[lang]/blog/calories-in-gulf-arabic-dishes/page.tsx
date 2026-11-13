import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { ArticlePage, articleMetadata } from "../ArticlePage";

export async function generateMetadata({ params }: PageProps<"/[lang]/blog/calories-in-gulf-arabic-dishes">): Promise<Metadata> {
  return articleMetadata((await params).lang as Locale, "calories-in-gulf-arabic-dishes");
}

export default async function GulfDishesPost({ params }: PageProps<"/[lang]/blog/calories-in-gulf-arabic-dishes">) {
  return <ArticlePage lang={(await params).lang as Locale} slug="calories-in-gulf-arabic-dishes" />;
}
