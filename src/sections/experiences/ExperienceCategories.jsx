"use client";

import { motion } from "framer-motion";

const categories = [
  {
    number: "01",
    title: "Immersive Experiences",
    text: "Experiences that surround the audience through environment, storytelling, entertainment and sensory design.",
    image: "/images/experiences/categories/immersive.webp",
  },
  {
    number: "02",
    title: "Cultural Experiences",
    text: "Celebrations rooted in heritage, traditions, art, music and community.",
    image: "/images/experiences/categories/cultural.webp",
  },
  {
    number: "03",
    title: "Luxury Experiences",
    text: "Refined events where design, hospitality and personalisation come together.",
    image: "/images/experiences/categories/luxury.webp",
  },
  {
    number: "04",
    title: "Destination Experiences",
    text: "Curated journeys combining travel, hospitality, adventure and celebration.",
    image: "/images/experiences/categories/destination.webp",
  },
  {
    number: "05",
    title: "Live Experiences",
    text: "Concerts, performances and entertainment experiences built around energy and connection.",
    image: "/images/experiences/categories/live.webp",
  },
  {
    number: "06",
    title: "Digital Experiences",
    text: "Virtual and hybrid environments that connect audiences through technology and creativity.",
    image: "/images/experiences/categories/digital.webp",
  },
];

const ExperienceCategories = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

        <div className="max-w-2xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
            Experience Categories
          </span>

          <h2 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl">
            Different occasions.
            <span className="block text-[var(--satt-gold-dark)]">
              One unforgettable feeling.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-px bg-[var(--satt-border)]/30 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className="group bg-[var(--satt-bg-primary)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-7 md:p-8">
                <span className="text-[9px] tracking-[0.2em] text-[var(--satt-gold)]">
                  {item.number}
                </span>

                <h3 className="mt-4 font-heading text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[var(--satt-text-secondary)]">
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceCategories;