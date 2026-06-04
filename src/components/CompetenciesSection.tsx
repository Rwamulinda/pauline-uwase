import { motion } from "framer-motion";
import mascotShowcase from "@/assets/mascot-showcase.png";

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
  {
    title: "Software Engineering, UX & Tech Leadership",
    items: [
      "Full-stack development: React, Vue.js, Node.js, HTML5, CSS3",
      "UX research: contextual inquiry, usability testing, user research, SUS",
      "Accessibility engineering: WCAG 2.1 A/AA/AAA, POUR principles",
      "Figma prototyping, design systems & interaction design",
      "Agile delivery, backlog management & cross-functional team leadership",
      "Open-source platform architecture & API integration",
    ],
  },
  {
    title: "Research Methods, Data Analytics & Communication",
    items: [
      "Mixed-methods research design: quantitative, qualitative & participatory",
      "Data analysis: Python (Pandas, NumPy, Matplotlib, Scikit-learn, SciPy)",
      "Academic & technical writing; peer-review & conference publication",
      "Research ethics, IRB processes & institutional review compliance",
      "High analytical rigour, attention to detail & professional integrity",
      "Clear communication of complex technical concepts to non-expert audiences",
    ],
  },
  {
    title: "Product Management",
    items: [
      "Product Strategy & Roadmap Development",
      "Product Discovery & User Research",
      "Requirements Gathering and Prioritization",
      "Business Requirements Documentation (BRD) & User Stories",
      "Service Design & Process Optimization",
      "Agile Product Delivery (Scrum/Kanban)",
      "Stakeholder Engagement & Cross-Functional Leadership",
      "Data-Driven Decision Making & Product Analytics",
      "User Acceptance Testing (UAT) & Quality Assurance",
      "Product Performance Monitoring & Continuous Improvement",
      "Team Leadership",
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
          Core <span className="text-accent">Competencies</span>
        </h2>
      </motion.div>

      <div className="relative grid md:grid-cols-2 gap-8">
        {competencyGroups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">{group.title}</h3>
            <ul className="space-y-3">
              {group.items.map((item, j) => (
                <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed items-start">
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {/* Showcase mascot — sits between the cards on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 items-center justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-foreground/5 blur-2xl scale-110" />
            <img
              src={mascotShowcase}
              alt="Pauline showcasing core competencies"
              loading="lazy"
              width={1024}
              height={1024}
              className="relative w-48 lg:w-56 drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Mobile mascot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="md:hidden flex justify-center mt-8"
      >
        <img
          src={mascotShowcase}
          alt="Pauline showcasing core competencies"
          loading="lazy"
          width={1024}
          height={1024}
          className="w-40 drop-shadow-xl"
        />
      </motion.div>
    </section>
  );
}
