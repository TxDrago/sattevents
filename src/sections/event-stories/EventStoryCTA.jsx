"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const EventStoryCTA = ({ event }) => {
  const cta = event.cta;

  return (
    <section className="relative overflow-hidden bg-black py-28 text-white md:py-40">

      {/* Background */}

      <Image
        src={event.coverImage}
        alt=""
        fill
        className="object-cover opacity-25"
      />

      <div className="absolute inset-0 bg-black/65" />


      {/* Content */}

      <div className="relative z-10 mx-auto max-w-[1100px] px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold)]">
            {cta.eyebrow}
          </span>

          <h2 className="mx-auto mt-7 max-w-4xl font-heading text-4xl leading-tight sm:text-5xl lg:text-7xl">
            {cta.title}
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
            {cta.text}
          </p>

          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-4 border border-[var(--satt-gold)] bg-[var(--satt-gold)] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-[var(--satt-gold-dark)] hover:text-white"
          >
            {cta.button}

            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>

        </motion.div>

      </div>

    </section>
  );
};

export default EventStoryCTA;