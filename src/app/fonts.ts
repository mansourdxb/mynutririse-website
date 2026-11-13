import { IBM_Plex_Sans_Arabic, Inter, Manrope } from "next/font/google";

// Shared by the site layout and the embed layout.
// Not preloaded: preload would fetch the Latin and Cyrillic files on every
// page (Arabic pages use neither), competing with the LCP image. Browsers
// still fetch only the subsets a page renders, and the size-adjusted
// fallback keeps layout shift near zero while they load.
export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
  preload: false,
});

export const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-heading",
  display: "swap",
  preload: false,
});

export const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
  preload: false,
});
