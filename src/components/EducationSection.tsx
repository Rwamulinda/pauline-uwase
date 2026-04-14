import { motion } from "framer-motion";

const education = [
  { degree: "MBA — Business Administration (Candidate)", school: "Oklahoma University", year: "2026 – 2027" },
  { degree: "MSc Information Technology (MSIT)", school: "Carnegie Mellon University Africa", year: "2023 – 2025" },
  { degree: "BSc Computer Science", school: "University of Rwanda", year: "2018 – 2022" },
];

const certifications = [
  "CITI Research Ethics Training (2024)",
  "Foundation of UI/UX Engineering — CMU",
  "Google Agile Project Management — Coursera",
  "Software Design & Architecture — Coursera",
];

const awards = [
  "Full scholarship — Carnegie Mellon University Africa (2023)",
  "VP, Women in Tech Club — CMU Africa (2023)",
  "Toastmasters International — Active Member Award (2021)",
  "Best First Speaker — Inter-University Debate (2018)",
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
            Education & Recognition
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 uppercase tracking-wider text-sm">Education</h3>
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

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 uppercase tracking-wider text-sm">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((c, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-accent shrink-0">▸</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6 uppercase tracking-wider text-sm">Awards & Leadership</h3>
            <ul className="space-y-3">
              {awards.map((a, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="text-accent shrink-0">▸</span>
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
