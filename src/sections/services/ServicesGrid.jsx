"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { eventServices } from "@/data/services";

const ServicesGrid = () => {
  return (
    <section
      id="services"
      className="border-b border-[var(--satt-border)]/20 py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
        {/* HEADER */}

        <div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <span className="text-[16px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              What We Create
            </span>
          </div>

          <h2 className="font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Every event has
            <span className="block text-[var(--satt-gold-dark)]">
              its own story.
            </span>
          </h2>
        </div>

        {/* SERVICES */}

        <div className="space-y-4">
          {eventServices.map((service, index) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <Link
                href={service.href}
                className="group grid overflow-hidden border border-[var(--satt-border)]/20 bg-[var(--satt-bg-secondary)] md:grid-cols-[320px_1fr]"
              >
                {/* IMAGE */}

                <div className="relative h-[260px] overflow-hidden md:h-[300px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />

                  <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />
                </div>

                {/* CONTENT */}

                <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
                  <div>
                    {/* <span className="text-[14px] tracking-[0.2em] text-[var(--satt-gold)]">
                      {service.number}
                    </span> */}

                    <h3 className="mt-5 font-heading text-3xl transition-colors duration-300 group-hover:text-[var(--satt-gold-dark)] md:text-4xl lg:text-5xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-m leading-7 text-[var(--satt-text-secondary)]">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-[12px] font-bold uppercase tracking-[0.2em]">
                      Explore service
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center border border-[var(--satt-border)] transition-all duration-300 group-hover:border-[var(--satt-gold)] group-hover:bg-[var(--satt-gold)]">
                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.3}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
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

export default ServicesGrid;