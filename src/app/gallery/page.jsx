import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

import GalleryHero from "@/sections/gallery/GalleryHero";
import GalleryVideoShowcase from "@/sections/gallery/GalleryVideoShowcase";
import GalleryImageCarousel from "@/sections/gallery/GalleryImageCarousel";
import GalleryMoments from "@/sections/gallery/GalleryMoments";
import GalleryGrid from "@/sections/gallery/GalleryGrid";
import GalleryBehindScenes from "@/sections/gallery/GalleryBehindScenes";
import GalleryCTA from "@/sections/gallery/GalleryCTA";

export const metadata = {
  title: "Gallery | SATT Event Planners",
  description:
    "Explore moments, celebrations, events and experiences created by SATT Event Planners.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[var(--satt-bg-primary)] text-[var(--satt-text-primary)]">

        <GalleryHero />

        <GalleryVideoShowcase />

        <GalleryImageCarousel />

        <GalleryMoments />

        <GalleryGrid />

        <GalleryBehindScenes />

        <GalleryCTA />

      </main>

      <Footer />
    </>
  );
}