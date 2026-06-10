import Link from "next/link";
import { AppStoreButton } from "@/components/ui/Button";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Recipes", href: "/recipes" },
      { label: "Halal Nutrition", href: "/halal-nutrition-app" },
      { label: "Premium", href: "/#premium" },
      { label: "Compare", href: "/compare/mynutririse-vs-myfitnesspal" },
      { label: "Download", href: "/download" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "/support" },
      { label: "Blog", href: "/blog" },
      { label: "Custom Plan Quiz", href: "/quiz" },
      { label: "Free Tools", href: "/tools" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Press Kit", href: "/press" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Contact", href: "/support" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-800 text-slate-400">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">
                MyNutriRise
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
              Your smart wellness companion — AI meal scanning, halal &amp;
              cultural recipes, fasting, and coaching in one app.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <AppStoreButton store="apple" />
              <AppStoreButton store="google" />
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-emerald-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-700 pt-8 md:flex-row">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <p className="text-xs">
              &copy; {new Date().getFullYear()} MyNutriRise. All rights
              reserved.
            </p>
            <p className="text-xs text-slate-500">
              Made with{" "}
              <span role="img" aria-label="green heart">
                💚
              </span>{" "}
              for healthier living
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
