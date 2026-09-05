"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EventStoryObjective = ({ event }) => {
  const objective = event.objective;

  return (
    <section className="bg-[var(--satt-bg-primary)] py-24 md:py-32">

      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src={objective.image}
              alt={objective.title}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              {objective.eyebrow}
            </span>

            <h2 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl">
              {objective.title}
            </h2>

            <p className="mt-6 text-sm leading-7 text-[var(--satt-text-secondary)]">
              {objective.text}
            </p>

            <div className="mt-9 space-y-4">

              {objective.points.map((point, index) => (
                <div
                  key={point}
                  className="flex items-center gap-4 border-b border-[var(--satt-border)]/30 pb-4"
                >
                  <span className="text-[9px] tracking-[0.15em] text-[var(--satt-gold)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm">
                    {point}
                  </span>
                </div>
              ))}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default EventStoryObjective;