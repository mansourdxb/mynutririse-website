import Image from "next/image";

// Screen rectangle inside /device/iphone-frame.png (1022×2082), measured in px.
const FRAME = { w: 1022, h: 2082 };
const SCREEN = { x: 52, y: 46, w: 918, h: 1990, r: 126 };

const pct = (v: number, of: number) => `${(v / of) * 100}%`;

export function PhoneMockup({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="relative mx-auto w-[248px] drop-shadow-[0_30px_40px_rgb(14_26_21/0.25)] sm:w-[290px] dark:drop-shadow-[0_30px_50px_rgb(0_0_0/0.6)]"
        style={{ aspectRatio: `${FRAME.w} / ${FRAME.h}` }}
      >
        {/* Device frame (its screen area is opaque black) */}
        <Image
          src="/device/iphone-frame.png"
          alt=""
          aria-hidden="true"
          fill
          sizes="290px"
          className="pointer-events-none select-none"
        />
        {/* Screen content sits on top of the frame's screen area */}
        <div
          className="absolute overflow-hidden bg-black"
          style={{
            left: pct(SCREEN.x, FRAME.w),
            top: pct(SCREEN.y, FRAME.h),
            width: pct(SCREEN.w, FRAME.w),
            height: pct(SCREEN.h, FRAME.h),
            borderRadius: `${pct(SCREEN.r, SCREEN.w)} / ${pct(SCREEN.r, SCREEN.h)}`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
