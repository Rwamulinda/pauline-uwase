import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import mascotContact from "@/assets/mascot-contact.png";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase
      .from("contact_messages")
      .insert({ ...parsed.data, source: "contact_form" });
    setLoading(false);
    if (error) {
      toast.error("Failed to send. Please try again.");
      return;
    }
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

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
          <p className="text-muted-foreground mb-6">
            Interested in AI governance, responsible innovation, or digital transformation in Africa?
            Send a message — or use the live chat in the corner.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
            />
            <input
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              required
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
            />
            <textarea
              placeholder="Your message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={2000}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-medium rounded-full transition-all hover:opacity-90 hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          <p className="mt-6 text-sm text-muted-foreground">
            Or email directly:{" "}
            <a href="mailto:uwaspaulina7@gmail.com" className="text-accent hover:underline">
              uwaspaulina7@gmail.com
            </a>{" "}
            ·{" "}
            <a href="mailto:puwase@alumni.cmu.edu" className="text-accent hover:underline">
              puwase@alumni.cmu.edu
            </a>
          </p>

          <p className="mt-2 text-sm text-muted-foreground">Kigali, Rwanda</p>
        </motion.div>
      </div>
    </section>
  );
}
