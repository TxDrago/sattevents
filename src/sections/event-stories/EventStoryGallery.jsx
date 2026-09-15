"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EventStoryGallery = ({ event }) => {
  const gallery = event?.gallery;

  if (!gallery) {
    return null;
  }

  const images = gallery.images || [];

  if (!images.length) {
    return null;
  }

  return (
    <section className="bg-[var(--satt-bg-primary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
        {/* Header */}

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            {gallery.eyebrow && (
              <span className="text-[24px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
                {gallery.eyebrow}
              </span>
            )}

            {gallery.title && (
              <h2 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
                {gallery.title}
              </h2>
            )}
          </div>

          <span className="text-[9px] uppercase tracking-[0.2em] text-[var(--satt-text-secondary)]">
            {images.length} Moments
          </span>
        </div>

        {/* Gallery */}

        <div className="mt-16 grid auto-rows-[260px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => {
            if (!image?.src) {
              return null;
            }

            const large = index === 0 || index === 3;

            return (
              <motion.div
                key={`${image.src}-${index}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                className={`group relative overflow-hidden ${
                  large ? "lg:row-span-2" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt || event.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

                <div className="absolute bottom-5 left-5">
                  <span className="text-[9px] tracking-[0.2em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventStoryGallery;