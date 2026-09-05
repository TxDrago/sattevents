"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ServiceOverview = ({ service }) => {
  const { overview } = service;

  return (
    <section className="bg-[var(--satt-bg-primary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Text */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[16px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              {overview.eyebrow}
            </span>

            <h2 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {overview.title}
            </h2>

            <div className="mt-8 h-px w-16 bg-[var(--satt-gold)]" />

            <p className="mt-8 max-w-xl text-m leading-8 text-[var(--satt-text-secondary)] md:text-base">
              {overview.text}
            </p>
          </motion.div>

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src={overview.image}
              alt={overview.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />

            <div className="absolute inset-0 ring-1 ring-inset ring-[var(--satt-gold)]/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;