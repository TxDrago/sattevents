"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const CapabilityDetailHero = ({ capability }) => {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-[var(--satt-bg-primary)]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={capability.heroImage}
          alt={capability.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-[1600px] flex-col justify-end px-6 pb-16 pt-32 xl:px-10 xl:pb-20">
        <div className="max-w-5xl text-white">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold)]">
              Supporting Capability
            </span>

            <span className="h-px w-12 bg-[var(--satt-gold)]" />

            {/* <span className="text-[10px] tracking-[0.2em] text-white/70">
              {capability.number}
            </span> */}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl font-heading text-5xl leading-[1.05] sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            {capability.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-2xl text-sm leading-7 text-white/80 sm:text-base"
          >
            {capability.subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-[var(--satt-gold)] bg-[var(--satt-gold)] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--satt-text-primary)] transition-all duration-300 hover:bg-[var(--satt-gold-dark)] hover:text-white"
            >
              Discuss Your Requirement

              <ArrowUpRight size={14} strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>

        {/* Bottom Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 right-6 hidden items-center gap-3 text-white/60 xl:flex"
        >
          <span className="text-[9px] uppercase tracking-[0.25em]">
            Explore Capability
          </span>

          <ArrowDown size={14} strokeWidth={1.2} />
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilityDetailHero;