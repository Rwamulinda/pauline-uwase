import { useMemo } from "react";

export function AnimatedBackground() {
  const bubbles = useMemo(() => {
    const seeded = (i: number) => {
      const x = Math.sin(i * 9301 + 49297) * 233280;
      return x - Math.floor(x);
    };
    return Array.from({ length: 55 }).map((_, i) => ({
      size: 16 + seeded(i) * 80,
      top: seeded(i + 100) * 100,
      left: seeded(i + 200) * 100,
      opacity: 0.08 + seeded(i + 300) * 0.22,
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-background">
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-foreground"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            top: `${b.top}%`,
            left: `${b.left}%`,
            opacity: b.opacity,
          }}
        />
      ))}
    </div>
  );
}
