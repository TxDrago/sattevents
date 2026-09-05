"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const CapabilityCTA = ({ capability }) => {
  const cta = capability.cta;

  return (
    <section className="bg-[var(--satt-bg-primary)] px-6 py-24 md:py-32 xl:px-10">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden bg-[var(--satt-text-primary)] px-8 py-16 text-center text-white md:px-16 md:py-24"
        >
          <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-[var(--satt-gold)]" />

          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold)]">
            {cta.eyebrow}
          </span>

          <h2 className="mx-auto mt-6 max-w-4xl font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {cta.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60">
            {cta.text}
          </p>

          <div className="mt-9">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-[var(--satt-gold)] bg-[var(--satt-gold)] px-7 py-4 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--satt-text-primary)] transition-all duration-300 hover:bg-[var(--satt-gold-dark)] hover:text-white"
            >
              {cta.button}

              <ArrowUpRight size={15} strokeWidth={1.5} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilityCTA;