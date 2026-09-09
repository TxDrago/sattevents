"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const ServiceGallery = ({ service }) => {
  const { gallery } = service;

  const sliderRef = useRef(null);

  /* =========================================================
     SCROLL GALLERY
     ========================================================= */

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const amount = sliderRef.current.clientWidth * 0.55;

    sliderRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-hidden bg-[var(--satt-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="flex items-end justify-between gap-8">

          {/* Heading */}
          <div>
            <span className="text-[16px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              {gallery.eyebrow}
            </span>

            <h2 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl">
              {gallery.title}
            </h2>
          </div>

          {/* ===================================================
              GALLERY CONTROLS
          =================================================== */}

          <div className="flex shrink-0 items-center gap-3">

            {/* -------------------------------------------------
                PREVIOUS BUTTON
            ------------------------------------------------- */}

            <button
              type="button"
              onClick={() => scroll("prev")}
              aria-label="Previous gallery image"
              className="
                group
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[var(--satt-gold)]
                bg-white
                text-[var(--satt-gold)]
                shadow-[0_4px_18px_rgba(198,161,91,0.12)]
                transition-all
                duration-500
                hover:scale-110
                hover:bg-[var(--satt-gold)]
                hover:text-white
                hover:shadow-[0_8px_25px_rgba(198,161,91,0.25)]
                active:scale-95
              "
            >
              <svg
                viewBox="0 0 48 48"
                fill="none"
                className="
                  h-7
                  w-7
                  transition-transform
                  duration-500
                  group-hover:-translate-x-1
                "
              >
                <path
                  d="M36 24H12"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                <path
                  d="M20 14L10 24L20 34"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* -------------------------------------------------
                NEXT BUTTON
            ------------------------------------------------- */}

            <button
              type="button"
              onClick={() => scroll("next")}
              aria-label="Next gallery image"
              className="
                group
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[var(--satt-gold)]
                bg-white
                text-[var(--satt-gold)]
                shadow-[0_4px_18px_rgba(198,161,91,0.12)]
                transition-all
                duration-500
                hover:scale-110
                hover:bg-[var(--satt-gold)]
                hover:text-white
                hover:shadow-[0_8px_25px_rgba(198,161,91,0.25)]
                active:scale-95
              "
            >
              <svg
                viewBox="0 0 48 48"
                fill="none"
                className="
                  h-7
                  w-7
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                "
              >
                <path
                  d="M12 24H36"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                <path
                  d="M28 14L38 24L28 34"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

          </div>
        </div>

        {/* =====================================================
            GALLERY
        ===================================================== */}

        <motion.div
          ref={sliderRef}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            mt-14
            flex
            snap-x
            snap-mandatory
            gap-5
            overflow-x-auto
            scroll-smooth
            pb-5
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {gallery.images.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="
                relative
                min-w-[82%]
                snap-start
                overflow-hidden
                sm:min-w-[65%]
                lg:min-w-[48%]
                xl:min-w-[42%]
              "
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    hover:scale-105
                  "
                  sizes="
                    (max-width: 640px) 82vw,
                    (max-width: 1024px) 65vw,
                    (max-width: 1280px) 48vw,
                    42vw
                  "
                />
              </div>

              {/* Image Number */}
              <div className="absolute bottom-5 left-5">
                <span
                  className="
                    inline-flex
                    items-center
                    justify-center
                    bg-black/40
                    px-3
                    py-2
                    text-[9px]
                    tracking-[0.2em]
                    text-white
                    backdrop-blur-sm
                  "
                >
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