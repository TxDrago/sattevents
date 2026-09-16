"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

import PartnerCard from "@/sections/partners/PartnerCard";

import { partners, partnerCategories } from "@/data/partners";

const PartnersPage = () => {
  const [activeCategory, setActiveCategory] = useState("photographers");

  const filteredPartners = useMemo(() => {
    return partners.filter((partner) => partner.category === activeCategory);
  }, [activeCategory]);

  const activeCategoryData = partnerCategories.find(
    (category) => category.slug === activeCategory,
  );

  return (
    <>
      <Navbar />

      <main className="bg-[var(--satt-bg-primary)]">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative overflow-hidden px-6 pb-20 pt-24 md:px-10 lg:pb-24 lg:pt-32">
          {/* BACKGROUND DECOR */}

          <div
            className="
              pointer-events-none
              absolute
              -right-40
              -top-40
              h-[500px]
              w-[500px]
              rounded-full
              bg-[var(--satt-gold)]/5
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -left-40
              bottom-0
              h-[400px]
              w-[400px]
              rounded-full
              bg-[var(--satt-gold)]/5
              blur-3xl
            "
          />

          <div className="relative mx-auto max-w-[1400px]">
            {/* EYEBROW */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                text-[24px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[var(--satt-gold-dark)]
              "
            >
              Satt Partner Network
            </motion.p>

            {/* TITLE */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.08,
              }}
              className="
                mt-5
                max-w-4xl
                font-heading
                text-5xl
                font-bold
                leading-[0.95]
                text-[var(--satt-text-primary)]
                md:text-6xl
                lg:text-7xl
              "
            >
              People Behind
              <br />
              <span className="text-[var(--satt-gold-dark)]">
                The Possibilities.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.16,
              }}
              className="
                mt-8
                max-w-2xl
                text-sm
                leading-7
                text-[var(--satt-text-secondary)]
                md:text-base
              "
            >
              Every remarkable event is built through collaboration. Our curated
              network brings together talented photographers, artists, caterers,
              stylists, venues and specialists who share our passion for
              creating memorable experiences.
            </motion.p>

            {/* DECORATIVE LINE */}

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 120,
              }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className="
                mt-10
                h-px
                bg-[var(--satt-gold)]
              "
            />
          </div>
        </section>

        {/* =====================================================
            PARTNERS SECTION
        ===================================================== */}

        <section className="px-6 pb-24 md:px-10 lg:pb-32">
          <div className="mx-auto max-w-[1400px]">
            {/* =================================================
                CATEGORY TABS
            ================================================= */}

            <div
              className="
    relative
    -mx-6
    overflow-x-auto
    border-y
    border-[var(--satt-border)]/30
    px-6
    md:-mx-5
    md:px-5

    [scrollbar-width:thin]
    [scrollbar-color:var(--satt-gold)_transparent]

    [&::-webkit-scrollbar]:h-[3px]
    [&::-webkit-scrollbar-track]:bg-transparent
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:bg-[var(--satt-gold)]
    [&::-webkit-scrollbar-thumb:hover]:bg-[var(--satt-gold-dark)]
  "
            >
              <div
                className="
      flex
      min-w-max
      items-center
      gap-1
      py-2
    "
              >
                {partnerCategories.map((category) => {
                  const active = category.slug === activeCategory;

                  return (
                    <button
                      key={category.slug}
                      type="button"
                      onClick={() => setActiveCategory(category.slug)}
                      className={`
            relative
            whitespace-nowrap
            px-5
            py-4
            text-[10px]
            font-bold
            uppercase
            tracking-[0.16em]
            transition-all
            duration-300
            md:px-6
            ${
              active
                ? "text-[var(--satt-gold-dark)]"
                : "text-[var(--satt-text-secondary)] hover:text-[var(--satt-text-primary)]"
            }
          `}
                    >
                      {category.label}

                      <span
                        className={`
              absolute
              bottom-0
              left-1/2
              h-[2px]
              -translate-x-1/2
              bg-[var(--satt-gold)]
              transition-all
              duration-300
              ${active ? "w-full" : "w-0"}
            `}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
            {/* =================================================
                ACTIVE CATEGORY HEADING
            ================================================= */}

            <div className="mb-10 mt-14 flex items-end justify-between gap-6">
              <div>
                <p
                  className="
                    text-[16px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[var(--satt-gold-dark)]
                  "
                >
                  Our Network
                </p>

                <AnimatePresence mode="wait">
                  <motion.h2
                    key={activeCategory}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    className="
                      mt-2
                      font-heading
                      text-3xl
                      font-bold
                      text-[var(--satt-text-primary)]
                      md:text-4xl
                    "
                  >
                    {activeCategoryData?.label}
                  </motion.h2>
                </AnimatePresence>
              </div>

              {/* PARTNER COUNT */}

              <div className="hidden text-right sm:block">
                <p
                  className="
                    text-3xl
                    font-heading
                    text-[var(--satt-gold-dark)]
                  "
                >
                  {String(filteredPartners.length).padStart(2, "0")}
                </p>

                <p
                  className="
                    mt-1
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[var(--satt-text-secondary)]
                  "
                >
                  Partners
                </p>
              </div>
            </div>

            {/* =================================================
                PARTNER GRID
            ================================================= */}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  grid
                  grid-cols-1
                  gap-8
                  md:grid-cols-2
                  lg:gap-10
                "
              >
                {filteredPartners.map((partner, index) => (
                  <PartnerCard
                    key={partner.slug}
                    partner={partner}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PartnersPage;
