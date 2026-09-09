"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    number: "01",
    title: "Immersive Experiences",
    text: "Spaces, stories, performances and environments designed to completely engage the audience.",
    image: "/images/experiences/immersive.webp",
  },
  {
    number: "02",
    title: "Cultural Experiences",
    text: "Authentic experiences that celebrate culture, heritage, traditions and communities.",
    image: "/images/experiences/cultural.webp",
  },
  {
    number: "03",
    title: "Destination Experiences",
    text: "Memorable journeys that combine destination, hospitality, adventure and curated experiences.",
    image: "/images/experiences/destination.webp",
  },
  {
    number: "04",
    title: "Luxury Experiences",
    text: "Refined celebrations and environments where hospitality, design and attention to detail take centre stage.",
    image: "/images/experiences/luxury.webp",
  },
];

const ExperiencesShowcase = () => {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((current) => (current + 1) % experiences.length);
  };

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
            SECTION HEADER
        ===================================================== */}

        <div className="mb-12 flex items-end justify-between gap-8">

          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              Experiences We Create
            </span>

            <h2 className="mt-5 font-heading text-4xl sm:text-5xl">
              Designed to be felt.
            </h2>
          </div>

          {/* =====================================================
              CAROUSEL BUTTONS
          ===================================================== */}

          <div className="flex shrink-0 items-center gap-3">

            {/* Previous */}
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
              "
            >
              <svg
                viewBox="0 0 48 48"
                className="
                  h-7
                  w-7
                  transition-transform
                  duration-500
                  group-hover:-translate-x-1
                "
                fill="none"
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

            {/* Next */}
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
              "
            >
              <svg
                viewBox="0 0 48 48"
                className="
                  h-7
                  w-7
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                "
                fill="none"
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
            SHOWCASE
        ===================================================== */}

        <div className="grid overflow-hidden lg:grid-cols-[1.15fr_0.85fr]">

          {/* =====================================================
              IMAGE
          ===================================================== */}

          <div className="relative min-h-[420px] overflow-hidden md:min-h-[560px]">

            <AnimatePresence mode="wait">
              <motion.img
                key={experience.image}
                src={experience.image}
                alt={experience.title}
                initial={{
                  opacity: 0,
                  scale: 1.04,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

          </div>

          {/* =====================================================
              CONTENT
          ===================================================== */}

          <div className="flex items-center bg-[var(--satt-bg-primary)] p-8 md:p-14 lg:p-16">

            <AnimatePresence mode="wait">
              <motion.div
                key={experience.number}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >

                <h3 className="font-heading text-4xl leading-tight sm:text-5xl">
                  {experience.title}
                </h3>

                <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--satt-text-secondary)]">
                  {experience.text}
                </p>

                <div className="mt-10 h-px w-16 bg-[var(--satt-gold)]" />

              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperiencesShowcase;