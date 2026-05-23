import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MyNutriRise — Smarter Nutrition Starts Here",
  description:
    "Track calories, scan meals with AI, follow personalized meal plans, and build healthier habits with MyNutriRise — your smart wellness companion.",
  keywords: [
    "calorie tracker",
    "meal tracker",
    "fasting app",
    "nutrition app",
    "wellness app",
    "healthy lifestyle",
    "meal scan",
    "macros tracker",
    "AI nutrition coach",
    "diet planner",
    "food diary",
    "intermittent fasting",
  ],
  openGraph: {
    title: "MyNutriRise — Smarter Nutrition Starts Here",
    description:
      "Track calories, scan meals with AI, follow personalized meal plans, and build healthier habits daily.",
    type: "website",
    locale: "en_US",
    siteName: "MyNutriRise",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyNutriRise — Smarter Nutrition Starts Here",
    description:
      "Your smart wellness companion for nutrition tracking, meal scanning, and healthier living.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
