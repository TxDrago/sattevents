"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="bg-[var(--satt-bg-secondary)] px-6 py-20 md:px-10 md:py-28 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-[1400px] overflow-hidden bg-[var(--satt-text-primary)] px-7 py-16 text-center md:px-12 md:py-20 lg:py-24"
      >
        {/* Gold Frame */}

        <div className="pointer-events-none absolute inset-3 border border-[var(--satt-gold)]/40 md:inset-5" />

        {/* Small Label */}

        <span className="relative text-[16px] font-medium uppercase tracking-[0.3em] text-[var(--satt-gold-bright)]">
          Let&apos;s Create
        </span>

        {/* Heading */}

        <h2 className="font-heading relative mx-auto mt-5 max-w-4xl text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
          Your moment deserves
          <br />
          <span className="text-[var(--satt-gold-bright)]">
            something unforgettable.
          </span>
        </h2>

        {/* Signature */}

        <p className="font-signature relative mt-5 text-3xl text-white/80 md:text-4xl">
          Let&apos;s make it happen.
        </p>

        {/* CTA */}

       <Link
  href="/contact"
  className="relative mx-auto mt-8 inline-flex items-center gap-4 border border-[var(--satt-gold)] px-7 py-3.5 text-[10px] font-medium uppercase tracking-[0.22em] !text-white transition-all duration-300 hover:bg-[var(--satt-gold)] hover:!text-[var(--satt-text-primary)]"
>
  Start a Conversation

  <ArrowUpRight
    size={15}
    strokeWidth={1.3}
    className="!text-white transition-colors duration-300 group-hover:!text-[var(--satt-text-primary)]"
  />
</Link>
      </motion.div>
    </section>
  );
};

export default AboutCTA;