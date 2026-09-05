"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              Experiences We Create
            </span>

            <h2 className="mt-5 font-heading text-4xl sm:text-5xl">
              Designed to be felt.
            </h2>
          </div>

          <div className="hidden gap-3 md:flex">
            <button
              onClick={previous}
              className="flex h-11 w-11 items-center justify-center border border-[var(--satt-border)] transition-colors hover:bg-[var(--satt-gold)]"
              aria-label="Previous experience"
            >
              <ArrowLeft size={17} strokeWidth={1.4} />
            </button>

            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center border border-[var(--satt-border)] transition-colors hover:bg-[var(--satt-gold)]"
              aria-label="Next experience"
            >
              <ArrowRight size={17} strokeWidth={1.4} />
            </button>
          </div>
        </div>

        <div className="grid overflow-hidden lg:grid-cols-[1.15fr_0.85fr]">

          {/* Image */}

          <div className="relative min-h-[420px] overflow-hidden md:min-h-[560px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={experience.image}
                src={experience.image}
                alt={experience.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Content */}

          <div className="flex items-center bg-[var(--satt-bg-primary)] p-8 md:p-14 lg:p-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={experience.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-[10px] tracking-[0.25em] text-[var(--satt-gold)]">
                  {experience.number}
                </span>

                <h3 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl">
                  {experience.title}
                </h3>

                <p className="mt-6 text-sm leading-7 text-[var(--satt-text-secondary)]">
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