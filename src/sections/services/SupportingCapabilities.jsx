"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { supportingCapabilities } from "@/data/services";

const SupportingCapabilities = () => {
  return (
    <section className="bg-[var(--satt-text-primary)] py-24 text-white md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-[16px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold)]">
            Supporting Capabilities
          </span>

          <h2 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Everything behind
            <span className="block text-[var(--satt-gold)]">
              the experience.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-m leading-7 text-white/60">
            From planning and production to artists, logistics and visual
            storytelling, our supporting capabilities bring every event
            together with precision.
          </p>
        </motion.div>

        {/* =========================================
            CAPABILITIES GRID
        ========================================= */}

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {supportingCapabilities.map((capability, index) => (
            <motion.div
              key={capability.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group"
            >
              <Link
                href={capability.href}
                className="relative block h-full overflow-hidden border border-white/10 bg-white/[0.03]"
              >
                {/* =========================================
                    IMAGE
                ========================================= */}

                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={capability.image}
                    alt={capability.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Image Overlay */}

                  <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />

                  {/* Number */}

                  <div className="absolute left-5 top-5">
                    {/* <span className="text-[9px] tracking-[0.2em] text-white/80">
                      {capability.number}
                    </span> */}
                  </div>

                  {/* Arrow */}

                  <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-white/30 bg-black/10 backdrop-blur-sm transition-all duration-300 group-hover:border-[var(--satt-gold)] group-hover:bg-[var(--satt-gold)]">
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.4}
                      className="transition-colors duration-300 group-hover:text-black"
                    />
                  </div>
                </div>

                {/* =========================================
                    CONTENT
                ========================================= */}

                <div className="p-6 md:p-7">
                  <h3 className="font-heading text-2xl transition-colors duration-300 group-hover:text-[var(--satt-gold)]">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {capability.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--satt-gold)]">
                    Explore Capability

                    <ArrowUpRight
                      size={12}
                      strokeWidth={1.4}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SupportingCapabilities;