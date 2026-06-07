import { motion } from "framer-motion";

const experiences = [
  {
    role: "Managing Director & Head of Product",
    org: "Nebotech Ltd, Kigali, Rwanda",
    type: "Digital Transformation & Product Leadership",
    period: "2019 – Present",
    highlights: [
      "Lead product strategy, roadmap development, and execution across Nebotech's digital transformation portfolio.",
      "Manage multidisciplinary teams spanning product management, software engineering, UX/UI design, QA, business analysis, and operations.",
      "Drive product discovery, stakeholder engagement, requirements prioritization, and delivery planning across multiple initiatives.",
      "Lead digital transformation programs serving government institutions, development partners, and private-sector organizations.",
      "Established Agile delivery frameworks that improved delivery efficiency by 30%.",
      "Oversee quality assurance, product validation, accessibility compliance, and release management processes.",
      "Manage executive stakeholder relationships and strategic partnerships across public and private sectors.",
      "Key Project — Umucyo e-Procurement V2: Leading Rwanda's next-generation public procurement platform serving all government institutions; coordinating cross-functional teams and stakeholders across 20+ government institutions; driving modernization via microservices, interoperability, and accessibility standards.",
      "Key Project — Shora Neza Monitoring & Evaluation Platform: Led product development of a national farmer M&E platform across 15 districts, delivering BI dashboards, field data collection tools, and reporting systems.",
    ],
  },
  {
    role: "Founder",
    org: "Renaissance Lab, Kigali, Rwanda",
    type: "AI Literacy, Inclusion & Responsible AI",
    period: "2026 – Present",
    highlights: [
      "Founded an initiative focused on advancing AI literacy, digital inclusion, and responsible AI adoption across Africa.",
      "Lead community-based programs that promote accessible AI education and digital empowerment.",
      "Develop practical frameworks supporting ethical, explainable, and inclusive AI implementation.",
      "Collaborate with researchers, practitioners, policymakers, and technology leaders to strengthen digital inclusion across underserved communities.",
      "Design and deliver AI literacy programs, workshops, and community engagement initiatives targeting youth, professionals, educators, and public-sector stakeholders.",
    ],
  },
  {
    role: "Product Designer & Research Associate",
    org: "Upanzi-DPI Network Research Lab, Carnegie Mellon University Africa",
    type: "Digital Public Infrastructure & DPGs",
    period: "2025 – 2026",
    highlights: [
      "Led product design and user experience initiatives across Digital Public Infrastructure (DPI) and Digital Public Goods (DPGs).",
      "Conducted product discovery, stakeholder engagement, requirements gathering, and solution validation activities.",
      "Designed user journeys, workflows, wireframes, prototypes, and accessibility improvements across multiple platforms.",
      "Led quality assurance, accessibility evaluations, usability testing, and product validation activities.",
      "Supported product strategy decisions through user insights, performance evaluations, and evidence-based recommendations.",
      "Facilitated stakeholder demonstrations, product validation workshops, and user acceptance testing sessions.",
      "Key Project — Assisted Authentication (MOSIP-based Digital Identity): Led UX design and product validation supporting inclusive access to digital identity services.",
      "Key Project — AI Policy Analyzer: Supported product design, testing, and validation of an AI-powered policy analysis platform.",
      "Key Project — AppKit Security Testing Platform: Conducted product evaluations, usability testing, and QA for AI-powered application vulnerability testing solutions.",
    ],
  },
  {
    role: "Senior Product Management Consultant",
    org: "Huzalabs, Kigali, Rwanda",
    type: "Healthcare Product Consulting",
    period: "Jul 2024 – 2025",
    highlights: [
      "Key Project — BloodBank Platform: Served as PM Consultant for a digital BloodBank platform improving blood donation, inventory management, and healthcare service coordination.",
      "Led product discovery sessions with healthcare stakeholders, administrators, and end users.",
      "Defined product requirements, workflows, user journeys, and operational processes.",
      "Collaborated with engineering and design teams to deliver scalable and user-centered healthcare solutions.",
      "Supported roadmap planning, feature prioritization, QA activities, and release coordination.",
      "Facilitated user acceptance testing and stakeholder validation throughout the product lifecycle.",
    ],
  },
  {
    role: "Research Assistant — Human-Centered Design",
    org: "Carnegie Mellon University Africa, Kigali, Rwanda",
    type: "Assistive Technology Research",
    period: "Jun 2024 – Sep 2024",
    highlights: [
      "Led participatory design research focused on assistive technology solutions for children with autism.",
      "Conducted stakeholder interviews, field research, usability testing, and solution evaluation.",
      "Evaluated 50+ assistive technology applications using standardized usability assessment frameworks.",
      "Collaborated with parents, caregivers, and community health workers to co-design accessible digital solutions.",
      "Produced actionable recommendations for improving accessibility and user experience.",
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
          Seven years leading product, digital transformation, and human-centered design across government, development, healthcare, and private-sector ecosystems.
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
