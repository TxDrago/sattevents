"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { supportingCapabilities } from "@/data/services";

const RelatedCapabilities = ({ capability }) => {
  const related = capability.relatedCapabilities
    .map((slug) =>
      supportingCapabilities.find((item) =>
        item.href.endsWith(slug)
      )
    )
    .filter(Boolean);

  return (
    <section className="bg-[var(--satt-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
            Explore More
          </span>

          <h2 className="mt-6 font-heading text-4xl sm:text-5xl">
            Related Capabilities
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between border-b border-[var(--satt-border)]/30 py-5">
                <div>
                  {/* <span className="text-[9px] tracking-[0.2em] text-[var(--satt-gold)]">
                    {item.number}
                  </span> */}

                  <h3 className="mt-2 font-heading text-2xl">
                    {item.title}
                  </h3>
                </div>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.3}
                  className="text-[var(--satt-gold-dark)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedCapabilities;