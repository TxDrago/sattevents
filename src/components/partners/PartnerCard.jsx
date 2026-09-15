"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

const PartnerCard = ({ partner, index = 0 }) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      <div
        className="
          relative overflow-hidden
          border border-[var(--satt-border)]/35
          bg-[var(--satt-bg-secondary)]
          shadow-[0_15px_45px_rgba(0,0,0,0.06)]
          transition-all duration-500
          hover:-translate-y-1
          hover:border-[var(--satt-gold)]/60
          hover:shadow-[0_25px_65px_rgba(0,0,0,0.11)]
        "
      >

        {/* =================================================
            IMAGE
        ================================================= */}

        <Link
          href={`/partners/${partner.slug}`}
          className="relative block aspect-[16/9] overflow-hidden"
        >
          <Image
            src={partner.image}
            alt={partner.name}
            fill
            className="
              object-cover
              transition-transform duration-700
              ease-out
              group-hover:scale-105
            "
          />

          {/* IMAGE OVERLAY */}

          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/65
              via-black/5
              to-transparent
              opacity-80
            "
          />

          {/* CATEGORY */}

          <div className="absolute left-5 top-5">
            <span
              className="
                border border-white/30
                bg-black/20
                px-3 py-1.5
                text-[8px] font-bold
                uppercase tracking-[0.2em]
                text-white
                backdrop-blur-md
              "
            >
              {partner.categoryLabel}
            </span>
          </div>

          {/* IMAGE ARROW */}

          <div
            className="
              absolute bottom-5 right-5
              flex h-10 w-10
              items-center justify-center
              border border-white/40
              bg-white/10
              text-white
              opacity-0
              backdrop-blur-md
              transition-all duration-500
              group-hover:opacity-100
            "
          >
            <ArrowUpRight
              size={17}
              strokeWidth={1.3}
            />
          </div>
        </Link>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="relative px-6 pb-6 pt-6">

          {/* GOLD DECORATIVE LINE */}

          <div className="absolute left-6 right-6 top-0 flex -translate-y-1/2 items-center">
            <span className="h-px flex-1 bg-[var(--satt-gold)]/30" />

            <span className="mx-3 h-1.5 w-1.5 rotate-45 bg-[var(--satt-gold)]" />

            <span className="h-px flex-1 bg-[var(--satt-gold)]/30" />
          </div>

          {/* SPECIALTY */}

          <p
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[var(--satt-gold-dark)]
            "
          >
            {partner.specialty}
          </p>

          {/* NAME */}

          <h3
            className="
              mt-2
              font-heading
              text-2xl
              font-bold
              leading-tight
              text-[var(--satt-text-primary)]
              transition-colors duration-300
              group-hover:text-[var(--satt-gold-dark)]
            "
          >
            {partner.name}
          </h3>

          {/* LOCATION */}

          <div
            className="
              mt-2
              flex items-center gap-1.5
              text-[10px]
              uppercase
              tracking-[0.12em]
              text-[var(--satt-text-secondary)]
            "
          >
            <MapPin
              size={11}
              strokeWidth={1.4}
            />

            {partner.location}
          </div>

          {/* DESCRIPTION */}

          <p
            className="
              mt-4
              line-clamp-2
              text-[13px]
              leading-6
              text-[var(--satt-text-secondary)]
            "
          >
            {partner.shortDescription}
          </p>

          {/* =================================================
              VIEW WORK
          ================================================= */}

          <Link
            href={`/partners/${partner.slug}`}
            className="
              group/link
              mt-6
              inline-flex
              items-center gap-3
              text-[10px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[var(--satt-text-primary)]
              transition-colors duration-300
              hover:text-[var(--satt-gold-dark)]
            "
          >
            <span>
              View Our Work
            </span>

            <span
              className="
                flex h-7 w-7
                items-center justify-center
                border border-[var(--satt-gold)]/50
                transition-all duration-300
                group-hover/link:border-[var(--satt-gold)]
                group-hover/link:bg-[var(--satt-gold)]
              "
            >
              <ArrowUpRight
                size={13}
                strokeWidth={1.4}
                className="
                  transition-transform duration-300
                  group-hover/link:translate-x-0.5
                  group-hover/link:-translate-y-0.5
                "
              />
            </span>
          </Link>

        </div>
      </div>
    </motion.article>
  );
};

export default PartnerCard;