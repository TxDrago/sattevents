import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

import PartnerDetailShowcase from "@/sections/partners/PartnerDetailShowcase";

import {
  partners,
  getPartnerBySlug,
} from "@/data/partners";


/* =========================================================
   STATIC PARAMS
========================================================= */

export function generateStaticParams() {
  return partners.map((partner) => ({
    slug: partner.slug,
  }));
}


/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const partner = getPartnerBySlug(slug);

  if (!partner) {
    return {
      title: "Partner | Satt Event Planners",
    };
  }

  return {
    title: `${partner.name} | Satt Event Planners`,
    description: partner.shortDescription,
  };
}


/* =========================================================
   PAGE
========================================================= */

const PartnerDetailPage = async ({ params }) => {

  const { slug } = await params;

  const partner = getPartnerBySlug(slug);

  if (!partner) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-[var(--satt-bg-primary)]">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden">

          <div className="grid min-h-[70vh] lg:grid-cols-2">

            {/* =================================================
                IMAGE
            ================================================= */}

            <div className="relative min-h-[500px] lg:min-h-[720px]">

              <Image
                src={partner.image}
                alt={partner.name}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-black/10" />

            </div>


            {/* =================================================
                CONTENT
            ================================================= */}

            <div
              className="
                flex
                items-center
                bg-[var(--satt-bg-secondary)]
                px-6
                py-20
                md:px-12
                lg:px-16
                xl:px-24
              "
            >

              <div className="max-w-xl">

                {/* BACK */}

                <Link
                  href="/partners"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[var(--satt-text-secondary)]
                    transition-colors
                    hover:text-[var(--satt-gold-dark)]
                  "
                >
                  <ArrowLeft
                    size={13}
                    strokeWidth={1.4}
                  />

                  Back To Partners
                </Link>


                {/* CATEGORY */}

                <p
                  className="
                    mt-14
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.3em]
                    text-[var(--satt-gold-dark)]
                  "
                >
                  {partner.categoryLabel}
                </p>


                {/* NAME */}

                <h1
                  className="
                    mt-4
                    font-heading
                    text-5xl
                    font-bold
                    leading-[0.95]
                    text-[var(--satt-text-primary)]
                    md:text-6xl
                  "
                >
                  {partner.name}
                </h1>


                {/* LOCATION */}

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    uppercase
                    tracking-[0.15em]
                    text-[var(--satt-text-secondary)]
                  "
                >
                  <MapPin
                    size={12}
                    strokeWidth={1.3}
                  />

                  {partner.location}
                </div>


                {/* DECORATIVE LINE */}

                <div className="my-8 flex items-center gap-3">

                  <span className="h-px w-16 bg-[var(--satt-gold)]" />

                  <span className="h-1.5 w-1.5 rotate-45 bg-[var(--satt-gold)]" />

                </div>


                {/* INTRO */}

                <p
                  className="
                    text-sm
                    leading-8
                    text-[var(--satt-text-secondary)]
                    md:text-base
                  "
                >
                  {partner.shortDescription}
                </p>


                {/* SPECIALTY */}

                <div className="mt-9">

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-[var(--satt-gold-dark)]
                    "
                  >
                    Specialties
                  </p>

                  <p
                    className="
                      mt-3
                      text-xs
                      uppercase
                      tracking-[0.08em]
                      leading-7
                      text-[var(--satt-text-primary)]
                    "
                  >
                    {partner.specialty}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            DETAILED PARTNER CONTENT
        ===================================================== */}

        <PartnerDetailShowcase partner={partner} />


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="px-6 py-24 md:px-10 lg:py-32">

          <div
            className="
              mx-auto
              max-w-[1200px]
              overflow-hidden
              border
              border-[var(--satt-gold)]/40
              bg-[var(--satt-bg-secondary)]
              px-6
              py-16
              text-center
              shadow-[0_25px_70px_rgba(0,0,0,0.06)]
              md:px-12
              lg:py-24
            "
          >

            <p
              className="
                text-[24px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[var(--satt-gold-dark)]
              "
            >
              Work With Satt
            </p>


            <h2
              className="
                mx-auto
                mt-5
                max-w-3xl
                font-heading
                text-4xl
                font-bold
                leading-tight
                text-[var(--satt-text-primary)]
                md:text-5xl
              "
            >
              Let's Create Something
              <br />
              Worth Remembering.
            </h2>


            <p
              className="
                mx-auto
                mt-6
                max-w-xl
                text-sm
                leading-8
                text-[var(--satt-text-secondary)]
              "
            >
              Planning a celebration, corporate experience or destination
              event? Tell us what you have in mind and we'll bring together
              the right people to make it happen.
            </p>


            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  border
                  border-[var(--satt-gold)]
                  bg-[var(--satt-gold)]
                  px-8
                  py-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[var(--satt-text-primary)]
                  transition-all
                  duration-300
                  hover:bg-[var(--satt-gold-dark)]
                  hover:text-white
                "
              >
                Plan Your Event

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.4}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>


              <Link
                href="/partners"
                className="
                  inline-flex
                  items-center
                  gap-3
                  border
                  border-[var(--satt-border)]/40
                  px-8
                  py-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[var(--satt-text-primary)]
                  transition-all
                  duration-300
                  hover:border-[var(--satt-gold)]
                  hover:text-[var(--satt-gold-dark)]
                "
              >
                Explore Partners
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default PartnerDetailPage;