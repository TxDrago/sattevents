"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "We listen, understand your vision and define what the experience needs to achieve.",
  },
  {
    number: "02",
    title: "Design",
    text: "We turn the idea into a complete event concept with creative direction, planning and production.",
  },
  {
    number: "03",
    title: "Deliver",
    text: "Our team brings everything together on the ground and manages the experience from beginning to end.",
  },
];

const ServicesApproach = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">

          {/* =========================================
              LEFT — CONTENT
          ========================================= */}

          <div>
            {/* Section Header */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[16px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
                Our Approach
              </span>

              <h2 className="mt-6 max-w-3xl font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Simple in process.
                <span className="block text-[var(--satt-gold-dark)]">
                  Exceptional in experience.
                </span>
              </h2>
            </motion.div>

            {/* Steps */}

            <div className="mt-14 border-t border-[var(--satt-border)]/30">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group grid gap-5 border-b border-[var(--satt-border)]/30 py-7 md:grid-cols-[70px_1fr] md:gap-8 md:py-9"
                >
                  {/* NUMBER */}

                  <span className="text-[10px] tracking-[0.2em] text-[var(--satt-gold)]">
                    {step.number}
                  </span>

                  {/* CONTENT */}

                  <div>
                    <h3 className="font-heading text-3xl transition-colors duration-300 group-hover:text-[var(--satt-gold-dark)]">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--satt-text-secondary)]">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* =========================================
              RIGHT — IMAGE
          ========================================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[500px] overflow-hidden lg:min-h-[650px]"
          >
            <Image
              src="/images/services/approach.webp"
              alt="SATT event planning and execution"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/10" />

            {/* Image Label */}

            <div className="absolute bottom-6 left-6">
              <span className="border border-white/30 bg-black/20 px-4 py-3 text-[9px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
                Discover · Design · Deliver
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesApproach;