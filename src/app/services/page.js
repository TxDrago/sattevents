import ServicesHero from "@/sections/services/ServicesHero";
import ServicesGrid from "@/sections/services/ServicesGrid";
import ServicesShowcase from "@/sections/services/ServicesShowcase";
import ServiceCapabilities from "@/sections/services/ServiceCapabilities";
import SupportingCapabilities from "@/sections/services/SupportingCapabilities";
import ServicesApproach from "@/sections/services/ServicesApproach";
import ServicesCTA from "@/sections/services/ServicesCTA";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export const metadata = {
  title: "Services | SATT Event Planners",
  description:
    "Discover SATT Event Planners' event planning, production, design and event management services.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[var(--satt-bg-primary)] text-[var(--satt-text-primary)]">
        {/* =========================================
            SERVICES HERO
        ========================================= */}

        <ServicesHero />

        {/* =========================================
            PRIMARY EVENT EXPERIENCES
        ========================================= */}

        <ServicesGrid />

        {/* =========================================
            FEATURED SERVICES CAROUSEL
        ========================================= */}

        <ServicesShowcase />

        {/* =========================================
            FROM IDEA TO EXECUTION
        ========================================= */}

        <ServiceCapabilities />

        {/* =========================================
            SUPPORTING CAPABILITIES
        ========================================= */}

        <SupportingCapabilities />

        {/* =========================================
            OUR APPROACH
        ========================================= */}

        <ServicesApproach />

        {/* =========================================
            CTA
        ========================================= */}

        <ServicesCTA />
      </main>

      <Footer />
    </>
  );
}