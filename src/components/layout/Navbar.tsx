"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar({ lang, t }: { lang: Locale; t: Messages["common"]["nav"] }) {
  const navLinks = [
    { href: "/features", label: t.features },
    { href: "/tools", label: t.tools },
    { href: "/quiz", label: t.customPlan },
    { href: "/#premium", label: t.premium },
    { href: "/recipes", label: t.recipes },
    { href: "/blog", label: t.blog },
    { href: "/support", label: t.support },
  ].map((l) => ({ ...l, href: localePath(lang, l.href) }));

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 start-0 end-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-canvas/75 backdrop-blur-xl border-b border-line/70"
            : "bg-transparent"
        }`}
      >
        <nav className="container-page flex items-center justify-between py-3.5">
          {/* Logo */}
          <Link href={localePath(lang, "/")} className="flex items-center gap-2">
            <Image src="/logo.png" alt={t.logoAlt} width={28} height={28} className="h-7 w-7" loading="eager" />
            <span className="font-display text-lg font-bold tracking-tight text-ink">
              MyNutriRise
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 lg:gap-7 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-2 transition-colors duration-200 hover:text-emerald-600 dark:hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={localePath(lang, "/#download")}
              className="btn-primary px-5 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              {t.download}
            </Link>
            <LanguageSwitcher lang={lang} label={t.language} />
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label={mobileOpen ? t.closeMenu : t.openMenu}
            aria-expanded={mobileOpen}
          >
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-0.5 w-full rounded-full bg-ink-2 transition-transform duration-200 ${
                  mobileOpen ? "translate-y-[5.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full bg-ink-2 transition-opacity duration-150 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full bg-ink-2 transition-transform duration-200 ${
                  mobileOpen ? "-translate-y-[5.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="anim-menu-fade fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />

          {/* Panel */}
          <div className="anim-menu-slide absolute end-0 top-0 bottom-0 w-full max-w-sm bg-surface shadow-xl">
            <div className="flex h-full flex-col items-center justify-center gap-6 px-8">
              {navLinks.map((link, i) => (
                <div
                  key={link.href}
                  className="anim-menu-item"
                  style={{ animationDelay: `${0.1 + i * 0.05}s` }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-medium text-ink-2 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
              <div
                className="anim-menu-item"
                style={{ animationDelay: `${0.1 + navLinks.length * 0.05}s` }}
              >
                <Link
                  href={localePath(lang, "/#download")}
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 inline-block rounded-full bg-emerald-500 px-8 py-3 text-base font-medium text-white shadow-sm shadow-emerald-500/20 transition-all duration-200 hover:bg-emerald-600 hover:shadow-md"
                >
                  {t.download}
                </Link>
              </div>
              <LanguageSwitcher lang={lang} label={t.language} variant="list" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
