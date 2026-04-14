import { motion } from "framer-motion";
import mascotAbout from "@/assets/mascot-about.png";

export function AboutSection() {
  return (
    <section id="about" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="gold-line mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          About <span className="text-accent">Me</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-12 items-center">
        {/* Mascot */}
        <motion.div
          className="md:col-span-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] rounded-full bg-gradient-to-br from-accent/15 to-surface/50" />
            </div>
            <img
              src={mascotAbout}
              alt="About Pauline"
              className="relative z-10 w-full max-w-xs drop-shadow-xl"
              loading="lazy"
              width={800}
              height={800}
            />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          className="md:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="text-lg font-serif text-foreground/85 leading-relaxed">
            I work at the intersection of AI policy, explainable AI, and human-centered
            design — with six years of hands-on experience shaping how African governments
            build, deploy, and govern AI-powered public services.
          </p>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed">
            Currently leading Rwanda's national e-procurement platform at Nebotech and
            conducting AI governance research at CMU Africa's CyLab-Upanzi, I bring both
            research rigour and policy-implementation depth to responsible AI governance.
          </p>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed">
            My core conviction: AI systems in public life must be{" "}
            <span className="text-accent font-medium">explainable</span> to the people they affect,{" "}
            <span className="text-accent font-medium">designed</span> around human needs, and{" "}
            <span className="text-accent font-medium">governed</span> by clear, enforceable policy.
          </p>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap gap-6">
            {[
              { num: "6+", label: "Years Experience" },
              { num: "20+", label: "Ministries Served" },
              { num: "80K+", label: "Users Impacted" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-accent">{stat.num}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Info cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/30 transition-colors">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Based in</p>
          <p className="text-foreground font-medium">Kigali, Rwanda</p>
        </div>
        <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/30 transition-colors">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Current Focus</p>
          <p className="text-foreground font-medium">AI Governance for the Global South</p>
        </div>
        <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/30 transition-colors">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Affiliations</p>
          <p className="text-foreground font-medium">Nebotech · CyLab-Upanzi, CMU Africa</p>
        </div>
      </motion.div>
    </section>
  );
}
