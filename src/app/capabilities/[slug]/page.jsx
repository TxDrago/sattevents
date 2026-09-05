import { notFound } from "next/navigation";

import { capabilityDetails } from "@/data/capabilityDetails";

import CapabilityDetailHero from "@/sections/capabilities/CapabilityDetailHero";
import CapabilityOverview from "@/sections/capabilities/CapabilityOverview";
import CapabilityServices from "@/sections/capabilities/CapabilityServices";
import CapabilityFacilities from "@/sections/capabilities/CapabilityFacilities";
import CapabilityProcess from "@/sections/capabilities/CapabilityProcess";
import CapabilityGallery from "@/sections/capabilities/CapabilityGallery";
import RelatedCapabilities from "@/sections/capabilities/RelatedCapabilities";
import CapabilityCTA from "@/sections/capabilities/CapabilityCTA";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";


// =========================================================
// STATIC PARAMS
// =========================================================
// Optional but recommended.
// Generates the known capability pages at build time.

export function generateStaticParams() {
  return Object.keys(capabilityDetails).map((slug) => ({
    slug,
  }));
}


// =========================================================
// METADATA
// =========================================================

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const capability = capabilityDetails[slug];

  if (!capability) {
    return {
      title: "Capability | SATT Event Planners",
      description:
        "Discover SATT Event Planners' event capabilities and supporting services.",
    };
  }

  return {
    title: `${capability.title} | SATT Event Planners`,
    description: capability.description,
  };
}


// =========================================================
// CAPABILITY DETAIL PAGE
// =========================================================

export default async function CapabilityDetailPage({ params }) {
  const { slug } = await params;

  const capability = capabilityDetails[slug];

  // Invalid capability slug
  if (!capability) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-[var(--satt-bg-primary)] text-[var(--satt-text-primary)]">
        
        {/* =================================================
            HERO
        ================================================= */}

        <CapabilityDetailHero capability={capability} />


        {/* =================================================
            OVERVIEW
        ================================================= */}

        <CapabilityOverview capability={capability} />


        {/* =================================================
            SERVICES
        ================================================= */}

        <CapabilityServices capability={capability} />


        {/* =================================================
            FACILITIES & AMENITIES
        ================================================= */}

        <CapabilityFacilities capability={capability} />


        {/* =================================================
            PROCESS
        ================================================= */}

        <CapabilityProcess capability={capability} />


        {/* =================================================
            GALLERY
        ================================================= */}

        <CapabilityGallery capability={capability} />


        {/* =================================================
            RELATED CAPABILITIES
        ================================================= */}

        <RelatedCapabilities capability={capability} />


        {/* =================================================
            CTA
        ================================================= */}

        <CapabilityCTA capability={capability} />

      </main>

      <Footer />
    </>
  );
}