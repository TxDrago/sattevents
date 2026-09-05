"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const HeroPanel = ({ event, isActive, onHover }) => {
  return (
    <motion.div
      onMouseEnter={onHover}
      className="relative h-[58vh] min-h-[460px] overflow-hidden border-r border-white/30 last:border-r-0 lg:h-full lg:min-h-0"
      animate={{
        flex: isActive ? 1.7 : 1,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Image */}
      <motion.img
        src={event.image}
        alt={event.title}
        className="absolute inset-0 h-full w-full object-cover"
        animate={{
          scale: isActive ? 1.06 : 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundColor: isActive
            ? "rgba(0,0,0,0.25)"
            : "rgba(0,0,0,0.45)",
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Gold line */}
      <motion.div
        className="absolute left-0 top-0 h-1 bg-[var(--satt-gold)]"
        animate={{
          width: isActive ? "100%" : "0%",
        }}
        transition={{ duration: 0.5 }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 xl:p-10">
        <motion.div
          animate={{
            y: isActive ? 0 : 8,
          }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-3 block text-[10px] uppercase tracking-[0.3em] text-white/70">
            0{event.order}
          </span>

          <h2 className="font-heading text-3xl leading-tight text-white sm:text-4xl xl:text-5xl">
            {event.shortTitle}
          </h2>

          <motion.div
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              height: isActive ? "auto" : 0,
              marginTop: isActive ? 18 : 0,
            }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <p className="max-w-md text-sm leading-6 text-white/80">
              {event.description}
            </p>

            <Link
              href={event.href}
              className="mt-5 inline-flex items-center gap-3 border border-[var(--satt-gold)] bg-[var(--satt-gold)] px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-[var(--satt-text-primary)] transition-colors hover:bg-[var(--satt-gold-dark)] hover:text-white"
            >
              Explore
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroPanel;