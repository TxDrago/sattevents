"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const GalleryCTA = () => {
  return (
    <section className="relative overflow-hidden">

      <img
        src="/images/gallery/cta.webp"
        alt="Plan your event with SATT"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto flex min-h-[550px] max-w-[1600px] items-center px-6 py-24 xl:px-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >

          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--satt-gold)]">
            Your Event Could Be Next
          </span>

          <h2 className="mt-6 font-heading text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
            Let's create
            <span className="block text-[var(--satt-gold)]">
              your next moment.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/70">
            Have an event in mind? Tell us what you're planning and let's
            create an experience worth remembering.
          </p>

          <Link
            href="/contact"
            className="group mt-9 inline-flex items-center gap-5 border border-[var(--satt-gold)] bg-[var(--satt-gold)] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-[var(--satt-gold-dark)] hover:text-white"
          >
            Plan Your Event

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default GalleryCTA;