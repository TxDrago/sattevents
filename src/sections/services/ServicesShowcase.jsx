"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    title: "Celebrations",
    category: "Wedding Experiences",
    image: "/images/services/wedding-showcase.webp",
  },
  {
    title: "Brand Moments",
    category: "Corporate Experiences",
    image: "/images/services/corporate-showcase.webp",
  },
  {
    title: "Shared Energy",
    category: "Public Events",
    image: "/images/services/public-showcase.webp",
  },
  {
    title: "The Spirit of Sport",
    category: "Sports Experiences",
    image: "/images/services/sports-showcase.webp",
  },
  {
    title: "Beyond the Ordinary",
    category: "Adventure Experiences",
    image: "/images/services/adventure-showcase.webp",
  },
];

const ServicesShowcase = () => {
  const [active, setActive] = useState(0);

  /* =========================================================
     NEXT EXPERIENCE
  ========================================================= */

  const next = () => {
    setActive((current) => (current + 1) % experiences.length);
  };

  /* =========================================================
     PREVIOUS EXPERIENCE
  ========================================================= */

  const previous = () => {
    setActive(
      (current) =>
        (current - 1 + experiences.length) % experiences.length
    );
  };

  const experience = experiences[active];

  return (
    <section className="bg-[var(--satt-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          {/* Heading */}
          <div>
            <span className="text-[16px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              Featured Experiences
            </span>

            <h2 className="mt-5 font-heading text-4xl sm:text-5xl lg:text-6xl">
              Moments made
              <span className="block text-[var(--satt-gold-dark)]">
                to be remembered.
              </span>
            </h2>
          </div>

          {/* ===================================================
              CONTROLS
          =================================================== */}

          <div className="flex shrink-0 items-center gap-3">

            {/* -------------------------------------------------
                PREVIOUS
            ------------------------------------------------- */}

            <button
              type="button"
              onClick={previous}
              aria-label="Previous experience"
              className="
                group
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[var(--satt-gold)]
                bg-white
                text-[var(--satt-gold)]
                shadow-[0_4px_18px_rgba(198,161,91,0.12)]
                transition-all
                duration-500
                hover:scale-110
                hover:bg-[var(--satt-gold)]
                hover:text-white
                hover:shadow-[0_8px_25px_rgba(198,161,91,0.25)]
                active:scale-95
              "
            >
              <svg
                viewBox="0 0 48 48"
                fill="none"
                className="
                  h-7
                  w-7
                  transition-transform
                  duration-500
                  group-hover:-translate-x-1
                "
              >
                <path
                  d="M36 24H12"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                <path
                  d="M20 14L10 24L20 34"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* -------------------------------------------------
                NEXT
            ------------------------------------------------- */}

            <button
              type="button"
              onClick={next}
              aria-label="Next experience"
              className="
                group
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[var(--satt-gold)]
                bg-white
                text-[var(--satt-gold)]
                shadow-[0_4px_18px_rgba(198,161,91,0.12)]
                transition-all
                duration-500
                hover:scale-110
                hover:bg-[var(--satt-gold)]
                hover:text-white
                hover:shadow-[0_8px_25px_rgba(198,161,91,0.25)]
                active:scale-95
              "
            >
              <svg
                viewBox="0 0 48 48"
                fill="none"
                className="
                  h-7
                  w-7
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                "
              >
                <path
                  d="M12 24H36"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                <path
                  d="M28 14L38 24L28 34"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

          </div>
        </div>

        {/* =====================================================
            MAIN CAROUSEL
        ===================================================== */}

        <div className="relative overflow-hidden">

          <AnimatePresence mode="wait">

            <motion.div
              key={active}
              initial={{
                opacity: 0,
                scale: 1.02,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.98,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="
                relative
                h-[55vh]
                min-h-[450px]
                overflow-hidden
              "
            >

              {/* =================================================
                  IMAGE
              ================================================= */}

              <Image
                src={experience.image}
                alt={experience.title}
                fill
                priority={active === 0}
                className="
                  object-cover
                  transition-transform
                  duration-700
                "
                sizes="100vw"
              />

              {/* =================================================
                  IMAGE OVERLAY
              ================================================= */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-black/10
                  to-transparent
                "
              />

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="absolute bottom-0 left-0 p-7 text-white md:p-12 lg:p-16">

                <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold)]">
                  {experience.category}
                </p>

                <h3 className="mt-3 font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  {experience.title}
                </h3>

              </div>

              {/* =================================================
                  SLIDE NUMBER
              ================================================= */}

              <div className="absolute right-6 top-6 text-xs tracking-[0.2em] text-white/80 md:right-8 md:top-8">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(experiences.length).padStart(2, "0")}
              </div>

            </motion.div>

          </AnimatePresence>

        </div>

        {/* =====================================================
            THUMBNAILS
        ===================================================== */}

        <div className="mt-5 grid grid-cols-5 gap-2">

          {experiences.map((item, index) => (

            <button
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`View ${item.title}`}
              aria-current={active === index ? "true" : undefined}
              className={`
                group
                relative
                h-20
                overflow-hidden
                transition-all
                duration-500
                sm:h-24
                ${
                  active === index
                    ? "ring-1 ring-[var(--satt-gold)]"
                    : "opacity-50 hover:opacity-100"
                }
              `}
            >

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
                sizes="20vw"
              />

              {/* Active Overlay */}
              {active === index && (
                <div className="absolute inset-0 bg-[var(--satt-gold)]/10" />
              )}

            </button>

          ))}

        </div>

      </div>
    </section>
  );
};

export default ServicesShowcase;