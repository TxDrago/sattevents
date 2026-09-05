"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
} from "lucide-react";

import testimonials from "@/data/testimonials";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeTestimonial = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex(
      (current) => (current + 1) % testimonials.length
    );
  };

  const previousTestimonial = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + testimonials.length) %
        testimonials.length
    );
  };

  return (
    <section className="relative overflow-hidden bg-[var(--satt-bg-secondary)] py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">

        {/* =========================
            HEADER
        ========================= */}

        <div className="flex flex-col gap-6">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-12 bg-[var(--satt-gold)]" />

            <span className="text-[24px] uppercase tracking-[0.3em] text-[var(--satt-text-secondary)]">
              Testimonials
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-signature text-4xl text-[var(--satt-gold-dark)] md:text-5xl">
              words from our clients
            </p>

            <h2 className="font-heading mt-3 max-w-3xl text-4xl leading-tight text-[var(--satt-text-primary)] md:text-5xl lg:text-6xl">
              Memories that speak
              <span className="text-[var(--satt-gold-dark)]">
                {" "}for themselves.
              </span>
            </h2>
          </motion.div>

        </div>

        {/* =========================
            CAROUSEL
        ========================= */}

        <div className="mt-14 border-y border-[var(--satt-border)]/40 md:mt-20">

          <AnimatePresence mode="wait">

            <motion.div
              key={activeTestimonial.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid min-h-[420px] items-center gap-10 py-10 md:py-14 lg:grid-cols-[320px_1fr] lg:gap-16 lg:py-16"
            >

              {/* =========================
                  EVENT IMAGE
              ========================= */}

              <div className="relative mx-auto w-full max-w-[320px]">

                <div className="relative aspect-[4/5] overflow-hidden">

                  <motion.img
                    src={activeTestimonial.image}
                    alt={`${activeTestimonial.event} - ${activeTestimonial.name}`}
                    className="h-full w-full object-cover"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.8,
                    }}
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Event Type */}
                  <div className="absolute bottom-5 left-5">
                    <span className="border border-white/60 bg-black/10 px-3 py-2 text-[8px] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                      {activeTestimonial.event}
                    </span>
                  </div>

                </div>

                {/* Gold Frame */}
                <div className="pointer-events-none absolute -bottom-3 -right-3 -z-0 h-full w-full border border-[var(--satt-gold)]/50" />

              </div>

              {/* =========================
                  TESTIMONIAL CONTENT
              ========================= */}

              <div className="flex flex-col justify-center">

                <Quote
                  size={42}
                  strokeWidth={1}
                  className="mb-8 text-[var(--satt-gold)]"
                />

                <blockquote className="font-heading max-w-4xl text-2xl leading-[1.5] text-[var(--satt-text-primary)] md:text-3xl lg:text-4xl xl:text-5xl">
                  “{activeTestimonial.quote}”
                </blockquote>

                {/* Client */}
                <div className="mt-10">

                  <h3 className="font-heading text-xl text-[var(--satt-text-primary)] md:text-2xl">
                    {activeTestimonial.name}
                  </h3>

                  <div className="mt-3 flex flex-wrap items-center gap-3 text-[9px] uppercase tracking-[0.18em] text-[var(--satt-text-secondary)]">

                    <span>
                      {activeTestimonial.role}
                    </span>

                    <span className="h-1 w-1 rounded-full bg-[var(--satt-gold)]" />

                    <span>
                      {activeTestimonial.location}
                    </span>

                  </div>

                </div>

              </div>

            </motion.div>

          </AnimatePresence>

          {/* =========================
              CONTROLS
          ========================= */}

          <div className="flex flex-col gap-6 border-t border-[var(--satt-border)]/40 py-6 md:flex-row md:items-center md:justify-between">

            {/* Counter */}
            <div className="flex items-center gap-3">

              <span className="font-heading text-xl text-[var(--satt-text-primary)]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <span className="text-[10px] text-[var(--satt-text-secondary)]">
                / {String(testimonials.length).padStart(2, "0")}
              </span>

            </div>

            {/* Progress */}
            <div className="order-3 h-px flex-1 bg-[var(--satt-border)]/30 md:order-none md:mx-10">

              <motion.div
                className="h-px bg-[var(--satt-gold)]"
                animate={{
                  width: `${
                    ((activeIndex + 1) /
                      testimonials.length) *
                    100
                  }%`,
                }}
                transition={{
                  duration: 0.4,
                }}
              />

            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">

              <button
                type="button"
                onClick={previousTestimonial}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center border border-[var(--satt-border)] text-[var(--satt-text-primary)] transition-all duration-300 hover:bg-[var(--satt-gold)]"
              >
                <ArrowLeft
                  size={17}
                  strokeWidth={1.5}
                />
              </button>

              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center border border-[var(--satt-border)] text-[var(--satt-text-primary)] transition-all duration-300 hover:bg-[var(--satt-gold)]"
              >
                <ArrowRight
                  size={17}
                  strokeWidth={1.5}
                />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;