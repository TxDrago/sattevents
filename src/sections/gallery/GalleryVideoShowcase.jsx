"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";

const videos = [
  {
    title: "A Celebration of Culture",
    category: "Festivals & Culturals",
    thumbnail: "/images/gallery/featured/festival.webp",
    video: "/videos/gallery/festival.mp4",
  },
  {
    title: "Ideas Into Experiences",
    category: "Corporate & Brand Events",
    thumbnail: "/images/gallery/featured/corporate.webp",
    video: "/videos/gallery/corporate.mp4",
  },
  {
    title: "Moments That Matter",
    category: "Weddings & Social",
    thumbnail: "/images/gallery/featured/wedding.webp",
    video: "/videos/gallery/wedding.mp4",
  },
  {
    title: "Energy. Sound. Experience.",
    category: "Concerts & Live Entertainment",
    thumbnail: "/images/gallery/featured/concert.webp",
    video: "/videos/gallery/concert.mp4",
  },
];

const GalleryVideoShowcase = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="bg-[var(--satt-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

        <div className="max-w-3xl">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
            Watch The Experience
          </span>

          <h2 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Some moments
            <span className="block text-[var(--satt-gold-dark)]">
              are better experienced.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {videos.map((item, index) => (
            <motion.button
              key={item.video}
              type="button"
              onClick={() => setActiveVideo(item.video)}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group relative aspect-video overflow-hidden text-left"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/45" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
                  <Play
                    size={22}
                    fill="currentColor"
                    strokeWidth={1}
                  />
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--satt-gold)]">
                  {item.category}
                </span>

                <h3 className="mt-2 font-heading text-2xl text-white md:text-3xl">
                  {item.title}
                </h3>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Video Modal */}

      {activeVideo && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-5">
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-white/30 text-white"
            aria-label="Close video"
          >
            <X size={20} />
          </button>

          <video
            src={activeVideo}
            controls
            autoPlay
            className="max-h-[85vh] w-full max-w-6xl"
          />
        </div>
      )}
    </section>
  );
};

export default GalleryVideoShowcase;