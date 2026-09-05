"use client";

import { motion } from "framer-motion";

const OurPhilosophy = () => {
  return (
    <section className="overflow-hidden bg-[var(--satt-bg-secondary)] ">
      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[0.8fr_1.2fr]">

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex items-center px-6 py-20 md:px-10 md:py-28 lg:px-16"
        >
          <div>

            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[var(--satt-gold)]" />

              <span className="text-[24px] uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
                Our Philosophy
              </span>
            </div>

            <h2 className="font-heading mt-7 text-4xl leading-tight text-[var(--satt-text-primary)] md:text-5xl">
              Less formula.
              <br />
              <span className="text-[var(--satt-gold)]">
                More feeling.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-7 text-[var(--satt-text-secondary)] md:text-base md:leading-8">
              We don't believe memorable experiences can be created
              from a fixed formula.
            </p>

            <p className="mt-5 text-sm leading-7 text-[var(--satt-text-secondary)] md:text-base md:leading-8">
              Every event has its own personality. Our role is to
              discover it, shape it and give it a space to shine.
            </p>

            <div className="mt-10 border-l border-[var(--satt-gold)] pl-6">
              <p className="font-signature text-4xl text-[var(--satt-gold-dark)]">
                Every story deserves its own setting.
              </p>
            </div>

          </div>
        </motion.div>

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1 }}
          className="relative min-h-[450px] overflow-hidden lg:min-h-[700px]"
        >
          <img
            src="/images/beliefs/philosophy.jpg"
            alt="Satt Event Planners philosophy"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-5 border border-[var(--satt-gold)]/50" />
        </motion.div>

      </div>
    </section>
  );
};

export default OurPhilosophy;