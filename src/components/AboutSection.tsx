import { motion } from "framer-motion";

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
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">About</h2>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-12">
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
        </motion.div>

        <motion.div
          className="md:col-span-2 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="bg-surface/50 rounded-xl p-6">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Based in</p>
            <p className="text-foreground font-medium">Kigali, Rwanda</p>
          </div>
          <div className="bg-surface/50 rounded-xl p-6">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Current Focus</p>
            <p className="text-foreground font-medium">AI Governance for the Global South</p>
          </div>
          <div className="bg-surface/50 rounded-xl p-6">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Affiliations</p>
            <p className="text-foreground font-medium">Nebotech · CyLab-Upanzi, CMU Africa</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
