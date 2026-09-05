"use client";

import { motion } from "framer-motion";

const CapabilityGallery = ({ capability }) => {
  const gallery = capability.gallery;

  return (
    <section className="bg-[var(--satt-bg-primary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              {gallery.eyebrow}
            </span>

            <h2 className="mt-6 max-w-2xl font-heading text-4xl leading-tight sm:text-5xl">
              {gallery.title}
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`group relative overflow-hidden ${
                index === 0
                  ? "sm:row-span-2 sm:aspect-auto"
                  : "aspect-[4/3]"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/15" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilityGallery;