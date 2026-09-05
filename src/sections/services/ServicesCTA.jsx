"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ServicesCTA = () => {
  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      <Image
        src="/images/services/services-cta.webp"
        alt="SATT event experience"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 text-center xl:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[16px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold)]">
            Let's Create Something
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl font-heading text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
            Have an event
            <span className="block text-[var(--satt-gold)]">
              in mind?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/70">
            Tell us what you're imagining. We'll help turn the idea into an
            experience worth remembering.
          </p>

          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-4 border border-[var(--satt-gold)] bg-[var(--satt-gold)] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[var(--satt-gold-dark)] hover:text-white"
          >
            Plan Your Event

            <ArrowUpRight
              size={15}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;