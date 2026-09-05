"use client";

import { motion } from "framer-motion";

const CapabilityOverview = ({ capability }) => {
  const overview = capability.overview;

  return (
    <section className="bg-[var(--satt-bg-primary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              {overview.eyebrow}
            </span>

            <h2 className="mt-6 max-w-xl font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {overview.title}
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-[var(--satt-text-secondary)]">
              {overview.text}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <img
              src={overview.image}
              alt={`${capability.title} overview`}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 border border-white/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityOverview;