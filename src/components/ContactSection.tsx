import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <div className="gold-line mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-10">
          Interested in AI governance, responsible innovation, or digital transformation in Africa?
          I'd love to hear from you.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:uwaspaulina7@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all hover:opacity-90"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Me
          </a>
          <a
            href="mailto:puwase@alumni.cmu.edu"
            className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 text-foreground font-medium rounded-lg transition-all hover:bg-foreground/5"
          >
            CMU Alumni Mail
          </a>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          +250 780 827 828 · Kigali, Rwanda
        </p>
      </motion.div>
    </section>
  );
}
