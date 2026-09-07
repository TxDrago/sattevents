"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Wedding Events",
    subtitle: "Celebrations with soul",
    description:
      "From intimate ceremonies to grand celebrations, we create weddings that reflect the people, emotions and stories behind them.",
    image: "/images/about/capability-wedding.jpg",
  },
  {
    number: "02",
    title: "Corporate Events",
    subtitle: "Purpose meets experience",
    description:
      "Conferences, launches, annual meets and corporate celebrations designed to engage people and leave a lasting impression.",
    image: "/images/about/capability-corporate.jpg",
  },
  {
    number: "03",
    title: "Public Events",
    subtitle: "Experiences for everyone",
    description:
      "Large-scale public experiences where planning, crowd management, entertainment and atmosphere come together seamlessly.",
    image: "/images/about/capability-public.jpg",
  },
  {
    number: "04",
    title: "Sports Events",
    subtitle: "Energy in motion",
    description:
      "From competitive events to sporting experiences, we bring together production, coordination and excitement.",
    image: "/images/about/capability-sports.jpg",
  },
  {
    number: "05",
    title: "Adventure Events",
    subtitle: "Beyond the ordinary",
    description:
      "Experiences designed for people who want something different — exciting environments, activities and unforgettable moments.",
    image: "/images/about/capability-adventure.jpg",
  },
  {
    number: "06",
    title: "Event Production",
    subtitle: "Where ideas come alive",
    description:
      "From décor and lighting to staging, entertainment and on-ground execution, we bring every detail together.",
    image: "/images/about/capability-production.jpg",
  },
];

const ExperienceCapabilities = () => {
  return (
    <section className="overflow-hidden bg-[var(--satt-bg-primary)]">
      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-36">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[var(--satt-gold)] md:w-16" />

              <span className="text-[24px] font-medium uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
                Experience & Capabilities
              </span>
            </div>

            <p className="font-signature mt-7 text-4xl text-[var(--satt-gold-dark)] md:text-5xl">
              We make it happen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
          >
            <h2 className="font-heading max-w-5xl text-4xl leading-[1.1] text-[var(--satt-text-primary)] sm:text-5xl md:text-6xl">
              From the first idea
              <br />
              <span className="text-[var(--satt-gold)]">
                to the final applause.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[var(--satt-text-secondary)] md:text-base md:leading-8">
              We bring creative thinking, thoughtful planning and hands-on
              execution together to create experiences across different
              worlds of events.
            </p>
          </motion.div>

        </div>

        {/* =========================================
            CAPABILITY GRID
        ========================================= */}

        <div className="mt-14 grid gap-4 md:grid-cols-2 md:gap-5 lg:mt-20">

          {capabilities.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden"
            >

              {/* =========================================
                  IMAGE
              ========================================= */}

              <div className="relative aspect-[4/3] overflow-hidden md:aspect-[5/4]">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Gold Frame */}

                <div className="pointer-events-none absolute inset-3 border border-[var(--satt-gold)]/40 transition-all duration-500 group-hover:inset-5 group-hover:border-[var(--satt-gold)]/80" />

                {/* Number */}

                {/* <span className="absolute left-6 top-6 text-[10px] font-medium tracking-[0.25em] text-[var(--satt-gold-bright)]">
                  {item.number}
                </span> */}

                {/* Arrow */}

                <div className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:border-[var(--satt-gold)] group-hover:bg-[var(--satt-gold)]">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.2}
                    className="text-white transition-colors duration-300 group-hover:text-[var(--satt-text-primary)]"
                  />
                </div>

                {/* Content */}

                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">

                  <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-[var(--satt-gold-bright)]">
                    {item.subtitle}
                  </p>

                  <h3 className="font-heading mt-2 text-3xl text-white md:text-4xl">
                    {item.title}
                  </h3>

                  <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-4 group-hover:max-h-32 group-hover:opacity-100">
                    <p className="max-w-xl text-sm leading-6 text-white/75">
                      {item.description}
                    </p>
                  </div>

                </div>

              </div>

            </motion.article>
          ))}

        </div>

        {/* =========================================
            BOTTOM STATEMENT
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 border-t border-[var(--satt-border)]/30 pt-10 md:mt-20 md:pt-14"
        >
          <div className="grid gap-5 md:grid-cols-[0.5fr_1.5fr]">

            <span className="text-[16px] font-medium uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              Our Capability
            </span>

            <p className="font-heading max-w-5xl text-2xl leading-tight text-[var(--satt-text-primary)] md:text-4xl lg:text-5xl">
              Whatever the occasion,
              <span className="text-[var(--satt-gold)]">
                {" "}
                the goal remains the same —
              </span>{" "}
              create something worth remembering.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExperienceCapabilities;