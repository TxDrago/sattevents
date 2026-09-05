"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

const ServiceGallery = ({ service }) => {
  const { gallery } = service;

  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const amount = sliderRef.current.clientWidth * 0.75;

    sliderRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-hidden bg-[var(--satt-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
        {/* Header */}

        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="text-[16px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              {gallery.eyebrow}
            </span>

            <h2 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl">
              {gallery.title}
            </h2>
          </div>

          {/* Controls */}

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scroll("prev")}
              aria-label="Previous image"
              className="flex h-11 w-11 items-center justify-center border border-[var(--satt-border)]/50 transition-colors hover:border-[var(--satt-gold)] hover:bg-[var(--satt-gold)]"
            >
              <ArrowLeft size={16} strokeWidth={1.3} />
            </button>

            <button
              type="button"
              onClick={() => scroll("next")}
              aria-label="Next image"
              className="flex h-11 w-11 items-center justify-center border border-[var(--satt-border)]/50 transition-colors hover:border-[var(--satt-gold)] hover:bg-[var(--satt-gold)]"
            >
              <ArrowRight size={16} strokeWidth={1.3} />
            </button>
          </div>
        </div>

        {/* Gallery */}

        <motion.div
          ref={sliderRef}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {gallery.images.map((image, index) => (
            <div
              key={image.src}
              className="relative min-w-[82%] snap-start overflow-hidden sm:min-w-[65%] lg:min-w-[48%] xl:min-w-[42%]"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 82vw, (max-width: 1024px) 65vw, 50vw"
                />
              </div>

              <div className="absolute bottom-5 left-5">
                <span className="bg-black/40 px-3 py-2 text-[9px] tracking-[0.2em] text-white backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceGallery;