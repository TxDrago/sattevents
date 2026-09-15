"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EventStoryDeliverables = ({ event }) => {
  const deliverables = event?.deliverables;

  if (!deliverables) {
    return null;
  }

  const items = deliverables.items || [];

  return (
    <section className="bg-[var(--satt-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
        {/* Header */}

        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            {deliverables.eyebrow && (
              <span className="text-[24px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
                {deliverables.eyebrow}
              </span>
            )}

            {deliverables.title && (
              <h2 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
                {deliverables.title}
              </h2>
            )}
          </div>

          <div className="flex items-end">
            {deliverables.description && (
              <p className="max-w-xl text-sm leading-7 text-[var(--satt-text-secondary)]">
                {deliverables.description}
              </p>
            )}
          </div>
        </div>

        {/* Image */}

        {deliverables.image && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mt-16 aspect-[21/9] overflow-hidden"
          >
            <Image
              src={deliverables.image}
              alt={deliverables.title || event.title}
              fill
              sizes="100vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />
          </motion.div>
        )}

        {/* Deliverables */}

        {items.length > 0 && (
          <div className="mt-16 grid border-t border-[var(--satt-border)]/30 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <motion.div
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="border-b border-[var(--satt-border)]/30 p-7 lg:p-10"
              >
                <h3 className="font-heading text-2xl">
                  {item.title}
                </h3>

                {item.text && (
                  <p className="mt-4 text-sm leading-6 text-[var(--satt-text-secondary)]">
                    {item.text}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EventStoryDeliverables;