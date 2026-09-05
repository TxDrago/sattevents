"use client";

import { motion } from "framer-motion";

const behindScenes = [
  {
    image: "/images/gallery/behind-scenes/01.webp",
    title: "Building The Stage",
  },
  {
    image: "/images/gallery/behind-scenes/02.webp",
    title: "Production Setup",
  },
  {
    image: "/images/gallery/behind-scenes/03.webp",
    title: "The Final Details",
  },
  {
    image: "/images/gallery/behind-scenes/04.webp",
    title: "On Ground",
  },
];

const GalleryBehindScenes = () => {
  return (
    <section className="bg-[var(--satt-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <div className="max-w-md">

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              Behind The Scenes
            </span>

            <h2 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl">
              Before the
              <span className="block text-[var(--satt-gold-dark)]">
                magic begins.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-[var(--satt-text-secondary)]">
              The final event is only one part of the story. Behind every
              seamless experience are people, planning, production and hundreds
              of details coming together.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-3">

            {behindScenes.map((item, index) => (
              <motion.div
                key={item.image}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative aspect-square overflow-hidden"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute bottom-5 left-5">
                  <h3 className="font-heading text-xl text-white">
                    {item.title}
                  </h3>
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default GalleryBehindScenes;