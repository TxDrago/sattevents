"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { eventServices } from "@/data/services";

const RelatedServices = ({ service }) => {
  const related = eventServices.filter((item) =>
    service.relatedServices?.includes(
      item.href.replace("/services/", "")
    )
  );

  if (!related.length) return null;

  return (
    <section className="bg-[var(--satt-bg-primary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

        {/* Header */}

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-[16px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              Explore More
            </span>

            <h2 className="mt-6 font-heading text-4xl sm:text-5xl">
              Related Experiences
            </h2>
          </div>

          <Link
            href="/services"
            className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--satt-gold-dark)]"
          >
            View All Services

            <ArrowUpRight
              size={14}
              strokeWidth={1.3}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* Cards */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
            >
              <Link
                href={item.href}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                    <span className="text-[9px] tracking-[0.2em] text-[var(--satt-gold)]">
                      {item.number}
                    </span>

                    <h3 className="mt-3 font-heading text-2xl">
                      {item.title}
                    </h3>

                  </div>

                  <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center border border-white/30 bg-black/20 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.3}
                    />
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RelatedServices;