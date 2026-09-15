"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EventStoryDetails = ({ event }) => {
  const details = event?.eventDetails;

  if (!details) {
    return null;
  }

  const items = details.details || [];

  return (
    <section className="bg-[var(--satt-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Heading */}

          <div>
            {details.eyebrow && (
              <span className="text-[24px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
                {details.eyebrow}
              </span>
            )}

            {details.title && (
              <h2 className="mt-6 max-w-md font-heading text-4xl leading-tight sm:text-5xl">
                {details.title}
              </h2>
            )}

            {/* Optional Image */}

            {details.image && (
              <div className="relative mt-10 aspect-[4/3] overflow-hidden">
                <Image
                  src={details.image}
                  alt={details.title || event.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>

          {/* Details */}

          {items.length > 0 && (
            <div className="grid border-t border-[var(--satt-border)]/30 sm:grid-cols-2">
              {items.map((item, index) => (
                <motion.div
                  key={`${item.label}-${index}`}
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
          )}
        </div>
      </div>
    </section>
  );
};

export default EventStoryDetails;