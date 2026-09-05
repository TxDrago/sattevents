
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

import AboutHero from "@/sections/About/AboutHero";
import StoryJourney from "@/sections/About/StoryJourney";
import WhoWeAre from "@/sections/About/WhoWeAre";
import MissionVision from "@/sections/About/MissionVision";
import WhySattAbout from "@/sections/About/WhySattAbout";
import ExperienceCapabilities from "@/sections/About/ExperienceCapabilities";
import AboutCTA from "@/sections/About/AboutCTA";

export const metadata = {
  title: "About Us | Satt Event Planners",
  description:
    "Discover the story, vision and experience behind Satt Event Planners.",
};

export default function AboutPage() {
  return (
    <>

      <Navbar />

      <main>
        <AboutHero />

        <StoryJourney />

        <WhoWeAre />

        <MissionVision />

        <WhySattAbout />

        <ExperienceCapabilities />

        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}