"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const AboutSatt = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--satt-bg-primary)] py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-[var(--satt-gold)]" />

          <span className="text-[24px] uppercase tracking-[0.3em] text-[var(--satt-text-secondary)]">
            About Satt
          </span>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-signature text-4xl text-[var(--satt-gold-dark)] md:text-5xl">
              crafted with intention
            </p>

            <h2 className="font-heading mt-4 max-w-4xl text-4xl leading-[1.15] text-[var(--satt-text-primary)] md:text-5xl lg:text-6xl xl:text-7xl">
              We create moments
              <br />
              <span className="text-[var(--satt-gold-dark)]">
                worth remembering.
              </span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:pt-16"
          >
            <div className="border-l border-[var(--satt-border)] pl-6 md:pl-8">
              <p className="font-body text-base leading-8 text-[var(--satt-text-secondary)] md:text-lg">
                At Satt Event Planners, we believe an event is more than a
                gathering. It is a collection of moments, emotions and
                experiences that stay with people long after the occasion is
                over.
              </p>

              <p className="font-body mt-6 text-base leading-8 text-[var(--satt-text-secondary)] md:text-lg">
                From intimate celebrations to large-scale experiences, we
                bring thoughtful planning, creative ideas and seamless
                execution together to create events that feel personal,
                purposeful and unforgettable.
              </p>

              <Link
                href="/about"
                className="group mt-8 inline-flex items-center gap-3 border-b border-[var(--satt-gold)] pb-2 text-[10px] uppercase tracking-[0.22em] text-[var(--satt-text-primary)] transition-colors hover:text-[var(--satt-gold-dark)]"
              >
                Discover Satt

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-24 border-t border-[var(--satt-border)]/40 pt-8 md:mt-32"
        >
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <p className="max-w-xl font-heading text-2xl leading-relaxed text-[var(--satt-text-primary)] md:text-3xl">
              Your vision.
              <br />
              Our craft.
              <br />
              <span className="text-[var(--satt-gold-dark)]">
                One unforgettable experience.
              </span>
            </p>

            <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--satt-text-secondary)]">
              Satt Event Planners
            </span>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSatt;