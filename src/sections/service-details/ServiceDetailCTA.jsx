"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ServiceDetailCTA = ({ service }) => {
  const { cta } = service;

  return (
    <section className="bg-[var(--satt-bg-primary)] px-6 pb-24 md:pb-32 xl:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-[1600px] overflow-hidden bg-[var(--satt-text-primary)]"
      >
        {/* Background */}

        <div className="absolute inset-0 opacity-20">
          <Image
            src={service.heroImage}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}

        <div className="relative z-10 px-8 py-20 text-center sm:px-12 md:py-28 lg:px-20">
          <span className="text-[16px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold)]">
            {cta.eyebrow}
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl font-heading text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            {cta.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
            {cta.text}
          </p>

          <Link
            href="/contact"
            className="group mt-9 inline-flex items-center gap-4 bg-[var(--satt-gold)] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[var(--satt-gold-dark)] hover:text-white"
          >
            {cta.button}

            <ArrowUpRight
              size={15}
              strokeWidth={1.3}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default ServiceDetailCTA;