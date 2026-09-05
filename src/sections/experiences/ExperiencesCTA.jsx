"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ExperiencesCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--satt-bg-secondary)]">

      {/* Image */}

      <div className="absolute inset-0">
        <img
          src="/images/experiences/experiences-cta.webp"
          alt="Create an unforgettable event experience"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1600px] items-center px-6 py-24 xl:px-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >

          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--satt-gold)]">
            Your Experience Starts Here
          </span>

          <h2 className="mt-6 font-heading text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Let's create
            <span className="block text-[var(--satt-gold)]">
              something unforgettable.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 md:text-base">
            Tell us about your vision, your audience and the experience you
            want to create. We'll help turn the idea into something people
            remember.
          </p>

          <div className="mt-10">

            <Link
              href="/contact"
              className="group inline-flex items-center gap-5 border border-[var(--satt-gold)] bg-[var(--satt-gold)] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--satt-text-primary)] transition-all duration-300 hover:bg-[var(--satt-gold-dark)] hover:text-white"
            >
              Plan Your Experience

              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default ExperiencesCTA;