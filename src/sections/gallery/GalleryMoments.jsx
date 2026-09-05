"use client";

import { motion } from "framer-motion";

const moments = [
  {
    title: "The Arrival",
    text: "First impressions, welcomes and the beginning of the experience.",
    image: "/images/gallery/moments/arrival.webp",
  },
  {
    title: "The Atmosphere",
    text: "Lighting, styling, sound and spaces that establish the mood.",
    image: "/images/gallery/moments/atmosphere.webp",
  },
  {
    title: "The Celebration",
    text: "The moments when the event truly comes alive.",
    image: "/images/gallery/moments/celebration.webp",
  },
  {
    title: "The Connection",
    text: "People coming together and creating shared memories.",
    image: "/images/gallery/moments/connection.webp",
  },
];

const GalleryMoments = () => {
  return (
    <section className="bg-[var(--satt-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

        <div className="text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
            The Moments
          </span>

          <h2 className="mx-auto mt-6 max-w-3xl font-heading text-4xl leading-tight sm:text-5xl">
            Every event has
            <span className="block text-[var(--satt-gold-dark)]">
              moments worth remembering.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {moments.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group"
            >

              <div className="relative aspect-[3/4] overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">

                  <h3 className="font-heading text-2xl text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/70">
                    {item.text}
                  </p>

                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default GalleryMoments;