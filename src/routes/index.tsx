import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { CompetenciesSection } from "@/components/CompetenciesSection";
import { ResearchSection } from "@/components/ResearchSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsLanguagesSection } from "@/components/SkillsLanguagesSection";
import { ContactSection } from "@/components/ContactSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { LiveChat } from "@/components/LiveChat";
import { AccessibilityMenu } from "@/components/AccessibilityMenu";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pauline Uwase — Human Centered AI · Digital Transformation Leader" },
      {
        name: "description",
        content:
          "Portfolio of Pauline Uwase: AI governance researcher, digital transformation leader, and human centered AI design expert based in Kigali, Rwanda.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <CompetenciesSection />
        <ResearchSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsLanguagesSection />
        <ContactSection />
      </main>
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50">
        © {new Date().getFullYear()} Pauline Uwase. All rights reserved.
      </footer>
      <LiveChat />
      <AccessibilityMenu />
      <Toaster position="top-right" richColors />
    </>
  );
}
