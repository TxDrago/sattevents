"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Concept & Strategy",
    text: "We begin with the idea, purpose and audience to build a clear creative direction for your event.",
  },
  {
    number: "02",
    title: "Planning & Production",
    text: "From timelines and vendors to production requirements, every moving part is carefully coordinated.",
  },
  {
    number: "03",
    title: "Design & Décor",
    text: "Spaces are transformed through thoughtful styling, visual identity, lighting and atmosphere.",
  },
  {
    number: "04",
    title: "Entertainment",
    text: "We curate performances, artists and experiences that complement the character of your event.",
  },
  {
    number: "05",
    title: "Venue & Logistics",
    text: "We manage venues, hospitality, transportation, permissions and the details behind the scenes.",
  },
  {
    number: "06",
    title: "On-ground Execution",
    text: "Our team stays involved throughout the event to ensure everything comes together exactly as planned.",
  },
];

const ServiceCapabilities = () => {
  return (
    <section className="bg-[var(--satt-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* =========================================
              LEFT — IMAGE
          ========================================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[500px] overflow-hidden lg:min-h-[680px]"
          >
            <Image
              src="/images/services/capabilities.webp"
              alt="SATT event planning and production"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />

            {/* Image overlay */}

            <div className="absolute inset-0 bg-black/10" />

            {/* Image label */}

            <div className="absolute bottom-6 left-6 border border-white/30 bg-black/20 px-4 py-3 backdrop-blur-sm">
              <span className="text-[16px] font-bold uppercase tracking-[0.25em] text-white">
                SATT Event Experiences
              </span>
            </div>
          </motion.div>

          {/* =========================================
              RIGHT — CONTENT
          ========================================= */}

          <div className="flex flex-col justify-center">

            {/* Section heading */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[16px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
                Beyond Planning
              </span>

              <h2 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
                From idea
                <span className="block text-[var(--satt-gold-dark)]">
                  to execution.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-m leading-7 text-[var(--satt-text-secondary)]">
                Great events don't happen by chance. They are built through
                thoughtful planning, creative thinking and attention to every
                detail.
              </p>
            </motion.div>

            {/* Capabilities */}

            <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {capabilities.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="border-t border-[var(--satt-border)]/30 pt-5"
                >
                  {/* <span className="text-[9px] tracking-[0.2em] text-[var(--satt-gold)]">
                    {item.number}
                  </span> */}

                  <h3 className="mt-4 font-heading text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--satt-text-secondary)]">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCapabilities;