import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { JsonLd } from "@/components/ui/JsonLd";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.mynutririse.com/#organization",
  name: "MyNutriRise",
  url: "https://www.mynutririse.com",
  logo: "https://www.mynutririse.com/icon.svg",
  sameAs: ["https://apps.apple.com/app/mynutririse/id6764006876"],
};

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mynutririse.com"),
  title: {
    default: "MyNutriRise: AI Calorie Counter & Halal Nutrition App",
    template: "%s — MyNutriRise",
  },
  description:
    "Track calories, scan meals with AI, follow personalized meal plans, and build healthier habits with MyNutriRise — your smart wellness companion.",
  openGraph: {
    title: "MyNutriRise: AI Calorie Counter & Halal Nutrition App",
    description:
      "Track calories, scan meals with AI, follow personalized meal plans, and build healthier habits daily.",
    type: "website",
    locale: "en_US",
    siteName: "MyNutriRise",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyNutriRise: AI Calorie Counter & Halal Nutrition App",
    description:
      "Your smart wellness companion for nutrition tracking, meal scanning, and healthier living.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0a110e" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <JsonLd data={organizationJsonLd} />
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
