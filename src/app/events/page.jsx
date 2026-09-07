import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

import { getAllEventStories } from "@/data/eventStories";

export const metadata = {
  title: "Event Stories | SATT Event Planners",
  description:
    "Explore selected event stories, experiences and celebrations created by SATT Event Planners.",
};

export default function EventsPage() {
  const events = getAllEventStories();

  return (
    <>
      <Navbar />

      <main className="bg-[var(--satt-bg-primary)] text-[var(--satt-text-primary)]">
        {/* =========================================
            HERO
        ========================================= */}

        <section className="relative overflow-hidden py-28 md:py-40">
          <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
            <div className="max-w-4xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
                Event Stories
              </span>

              <h1 className="mt-6 font-heading text-5xl leading-tight sm:text-6xl lg:text-7xl">
                Experiences
                <span className="block text-[var(--satt-gold-dark)]">
                  worth remembering.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-sm leading-7 text-[var(--satt-text-secondary)] md:text-base">
                Explore selected event stories that showcase how ideas,
                creativity, planning and execution come together to create
                meaningful experiences.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================
            EVENT STORIES
        ========================================= */}

        <section className="pb-28 md:pb-40">
          <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
            <div className="grid gap-8 md:grid-cols-2">
              {events.map((event) => (
                <Link
                  key={event.slug}
                  href={`/events/${event.slug}`}
                  className="group"
                >
                  {/* IMAGE */}

                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <Image
                      src={event.heroImage}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/30" />

                    {/* Number */}

                    {/* <span className="absolute left-5 top-5 text-[10px] tracking-[0.2em] text-white">
                      {event.number}
                    </span> */}

                    {/* Category */}

                    <span className="absolute bottom-5 left-5 text-[9px] font-bold uppercase tracking-[0.25em] text-white">
                      {event.category}
                    </span>
                  </div>

                  {/* CONTENT */}

                  <div className="pt-6">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <h2 className="font-heading text-3xl transition-colors duration-300 group-hover:text-[var(--satt-gold-dark)] md:text-4xl">
                          {event.title}
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--satt-text-secondary)]">
                          {event.description}
                        </p>
                      </div>

                      <span className="hidden text-[var(--satt-gold)] md:block">
                        ↗
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}