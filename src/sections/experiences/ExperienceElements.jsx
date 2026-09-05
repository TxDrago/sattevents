"use client";

import { motion } from "framer-motion";

const elements = [
  {
    number: "01",
    title: "Atmosphere",
    text: "Every space has a feeling. We carefully shape lighting, styling, sound, colour and spatial details to create the right atmosphere.",
  },
  {
    number: "02",
    title: "Storytelling",
    text: "A memorable experience has a story. We create environments and moments that communicate an idea and take guests on a journey.",
  },
  {
    number: "03",
    title: "Entertainment",
    text: "Artists, performers, music and interactive experiences are curated to complement the audience and character of the event.",
  },
  {
    number: "04",
    title: "Hospitality",
    text: "From arrival and welcome to comfort and service, we make sure guests feel looked after throughout the experience.",
  },
  {
    number: "05",
    title: "Production",
    text: "Technology, staging, sound, lighting, screens and technical production work together quietly behind the experience.",
  },
  {
    number: "06",
    title: "Human Connection",
    text: "Ultimately, the strongest experiences bring people closer together through shared moments and meaningful interaction.",
  },
];

const ExperienceElements = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">

          {/* Image / Intro */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >

            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/images/experiences/experience-elements.webp"
                alt="SATT event experience"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold)]">
                  The Details Matter
                </span>

                <p className="mt-3 max-w-sm font-heading text-2xl leading-tight text-white">
                  Great experiences are built through thousands of considered
                  details.
                </p>
              </div>

            </div>

          </motion.div>

          {/* Elements */}

          <div>

            <div className="mb-12 max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
                The Elements
              </span>

              <h2 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl">
                Everything comes together
                <span className="block text-[var(--satt-gold-dark)]">
                  to create the feeling.
                </span>
              </h2>
            </div>

            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">

              {elements.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="border-t border-[var(--satt-border)]/40 pt-5"
                >

                  <span className="text-[9px] tracking-[0.2em] text-[var(--satt-gold)]">
                    {item.number}
                  </span>

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

export default ExperienceElements;