"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CapabilityServices = ({ capability }) => {
  return (
    <section className="bg-[var(--satt-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.65fr_1.35fr]">
          {/* Left */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              {capability.services.eyebrow}
            </span>

            <h2 className="mt-6 max-w-md font-heading text-4xl leading-tight sm:text-5xl">
              {capability.services.title}
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[var(--satt-text-secondary)]">
              {capability.services.description}
            </p>

            {capability.services.image && (
              <div className="mt-10 aspect-[4/3] overflow-hidden">
                <img
                  src={capability.services.image}
                  alt={capability.services.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            )}
          </div>

          {/* Right */}
          <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
            {capability.services.items.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group border-t border-[var(--satt-border)]/30 py-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[9px] tracking-[0.2em] text-[var(--satt-gold)]">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.2}
                    className="text-[var(--satt-gold)] opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </div>

                <h3 className="mt-5 font-heading text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--satt-text-secondary)]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityServices;