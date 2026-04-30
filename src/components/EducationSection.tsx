import { motion } from "framer-motion";

const education = [
  { degree: "MBA — Business Administration (Candidate)", school: "Oklahoma University", year: "2026 – 2027" },
  { degree: "MSc Information Technology (MSIT)", school: "Carnegie Mellon University Africa", year: "2023 – 2025" },
  { degree: "BSc Computer Science", school: "University of Rwanda — College of Science and Technology", year: "2018 – 2022" },
];

const certifications = [
  "CITI Research Ethics Training (2024)",
  "Foundation of UI/UX Engineering — CMU",
  "Google Agile Project Management — Coursera",
  "Software Design & Architecture — Coursera",
];


export function EducationSection() {
  return (
    <section id="education" className="bg-primary/[0.03] section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="gold-line mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Education & <span className="text-accent">Recognition</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/30 transition-all"
          >
            <h3 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Education</h3>
            <div className="space-y-6">
              {education.map((e, i) => (
                <div key={i}>
                  <p className="font-medium text-foreground">{e.degree}</p>
                  <p className="text-sm text-primary mt-0.5">{e.school}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{e.year}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/30 transition-all"
          >
            <h3 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((c, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground items-start">
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/30 transition-all"
          >
            <h3 className="text-sm font-semibold text-foreground mb-6 uppercase tracking-wider">Awards & Leadership</h3>
            <ul className="space-y-3">
              {awards.map((a, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground items-start">
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
