"use client";

import { motion } from "framer-motion";

const OurEthos = () => {
  return (
    <section className="bg-[var(--satt-bg-secondary)] ">
      <div className="mx-auto grid max-w-[1500px] md:grid-cols-2">

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative min-h-[420px] overflow-hidden md:min-h-[650px]"
        >
          <img
            src="/images/beliefs/ethos.jpg"
            alt="Satt Event Planners ethos"
            className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
          />

          <div className="absolute inset-5 border border-[var(--satt-gold)]/50" />
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex items-center px-7 py-16 md:px-12 lg:px-20"
        >
          <div>

            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[var(--satt-gold)]" />

              <span className="text-[24px] uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
                Our Ethos
              </span>
            </div>

            <h2 className="font-heading mt-7 text-4xl leading-tight text-[var(--satt-text-primary)] md:text-5xl lg:text-6xl">
              We create
              <br />
              <span className="text-[var(--satt-gold)]">
                with intention.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-7 text-[var(--satt-text-secondary)] md:text-base md:leading-8">
              At Satt, we believe every event begins with a feeling.
              Our work is about understanding that feeling and turning
              it into an environment people can experience.
            </p>

            <p className="mt-5 text-sm leading-7 text-[var(--satt-text-secondary)] md:text-base md:leading-8">
              We value creativity, honesty, thoughtful planning and
              the small details that make a celebration feel personal.
            </p>

            <p className="font-signature mt-8 text-4xl text-[var(--satt-gold-dark)]">
              With heart, always.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default OurEthos;