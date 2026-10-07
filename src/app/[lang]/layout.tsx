import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { IBM_Plex_Sans_Arabic, Inter, Manrope } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { JsonLd } from "@/components/ui/JsonLd";
import { dir, isLocale, locales, localePath, ogLocale, type Locale } from "@/i18n/config";
import { languageAlternates } from "@/i18n/metadata";
import { getMessages } from "@/i18n/messages";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.mynutririse.com/#organization",
  name: "MyNutriRise",
  url: "https://www.mynutririse.com",
  logo: "https://www.mynutririse.com/logo.png",
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

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
  preload: false,
});

// Pre-render every language; any other first segment is a 404.
export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { site } = getMessages(lang).common;
  return {
    metadataBase: new URL("https://www.mynutririse.com"),
    title: { default: site.title, template: site.titleTemplate },
    description: site.description,
    alternates: {
      canonical: localePath(lang, "/"),
      languages: languageAlternates("/"),
    },
    openGraph: {
      title: site.title,
      description: site.ogDescription,
      type: "website",
      locale: ogLocale[lang],
      siteName: "MyNutriRise",
      url: localePath(lang, "/"),
      images: [{ url: `/og/${lang}.png`, width: 1200, height: 630, alt: "MyNutriRise" }],
    },
    twitter: {
      card: "summary_large_image",
      title: site.title,
      description: site.twitterDescription,
      images: [`/og/${lang}.png`],
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0a110e" },
  ],
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const t = getMessages(locale).common;

  return (
    <html
      lang={locale}
      dir={dir(locale)}
      className={`${inter.variable} ${manrope.variable} ${locale === "ar" ? plexArabic.variable : ""} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <JsonLd data={organizationJsonLd} />
        <MotionProvider>
          <Navbar lang={locale} t={t.nav} />
          <main className="flex-1">{children}</main>
          <Footer lang={locale} t={t} />
        </MotionProvider>
      </body>
    </html>
  );
}
