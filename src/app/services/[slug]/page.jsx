import { notFound } from "next/navigation";

import { serviceDetails } from "@/data/serviceDetails";

import ServiceDetailHero from "@/sections/service-details/ServiceDetailHero";
import ServiceOverview from "@/sections/service-details/ServiceOverview";
import ServicePlanning from "@/sections/service-details/ServicePlanning";
import ServiceFacilities from "@/sections/service-details/ServiceFacilities";
import ServiceProcess from "@/sections/service-details/ServiceProcess";
import ServiceGallery from "@/sections/service-details/ServiceGallery";
import RelatedServices from "@/sections/service-details/RelatedServices";
import ServiceDetailCTA from "@/sections/service-details/ServiceDetailCTA";
import ServiceWhySatt from "@/sections/service-details/ServiceWhySatt";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = serviceDetails[slug];

  if (!service) {
    return {
      title: "Service | SATT Event Planners",
    };
  }

  return {
    title: `${service.title} | SATT Event Planners`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;

  const service = serviceDetails[slug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-[var(--satt-bg-primary)] text-[var(--satt-text-primary)]">
        <ServiceDetailHero service={service} />

        <ServiceOverview service={service} />

        <ServicePlanning service={service} />

        <ServiceFacilities service={service} />

        <ServiceProcess service={service} />

        <ServiceWhySatt service={service} />

        <ServiceGallery service={service} />

        <RelatedServices service={service} />

        <ServiceDetailCTA service={service} />
      </main>

      <Footer />
    </>
  );
}
