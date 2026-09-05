"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import events from "@/data/events";
import HeroPanel from "./HeroPanel";

const HeroPanels = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-[var(--satt-text-primary)]">
      {/* Intro */}
      <div className="relative z-10 px-6 pb-8 pt-14 text-center  lg:left-1/2 lg:top-0 lg:w-full lg:-translate-x-1/2 lg:pt-10">
        <p className="font-signature text-4xl text-[var(--satt-gold-bright)] lg:text-6xl">
          Where moments become memories
        </p>

        <h1 className="font-heading mt-2 text-3xl uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">
          What are we creating together?
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-white/65 sm:text-sm">
          Choose an experience and discover how Satt brings your vision to life.
        </p>
      </div>

      {/* Panels */}
      <div className="flex flex-col pt-4 lg:h-[calc(100vh-7.5rem)] lg:flex-row lg:pt-0">
        {events.map((event, index) => (
          <HeroPanel
            key={event.id}
            event={{
              ...event,
              order: index + 1,
            }}
            isActive={activeIndex === index}
            onHover={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/60 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>Explore</span>

        <span className="h-px w-8 bg-[var(--satt-gold)]" />

        <span>Scroll</span>
      </motion.div>
    </section>
  );
};

export default HeroPanels;