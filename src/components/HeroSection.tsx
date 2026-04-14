import { motion } from "framer-motion";
import heroPattern from "@/assets/hero-pattern.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-15">
        <img
          src={heroPattern}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-surface/80" />

      <div className="relative section-padding w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="gold-line mb-8" />
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[0.95]">
            Pauline
            <br />
            Uwase
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-8 max-w-2xl"
        >
          <p className="text-xl md:text-2xl font-serif text-muted-foreground leading-relaxed">
            AI Governance Researcher · Digital Transformation Leader · Human-Centered AI Design
          </p>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
            Shaping how African governments build, deploy, and govern
            AI-powered public services — from Kigali to the world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#research"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all hover:opacity-90"
          >
            View Research
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-foreground/20 text-foreground font-medium rounded-lg transition-all hover:bg-foreground/5"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 border-2 border-foreground/20 rounded-full flex justify-center pt-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
