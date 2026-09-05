"use client";

import { motion } from "framer-motion";

const ExperienceIntroduction = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              More Than An Event
            </span>

            <h2 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
              We don't just plan
              <span className="block text-[var(--satt-gold-dark)]">
                moments.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-lg leading-8 text-[var(--satt-text-secondary)]">
              We design the feeling around them.
            </p>

            <p className="mt-6 text-sm leading-7 text-[var(--satt-text-secondary)]">
              Every experience begins with understanding people — what they
              expect, what inspires them and what they should remember when
              everything is over.
            </p>

            <p className="mt-5 text-sm leading-7 text-[var(--satt-text-secondary)]">
              From the first arrival to the final goodbye, SATT considers
              every touchpoint to create an environment where people feel
              connected, welcomed and part of something meaningful.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceIntroduction;