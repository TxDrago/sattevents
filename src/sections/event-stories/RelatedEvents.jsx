"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { eventStories } from "@/data/eventStories";

const RelatedEvents = ({ event }) => {
  const related = eventStories.filter((item) =>
    event.relatedEvents?.includes(item.slug)
  );

  if (!related.length) {
    return null;
  }

  return (
    <section className="bg-[var(--satt-bg-primary)] py-24 md:py-32">

      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

        <div className="flex items-end justify-between border-b border-[var(--satt-border)]/30 pb-6">

          <div>

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              Continue Exploring
            </span>

            <h2 className="mt-5 font-heading text-4xl sm:text-5xl">
              Related Events
            </h2>

          </div>

        </div>


        <div className="mt-12 grid gap-8 md:grid-cols-2">

          {related.map((item, index) => (

            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >

              <Link
                href={`/events/${item.slug}`}
                className="group block"
              >

                <div className="relative aspect-[16/9] overflow-hidden">

                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/30" />

                  <div className="absolute left-5 top-5">
                    {/* <span className="text-[9px] tracking-[0.2em] text-white">
                      {item.number}
                    </span> */}
                  </div>

                </div>


                <div className="flex items-start justify-between border-b border-[var(--satt-border)]/30 py-6">

                  <div>

                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--satt-gold-dark)]">
                      {item.category}
                    </span>

                    <h3 className="mt-3 font-heading text-2xl transition-colors duration-300 group-hover:text-[var(--satt-gold-dark)] sm:text-3xl">
                      {item.title}
                    </h3>

                  </div>

                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.3}
                    className="mt-1 text-[var(--satt-gold)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default RelatedEvents;