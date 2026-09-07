"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="overflow-hidden bg-[var(--satt-bg-primary)]">
      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-32">

        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[var(--satt-gold)] md:w-16" />

            <span className="text-[24px] font-medium uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              Our Direction
            </span>
          </div>

          <h2 className="font-heading mt-6 text-4xl leading-tight text-[var(--satt-text-primary)] md:text-5xl lg:text-6xl">
            Purpose behind
            <span className="text-[var(--satt-gold)]"> every experience.</span>
          </h2>
        </motion.div>

        {/* =========================================
            MISSION / VISION
        ========================================= */}

        <div className="grid md:grid-cols-2">

          {/* =========================================
              MISSION
          ========================================= */}

          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden border border-[var(--satt-border)]/30"
          >
            {/* Image */}

            <div className="relative aspect-[4/3] overflow-hidden md:aspect-[5/4]">
              <img
                src="/images/about/mission.jpg"
                alt="Satt Event Planners mission"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Number */}

              {/* <span className="absolute left-6 top-6 text-[10px] font-medium tracking-[0.25em] text-[var(--satt-gold-bright)]">
                01
              </span> */}
            </div>

            {/* Content */}

            <div className="bg-[var(--satt-bg-secondary)] p-7 md:p-10">

              <div className="flex items-center justify-between">
                <h3 className="font-heading text-3xl text-[var(--satt-text-primary)] md:text-4xl">
                  Our Mission
                </h3>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.2}
                  className="text-[var(--satt-gold)]"
                />
              </div>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--satt-text-secondary)] md:text-base">
                To transform ideas into meaningful experiences through
                thoughtful planning, creative design and seamless execution.
              </p>

            </div>
          </motion.article>

          {/* =========================================
              VISION
          ========================================= */}

          <motion.article
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="group relative overflow-hidden border border-[var(--satt-border)]/30 md:mt-20 md:-ml-px"
          >
            {/* Image */}

            <div className="relative aspect-[4/3] overflow-hidden md:aspect-[5/4]">
              <img
                src="/images/about/vision.jpg"
                alt="Satt Event Planners vision"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Number */}

              {/* <span className="absolute left-6 top-6 text-[10px] font-medium tracking-[0.25em] text-[var(--satt-gold-bright)]">
                02
              </span> */}
            </div>

            {/* Content */}

            <div className="bg-[var(--satt-bg-secondary)] p-7 md:p-10">

              <div className="flex items-center justify-between">
                <h3 className="font-heading text-3xl text-[var(--satt-text-primary)] md:text-4xl">
                  Our Vision
                </h3>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.2}
                  className="text-[var(--satt-gold)]"
                />
              </div>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--satt-text-secondary)] md:text-base">
                To become a trusted name in experience creation, known for
                bringing imagination, emotion and unforgettable moments
                together.
              </p>

            </div>
          </motion.article>

        </div>

        {/* =========================================
            SIGNATURE LINE
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex items-center justify-center gap-4 md:mt-16"
        >
          <span className="h-px w-10 bg-[var(--satt-gold)]/50" />

          <p className="font-signature text-4xl text-[var(--satt-gold-dark)] md:text-5xl">
            Create. Connect. Remember.
          </p>

          <span className="h-px w-10 bg-[var(--satt-gold)]/50" />
        </motion.div>

      </div>
    </section>
  );
};

export default MissionVision;