"use client";

import { motion } from "framer-motion";

const journey = [
  {
    number: "01",
    title: "Before",
    subtitle: "Anticipation",
    text: "The experience begins long before guests arrive. Invitations, communication, destination planning, hospitality and every first impression are carefully considered.",
    image: "/images/experiences/journey/before.webp",
  },
  {
    number: "02",
    title: "During",
    subtitle: "The Experience",
    text: "From arrival to the final moment, we orchestrate atmosphere, entertainment, hospitality, production and interaction to create an experience that feels effortless.",
    image: "/images/experiences/journey/during.webp",
  },
  {
    number: "03",
    title: "After",
    subtitle: "The Memory",
    text: "The event may end, but the experience continues through photographs, films, conversations and memories that stay with people long after they leave.",
    image: "/images/experiences/journey/after.webp",
  },
];

const ExperienceJourney = () => {
  return (
    <section className="bg-[var(--satt-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

        {/* Header */}

        <div className="max-w-3xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
            The Experience Journey
          </span>

          <h2 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
            From the first
            <span className="text-[var(--satt-gold-dark)]">
              {" "}impression
            </span>
            <br />
            to the lasting memory.
          </h2>
        </div>

        {/* Journey */}

        <div className="mt-16 grid gap-px bg-[var(--satt-border)]/30 md:grid-cols-3">

          {journey.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group bg-[var(--satt-bg-primary)]"
            >

              {/* Image */}

              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center bg-[var(--satt-gold)] text-[10px] font-bold">
                  {item.number}
                </div> */}
              </div>

              {/* Content */}

              <div className="p-7 md:p-9">

                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--satt-gold-dark)]">
                  {item.subtitle}
                </span>

                <h3 className="mt-4 font-heading text-3xl">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[var(--satt-text-secondary)]">
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

export default ExperienceJourney;