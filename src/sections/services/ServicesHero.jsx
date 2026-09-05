"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden border-b border-[var(--satt-border)]/20">
      <div className="mx-auto grid min-h-[75vh] max-w-[1600px] lg:grid-cols-2">
        {/* CONTENT */}

        <div className="flex items-center px-6 py-24 xl:px-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center gap-4"
            >
              <span className="h-px w-12 bg-[var(--satt-gold)]" />

              <span className="text-[24px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
                Our Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
            >
              We create
              <span className="block text-[var(--satt-gold-dark)]">
                experiences
              </span>
              worth remembering.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 max-w-xl text-sm leading-7 text-[var(--satt-text-secondary)] md:text-base"
            >
              From the first idea to the final moment, SATT brings together
              strategy, creativity, design and flawless execution to create
              events that people remember long after they are over.
            </motion.p>

            <motion.a
              href="#services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 inline-flex items-center gap-4 text-[12px] font-bold uppercase tracking-[0.25em]"
            >
              Explore our services

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--satt-border)]">
                <ArrowDown size={14} strokeWidth={1.3} />
              </span>
            </motion.a>
          </div>
        </div>

        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-[450px] lg:min-h-full"
        >
          <Image
            src="/images/services/services-hero.webp"
            alt="SATT event experience"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;