import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import umucyoImg from "@/assets/projects/umucyo.jpg";
import hciImg from "@/assets/projects/hci-research.jpg";
import upmsImg from "@/assets/projects/upms.png";
import pdpImg from "@/assets/projects/pdp.png";
import tmisImg from "@/assets/projects/tmis.jpg";
import shoranezaImg from "@/assets/projects/shoraneza.jpg";
import autismImg from "@/assets/projects/autism.jpg";

type Project = {
  title: string;
  org: string;
  image: string;
  links?: { label: string; href: string }[];
  outcomes: string[];
};

const projects: Project[] = [
  {
    title: "Umucyo e-Procurement V2",
    org: "RDAP Project · with RISA & RPPA",
    image: umucyoImg,
    outcomes: [
      "Leading the upgrade of Rwanda's public procurement platform serving all government institutions.",
      "Driving aligned microservice architecture and ensuring open standards, interoperability, and citizen accessibility.",
      "Overseeing UX improvement cycles using WCAG accessibility audits and usability testing.",
    ],
  },
  {
    title: "HCI International 2026 Research",
    org: "Academic · Accessibility",
    image: hciImg,
    outcomes: [
      "Accepted poster: 'Accessibility by Design: AI-Powered Tools & Prompting in E-Government UI Redesign.'",
      "Proposed first framework for evaluating AI-assisted accessibility improvements on Rwanda's e-gov platforms.",
      "Evaluated 8 government platforms; combined automated (WAVE, AChecker) and expert heuristic methods.",
    ],
  },
  {
    title: "Assisted Authentication — Digital ID (Upanzi UPMS)",
    org: "CyLab-Upanzi · DPI Lab at CMU-Africa",
    image: upmsImg,
    links: [
      { label: "upms.upanzi.net", href: "https://upms.upanzi.net/" },
      { label: "pdp.upanzi.net", href: "https://pdp.upanzi.net/" },
    ],
    outcomes: [
      "Led UX and prototyping for biometric/assisted auth on Digital ID platform using MOSIP (Upanzi UPMS).",
      "Contributed 30+ UI & accessibility QA tests; automated and manual WCAG compliance checks across the lab's DPG solutions.",
      "Including PDP — an AI tool for Digital ID and Data Privacy Policies across Africa.",
    ],
  },
  {
    title: "Policy Analyzer (PDP)",
    org: "CyLab-Upanzi · DPI Lab at CMU-Africa",
    image: pdpImg,
    links: [{ label: "pdp.upanzi.net", href: "https://pdp.upanzi.net/" }],
    outcomes: [
      "AI tool analyzing Digital ID and Data Privacy policies across Africa.",
      "Designed accessible UX patterns for policy comparison and AI-assisted insights.",
      "Conducted WCAG-aligned accessibility QA across multiple lab DPGs.",
    ],
  },
  {
    title: "TMIS — Teacher Management Information System",
    org: "Rwanda Education Board",
    image: tmisImg,
    outcomes: [
      "Redesigned interfaces for the national HR system serving all public-school teachers and headteachers.",
      "Raised user experience scores from 50% to 70%, validated by usability testing with 80+ educators.",
    ],
  },
  {
    title: "Shora Neza — Farmer M&E Platform",
    org: "Nebotech / Good Neighbors International",
    image: shoranezaImg,
    links: [{ label: "shoraneza-gni.rw", href: "https://shoraneza-gni.rw/" }],
    outcomes: [
      "Oversaw platform development for smallholder farmer progress monitoring across Rwanda, with M&E tools, BI dashboards, and data collection.",
      "30% reduction in development cycle time through Agile process improvement.",
      "Deployed successfully across 15 districts.",
    ],
  },
  {
    title: "Autism Feeding — CMU Research",
    org: "CMU Africa · HCI Research",
    image: autismImg,
    outcomes: [
      "Conducted user research with parents and community health workers; designed Figma prototypes.",
      "Reviewed 10+ academic papers; evaluated 50+ apps using the System Usability Scale (SUS).",
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="gold-line mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Flagship <span className="text-accent">Projects & Research</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Platforms, research, and design work spanning digital public
          infrastructure, e-government, education, agriculture, and HCI.
        </p>
      </motion.div>

      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {projects.map((p, i) => (
            <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/2">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="h-full bg-card rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all overflow-hidden flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col gap-4 flex-1">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-sm text-accent mt-1">{p.org}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed flex-1">
                    {p.outcomes.map((o, j) => (
                      <li key={j} className="flex gap-3 items-start">
                        <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                  {p.links && (
                    <div className="flex flex-wrap gap-3 pt-2">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {l.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
}
