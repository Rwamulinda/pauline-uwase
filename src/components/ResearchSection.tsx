import { motion } from "framer-motion";

const publications = [
  {
    status: "Paper Accepted — HCI International 2026",
    venue: "Montreal, Canada · July 2026",
    id: "ID: 605",
    title:
      "An Experimental Study on Accessibility of AI-Powered UI Design Tools for E-Government Using Few-Shot and Zero-Shot Prompting",
    description:
      "Experimentally evaluated AI-powered UI design tools using few-shot and zero-shot prompting techniques to assess their effectiveness in improving accessibility on Rwandan e-government platforms. Produced a framework for integrating AI prompting strategies into government digital service design workflows.",
    tag: "Accepted",
  },
  {
    status: "Poster Accepted — HCI International 2026",
    venue: "Montreal, Canada · July 2026",
    id: "ID: 1032",
    title:
      "A Comparative Study of Automated Accessibility Checker Tools and Manual Evaluation on Rwanda's E-Government Portals: Towards a Hybrid Framework for Digital Inclusion",
    description:
      "Compared automated accessibility checker tools against manual expert evaluation across Rwanda's e-government portals. Proposed a hybrid governance framework combining both approaches to achieve more equitable and comprehensive digital inclusion outcomes. Co-authored with Dr. Edith Talina Luhanga.",
    tag: "Accepted",
  },
  {
    status: "In Progress",
    venue: "",
    id: "",
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
            Research & <span className="text-accent">Publications</span>
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
              className="bg-card rounded-2xl p-8 md:p-10 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                    pub.tag === "Accepted"
                      ? "bg-primary/10 text-primary"
                      : "bg-accent/15 text-accent"
                  }`}
                >
                  {pub.tag}
                </span>
                <span className="text-sm text-muted-foreground">{pub.status}</span>
                {pub.venue && (
                  <span className="text-sm text-muted-foreground">· {pub.venue}</span>
                )}
                {pub.id && (
                  <span className="text-sm text-muted-foreground">· {pub.id}</span>
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
