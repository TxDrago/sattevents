"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import GalleryFilters from "./GalleryFilters";

const images = [
  {
    image: "/images/gallery/grid/01.webp",
    category: "Festivals",
    title: "Cultural Celebration",
  },
  {
    image: "/images/gallery/grid/02.webp",
    category: "Corporate",
    title: "Corporate Experience",
  },
  {
    image: "/images/gallery/grid/03.webp",
    category: "Weddings",
    title: "Wedding Celebration",
  },
  {
    image: "/images/gallery/grid/04.webp",
    category: "Sports",
    title: "Competitive Experience",
  },
  {
    image: "/images/gallery/grid/05.webp",
    category: "MICE",
    title: "Destination Experience",
  },
  {
    image: "/images/gallery/grid/06.webp",
    category: "Concerts",
    title: "Live Entertainment",
  },
  {
    image: "/images/gallery/grid/07.webp",
    category: "Corporate",
    title: "Brand Experience",
  },
  {
    image: "/images/gallery/grid/08.webp",
    category: "Festivals",
    title: "Festival Experience",
  },
  {
    image: "/images/gallery/grid/09.webp",
    category: "Weddings",
    title: "Social Celebration",
  },
  {
    image: "/images/gallery/grid/10.webp",
    category: "Behind The Scenes",
    title: "Production",
  },
  {
    image: "/images/gallery/grid/11.webp",
    category: "Behind The Scenes",
    title: "On Ground",
  },
  {
    image: "/images/gallery/grid/12.webp",
    category: "Concerts",
    title: "Live Performance",
  },
];

const GalleryGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? images
      : images.filter((item) => item.category === activeFilter);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              Explore
            </span>

            <h2 className="mt-5 font-heading text-4xl sm:text-5xl">
              Our visual archive.
            </h2>
          </div>

          <GalleryFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

        </div>

        <motion.div
          layout
          className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((item) => (
            <motion.div
              layout
              key={item.image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/35" />

              <div className="absolute bottom-5 left-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--satt-gold)]">
                  {item.category}
                </span>

                <h3 className="mt-2 font-heading text-xl text-white">
                  {item.title}
                </h3>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default GalleryGrid;