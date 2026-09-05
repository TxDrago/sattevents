"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
        {/* HEADER */}

        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
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

          {/* CONTROLS */}

          <div className="flex gap-2">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous experience"
              className="flex h-12 w-12 items-center justify-center border border-[var(--satt-border)] transition-all hover:border-[var(--satt-gold)] hover:bg-[var(--satt-gold)]"
            >
              <ArrowLeft size={17} strokeWidth={1.3} />
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next experience"
              className="flex h-12 w-12 items-center justify-center border border-[var(--satt-border)] transition-all hover:border-[var(--satt-gold)] hover:bg-[var(--satt-gold)]"
            >
              <ArrowRight size={17} strokeWidth={1.3} />
            </button>
          </div>
        </div>

        {/* CAROUSEL */}

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="relative h-[55vh] min-h-[450px] overflow-hidden"
            >
              <Image
                src={experience.image}
                alt={experience.title}
                fill
                className="object-cover"
                sizes="100vw"
              />

              {/* OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* CONTENT */}

              <div className="absolute bottom-0 left-0 p-7 text-white md:p-12">
                <p className="text-[12px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold)]">
                  {experience.category}
                </p>

                <h3 className="mt-3 font-heading text-4xl sm:text-5xl lg:text-6xl">
                  {experience.title}
                </h3>
              </div>

              {/* NUMBER */}

              <div className="absolute right-6 top-6 text-xs tracking-[0.2em] text-white/80">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(experiences.length).padStart(2, "0")}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* THUMBNAILS */}

        <div className="mt-5 grid grid-cols-5 gap-2">
          {experiences.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
              className={`relative h-20 overflow-hidden ${
                active === index
                  ? "ring-1 ring-[var(--satt-gold)]"
                  : "opacity-50 transition-opacity hover:opacity-100"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="20vw"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;