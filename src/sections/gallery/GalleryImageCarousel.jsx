"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/gallery/carousel/01.webp",
    category: "Festivals & Culturals",
    title: "Celebrations that bring communities together.",
  },
  {
    image: "/images/gallery/carousel/02.webp",
    category: "Corporate & Brand",
    title: "Experiences designed around purpose.",
  },
  {
    image: "/images/gallery/carousel/03.webp",
    category: "Weddings & Social",
    title: "Personal moments, beautifully brought together.",
  },
  {
    image: "/images/gallery/carousel/04.webp",
    category: "Destination Events",
    title: "Experiences shaped by extraordinary places.",
  },
];

const GalleryImageCarousel = () => {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  const previous = () => {
    setActive((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const slide = slides[active];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

        <div className="relative overflow-hidden">

          <div className="relative aspect-[16/9] min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.image}
                src={slide.image}
                alt={slide.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute bottom-8 left-8 max-w-2xl md:bottom-12 md:left-12">

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold)]">
                {slide.category}
              </span>

              <h2 className="mt-3 font-heading text-3xl leading-tight text-white md:text-5xl">
                {slide.title}
              </h2>

            </div>

            {/* Controls */}

            <div className="absolute bottom-8 right-8 flex gap-2 md:bottom-12 md:right-12">
              <button
                onClick={previous}
                className="flex h-12 w-12 items-center justify-center border border-white/40 bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-[var(--satt-gold)] hover:text-black"
                aria-label="Previous image"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={next}
                className="flex h-12 w-12 items-center justify-center border border-white/40 bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-[var(--satt-gold)] hover:text-black"
                aria-label="Next image"
              >
                <ChevronRight size={18} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default GalleryImageCarousel;