import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Product Management Tools",
    items: ["Jira", "Confluence", "Trello", "Notion", "ProdPad", "Aha!", "Monday.com", "Asana"],
  },
  {
    title: "Prototyping & Design",
    items: ["Figma", "Adobe XD", "Miro", "Balsamiq", "InVision", "Sketch", "Whimsical"],
  },
  {
    title: "Frontend Development",
    items: ["React.js", "Next.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    items: ["Java Spring Boot", "Node.js", "Express.js", "REST APIs", "GraphQL", "Microservices"],
  },
  {
    title: "Databases & Cloud",
    items: ["PostgreSQL", "MySQL", "Firebase", "MongoDB", "AWS", "GCP", "Docker", "GitHub"],
  },
  {
    title: "Data & Analytics",
    items: ["Power BI", "Metabase", "SQL", "Looker Studio", "Google Analytics", "Google Data Studio"],
  },
  {
    title: "Methodologies",
    items: ["Agile", "Scrum", "Kanban", "Lean", "Design Thinking", "User Story Mapping", "WCAG"],
  },
  {
    title: "Research Interests",
    items: [
      "Human-Centered AI",
      "Digital Public Infrastructure",
      "Accessibility & Inclusion",
      "AI Governance",
      "Public Sector Innovation",
      "Responsible AI",
    ],
  },
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Kinyarwanda", level: "Native" },
  { name: "French", level: "Proficient" },
  { name: "Kiswahili", level: "Conversational" },
];

export function SkillsLanguagesSection() {
  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="gold-line mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Technical Skills <span className="text-accent">& Tools</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          The toolkit I use to discover, design, deliver, and scale digital products.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillGroups.map((g, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="bg-card rounded-2xl p-5 border border-border/50 hover:border-accent/30 transition-all"
          >
            <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
              {g.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it, j) => (
                <span
                  key={j}
                  className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12"
      >
        <h3 className="text-2xl font-bold text-foreground mb-6">
          <span className="text-accent">Languages</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {languages.map((l, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-5 border border-border/50 hover:border-accent/30 transition-all text-center"
            >
              <p className="font-semibold text-foreground">{l.name}</p>
              <p className="text-sm text-muted-foreground mt-1">{l.level}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
