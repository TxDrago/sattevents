"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const CapabilityFacilities = ({ capability }) => {
  const facilities = capability.facilities;

  return (
    <section className="bg-[var(--satt-bg-primary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <img
              src={facilities.image}
              alt={`${capability.title} facilities`}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Content */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              {facilities.eyebrow}
            </span>

            <h2 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl">
              {facilities.title}
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--satt-text-secondary)]">
              {facilities.description}
            </p>

            <div className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {facilities.items.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                  className="flex items-center gap-3 border-b border-[var(--satt-border)]/20 pb-3"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-[var(--satt-gold)]">
                    <Check
                      size={11}
                      strokeWidth={1.5}
                      className="text-[var(--satt-gold-dark)]"
                    />
                  </span>

                  <span className="text-xs text-[var(--satt-text-primary)]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityFacilities;