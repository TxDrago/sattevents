"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import works from "@/data/works";

const RecentWorks = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeWork = works[activeIndex];

  const nextWork = () => {
    setActiveIndex((current) => (current + 1) % works.length);
  };

  const previousWork = () => {
    setActiveIndex((current) => (current - 1 + works.length) % works.length);
  };

  return (
    <section
      id="recent-works"
      className="relative overflow-hidden bg-[var(--satt-bg-primary)] py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">
        {/* =====================================
            HEADER
        ===================================== */}

        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end lg:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-4"
            >
              <span className="h-px w-12 bg-[var(--satt-gold)]" />

              <span className="text-[24px] uppercase tracking-[0.3em] text-[var(--satt-text-secondary)]">
                Recent Works
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-signature mt-6 text-4xl text-[var(--satt-gold-dark)] md:text-5xl"
            >
              moments we've created
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-heading mt-3 text-4xl leading-tight text-[var(--satt-text-primary)] md:text-5xl lg:text-6xl"
            >
              Experiences in focus.
            </motion.h2>
          </div>

          {/* View All */}
          <motion.a
            href="/works"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group inline-flex w-fit items-center gap-3 border-b border-[var(--satt-gold)] pb-2 text-[10px] uppercase tracking-[0.2em] text-[var(--satt-text-primary)]"
          >
            View All Works
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.a>
        </div>

        {/* =====================================
            CAROUSEL
        ===================================== */}

        <div className="grid overflow-hidden border border-[var(--satt-border)]/40 lg:grid-cols-[1.35fr_0.65fr]">
          {/* Image */}
          <div className="relative h-[55vh] min-h-[420px] overflow-hidden bg-[#ddd] lg:h-[650px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeWork.id}
                src={activeWork.image}
                alt={activeWork.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

            {/* Category */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWork.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-7 left-7 md:bottom-10 md:left-10"
              >
                <span className="border border-white/50 px-4 py-2 text-[9px] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  {activeWork.category}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Information */}
          <div className="flex flex-col justify-between bg-[var(--satt-bg-secondary)] p-7 md:p-10 lg:p-12 xl:p-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWork.id}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-between border-b border-[var(--satt-border)]/30 pb-5">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--satt-gold-dark)]">
                    {String(activeWork.id).padStart(2, "0")}
                  </span>

                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--satt-text-secondary)]">
                    {activeWork.year}
                  </span>
                </div>

                <h3 className="font-heading mt-14 text-3xl leading-tight text-[var(--satt-text-primary)] md:text-4xl lg:text-5xl">
                  {activeWork.title}
                </h3>

                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[var(--satt-gold-dark)]">
                  {activeWork.location}
                </p>

                <p className="mt-8 text-sm leading-7 text-[var(--satt-text-secondary)]">
                  {activeWork.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="mt-14">
              {/* Progress */}
              <div className="mb-7 flex items-center gap-4">
                <span className="text-[10px] text-[var(--satt-text-secondary)]">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>

                <div className="relative h-px flex-1 bg-[var(--satt-border)]/30">
                  <motion.div
                    className="absolute left-0 top-0 h-px bg-[var(--satt-gold)]"
                    animate={{
                      width: `${((activeIndex + 1) / works.length) * 100}%`,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <span className="text-[10px] text-[var(--satt-text-secondary)]">
                  {String(works.length).padStart(2, "0")}
                </span>
              </div>

              {/* Buttons */}
              {/* Navigation Buttons */}
              <div className="flex items-center gap-4">
                {/* Previous */}
                <button
                  type="button"
                  onClick={previousWork}
                  aria-label="Previous work"
                  className="
                              group
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-[var(--satt-gold)]
                              bg-transparent
                              text-[var(--satt-gold)]
                              transition-all
                              duration-500
                              hover:scale-110
                              hover:bg-[var(--satt-gold)]
                              hover:text-white
                            "
                >
                  <svg
                    viewBox="0 0 48 48"
                    className="h-7 w-7 transition-transform duration-500 group-hover:-translate-x-0.5"
                    fill="none"
                  >
                    <path
                      d="M36 24H12"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />

                    <path
                      d="M20 14L10 24L20 34"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Next */}
                <button
                  type="button"
                  onClick={nextWork}
                  aria-label="Next work"
                  className="
                              group
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-full
                              border
                              border-[var(--satt-gold)]
                              bg-transparent
                              text-[var(--satt-gold)]
                              transition-all
                              duration-500
                              hover:scale-110
                              hover:bg-[var(--satt-gold)]
                              hover:text-white
                            "
                >
                  <svg
                    viewBox="0 0 48 48"
                    className="h-7 w-7 transition-transform duration-500 group-hover:translate-x-0.5"
                    fill="none"
                  >
                    <path
                      d="M12 24H36"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />

                    <path
                      d="M28 14L38 24L28 34"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
