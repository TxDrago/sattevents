import ExperiencesHero from "@/sections/experiences/ExperiencesHero";
import ExperienceIntroduction from "@/sections/experiences/ExperienceIntroduction";
import ExperiencesShowcase from "@/sections/experiences/ExperiencesShowcase";
import ExperienceCategories from "@/sections/experiences/ExperienceCategories";
import ExperienceJourney from "@/sections/experiences/ExperienceJourney";
import ExperienceElements from "@/sections/experiences/ExperienceElements";
import ExperienceGallery from "@/sections/experiences/ExperienceGallery";
import WhySattExperience from "@/sections/experiences/WhySattExperience";
import ExperiencesCTA from "@/sections/experiences/ExperiencesCTA";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export const metadata = {
  title: "Experiences | SATT Event Planners",
  description:
    "Discover immersive, cultural, destination, luxury, live and digital experiences created by SATT Event Planners.",
};

export default function ExperiencesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[var(--satt-bg-primary)] text-[var(--satt-text-primary)]">
        <ExperiencesHero />

        <ExperienceIntroduction />

        <ExperiencesShowcase />

        <ExperienceCategories />

        <ExperienceJourney />

        <ExperienceElements />

        <ExperienceGallery />

        <WhySattExperience />

        <ExperiencesCTA />
      </main>

      <Footer />
    </>
  );
}