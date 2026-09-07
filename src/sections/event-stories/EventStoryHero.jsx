"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const EventStoryHero = ({ event }) => {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-black text-white">
      {/* Background Image */}

      <Image
        src={event.coverImage}
        alt={event.title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

      {/* Content */}

      <div className="relative z-10 flex min-h-[85vh] items-end">
        <div className="mx-auto w-full max-w-[1600px] px-6 pb-16 xl:px-10 xl:pb-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

            <div className="max-w-5xl">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-4">
                  {/* <span className="text-[10px] tracking-[0.25em] text-[var(--satt-gold)]">
                    {event.number}
                  </span> */}

                  <span className="h-px w-10 bg-[var(--satt-gold)]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
                    {event.category}
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-7 max-w-5xl font-heading text-5xl leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl"
              >
                {event.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-7 max-w-2xl text-sm leading-7 text-white/75 md:text-base"
              >
                {event.description}
              </motion.p>

            </div>

            {/* Explore */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="hidden lg:block"
            >
              <a
                href="#event-overview"
                className="group flex h-24 w-24 flex-col items-center justify-center rounded-full border border-white/30 text-[9px] uppercase tracking-[0.18em] transition-all duration-500 hover:border-[var(--satt-gold)] hover:bg-[var(--satt-gold)] hover:text-black"
              >
                <span>Explore</span>

                <ArrowDown
                  size={15}
                  className="mt-2 transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom Meta */}

      <div className="absolute bottom-6 right-6 z-20 hidden md:block xl:right-10">
        <Link
          href="/events"
          className="group flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
        >
          All Event Stories

          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </section>
  );
};

export default EventStoryHero;