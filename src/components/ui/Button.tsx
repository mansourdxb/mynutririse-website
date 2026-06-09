import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40",
    secondary:
      "bg-white text-slate-800 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 dark:hover:border-emerald-600",
    ghost:
      "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 dark:text-slate-400 dark:hover:text-emerald-400 dark:hover:bg-slate-800",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-2.5 text-sm gap-2",
    lg: "px-8 py-3.5 text-base gap-2.5",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}

export function AppStoreButton({ store }: { store: "apple" | "google" }) {
  const isApple = store === "apple";
  return (
    <a
      href={isApple ? "https://apps.apple.com/app/mynutririse/id6764006876" : "https://play.google.com/store/apps/details?id=com.nutririse.app"}
      className="inline-flex items-center gap-3 rounded-xl bg-slate-900 px-5 py-3 text-white transition-all duration-200 hover:bg-slate-800 hover:scale-[1.02]"
    >
      {isApple ? (
        <svg className="h-7 w-7" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="#A8B5C8" />
        </svg>
      ) : (
        <svg className="h-7 w-7" viewBox="0 0 512 512">
          <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="url(#playGrad)" />
          <defs>
            <linearGradient id="playGrad" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#40BEF0" />
              <stop offset="25%" stopColor="#41C661" />
              <stop offset="50%" stopColor="#F9BC15" />
              <stop offset="100%" stopColor="#F14336" />
            </linearGradient>
          </defs>
        </svg>
      )}
      <div className="flex flex-col">
        <span className="text-[10px] leading-tight opacity-70">
          {isApple ? "Download on the" : "GET IT ON"}
        </span>
        <span className="text-base font-semibold leading-tight">
          {isApple ? "App Store" : "Google Play"}
        </span>
      </div>
    </a>
  );
}
