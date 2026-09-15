
"use client";

import { useState } from "react";
import { Menu, ChevronDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import TopBar from "./TopBar";
import MobileMenu from "./MobileMenu";
import { eventServices } from "@/data/services";

/* =========================================================
   REUSABLE NAV ITEM
   ========================================================= */

const NavItem = ({ href, label, active }) => {
  return (
    <Link
      href={href}
      className={`group relative whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.12em] transition-all duration-300 xl:text-[13px] xl:tracking-[0.16em] ${
        active
          ? "text-[var(--satt-gold-dark)]"
          : "text-[var(--satt-text-primary)] hover:text-[var(--satt-gold-dark)]"
      }`}
    >
      {/* LABEL */}

      <span className="relative z-10">
        {label}
      </span>

      {/* =====================================================
          GOLD UNDERLINE
      ===================================================== */}

      <span
        className={`absolute -bottom-2 left-0 h-px bg-[var(--satt-gold)] transition-all duration-500 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />

      {/* =====================================================
          DIAMOND ORNAMENT
      ===================================================== */}

      <span
        className={`absolute -bottom-[11px] left-1/2 h-1 w-1 -translate-x-1/2 rotate-45 bg-[var(--satt-gold)] transition-all duration-300 ${
          active
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
        }`}
      />

      {/* =====================================================
          SOFT GOLD GLOW
      ===================================================== */}

      <span
        className={`pointer-events-none absolute -bottom-2 left-1/2 h-2 -translate-x-1/2 bg-[var(--satt-gold)]/20 blur-md transition-all duration-500 ${
          active ? "w-[85%] opacity-100" : "w-0 opacity-0"
        }`}
      />
    </Link>
  );
};

/* =========================================================
   NAVBAR
   ========================================================= */

const Navbar = () => {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  /* =======================================================
     ACTIVE ROUTE CHECK
     ======================================================= */

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  };

  /* =======================================================
     MAIN NAV ACTIVE STATES
     ======================================================= */

  const aboutActive = isActive("/about");
  const servicesActive = isActive("/services");
  const beliefsActive = isActive("/beliefs");
  const experiencesActive = isActive("/experiences");
  const eventsActive = isActive("/events");
  const partnersActive = isActive("/partners");
  const galleryActive = isActive("/gallery");
  const contactActive = isActive("/contact");

  return (
    <>
      <TopBar />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="relative z-50 border-b border-[var(--satt-border)]/30 bg-[var(--satt-bg-primary)]">
        <div
          className="
            mx-auto flex h-20 max-w-[1600px] items-center justify-between
            px-5
            min-[1100px]:px-6
            xl:h-24 xl:px-10
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            className="group flex shrink-0 flex-col leading-none"
          >
            <span
              className="
                font-heading text-2xl tracking-[0.08em]
                transition-colors duration-300
                group-hover:text-[var(--satt-gold-dark)]
                xl:text-3xl
              "
            >
              SATT
            </span>

            <span
              className="
                mt-1 text-[8px] uppercase tracking-[0.35em]
                text-[var(--satt-text-secondary)]
                xl:text-[9px]
              "
            >
              Event Planners
            </span>
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION

              >= 1100px
              Below 1100px → mobile menu
          ================================================= */}

          <nav className="hidden min-[1100px]:flex items-center gap-5 xl:gap-8 2xl:gap-10">

            {/* =================================================
                ABOUT
            ================================================= */}

            <NavItem
              href="/about"
              label="About"
              active={aboutActive}
            />

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
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                className={`group relative flex items-center gap-1 whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.12em] transition-all duration-300 xl:text-[13px] xl:tracking-[0.16em] ${
                  servicesActive
                    ? "text-[var(--satt-gold-dark)]"
                    : "text-[var(--satt-text-primary)] hover:text-[var(--satt-gold-dark)]"
                }`}
              >
                {/* LABEL */}

                <span className="relative z-10">
                  Services
                </span>

                {/* CHEVRON */}

                <ChevronDown
                  size={13}
                  strokeWidth={1.5}
                  className={`relative z-10 transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />

                {/* GOLD UNDERLINE */}

                <span
                  className={`absolute -bottom-2 left-0 h-px bg-[var(--satt-gold)] transition-all duration-500 ${
                    servicesActive || servicesOpen
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />

                {/* DIAMOND */}

                <span
                  className={`absolute -bottom-[11px] left-1/2 h-1 w-1 -translate-x-1/2 rotate-45 bg-[var(--satt-gold)] transition-all duration-300 ${
                    servicesActive
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                  }`}
                />

                {/* GOLD GLOW */}

                <span
                  className={`pointer-events-none absolute -bottom-2 left-1/2 h-2 -translate-x-1/2 bg-[var(--satt-gold)]/20 blur-md transition-all duration-500 ${
                    servicesActive
                      ? "w-[85%] opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </Link>

              {/* =================================================
                  SERVICES DROPDOWN
              ================================================= */}

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

                  {/* SERVICE LINKS */}

                  <div className="py-2">
                    {eventServices.map((service, index) => {
                      const serviceActive = isActive(service.href);

                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setServicesOpen(false)}
                          className={`group relative flex items-center justify-between overflow-hidden px-4 py-3 transition-all duration-300 ${
                            serviceActive
                              ? "bg-[var(--satt-bg-primary)]"
                              : "hover:bg-[var(--satt-bg-primary)]"
                          }`}
                        >
                          {/* ACTIVE GOLD EDGE */}

                          <span
                            className={`absolute left-0 top-0 h-full w-[2px] bg-[var(--satt-gold)] transition-all duration-300 ${
                              serviceActive
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                            }`}
                          />

                          <div className="flex items-center gap-3">

                            {/* NUMBER */}

                            <span
                              className={`text-[8px] tracking-[0.15em] transition-colors duration-300 ${
                                serviceActive
                                  ? "text-[var(--satt-gold-dark)]"
                                  : "text-[var(--satt-gold)]"
                              }`}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            {/* SERVICE NAME */}

                            <span
                              className={`text-[11px] font-bold uppercase tracking-[0.12em] transition-all duration-300 ${
                                serviceActive
                                  ? "translate-x-0.5 text-[var(--satt-gold-dark)]"
                                  : "text-[var(--satt-text-primary)] group-hover:translate-x-0.5 group-hover:text-[var(--satt-gold-dark)]"
                              }`}
                            >
                              {service.label}
                            </span>
                          </div>

                          {/* ARROW */}

                          <ArrowUpRight
                            size={13}
                            strokeWidth={1.4}
                            className={`transition-all duration-300 ${
                              serviceActive
                                ? "translate-x-0.5 -translate-y-0.5 text-[var(--satt-gold-dark)] opacity-100"
                                : "text-[var(--satt-gold)] opacity-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                            }`}
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                OUR BELIEVE
            ================================================= */}

            <NavItem
              href="/beliefs"
              label="Our Believe"
              active={beliefsActive}
            />

            {/* =================================================
                EXPERIENCES
            ================================================= */}

            <NavItem
              href="/experiences"
              label="Experiences"
              active={experiencesActive}
            />

            {/* =================================================
                EVENT STORIES
            ================================================= */}

            <NavItem
              href="/events"
              label="Event Stories"
              active={eventsActive}
            />

            {/* =================================================
                OUR PARTNERS
            ================================================= */}

            <NavItem
              href="/partners"
              label="Our Partners"
              active={partnersActive}
            />

            {/* =================================================
                GALLERY
            ================================================= */}

            <NavItem
              href="/gallery"
              label="Gallery"
              active={galleryActive}
            />

            {/* =================================================
                CONTACT
            ================================================= */}

            <NavItem
              href="/contact"
              label="Contact"
              active={contactActive}
            />
          </nav>

          {/* =====================================================
              CTA
          ===================================================== */}

          <div className="hidden shrink-0 min-[1100px]:block">
            <Link
              href="/contact"
              className="
                group relative overflow-hidden
                border border-[var(--satt-gold)]
                bg-[var(--satt-gold)]
                px-5 py-3
                text-[10px] font-medium uppercase tracking-[0.13em]
                text-[var(--satt-text-primary)]
                transition-all duration-300
                hover:bg-[var(--satt-gold-dark)]
                hover:text-white
                xl:px-6 xl:text-[11px] xl:tracking-[0.16em]
              "
            >
              <span className="relative z-10">
                Plan Your Event
              </span>
            </Link>
          </div>

          {/* =====================================================
              MOBILE / TABLET BUTTON
          ===================================================== */}

          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="
              flex h-10 w-10 shrink-0 items-center justify-center
              border border-[var(--satt-border)]
              transition-all duration-300
              hover:border-[var(--satt-gold)]
              hover:text-[var(--satt-gold-dark)]
              min-[1100px]:hidden
            "
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
};

export default Navbar;

