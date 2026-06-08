import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import mascotShowcase from "@/assets/mascot-showcase.png";

const competencyGroups = [
  {
    title: "Product Leadership",
    items: [
      "Product Vision & Strategy",
      "Product Discovery and Validation",
      "Product Roadmapping",
      "Product Lifecycle Management",
      "Product Analytics",
      "Stakeholder Management",
      "Executive Communication",
    ],
  },
  {
    title: "Product Delivery & Ops",
    items: [
      "Agile and Scrum",
      "Product Execution",
      "Release Planning",
      "Requirements Engineering",
      "Quality Assurance (QA)",
      "User Acceptance Testing",
      "Process Improvement",
      "Change Management",
    ],
  },
  {
    title: "Software Engineering",
    items: [
      "SDLC Management",
      "Enterprise Systems",
      "System Architecture",
      "API Integrations",
      "Software Quality Engineering",
      "Technical Product Management",
      "Digital Platform Development",
    ],
  },
  {
    title: "User Experience",
    items: [
      "Human Centered Design",
      "User Research",
      "Service Design",
      "Accessibility (WCAG)",
      "Usability Testing",
      "Journey Mapping",
      "Design Thinking",
    ],
  },
  {
    title: "Digital Transformation",
    items: [
      "Digital Public Infrastructure (DPI)",
      "Digital Public Goods (DPGs)",
      "Government Technology",
      "AI Governance",
      "Digital Identity Systems",
      "Interoperability & Open Standards",
    ],
  },
  {
    title: "Key Projects",
    items: [
      "Umucyo e Procurement V2",
      "Shora Neza M and E Platform",
      "BloodBank Platform",
      "AI Policy Analyzer",
      "Assisted Authentication DPI",
      "AppKit Security Testing",
    ],
  },
];

export function CompetenciesSection() {
  const autoplay = useRef(
    Autoplay({ delay: 4500, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section id="competencies" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="gold-line mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Core <span className="text-accent">Competencies</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          A rotating view of the disciplines I bring together — pause to read,
          or let them flow one by one.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="w-full min-w-0"
        >
          <CarouselContent>
            {competencyGroups.map((group, i) => (
              <CarouselItem key={i} className="basis-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative bg-card rounded-3xl p-8 md:p-12 border border-border/50 hover:border-accent/40 transition-all overflow-hidden"
                >
                  <div className="absolute top-6 right-8 text-6xl md:text-7xl font-bold text-accent/10 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
                    Competency {i + 1} of {competencyGroups.length}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 max-w-xl">
                    {group.title}
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {group.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm text-muted-foreground leading-relaxed items-start"
                      >
                        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-foreground/5 blur-2xl scale-110" />
            <img
              src={mascotShowcase}
              alt="Pauline showcasing core competencies"
              loading="lazy"
              width={1024}
              height={1024}
              className="relative w-44 xl:w-52 drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:hidden flex justify-center mt-8"
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
