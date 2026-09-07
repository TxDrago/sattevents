"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Heart,
  Layers3,
  Users,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Sparkles,
    title: "Creative Thinking",
    description:
      "We look beyond the expected to find ideas that give every event its own identity.",
  },
  {
    number: "02",
    icon: Heart,
    title: "Personal Touch",
    description:
      "We understand that no two celebrations are the same. Every experience is shaped around you.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Attention to Detail",
    description:
      "From the first concept to the smallest finishing touch, we believe details create the difference.",
  },
  {
    number: "04",
    icon: Users,
    title: "Seamless Execution",
    description:
      "Behind every beautiful event is careful planning, coordination and a team that makes it happen.",
  },
];

const WhySattAbout = () => {
  return (
    <section className="overflow-hidden bg-[var(--satt-bg-secondary)]">
      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-36">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[var(--satt-gold)] md:w-16" />

              <span className="text-[24px] font-medium uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
                Why Satt
              </span>
            </div>

            <p className="font-signature mt-7 text-4xl text-[var(--satt-gold-dark)] md:text-5xl">
              Because moments matter.
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="font-heading max-w-4xl text-4xl leading-[1.1] text-[var(--satt-text-primary)] sm:text-5xl md:text-6xl"
          >
            We don't just plan events.
            <br />

            <span className="text-[var(--satt-gold)]">
              We create reasons to remember them.
            </span>
          </motion.h2>

        </div>

        {/* =========================================
            FEATURE IMAGE
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            delay: 0.15,
          }}
          className="relative mt-14 md:mt-20"
        >
          <div className="group relative h-[420px] overflow-hidden md:h-[540px] lg:h-[620px]">

            <img
              src="/images/about/why-satt.jpg"
              alt="Satt Event Planners creating memorable experiences"
              className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]"
            />

            {/* Dark cinematic overlay */}

            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent" />

            {/* Gold frame */}

            <div className="pointer-events-none absolute inset-4 border border-[var(--satt-gold)]/60 md:inset-6" />

            {/* Image message */}

            <div className="absolute bottom-8 left-8 max-w-xl md:bottom-12 md:left-12">

              <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-[var(--satt-gold-bright)]">
                The Satt Difference
              </span>

              <h3 className="font-heading mt-4 text-3xl leading-tight text-white md:text-5xl">
                Thoughtful ideas.
                <br />
                Beautiful details.
                <br />
                <span className="text-[var(--satt-gold-bright)]">
                  Meaningful moments.
                </span>
              </h3>

            </div>
          </div>
        </motion.div>

        {/* =========================================
            REASONS
        ========================================= */}

        <div className="mt-14 grid border-t border-[var(--satt-border)]/30 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">

          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                key={reason.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group border-b border-[var(--satt-border)]/30 p-7 first:pl-0 md:min-h-[300px] md:border-r md:border-b-0 md:p-8 md:last:border-r-0 lg:min-h-[320px]"
              >

                {/* Top */}

                <div className="flex items-start justify-between">

                  {/* <span className="text-[10px] font-medium tracking-[0.25em] text-[var(--satt-gold-dark)]">
                    {reason.number}
                  </span> */}

                  <Icon
                    size={20}
                    strokeWidth={1.2}
                    className="text-[var(--satt-gold)] transition-transform duration-300 group-hover:scale-110"
                  />

                </div>

                {/* Title */}

                <h4 className="font-heading mt-12 text-2xl text-[var(--satt-text-primary)] md:text-3xl">
                  {reason.title}
                </h4>

                {/* Description */}

                <p className="mt-4 text-sm leading-7 text-[var(--satt-text-secondary)]">
                  {reason.description}
                </p>

              </motion.article>
            );
          })}

        </div>

        {/* =========================================
            SIGNATURE STATEMENT
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center md:mt-24"
        >
          <span className="mx-auto mb-6 block h-px w-14 bg-[var(--satt-gold)]/60" />

          <p className="font-signature text-5xl text-[var(--satt-gold-dark)] md:text-6xl lg:text-7xl">
            Your vision. Our craft.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WhySattAbout;