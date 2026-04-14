import { motion } from "framer-motion";

const experiences = [
  {
    role: "Managing Director",
    org: "Nebotech",
    type: "Digital Transformation & E-Government",
    period: "2024 – Present",
    highlights: [
      "Leading national rollout of Umucyo e-Procurement V2 — Rwanda's flagship digital public procurement platform — across 20+ ministries",
      "Applying human-centered AI design principles ensuring AI-assisted features are explainable, auditable, and aligned with Rwanda's AI policy",
      "Architecting DPG-aligned, open-standard platforms embedding accessibility and AI policy compliance at infrastructure level",
      "30% faster delivery through Agile process reform and cross-functional alignment",
    ],
  },
  {
    role: "Research Associate",
    org: "CyLab-Upanzi, Carnegie Mellon University Africa",
    type: "AI Governance Research",
    period: "2024 – Present",
    highlights: [
      "HCI Intl. 2026 accepted — First human-centered AI governance framework for accessibility evaluation on Rwanda's e-government platforms",
      "Investigating explainable AI (XAI) requirements: audit trails, interpretability standards, and human oversight as enforceable policy",
      "Co-designing evaluation protocols with civil servants and citizens interacting with AI-powered government services",
    ],
  },
  {
    role: "User Researcher",
    org: "Irembo — Rwanda's National E-Government Portal",
    type: "UX Research",
    period: "Mar – Jun 2024",
    highlights: [
      "Mixed-methods research on citizen experience across Rwanda's primary digital services platform serving millions",
      "Produced user personas and evidence-based design recommendations adopted by product and engineering teams",
    ],
  },
  {
    role: "Research Assistant — Human-Centered Design",
    org: "Carnegie Mellon University Africa",
    type: "Assistive Technology",
    period: "Jun – Sep 2024",
    highlights: [
      "Led participatory research on assistive technology for autistic children, co-designing with parents and community health workers",
      "Evaluated 50+ assistive technology applications using SUS benchmarking",
    ],
  },
  {
    role: "UI/UX Designer",
    org: "Rwanda Education Board — TMIS",
    type: "E-Government UX",
    period: "2022 – 2023",
    highlights: [
      "Improved UX score from 50% to 70% on the national Teacher Management Information System serving 80,000+ teachers",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="gold-line mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Experience</h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12 md:pl-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute -left-10 top-2 w-3 h-3 rounded-full bg-accent border-2 border-background -translate-x-[5px]" />

              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                <span className="text-sm text-accent font-medium">{exp.period}</span>
              </div>
              <p className="text-base text-primary font-medium mb-1">{exp.org}</p>
              <p className="text-sm text-muted-foreground mb-4">{exp.type}</p>

              <ul className="space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-accent mt-1.5 shrink-0">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
