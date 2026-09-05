"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const WhoWeAre = () => {
  return (
    <section className="overflow-hidden bg-[var(--satt-bg-secondary)]">
      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-36">

        {/* =========================================
            SECTION INTRO
        ========================================= */}

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-end">

          {/* Label */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[var(--satt-gold)] md:w-16" />

              <span className="text-[24px] font-medium uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
                Who We Are
              </span>
            </div>

            <p className="font-signature mt-7 text-4xl text-[var(--satt-gold-dark)] md:text-5xl">
              More than event planners.
            </p>
          </motion.div>

          {/* Main Statement */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
          >
            <h2 className="font-heading text-4xl leading-[1.1] text-[var(--satt-text-primary)] sm:text-5xl md:text-6xl">
              We are creators,
              <br />

              <span className="text-[var(--satt-gold)]">
                planners & experience makers.
              </span>
            </h2>
          </motion.div>

        </div>

        {/* =========================================
            CONTENT + 4 IMAGE GRID
        ========================================= */}

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

          {/* =========================================
              TEXT SIDE
          ========================================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-sm leading-7 text-[var(--satt-text-secondary)] md:text-base md:leading-8">
              Satt Event Planners brings together creativity, planning and
              execution to create experiences that feel personal, effortless
              and unforgettable.
            </p>

            <p className="mt-5 text-sm leading-7 text-[var(--satt-text-secondary)] md:text-base md:leading-8">
              From intimate celebrations to large-scale experiences, we
              believe every event deserves its own identity — shaped around
              the people, the purpose and the moments that matter.
            </p>

            {/* Gold Divider */}

            <div className="my-8 h-px w-full max-w-xs bg-[var(--satt-border)]/30" />

            {/* Categories */}

            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Weddings",
                "Corporate",
                "Public",
                "Sports",
                "Adventure",
              ].map((item) => (
                <span
                  key={item}
                  className="text-[9px] font-medium uppercase tracking-[0.2em] text-[var(--satt-text-primary)]"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Small Link */}

            <div className="mt-10 inline-flex items-center gap-3 border-b border-[var(--satt-gold)] pb-2">
              <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-[var(--satt-text-primary)]">
                What We Create
              </span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.3}
                className="text-[var(--satt-gold-dark)]"
              />
            </div>
          </motion.div>

          {/* =========================================
              4 × 4 IMAGE GRID
          ========================================= */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              delay: 0.15,
            }}
            className="grid grid-cols-2 gap-3 md:gap-4"
          >

            {/* Image 01 */}

            <div className="group relative aspect-square overflow-hidden">
              <img
                src="/images/about/who-we-are-01.jpg"
                alt="Satt event planning"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

              <span className="absolute bottom-4 left-4 text-[8px] uppercase tracking-[0.25em] text-white/80">
                Creativity
              </span>
            </div>

            {/* Image 02 */}

            <div className="group relative aspect-square overflow-hidden">
              <img
                src="/images/about/who-we-are-02.jpg"
                alt="Satt event design"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

              <span className="absolute bottom-4 left-4 text-[8px] uppercase tracking-[0.25em] text-white/80">
                Design
              </span>
            </div>

            {/* Image 03 */}

            <div className="group relative aspect-square overflow-hidden">
              <img
                src="/images/about/who-we-are-03.jpg"
                alt="Satt event production"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

              <span className="absolute bottom-4 left-4 text-[8px] uppercase tracking-[0.25em] text-white/80">
                Production
              </span>
            </div>

            {/* Image 04 */}

            <div className="group relative aspect-square overflow-hidden">
              <img
                src="/images/about/who-we-are-04.jpg"
                alt="Satt event experience"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

              <span className="absolute bottom-4 left-4 text-[8px] uppercase tracking-[0.25em] text-white/80">
                Experience
              </span>
            </div>

          </motion.div>

        </div>

        {/* =========================================
            BOTTOM STATEMENT
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 border-t border-[var(--satt-border)]/30 pt-10 md:mt-24 md:pt-14"
        >
          <div className="grid gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-start">

            <span className="text-[16px] font-medium uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              The Satt Way
            </span>

            <p className="font-heading max-w-4xl text-2xl leading-tight text-[var(--satt-text-primary)] md:text-4xl">
              We turn ideas into environments,
              <span className="text-[var(--satt-gold)]">
                {" "}
                environments into experiences,
              </span>{" "}
              and experiences into memories.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhoWeAre;