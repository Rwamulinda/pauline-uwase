import { motion } from "framer-motion";

const experiences = [
  {
    role: "Founder",
    org: "Renaissance Lab — Human-Centered AI Research Initiative",
    type: "AI Research & Community",
    period: "2026 – Present",
    highlights: [
      "Founded Renaissance Lab, an independent human-centered AI research and community initiative exploring how AI systems can be designed, governed, and deployed in ways that genuinely centre human dignity, agency, and well-being — particularly in African and Global South contexts.",
      "Leading applied research into participatory AI design methodologies: how communities with no formal AI background can meaningfully shape the systems that will affect their lives, from healthcare tools to government platforms.",
      "Building a community AI literacy programme that meets people where they are — from rural farmers and market traders to secondary school students and local government officials — translating complex AI concepts into relevant, accessible knowledge regardless of formal education level.",
      "Developing open frameworks and educational resources on explainable AI, algorithmic accountability, and human rights-based approaches to AI, designed for practitioners and policymakers in low-resource contexts.",
    ],
  },
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
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          My <span className="text-accent">Experience</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Six years of hands-on experience shaping AI governance and digital transformation across Africa.
        </p>
      </motion.div>

      <div className="relative">
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary/30 to-transparent" />

        <div className="space-y-10 md:pl-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="hidden md:block absolute -left-10 top-2 w-4 h-4 rounded-full bg-accent/20 border-2 border-accent -translate-x-[6px] group-hover:bg-accent transition-colors" />

              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-accent/15 text-accent">{exp.period}</span>
                </div>
                <p className="text-base text-primary font-medium mb-1">{exp.org}</p>
                <p className="text-sm text-muted-foreground mb-4">{exp.type}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-accent mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
