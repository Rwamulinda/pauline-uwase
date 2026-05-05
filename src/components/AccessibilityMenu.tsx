import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accessibility, Type, Minus, Plus, Contrast, Link2, Sparkles, RotateCcw, X } from "lucide-react";

type Settings = {
  fontScale: number; // 1, 1.1, 1.25, 1.5
  highContrast: boolean;
  highlightLinks: boolean;
  reducedMotion: boolean;
  dyslexiaFont: boolean;
};

const DEFAULTS: Settings = {
  fontScale: 1,
  highContrast: false,
  highlightLinks: false,
  reducedMotion: false,
  dyslexiaFont: false,
};

const STORAGE_KEY = "a11y-settings";

function applySettings(s: Settings) {
  const root = document.documentElement;
  root.style.fontSize = `${s.fontScale * 100}%`;
  root.classList.toggle("a11y-high-contrast", s.highContrast);
  root.classList.toggle("a11y-highlight-links", s.highlightLinks);
  root.classList.toggle("a11y-reduced-motion", s.reducedMotion);
  root.classList.toggle("a11y-dyslexia", s.dyslexiaFont);
}

export function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULTS);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...DEFAULTS, ...JSON.parse(raw) } as Settings;
        setSettings(parsed);
        applySettings(parsed);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applySettings(settings);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {}
  }, [settings, mounted]);

  const update = <K extends keyof Settings>(key: K, value: Settings[K]) =>
    setSettings((s) => ({ ...s, [key]: value }));

  const reset = () => setSettings(DEFAULTS);

  if (!mounted) return null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open accessibility menu"
        className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Accessibility className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              role="dialog"
              aria-label="Accessibility settings"
              initial={{ x: -340, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -340, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 left-0 bottom-0 z-50 w-[320px] max-w-[90vw] bg-background border-r border-border shadow-2xl overflow-y-auto"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <Accessibility className="w-5 h-5 text-accent" />
                  <h2 className="text-base font-semibold text-foreground">Accessibility</h2>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close accessibility menu"
                  className="p-1 rounded hover:bg-muted text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 space-y-5">
                {/* Font size */}
                <div>
                  <div className="flex items-center gap-2 mb-2 text-sm font-medium text-foreground">
                    <Type className="w-4 h-4" /> Text size
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => update("fontScale", Math.max(0.9, +(settings.fontScale - 0.1).toFixed(2)))}
                      className="p-2 rounded border border-border hover:bg-muted text-foreground"
                      aria-label="Decrease text size"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <div className="flex-1 text-center text-sm tabular-nums text-muted-foreground">
                      {Math.round(settings.fontScale * 100)}%
                    </div>
                    <button
                      onClick={() => update("fontScale", Math.min(1.6, +(settings.fontScale + 0.1).toFixed(2)))}
                      className="p-2 rounded border border-border hover:bg-muted text-foreground"
                      aria-label="Increase text size"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <Toggle
                  icon={<Contrast className="w-4 h-4" />}
                  label="High contrast"
                  checked={settings.highContrast}
                  onChange={(v) => update("highContrast", v)}
                />
                <Toggle
                  icon={<Link2 className="w-4 h-4" />}
                  label="Highlight links"
                  checked={settings.highlightLinks}
                  onChange={(v) => update("highlightLinks", v)}
                />
                <Toggle
                  icon={<Sparkles className="w-4 h-4" />}
                  label="Reduce motion"
                  checked={settings.reducedMotion}
                  onChange={(v) => update("reducedMotion", v)}
                />
                <Toggle
                  icon={<Type className="w-4 h-4" />}
                  label="Readable font"
                  checked={settings.dyslexiaFont}
                  onChange={(v) => update("dyslexiaFont", v)}
                />

                <button
                  onClick={reset}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 p-2 rounded border border-border text-sm text-foreground hover:bg-muted transition-colors"
                >
                  <RotateCcw className="w-4 h-4" /> Reset
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function Toggle({
  icon,
  label,
  checked,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!checked)}
      role="switch"
      aria-checked={checked}
      className="w-full flex items-center justify-between p-3 rounded border border-border hover:bg-muted transition-colors text-left"
    >
      <span className="flex items-center gap-2 text-sm text-foreground">
        {icon}
        {label}
      </span>
      <span
        className={`relative w-9 h-5 rounded-full transition-colors ${
          checked ? "bg-accent" : "bg-muted-foreground/30"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-background transition-transform ${
            checked ? "translate-x-4" : ""
          }`}
        />
      </span>
    </button>
  );
}
