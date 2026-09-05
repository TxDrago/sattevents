"use client";

import { motion } from "framer-motion";

const GalleryHero = () => {
  return (
    <section className="relative min-h-[75vh] overflow-hidden">
      <img
        src="/images/gallery/hero.webp"
        alt="SATT Event Planners gallery"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-[1600px] items-end px-6 py-20 xl:px-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--satt-gold)]">
            The Gallery
          </span>

          <h1 className="mt-6 font-heading text-5xl leading-[1.05] text-white sm:text-6xl lg:text-8xl">
            Moments.
            <span className="block text-[var(--satt-gold)]">
              Memories.
            </span>
            Experiences.
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 md:text-base">
            A collection of moments, celebrations and experiences created,
            produced and brought to life by SATT.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryHero;