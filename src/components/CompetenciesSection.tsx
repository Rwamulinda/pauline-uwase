import { motion } from "framer-motion";

const competencyGroups = [
  {
    title: "AI Governance, Policy & Ethics",
    items: [
      "AI policy analysis & regulatory framework design",
      "Explainable AI (XAI) evaluation & human oversight models",
      "Human-centered AI design methodology (ISO 9241-210)",
      "Ethical AI framework design & responsible innovation",
      "AI usability & heuristic assessment (Nielsen/Norman)",
      "Research ethics & CITI-certified methodology",
    ],
  },
  {
    title: "Digital Public Infrastructure & Policy",
    items: [
      "DPI design & governance (DPG Alliance standards)",
      "Open-source platform strategy & interoperability",
      "Stakeholder management at ministerial level",
      "Citizen-centred service design & co-creation",
      "Cross-institutional change management",
    ],
  },
];

export function CompetenciesSection() {
  return (
    <section id="competencies" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="gold-line mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Core Competencies
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {competencyGroups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-card rounded-2xl p-8 border border-border/50"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">{group.title}</h3>
            <ul className="space-y-3">
              {group.items.map((item, j) => (
                <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-accent shrink-0 mt-0.5">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
