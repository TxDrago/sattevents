"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";

const EventStoryVideo = ({ event }) => {
  if (!event.videos?.length) {
    return null;
  }

  return (
    <section className="bg-[var(--satt-bg-secondary)] py-24 md:py-32">

      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

        <div className="mb-14">

          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
            Moving Moments
          </span>

          <h2 className="mt-6 max-w-3xl font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Experience it
            <span className="text-[var(--satt-gold-dark)]">
              {" "}in motion.
            </span>
          </h2>

        </div>


        <div className="grid gap-6 md:grid-cols-2">

          {event.videos.map((video, index) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group"
            >

              <div className="relative aspect-video overflow-hidden bg-black">

                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/40" />

                <button
                  type="button"
                  aria-label={`Play ${video.title}`}
                  className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 text-white transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--satt-gold)] group-hover:bg-[var(--satt-gold)] group-hover:text-black"
                >
                  <Play
                    size={19}
                    fill="currentColor"
                    strokeWidth={1}
                  />
                </button>

              </div>

              <div className="border-b border-[var(--satt-border)]/30 py-5">

                <div className="flex items-center gap-3">

                  <span className="text-[9px] tracking-[0.2em] text-[var(--satt-gold)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-heading text-2xl">
                    {video.title}
                  </h3>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default EventStoryVideo;