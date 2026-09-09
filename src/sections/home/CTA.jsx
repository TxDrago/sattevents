"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--satt-bg-primary)] py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">
        <div className="relative min-h-[520px] overflow-hidden border border-[var(--satt-gold)]/50 md:min-h-[600px]">
          {/* =====================================
              BACKGROUND IMAGE
          ===================================== */}

          <div className="absolute inset-0">
            <img
              src="/images/cta/event-cta.jpg"
              alt="Satt Event Planners"
              className="h-full w-full object-cover"
            />

            {/* Dark Luxury Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Soft Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
          </div>

          {/* =====================================
              GOLD CORNER DETAILS
          ===================================== */}

          <div className="pointer-events-none absolute left-5 top-5 h-16 w-16 border-l border-t border-[var(--satt-gold)]/80 md:left-8 md:top-8 md:h-20 md:w-20" />

          <div className="pointer-events-none absolute bottom-5 right-5 h-16 w-16 border-b border-r border-[var(--satt-gold)]/80 md:bottom-8 md:right-8 md:h-20 md:w-20" />

          {/* =====================================
              CONTENT
          ===================================== */}

          <div className="relative z-10 flex min-h-[520px] flex-col justify-center px-8 py-16 md:min-h-[600px] md:px-14 lg:px-20 xl:px-28">
            {/* Small Label */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-4"
            >
              <span className="h-px w-12 bg-[var(--satt-gold)]" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                Let's Create Together
              </span>
            </motion.div>

            {/* Signature */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="font-signature mt-8 text-5xl text-[var(--satt-gold-bright)] md:text-6xl lg:text-7xl"
            >
              your moment,
            </motion.p>

            {/* Main Heading */}

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="font-heading mt-2 max-w-4xl text-4xl leading-[1.1] text-white md:text-5xl lg:text-6xl xl:text-7xl"
            >
              beautifully planned.
              <br />
              <span className="text-[var(--satt-bright-gold)]">
                beautifully remembered.
              </span>
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              className="mt-7 max-w-xl text-sm leading-7 text-white/70 md:text-base"
            >
              Whether it is a wedding, corporate gathering, public celebration,
              sporting event or adventure experience, let&apos;s create
              something people will remember.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              {/* Primary CTA */}

              <a
                href="#contact"
                className="group inline-flex items-center gap-4 border border-[var(--satt-gold)] bg-[var(--satt-gold)] px-7 py-4 text-[10px] uppercase tracking-[0.2em] text-[var(--satt-text-primary)] transition-all duration-300 hover:bg-[var(--satt-dark-gold)] hover:text-white"
              >
                Plan Your Event
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              {/* Secondary CTA */}

             <a
  href="#recent-works"
  style={{ color: "var(--satt-text-third)" }}
  className="inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 hover:border-[var(--satt-gold)] hover:bg-white/10"
>
  Explore Our Work
</a>
            </motion.div>
          </div>

          {/* =====================================
              SIDE LABEL
          ===================================== */}

          <div className="absolute bottom-8 right-8 hidden md:block">
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 [writing-mode:vertical-rl]">
              Satt Event Planners
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
