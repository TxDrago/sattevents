"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const journey = [
  {
    number: "01",
    year: "THE BEGINNING",
    title: "Where It All Began",
    description:
      "Every journey begins with an idea. This is where the story of Satt Event Planners begins — with a vision to create experiences that people remember.",
  },
  {
    number: "02",
    year: "THE FIRST STEP",
    title: "Turning Ideas Into Experiences",
    description:
      "From the first concept to the first celebration, every experience helped shape the way Satt approaches planning, creativity and execution.",
  },
  {
    number: "03",
    year: "THE JOURNEY",
    title: "Growing Through Every Experience",
    description:
      "Every event brought a new challenge, a new idea and a new opportunity to create something extraordinary.",
  },
  {
    number: "04",
    year: "TODAY",
    title: "Creating What Comes Next",
    description:
      "Today, Satt continues to bring together creativity, planning and execution to create meaningful experiences across celebrations, corporate events and more.",
  },
];

const StoryJourney = () => {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[var(--satt-bg-primary)]"
    >
      {/* =========================================
          INTRO
      ========================================= */}

      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-36">

        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.75fr]">

          {/* Left Heading */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[var(--satt-gold)] md:w-16" />

              <span className="text-[24px] font-medium uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
                Our Story
              </span>
            </div>

            <h2 className="font-heading mt-7 max-w-4xl text-4xl leading-[1.1] text-[var(--satt-text-primary)] sm:text-5xl md:text-6xl lg:text-7xl">
              When and where
              <br />

              <span className="text-[var(--satt-gold)]">
                it all began.
              </span>
            </h2>

            <p className="font-signature mt-6 text-4xl text-[var(--satt-gold-dark)] md:text-5xl">
              Every journey has a beginning.
            </p>
          </motion.div>

          {/* Right Intro */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            <p className="max-w-xl text-sm leading-7 text-[var(--satt-text-secondary)] md:text-base md:leading-8">
              Satt was born from a simple idea — that an event should be more
              than a gathering. It should have a feeling, a personality and a
              story of its own.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--satt-text-secondary)] md:text-base md:leading-8">
              Our journey is shaped by the experiences we create, the people
              we work with and the moments that stay with us long after the
              celebration ends.
            </p>
          </motion.div>

        </div>

        {/* =========================================
            FEATURE IMAGE
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            delay: 0.1,
          }}
          className="relative mt-16 md:mt-20 lg:mt-24"
        >

          <div className="relative h-[420px] overflow-hidden md:h-[560px] lg:h-[680px]">

            <img
              src="/images/about/story-journey.png"
              alt="Satt Event Planners creating memorable experiences"
              className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-[1.03]"
            />

            {/* Image Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

            {/* Gold Frame */}

            <div className="pointer-events-none absolute inset-4 border border-[var(--satt-gold)]/60 md:inset-6" />

            {/* Image Caption */}

            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between gap-6 md:bottom-12 md:left-12 md:right-12">

              <div>
                <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-[var(--satt-gold-bright)]">
                  The Satt Journey
                </p>

                <p className="font-heading mt-3 max-w-xl text-2xl leading-tight text-white md:text-4xl">
                  From an idea
                  <br />
                  to an experience.
                </p>
              </div>

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--satt-gold)]/70 md:flex">
                <ArrowDown
                  size={15}
                  strokeWidth={1.2}
                  className="text-[var(--satt-gold-bright)]"
                />
              </div>

            </div>
          </div>

        </motion.div>

        {/* =========================================
            JOURNEY TIMELINE
        ========================================= */}

        <div className="mt-20 md:mt-28 lg:mt-36">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              Our Journey
            </p>

            <h3 className="font-heading mt-5 text-3xl text-[var(--satt-text-primary)] md:text-5xl">
              A story still being written.
            </h3>
          </motion.div>

          {/* Timeline */}

          <div className="relative mt-14 md:mt-20">

            {/* Desktop Timeline Line */}

            <div className="absolute left-0 top-0 hidden h-full w-px bg-[var(--satt-gold)]/30 md:block" />

            <div className="space-y-12 md:space-y-0">

              {journey.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className="relative md:grid md:grid-cols-[120px_1fr] md:border-b md:border-[var(--satt-border)]/20 md:py-12 first:md:pt-0 last:md:border-b-0"
                >

                  {/* Number */}

                  <div className="mb-5 md:mb-0">

                    <div className="flex items-center gap-4 md:block">

                      <span className="text-[14px] font-medium tracking-[0.2em] text-[var(--satt-gold-dark)]">
                        {item.number}
                      </span>

                      <span className="h-px w-8 bg-[var(--satt-gold)]/50 md:hidden" />

                    </div>

                    <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--satt-text-secondary)]">
                      {item.year}
                    </p>

                  </div>

                  {/* Content */}

                  <div className="md:pl-10">

                    <div className="flex items-start justify-between gap-6">

                      <div>

                        <h4 className="font-heading text-2xl text-[var(--satt-text-primary)] md:text-4xl">
                          {item.title}
                        </h4>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--satt-text-secondary)] md:text-base md:leading-8">
                          {item.description}
                        </p>

                      </div>

                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.2}
                        className="mt-2 hidden shrink-0 text-[var(--satt-gold)] md:block"
                      />

                    </div>

                  </div>

                </motion.div>
              ))}

            </div>
          </div>
        </div>

        {/* =========================================
            CLOSING STATEMENT
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-20 border-t border-[var(--satt-border)]/30 pt-10 md:mt-28 md:pt-14"
        >
          <div className="grid gap-6 md:grid-cols-[0.35fr_1fr] md:gap-10">

            <p className="text-[16px] font-medium uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              The Beginning
            </p>

            <p className="font-heading max-w-4xl text-2xl leading-tight text-[var(--satt-text-primary)] md:text-4xl lg:text-5xl">
              And while the journey has already taken us far,
              <span className="text-[var(--satt-gold)]">
                {" "}
                there is still so much more to create.
              </span>
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default StoryJourney;