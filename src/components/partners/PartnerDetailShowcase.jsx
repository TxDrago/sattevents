"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";

import GalleryVideoShowcase from "@/sections/Gallery/GalleryVideoShowcase";
import GalleryImageCarousel from "@/sections/Gallery/GalleryImageCarousel";

const PartnerDetailShowcase = ({ partner }) => {
  const [activeReview, setActiveReview] = useState(0);

  const reviews = partner.reviews || [];
  const gallery = partner.gallery || [];
  const videos = partner.videos || [];

  const nextReview = () => {
    if (!reviews.length) return;

    setActiveReview((current) =>
      current === reviews.length - 1 ? 0 : current + 1
    );
  };

  const previousReview = () => {
    if (!reviews.length) return;

    setActiveReview((current) =>
      current === 0 ? reviews.length - 1 : current - 1
    );
  };

  /*
   * =========================================================
   * CATEGORY-BASED CONTENT
   * =========================================================
   *
   * This provides planning and focus content based on the
   * partner category when partner-specific content is not
   * available.
   */

  const categoryContent = {
    photographers: {
      planning: [
        "Understand the event story, people and atmosphere before the assignment.",
        "Create a photography plan around key moments, locations and timelines.",
        "Blend candid coverage with planned portraits and editorial frames.",
        "Coordinate closely with the event team without interrupting the experience.",
        "Review and refine the final visual story with attention to consistency.",
      ],

      focus: [
        "Authentic emotions",
        "Cinematic storytelling",
        "Natural moments",
        "Editorial composition",
      ],
    },

    "event-planners": {
      planning: [
        "Understand the client's vision, expectations and event objectives.",
        "Develop the event concept, timeline and execution strategy.",
        "Coordinate vendors, venues, production and guest requirements.",
        "Manage on-ground execution and real-time event requirements.",
        "Review every detail before, during and after the event.",
      ],

      focus: [
        "Seamless execution",
        "Guest experience",
        "Creative direction",
        "Attention to detail",
      ],
    },

    caterers: {
      planning: [
        "Understand the event format, guest profile and culinary expectations.",
        "Design menus around the occasion, cuisine and service style.",
        "Plan kitchen operations, staffing and service requirements.",
        "Coordinate food presentation and service timing with the event team.",
        "Maintain quality and consistency throughout the event.",
      ],

      focus: [
        "Food quality",
        "Presentation",
        "Service experience",
        "Menu creativity",
      ],
    },

    "decor-styling": {
      planning: [
        "Understand the event theme, venue architecture and desired atmosphere.",
        "Develop a visual direction covering colours, florals, furniture and lighting.",
        "Create the styling plan and coordinate production requirements.",
        "Install, style and refine every visual element on-site.",
        "Complete a final visual inspection before guests arrive.",
      ],

      focus: [
        "Visual storytelling",
        "Floral artistry",
        "Spatial design",
        "Luxury detailing",
      ],
    },

    "entertainment-artists": {
      planning: [
        "Understand the audience, event mood and desired entertainment experience.",
        "Curate artists and performances suited to the occasion.",
        "Build performance schedules and technical requirements.",
        "Coordinate rehearsals, stage movement and show flow.",
        "Deliver an engaging performance while adapting to the live environment.",
      ],

      focus: [
        "Audience energy",
        "Performance quality",
        "Entertainment curation",
        "Memorable moments",
      ],
    },

    "venues-hospitality": {
      planning: [
        "Understand the event requirements, guest count and preferred experience.",
        "Recommend suitable spaces and hospitality arrangements.",
        "Prepare venue layouts, guest movement and service requirements.",
        "Coordinate hospitality teams with the event schedule.",
        "Ensure the venue is ready for a smooth guest experience.",
      ],

      focus: [
        "Hospitality",
        "Comfort",
        "Venue experience",
        "Guest service",
      ],
    },

    "travel-transportation": {
      planning: [
        "Understand guest movement, routes and transportation requirements.",
        "Create detailed transfer schedules around the event timeline.",
        "Assign suitable vehicles and drivers for different guest requirements.",
        "Coordinate arrivals, departures and live transportation updates.",
        "Monitor movement throughout the event for seamless logistics.",
      ],

      focus: [
        "Reliability",
        "Punctuality",
        "Guest comfort",
        "Smooth logistics",
      ],
    },

    "makeup-beauty": {
      planning: [
        "Understand the client's personality, outfit and event environment.",
        "Discuss the desired look and prepare a personalised beauty direction.",
        "Plan makeup, hair styling and preparation time around the event schedule.",
        "Create the final look with attention to lighting and photography.",
        "Refine every detail before the client steps into the celebration.",
      ],

      focus: [
        "Personalisation",
        "Natural elegance",
        "Detail",
        "Long-lasting results",
      ],
    },
  };

  const content =
    categoryContent[partner.category] || {
      planning: [
        "Understand the client's requirements and event objectives.",
        "Develop a tailored plan around the event requirements.",
        "Coordinate closely with the Satt team and other specialists.",
        "Execute the work with attention to detail.",
        "Review the final experience and refine every important detail.",
      ],

      focus: [
        "Quality",
        "Creativity",
        "Reliability",
        "Client experience",
      ],
    };

  return (
    <>
      {/* =========================================================
          ABOUT THE PARTNER
      ========================================================= */}

      <section className="px-6 py-24 md:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--satt-gold-dark)]">
              The Partner
            </p>

            <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-[var(--satt-text-primary)] md:text-5xl">
              More Than A Service.
              <br />
              A Creative Partner.
            </h2>
          </div>

          <div>
            <p className="text-sm leading-8 text-[var(--satt-text-secondary)] md:text-base">
              {partner.about}
            </p>

            <p className="mt-6 text-sm leading-8 text-[var(--satt-text-secondary)] md:text-base">
              We collaborate with specialists who bring their own expertise,
              creativity and perspective to an event. Together, these
              individual strengths become part of a larger experience curated
              by Satt Event Planners.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SPECIALTIES
      ========================================================= */}

      <section className="border-y border-[var(--satt-border)]/30 bg-[var(--satt-bg-secondary)] px-6 py-20 md:px-10 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--satt-gold-dark)]">
              Specialties
            </p>

            <h2 className="mt-3 font-heading text-4xl font-bold text-[var(--satt-text-primary)]">
              What They Do Best
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.focus.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="
                  group
                  border
                  border-[var(--satt-border)]/30
                  bg-[var(--satt-bg-primary)]
                  p-7
                  shadow-[0_15px_45px_rgba(0,0,0,0.04)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[var(--satt-gold)]/60
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                "
              >
                <span className="text-[10px] tracking-[0.15em] text-[var(--satt-gold)]">
                  0{index + 1}
                </span>

                <h3 className="mt-8 font-heading text-xl font-bold text-[var(--satt-text-primary)]">
                  {item}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW THEY PLAN THEIR WORK
      ========================================================= */}

      <section className="px-6 py-24 md:px-10 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--satt-gold-dark)]">
              Their Approach
            </p>

            <h2 className="mt-3 font-heading text-4xl font-bold text-[var(--satt-text-primary)] md:text-5xl">
              How They Plan Their Work
            </h2>

            <p className="mt-5 text-sm leading-7 text-[var(--satt-text-secondary)]">
              Every partner brings their own process to the table. Their work
              is planned around the event, the people involved and the
              experience we want guests to remember.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {content.planning.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="
                  relative
                  border
                  border-[var(--satt-border)]/30
                  bg-[var(--satt-bg-secondary)]
                  p-6
                  shadow-[0_15px_45px_rgba(0,0,0,0.04)]
                "
              >
                <span className="font-signature text-4xl text-[var(--satt-gold)]">
                  {index + 1}
                </span>

                <p className="mt-5 text-xs leading-6 text-[var(--satt-text-secondary)]">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          THEIR FOCUS
      ========================================================= */}

      <section className="bg-[var(--satt-text-primary)] px-6 py-24 text-white md:px-10 lg:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--satt-gold-bright)]">
                Their Focus
              </p>

              <h2 className="mt-4 font-heading text-4xl font-bold leading-tight md:text-5xl">
                Details That
                <br />
                Make The Difference.
              </h2>
            </div>

            <div className="grid gap-px bg-white/10 sm:grid-cols-2">
              {content.focus.map((item, index) => (
                <div
                  key={item}
                  className="bg-[var(--satt-text-primary)] p-8"
                >
                  <span className="text-[10px] tracking-[0.2em] text-[var(--satt-gold-bright)]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-4 font-heading text-2xl font-bold">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SELECTED WORK
          PHOTO + VIDEO — USING SAT T'S EXISTING GALLERY
      ========================================================= */}

      <section className="px-6 py-24 md:px-10 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          {/* SECTION HEADER */}

          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--satt-gold-dark)]">
                Selected Work
              </p>

              <h2 className="mt-3 font-heading text-4xl font-bold text-[var(--satt-text-primary)] md:text-5xl">
                A Glimpse Into Their Work
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[var(--satt-text-secondary)]">
              Explore selected moments, visual stories and experiences
              created through the work of this partner and the Satt creative
              network.
            </p>
          </div>

          {/* =====================================================
              PHOTO GALLERY
          ===================================================== */}

          {gallery.length > 0 ? (
            <div>
              <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--satt-gold-dark)]">
                  Photography
                </p>

                <h3 className="mt-2 font-heading text-3xl font-bold text-[var(--satt-text-primary)] md:text-4xl">
                  Moments In Frame
                </h3>
              </div>

              <GalleryImageCarousel
                images={gallery}
                title={partner.name}
              />
            </div>
          ) : (
            <div className="border border-[var(--satt-border)]/30 bg-[var(--satt-bg-secondary)] p-12 text-center">
              <p className="text-sm text-[var(--satt-text-secondary)]">
                Selected photography will be showcased here.
              </p>
            </div>
          )}

          {/* =====================================================
              VIDEO GALLERY
          ===================================================== */}

          {videos.length > 0 && (
            <div className="mt-24 border-t border-[var(--satt-border)]/30 pt-20">
              <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--satt-gold-dark)]">
                  Films & Motion
                </p>

                <h3 className="mt-2 font-heading text-3xl font-bold text-[var(--satt-text-primary)] md:text-4xl">
                  Their Work In Motion
                </h3>
              </div>

              <GalleryVideoShowcase
                videos={videos}
                title={partner.name}
              />
            </div>
          )}
        </div>
      </section>

      {/* =========================================================
          CLIENT EXPERIENCES
      ========================================================= */}

      {reviews.length > 0 && (
        <section className="px-6 py-24 md:px-10 lg:py-32">
          <div className="mx-auto max-w-[1100px]">
            <div className="text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--satt-gold-dark)]">
                Client Experiences
              </p>

              <h2 className="mt-3 font-heading text-4xl font-bold text-[var(--satt-text-primary)] md:text-5xl">
                What Their Clients Remember
              </h2>
            </div>

            <div className="relative mt-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReview}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="
                    grid
                    overflow-hidden
                    border
                    border-[var(--satt-border)]/30
                    bg-[var(--satt-bg-secondary)]
                    shadow-[0_20px_60px_rgba(0,0,0,0.06)]
                    md:grid-cols-[0.8fr_1.2fr]
                  "
                >
                  {/* IMAGE */}

                  <div className="relative min-h-[320px]">
                    <Image
                      src={
                        reviews[activeReview].image ||
                        (gallery.length > 0
                          ? gallery[activeReview % gallery.length]
                          : partner.image)
                      }
                      alt={
                        reviews[activeReview].name ||
                        `${partner.name} client experience`
                      }
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* REVIEW */}

                  <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
                    <Quote
                      size={30}
                      strokeWidth={1}
                      className="text-[var(--satt-gold)]"
                    />

                    <div className="mt-7 flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={13}
                          fill="currentColor"
                          className="text-[var(--satt-gold)]"
                        />
                      ))}
                    </div>

                    <p className="mt-6 text-base leading-8 text-[var(--satt-text-secondary)] md:text-lg">
                      “{reviews[activeReview].text}”
                    </p>

                    <div className="mt-8">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--satt-text-primary)]">
                        {reviews[activeReview].name}
                      </p>

                      <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-[var(--satt-text-secondary)]">
                        Client Experience
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* CONTROLS */}

              {reviews.length > 1 && (
                <div className="mt-6 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={previousReview}
                    aria-label="Previous review"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      border
                      border-[var(--satt-border)]/40
                      bg-[var(--satt-bg-secondary)]
                      text-[var(--satt-text-primary)]
                      transition-all
                      hover:border-[var(--satt-gold)]
                      hover:bg-[var(--satt-gold)]
                    "
                  >
                    <ArrowLeft size={15} />
                  </button>

                  <button
                    type="button"
                    onClick={nextReview}
                    aria-label="Next review"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      border
                      border-[var(--satt-border)]/40
                      bg-[var(--satt-bg-secondary)]
                      text-[var(--satt-text-primary)]
                      transition-all
                      hover:border-[var(--satt-gold)]
                      hover:bg-[var(--satt-gold)]
                    "
                  >
                    <ArrowRight size={15} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          WHY SATT WORKS WITH THEM
      ========================================================= */}

      <section className="border-y border-[var(--satt-border)]/30 bg-[var(--satt-bg-secondary)] px-6 py-24 md:px-10 lg:py-28">
        <div className="mx-auto max-w-[1000px] text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--satt-gold-dark)]">
            Part Of The Satt Network
          </p>

          <h2 className="mt-4 font-heading text-4xl font-bold text-[var(--satt-text-primary)] md:text-5xl">
            Why We Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-[var(--satt-text-secondary)]">
            Great events are never created by one person. They come together
            through trusted people, shared standards and a common commitment
            to creating experiences that feel effortless for the client and
            unforgettable for the guest.
          </p>

          <div className="mx-auto mt-10 h-px w-20 bg-[var(--satt-gold)]" />
        </div>
      </section>
    </>
  );
};

export default PartnerDetailShowcase;