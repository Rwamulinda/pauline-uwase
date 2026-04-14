import { motion } from "framer-motion";

const publications = [
  {
    status: "Accepted — HCI International 2026",
    venue: "Barcelona, July 2026",
    title:
      "Accessibility by Design: Assessing AI-Powered Tools and Prompting Techniques in E-Government UI Redesign",
    description:
      "First AI-assisted governance framework for identifying and remediating accessibility barriers in low-resource e-government contexts. Evaluated AI-powered accessibility tools against 8 Rwandan e-government platforms using Nielsen/Norman heuristics and SUS benchmarking.",
    tag: "Published",
  },
  {
    status: "In Progress",
    venue: "",
    title:
      "Evaluating AI Usability Testing Tools: Effectiveness Using Norman Heuristics and the Standardized Usability Scale (SUS)",
    description:
      "Investigating how AI-powered usability testing tools perform against established heuristic evaluation frameworks.",
    tag: "In Progress",
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="bg-primary/[0.03] section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="gold-line mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Research & Publications
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Advancing human-centered AI governance through peer-reviewed research and replicable policy frameworks.
          </p>
        </motion.div>

        <div className="space-y-8">
          {publications.map((pub, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 md:p-10 border border-border/50 hover:border-accent/30 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                    pub.tag === "Published"
                      ? "bg-primary/10 text-primary"
                      : "bg-accent/15 text-accent-foreground"
                  }`}
                >
                  {pub.tag}
                </span>
                <span className="text-sm text-muted-foreground">{pub.status}</span>
                {pub.venue && (
                  <span className="text-sm text-muted-foreground">· {pub.venue}</span>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground leading-snug mb-4 font-serif italic">
                "{pub.title}"
              </h3>
              <p className="text-muted-foreground leading-relaxed">{pub.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
