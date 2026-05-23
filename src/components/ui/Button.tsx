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
      href="#"
      className="inline-flex items-center gap-3 rounded-xl bg-slate-900 px-5 py-3 text-white transition-all duration-200 hover:bg-slate-800 hover:scale-[1.02] dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
    >
      {isApple ? (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.18 23.67c-.6-.32-1.09-.81-1.41-1.41C1.26 21.31 1 20.26 1 19.13V4.87c0-1.13.26-2.18.77-3.13.32-.6.81-1.09 1.41-1.41L12 9.17l-8.82 14.5zM20.44 13.42L17 11.42l3.81-6.28c.2.32.35.67.46 1.04.11.37.17.77.17 1.19v11.26c0 .42-.06.82-.17 1.19-.11.37-.26.72-.46 1.04l-3.81-6.28 3.44-2.16zM12 9.17L20.06.73c-.6-.32-1.29-.48-2.06-.48H6c-.77 0-1.46.16-2.06.48L12 9.17zM12 14.83L3.94 23.27c.6.32 1.29.48 2.06.48h12c.77 0 1.46-.16 2.06-.48L12 14.83z" />
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
