import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CompetenciesSection } from "@/components/CompetenciesSection";
import { ResearchSection } from "@/components/ResearchSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pauline Uwase — AI Governance Researcher & Digital Transformation Leader" },
      {
        name: "description",
        content:
          "Portfolio of Pauline Uwase: AI governance researcher, digital transformation leader, and human-centered AI design expert based in Kigali, Rwanda.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <CompetenciesSection />
        <ResearchSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50">
        © {new Date().getFullYear()} Pauline Uwase. All rights reserved.
      </footer>
    </>
  );
}
