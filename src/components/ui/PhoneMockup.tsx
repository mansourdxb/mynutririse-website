export function PhoneMockup({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative mx-auto w-[280px] sm:w-[300px]">
        {/* Phone frame */}
        <div className="relative rounded-[3rem] border-[8px] border-slate-800 bg-slate-900 p-2 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-slate-800" />
          {/* Screen */}
          <div className="relative overflow-hidden rounded-[2.25rem] bg-white">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
