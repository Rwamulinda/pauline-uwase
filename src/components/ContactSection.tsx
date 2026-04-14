import { motion } from "framer-motion";
import mascotContact from "@/assets/mascot-contact.png";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="gold-line mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Contact <span className="text-accent">Me</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-center mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={mascotContact}
            alt="Let's connect"
            className="w-full max-w-xs drop-shadow-xl"
            loading="lazy"
            width={600}
            height={800}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-muted-foreground mb-8">
            Interested in AI governance, responsible innovation, or digital transformation in Africa?
            I'd love to hear from you.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:uwaspaulina7@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-medium rounded-full transition-all hover:opacity-90 hover:scale-105"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
            <a
              href="mailto:puwase@alumni.cmu.edu"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-accent text-accent font-medium rounded-full transition-all hover:bg-accent hover:text-accent-foreground"
            >
              CMU Alumni Mail
            </a>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            +250 780 827 828 · Kigali, Rwanda
          </p>
        </motion.div>
      </div>
    </section>
  );
}
