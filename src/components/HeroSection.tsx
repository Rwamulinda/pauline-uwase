import { motion } from "framer-motion";
import mascotHero from "@/assets/mascot-hero.png";

export function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden pt-20 pb-8 md:pt-24 md:pb-10">
      <div className="relative section-padding w-full max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-medium mb-4 text-lg"
            >
              Hi, I'm
            </motion.p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[0.95]">
              Pauline{" "}
              <span className="text-primary">Uwase</span>
            </h1>

            <p className="mt-6 text-xl md:text-2xl font-serif text-muted-foreground leading-relaxed">
              Digital Transformation Leader · Researcher on Human Centered AI
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-xl">
              Product and Digital Transformation Leader with 7 years of experience leading the design, delivery, and scaling of digital products across government, development, healthcare, and private sector ecosystems. Currently leading a company behind the upgrade of Rwanda's national e Procurement platform and managing cross functional teams across product, engineering, design, quality assurance, and operations.
            </p>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed max-w-xl">
              As a Human Centered AI researcher, my work explores how AI systems can be designed, governed, and deployed in ways that enhance human agency, inclusion, accessibility, and public value. My research focuses on participatory AI design, digital inclusion, AI governance, and the responsible adoption of AI in African contexts.
            </p>


            {/* Stats */}
            <div className="mt-6 flex flex-wrap gap-6">
              {[
                { num: "7+", label: "Years Experience" },
                { num: "10+", label: "Projects Led" },
                { num: "80K+", label: "Users Impacted" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-bold text-accent">{stat.num}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#research"
                className="inline-flex items-center px-7 py-3.5 bg-primary text-primary-foreground font-medium rounded-full transition-all hover:opacity-90 hover:scale-105"
              >
                View Research
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3.5 border-2 border-accent text-accent font-medium rounded-full transition-all hover:bg-accent hover:text-accent-foreground"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right: Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Decorative circle behind mascot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-br from-surface via-accent/10 to-primary/10 blur-sm" />
              </div>
              <img
                src={mascotHero}
                alt="Pauline Uwase — AI Governance Researcher"
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
                width={800}
                height={1024}
              />
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
