import { motion } from "framer-motion";
import { useMemo } from "react";

export function AnimatedBackground() {
  const bubbles = useMemo(() => {
    const seeded = (i: number) => {
      const x = Math.sin(i * 9301 + 49297) * 233280;
      return x - Math.floor(x);
    };
    return Array.from({ length: 45 }).map((_, i) => ({
      size: 20 + seeded(i) * 90,
      top: seeded(i + 100) * 100,
      left: seeded(i + 200) * 100,
      opacity: 0.15 + seeded(i + 300) * 0.35,
      duration: 8 + seeded(i + 400) * 12,
      delay: seeded(i + 500) * 5,
      drift: 20 + seeded(i + 600) * 40,
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.985 0.008 230) 0%, oklch(0.96 0.025 230) 50%, oklch(0.94 0.035 230) 100%)",
        }}
      />

      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            top: `${b.top}%`,
            left: `${b.left}%`,
            background:
              "radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--primary) 45%, transparent), color-mix(in oklab, var(--primary) 15%, transparent))",
            opacity: b.opacity,
          }}
          animate={{
            y: [0, -b.drift, 0],
            x: [0, b.drift / 2, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--accent) 18%, transparent) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
