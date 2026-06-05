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
    title: "Product Management",
    items: [
      "Product Strategy & Roadmap Development",
      "Product Discovery & User Research",
      "Requirements Gathering and Prioritization",
      "Business Requirements Documentation (BRD) & User Stories",
      "Service Design & Process Optimization",
      "Agile Product Delivery (Scrum/Kanban)",
      "Stakeholder Engagement & Cross-Functional Leadership",
      "Data-Driven Decision Making & Product Analytics",
      "User Acceptance Testing (UAT) & Quality Assurance",
      "Product Performance Monitoring & Continuous Improvement",
      "Team Leadership",
    ],
  },
  {
    title: "AI Governance, Policy & Ethics",
    items: [
      "AI policy analysis & regulatory framework design",
      "Explainable AI (XAI) evaluation & human oversight models",
      "Human-centered AI design methodology (ISO 9241-210)",
      "Ethical AI framework design & responsible innovation",
      "AI usability & heuristic assessment (Nielsen/Norman)",
      "Research ethics & CITI-certified methodology",
    ],
  },
  {
    title: "Digital Public Infrastructure & Policy",
    items: [
      "DPI design & governance (DPG Alliance standards)",
      "Open-source platform strategy & interoperability",
      "Stakeholder management at ministerial level",
      "Citizen-centred service design & co-creation",
      "Cross-institutional change management",
    ],
  },
  {
    title: "Software Engineering, UX & Tech Leadership",
    items: [
      "Full-stack development: React, Vue.js, Node.js, HTML5, CSS3",
      "UX research: contextual inquiry, usability testing, user research, SUS",
      "Accessibility engineering: WCAG 2.1 A/AA/AAA, POUR principles",
      "Figma prototyping, design systems & interaction design",
      "Agile delivery, backlog management & cross-functional team leadership",
      "Open-source platform architecture & API integration",
    ],
  },
  {
    title: "Research Methods, Data Analytics & Communication",
    items: [
      "Mixed-methods research design: quantitative, qualitative & participatory",
      "Data analysis: Python (Pandas, NumPy, Matplotlib, Scikit-learn, SciPy)",
      "Academic & technical writing; peer-review & conference publication",
      "Research ethics, IRB processes & institutional review compliance",
      "High analytical rigour, attention to detail & professional integrity",
      "Clear communication of complex technical concepts to non-expert audiences",
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
