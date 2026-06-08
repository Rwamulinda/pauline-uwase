import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import umucyoImg from "@/assets/projects/umucyo.png";
import upmsImg from "@/assets/projects/upms.png";
import pdpImg from "@/assets/projects/pdp.png";
import shoranezaImg from "@/assets/projects/shoraneza.jpg";

type Project = {
  title: string;
  org: string;
  image: string;
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "Umucyo e Procurement V2",
    org: "RDAP Project with RISA & RPPA",
    image: umucyoImg,
  },
  {
    title: "Assisted Authentication Digital ID (Upanzi UPMS)",
    org: "CyLab Upanzi DPI Lab at CMU Africa",
    image: upmsImg,
    links: [
      { label: "upms.upanzi.net", href: "https://upms.upanzi.net/" },
    ],
  },
  {
    title: "Policy Analyzer (PDP)",
    org: "CyLab Upanzi DPI Lab at CMU Africa",
    image: pdpImg,
    links: [{ label: "pdp.upanzi.net", href: "https://pdp.upanzi.net/" }],
  },
  {
    title: "Shora Neza Farmer M&E Platform",
    org: "Nebotech / Good Neighbors International",
    image: shoranezaImg,
    links: [{ label: "shoraneza-gni.rw", href: "https://shoraneza-gni.rw/" }],
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
          Platforms and design work spanning digital public infrastructure,
          e government, and agriculture.
        </p>
      </motion.div>

      <Carousel opts={{ align: "start", loop: true }} className="w-full">
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
                <div className="p-6 md:p-8 flex flex-col gap-3 flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-accent">{p.org}</p>
                  {p.links && (
                    <div className="flex flex-wrap gap-3 pt-1">
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
