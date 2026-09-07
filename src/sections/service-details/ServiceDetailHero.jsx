"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ServiceDetailHero = ({ service }) => {
  return (
    <section className="relative min-h-[calc(100vh-96px)] overflow-hidden bg-[var(--satt-text-primary)] text-white">
      {/* Background Image */}

      <Image
        src={service.heroImage}
        alt={service.title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-[1600px] flex-col justify-end px-6 pb-16 pt-32 xl:px-10 xl:pb-24">
        <div className="max-w-5xl">
          {/* Number */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            {/* <span className="text-[16px] tracking-[0.3em] text-[var(--satt-gold)]">
              {service.number}
            </span> */}

            <span className="h-px w-12 bg-[var(--satt-gold)]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70">
              {service.type}
            </span>
          </motion.div>

          {/* Title */}

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-7 max-w-5xl font-heading text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {service.title}
          </motion.h1>

          {/* Subtitle */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-2xl text-sm leading-7 text-white/75 md:text-base"
          >
            {service.subtitle}
          </motion.p>

          {/* CTA */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 border border-[var(--satt-gold)] bg-[var(--satt-gold)] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[var(--satt-gold-dark)] hover:text-white"
            >
              Plan Your Event

              <ArrowUpRight
                size={15}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 right-6 hidden items-center gap-3 xl:flex"
        >
          <span className="text-[9px] uppercase tracking-[0.25em] text-white/50">
            Explore
          </span>

          <ArrowDown
            size={15}
            strokeWidth={1}
            className="animate-bounce text-[var(--satt-gold)]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetailHero;