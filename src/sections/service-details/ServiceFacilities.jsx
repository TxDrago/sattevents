"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const ServiceFacilities = ({ service }) => {
  const { facilities } = service;

  return (
    <section className="bg-[var(--satt-text-primary)] py-24 text-white md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src={facilities.image}
              alt={facilities.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute bottom-6 left-6 border border-white/20 bg-black/30 px-5 py-4 backdrop-blur-sm">
              <span className="text-[12px] uppercase tracking-[0.25em] text-[var(--satt-gold)]">
                Facilities & Amenities
              </span>
            </div>
          </motion.div>

          {/* Content */}

          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-[16px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold)]">
                {facilities.eyebrow}
              </span>

              <h2 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl">
                {facilities.title}
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">
                {facilities.description}
              </p>
            </motion.div>

            {/* Amenities */}

            <div className="mt-10 grid gap-x-8 border-t border-white/10 sm:grid-cols-2">
              {facilities.items.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.03,
                  }}
                  className="flex items-center gap-3 border-b border-white/10 py-4"
                >
                  <Check
                    size={14}
                    strokeWidth={1.3}
                    className="shrink-0 text-[var(--satt-gold)]"
                  />

                  <span className="text-[11px] uppercase tracking-[0.06em] text-white/70">
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

export default ServiceFacilities;