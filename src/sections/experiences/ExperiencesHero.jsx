"use client";

import { motion } from "framer-motion";

const ExperiencesHero = () => {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/experiences/experiences-hero.webp')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}

      <div className="relative z-10 flex min-h-[85vh] items-end">
        <div className="mx-auto w-full max-w-[1600px] px-6 pb-16 xl:px-10 xl:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--satt-gold)]">
              The SATT Experience
            </span>

            <h1 className="mt-6 font-heading text-5xl leading-[1.05] text-white sm:text-6xl lg:text-8xl">
              Experiences
              <span className="block text-[var(--satt-gold)]">
                beyond events.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/80 md:text-base">
              We create experiences that bring people together, spark
              emotions and leave a lasting impression long after the event
              is over.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesHero;