"use client";

import { motion } from "framer-motion";

const gallery = [
  {
    image: "/images/experiences/gallery/gallery-01.webp",
    alt: "Elegant event experience",
    className: "md:row-span-2",
  },
  {
    image: "/images/experiences/gallery/gallery-02.webp",
    alt: "Live event experience",
    className: "",
  },
  {
    image: "/images/experiences/gallery/gallery-03.webp",
    alt: "Cultural event experience",
    className: "",
  },
  {
    image: "/images/experiences/gallery/gallery-04.webp",
    alt: "Destination experience",
    className: "",
  },
  {
    image: "/images/experiences/gallery/gallery-05.webp",
    alt: "Audience experience",
    className: "",
  },
];

const ExperienceGallery = () => {
  return (
    <section className="bg-[var(--satt-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

        {/* Header */}

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div className="max-w-2xl">

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              Experience Gallery
            </span>

            <h2 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
              A glimpse into
              <span className="block text-[var(--satt-gold-dark)]">
                the SATT experience.
              </span>
            </h2>

          </div>

          <p className="max-w-md text-sm leading-7 text-[var(--satt-text-secondary)]">
            Every event has its own atmosphere, personality and story. These
            moments capture just a glimpse of what we create.
          </p>

        </div>

        {/* Gallery */}

        <div className="mt-16 grid auto-rows-[220px] gap-3 sm:grid-cols-2 md:auto-rows-[260px] md:grid-cols-3">

          {gallery.map((item, index) => (
            <motion.div
              key={item.image}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
              }}
              className={`group relative overflow-hidden ${item.className}`}
            >

              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/15" />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ExperienceGallery;