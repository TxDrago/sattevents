"use client";

import { motion } from "framer-motion";

const EventStoryDetails = ({ event }) => {
  const details = event.details;

  return (
    <section className="bg-[var(--satt-bg-secondary)] py-24 md:py-32">

      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

          {/* Heading */}

          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              {details.eyebrow}
            </span>

            <h2 className="mt-6 max-w-md font-heading text-4xl leading-tight sm:text-5xl">
              {details.title}
            </h2>
          </div>

          {/* Details */}

          <div className="grid border-t border-[var(--satt-border)]/30 sm:grid-cols-2">

            {details.items.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="border-b border-[var(--satt-border)]/30 py-7 sm:px-6"
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--satt-text-secondary)]">
                  {item.label}
                </span>

                <p className="mt-3 font-heading text-xl">
                  {item.value}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default EventStoryDetails;