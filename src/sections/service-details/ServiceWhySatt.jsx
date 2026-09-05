"use client";

import { motion } from "framer-motion";

const ServiceWhySatt = ({ service }) => {
  if (!service?.whySatt) return null;

  const { whySatt } = service;

  return (
    <section className="bg-[var(--satt-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          {/* LEFT CONTENT */}
          <div>
            <span className="text-[16px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              {whySatt.eyebrow}
            </span>

            <h2 className="mt-6 max-w-xl font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {whySatt.title}
            </h2>

            <p className="mt-6 max-w-lg text-m leading-7 text-[var(--satt-text-secondary)]">
              {whySatt.text}
            </p>
          </div>

          {/* RIGHT POINTS */}
          <div className="grid border-t border-[var(--satt-border)]/30 sm:grid-cols-2">
            {whySatt.points?.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="border-b border-[var(--satt-border)]/30 p-6 sm:p-8"
              >
                <div className="flex items-start gap-5">
                  <span className="mt-1 text-[12px] tracking-[0.2em] text-[var(--satt-gold)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="font-heading text-xl leading-snug sm:text-2xl">
                    {point}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceWhySatt;