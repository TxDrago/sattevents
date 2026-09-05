"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ServicePlanning = ({ service }) => {
  const { planning } = service;

  return (
    <section className="bg-[var(--satt-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
        {/* Header */}

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[16px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              {planning.eyebrow}
            </span>

            <h2 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl">
              {planning.title}
            </h2>
          </motion.div>

          {/* Image */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[16/7] overflow-hidden"
          >
            <Image
              src={planning.image}
              alt={planning.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 70vw"
            />
          </motion.div>
        </div>

        {/* Planning Grid */}

        <div className="mt-16 grid border-t border-[var(--satt-border)]/30 sm:grid-cols-2 lg:grid-cols-3">
          {planning.items.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="group border-b border-[var(--satt-border)]/30 p-7 lg:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="text-[12px] tracking-[0.2em] text-[var(--satt-gold)]">
                  {item.number}
                </span>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.2}
                  className="text-[var(--satt-gold)] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </div>

              <h3 className="mt-7 font-heading text-2xl">
                {item.title}
              </h3>

              <p className="mt-4 text-m leading-7 text-[var(--satt-text-secondary)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePlanning;