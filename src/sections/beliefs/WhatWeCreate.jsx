"use client";

import { motion } from "framer-motion";

const creations = [
  "Moments that feel personal",
  "Spaces that tell a story",
  "Celebrations filled with emotion",
  "Experiences people talk about",
];

const WhatWeCreate = () => {
  return (
    <section className="bg-[var(--satt-bg-primary)] ">
      <div className="mx-auto grid max-w-[1500px] md:grid-cols-2">

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative min-h-[450px] overflow-hidden md:min-h-[650px]"
        >
          <img
            src="/images/beliefs/what-we-create.jpg"
            alt="Satt Event Planners creating experiences"
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
          className="flex items-center px-7 py-20 md:px-12 lg:px-20"
        >
          <div className="w-full">

            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[var(--satt-gold)]" />

              <span className="text-[24px] uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
                What We Create
              </span>
            </div>

            <h2 className="font-heading mt-7 text-4xl leading-tight text-[var(--satt-text-primary)] md:text-5xl">
              Experiences
              <br />
              <span className="text-[var(--satt-gold)]">
                worth remembering.
              </span>
            </h2>

            <div className="mt-10 border-t border-[var(--satt-border)]/30">

              {creations.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-5 border-b border-[var(--satt-border)]/30 py-5"
                >
                  <span className="text-[9px] tracking-[0.2em] text-[var(--satt-gold-dark)]">
                    0{index + 1}
                  </span>

                  <p className="font-heading text-xl text-[var(--satt-text-primary)] md:text-2xl">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhatWeCreate;