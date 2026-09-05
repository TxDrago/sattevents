"use client";

import { useState } from "react";
import { Menu, ChevronDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import TopBar from "./TopBar";
import MobileMenu from "./MobileMenu";
import { eventServices } from "@/data/services";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <TopBar />

      <header className="relative z-50 border-b border-[var(--satt-border)]/30 bg-[var(--satt-bg-primary)]">
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 xl:h-24 xl:px-10">

          {/* =====================================================
              LOGO
          ===================================================== */}

          <Link
            href="/"
            className="group flex flex-col leading-none"
          >
            <span className="font-heading text-2xl tracking-[0.08em] transition-colors group-hover:text-[var(--satt-gold-dark)] xl:text-3xl">
              SATT
            </span>

            <span className="mt-1 text-[8px] uppercase tracking-[0.35em] text-[var(--satt-text-secondary)] xl:text-[9px]">
              Event Planners
            </span>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          <nav className="hidden items-center gap-8 lg:flex xl:gap-10">

            {/* ABOUT */}

            <Link
              href="/about"
              className="relative text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--satt-text-primary)] transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[var(--satt-gold)] after:transition-all after:duration-300 hover:text-[var(--satt-gold-dark)] hover:after:w-full"
            >
              About
            </Link>

            {/* =================================================
                SERVICES DROPDOWN
            ================================================= */}

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                href="/services"
                className="group relative flex items-center gap-1 text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--satt-text-primary)] transition-colors hover:text-[var(--satt-gold-dark)]"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                <span>Services</span>

                <ChevronDown
                  size={14}
                  strokeWidth={1.5}
                  className={`transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />

                <span
                  className={`absolute -bottom-2 left-0 h-px bg-[var(--satt-gold)] transition-all duration-300 ${
                    servicesOpen ? "w-full" : "w-0"
                  }`}
                />
              </Link>

              {/* DROPDOWN */}

              <div
                className={`absolute left-1/2 top-full w-[310px] -translate-x-1/2 pt-5 transition-all duration-300 ${
                  servicesOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }`}
              >
                <div className="relative border border-[var(--satt-border)]/40 bg-[var(--satt-bg-secondary)] p-3 shadow-[0_15px_50px_rgba(0,0,0,0.08)]">

                  {/* GOLD TOP LINE */}

                  <div className="absolute left-5 right-5 top-0 h-px bg-[var(--satt-gold)]" />

                  {/* HEADER */}

                  <div className="border-b border-[var(--satt-border)]/30 px-4 py-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[var(--satt-gold-dark)]">
                      Event Services
                    </p>
                  </div>

                  {/* SERVICES */}

                  <div className="py-2">
                    {eventServices.map((service, index) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setServicesOpen(false)}
                        className="group flex items-center justify-between px-4 py-3 transition-all duration-300 hover:bg-[var(--satt-bg-primary)]"
                      >
                        <div className="flex items-center gap-3">

                          <span className="text-[8px] tracking-[0.15em] text-[var(--satt-gold)]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--satt-text-primary)] transition-colors duration-300 group-hover:text-[var(--satt-gold-dark)]">
                            {service.label}
                          </span>

                        </div>

                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.4}
                          className="text-[var(--satt-gold)] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* OUR BELIEVE */}

            <Link
              href="/beliefs"
              className="relative text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--satt-text-primary)] transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[var(--satt-gold)] after:transition-all after:duration-300 hover:text-[var(--satt-gold-dark)] hover:after:w-full"
            >
              Our Believe
            </Link>

            {/* EXPERIENCES */}

            <Link
              href="/experiences"
              className="relative text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--satt-text-primary)] transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[var(--satt-gold)] after:transition-all after:duration-300 hover:text-[var(--satt-gold-dark)] hover:after:w-full"
            >
              Experiences
            </Link>

            {/* =================================================
                EVENT STORIES
            ================================================= */}

            <Link
              href="/events"
              className="relative text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--satt-text-primary)] transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[var(--satt-gold)] after:transition-all after:duration-300 hover:text-[var(--satt-gold-dark)] hover:after:w-full"
            >
              Event Stories
            </Link>

            {/* GALLERY */}

            <Link
              href="/gallery"
              className="relative text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--satt-text-primary)] transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[var(--satt-gold)] after:transition-all after:duration-300 hover:text-[var(--satt-gold-dark)] hover:after:w-full"
            >
              Gallery
            </Link>

            {/* CONTACT */}

            <Link
              href="/contact"
              className="relative text-[13px] font-bold uppercase tracking-[0.16em] text-[var(--satt-text-primary)] transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[var(--satt-gold)] after:transition-all after:duration-300 hover:text-[var(--satt-gold-dark)] hover:after:w-full"
            >
              Contact
            </Link>

          </nav>

          {/* =====================================================
              CTA
          ===================================================== */}

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="border border-[var(--satt-gold)] bg-[var(--satt-gold)] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--satt-text-primary)] transition-all duration-300 hover:bg-[var(--satt-gold-dark)] hover:text-white"
            >
              Plan Your Event
            </Link>
          </div>

          {/* =====================================================
              MOBILE BUTTON
          ===================================================== */}

          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center border border-[var(--satt-border)] lg:hidden"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>

        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
};

export default Navbar;