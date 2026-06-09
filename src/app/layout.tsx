import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/ui/MotionProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mynutririse.com"),
  title: {
    default: "MyNutriRise — Smarter Nutrition Starts Here",
    template: "%s — MyNutriRise",
  },
  description:
    "Track calories, scan meals with AI, follow personalized meal plans, and build healthier habits with MyNutriRise — your smart wellness companion.",
  openGraph: {
    title: "MyNutriRise — Smarter Nutrition Starts Here",
    description:
      "Track calories, scan meals with AI, follow personalized meal plans, and build healthier habits daily.",
    type: "website",
    locale: "en_US",
    siteName: "MyNutriRise",
    url: "/",
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

export const viewport: Viewport = {
  themeColor: "#FFFBF5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
