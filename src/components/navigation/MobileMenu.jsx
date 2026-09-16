
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { eventServices } from "@/data/services";

const MobileMenu = ({ open, onClose }) => {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname === path || pathname.startsWith(`${path}/`);
  };

  /* =========================================================
     ACTIVE STATES
  ========================================================= */

  const homeActive = isActive("/");
  const aboutActive = isActive("/about");
  const servicesActive = isActive("/services");
  const beliefsActive = isActive("/beliefs");
  const experiencesActive = isActive("/experiences");
  const eventsActive = isActive("/events");
  const partnersActive = isActive("/partners");
  const galleryActive = isActive("/gallery");
  const contactActive = isActive("/contact");

  /* =========================================================
     MOBILE NAV ITEM
  ========================================================= */

  const MobileNavItem = ({
    href,
    label,
    active,
    delay = 0,
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay }}
        className="border-b border-[var(--satt-border)]/20 py-4"
      >
        <Link
          href={href}
          onClick={onClose}
          className={`group relative inline-block font-heading text-3xl font-bold transition-all duration-300 ${
            active
              ? "text-[var(--satt-gold-dark)]"
              : "text-[var(--satt-text-primary)] hover:text-[var(--satt-gold-dark)]"
          }`}
        >
          <span className="relative z-10">
            {label}
          </span>

          {/* =================================================
              GOLD UNDERLINE
          ================================================= */}

          <span
            className={`absolute -bottom-1 left-0 h-px bg-[var(--satt-gold)] transition-all duration-500 ${
              active
                ? "w-full"
                : "w-0 group-hover:w-full"
            }`}
          />

          {/* =================================================
              DIAMOND
          ================================================= */}

          <span
            className={`absolute -bottom-[4px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-[var(--satt-gold)] transition-all duration-300 ${
              active
                ? "scale-100 opacity-100"
                : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
            }`}
          />

          {/* =================================================
              SUBTLE GLOW
          ================================================= */}

          <span
            className={`pointer-events-none absolute -bottom-1 left-1/2 h-3 -translate-x-1/2 bg-[var(--satt-gold)]/20 blur-md transition-all duration-500 ${
              active
                ? "w-[85%] opacity-100"
                : "w-0 opacity-0"
            }`}
          />
        </Link>
      </motion.div>
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed inset-0 z-[100]
            overflow-y-auto
            bg-[var(--satt-bg-primary)]
            min-[1100px]:hidden
          "
        >
          <div className="flex min-h-screen flex-col px-6 py-6">

            {/* =================================================
                MOBILE HEADER
            ================================================= */}

            <div className="flex items-center justify-between">

              {/* LOGO */}

             <Link href="/" className="group flex shrink-0 items-center">
            <Image
              src="/images/Satt_Icon.png"
              alt="Satt Event Planners"
              width={70}
              height={70}
              priority
              className="
                          h-[70px]
                          w-[70px]
                          object-contain
                          transition-transform
                          duration-300
                          group-hover:scale-[1.02]
                          xl:w-[175px]
                        "
            />
          </Link>

              {/* CLOSE */}

              <button
                onClick={onClose}
                aria-label="Close menu"
                className="
                  flex h-10 w-10 items-center justify-center
                  border border-[var(--satt-border)]
                  transition-all duration-300
                  hover:border-[var(--satt-gold)]
                  hover:text-[var(--satt-gold-dark)]
                "
              >
                <X size={20} strokeWidth={1.5} />
              </button>

            </div>

            {/* =================================================
                MOBILE NAVIGATION
            ================================================= */}

            <nav className="mt-16 flex flex-col">

              {/* =================================================
                  HOME
              ================================================= */}

              <MobileNavItem
                href="/"
                label="Home"
                active={homeActive}
                delay={0}
              />

              {/* =================================================
                  ABOUT
              ================================================= */}

              <MobileNavItem
                href="/about"
                label="About"
                active={aboutActive}
                delay={0.06}
              />

              {/* =================================================
                  SERVICES
              ================================================= */}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.12 }}
                className="border-b border-[var(--satt-border)]/20"
              >
                <div className="flex items-center justify-between py-4">

                  {/* SERVICES PAGE */}

                  <Link
                    href="/services"
                    onClick={onClose}
                    className={`group relative inline-block font-heading text-3xl font-bold transition-all duration-300 ${
                      servicesActive
                        ? "text-[var(--satt-gold-dark)]"
                        : "text-[var(--satt-text-primary)] hover:text-[var(--satt-gold-dark)]"
                    }`}
                  >
                    <span className="relative z-10">
                      Services
                    </span>

                    {/* UNDERLINE */}

                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-[var(--satt-gold)] transition-all duration-500 ${
                        servicesActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />

                    {/* DIAMOND */}

                    <span
                      className={`absolute -bottom-[4px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-[var(--satt-gold)] transition-all duration-300 ${
                        servicesActive
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                      }`}
                    />

                    {/* GLOW */}

                    <span
                      className={`pointer-events-none absolute -bottom-1 left-1/2 h-3 -translate-x-1/2 bg-[var(--satt-gold)]/20 blur-md transition-all duration-500 ${
                        servicesActive
                          ? "w-[85%] opacity-100"
                          : "w-0 opacity-0"
                      }`}
                    />
                  </Link>

                  {/* DROPDOWN TOGGLE */}

                  <button
                    type="button"
                    onClick={() =>
                      setServicesOpen(!servicesOpen)
                    }
                    aria-label="Toggle services submenu"
                    aria-expanded={servicesOpen}
                    className={`flex h-10 w-10 items-center justify-center transition-colors duration-300 ${
                      servicesActive
                        ? "text-[var(--satt-gold-dark)]"
                        : "text-[var(--satt-text-primary)]"
                    }`}
                  >
                    <ChevronDown
                      size={22}
                      strokeWidth={1.4}
                      className={`transition-transform duration-300 ${
                        servicesOpen
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                </div>

                {/* =================================================
                    SERVICE SUBMENU
                ================================================= */}

                <AnimatePresence initial={false}>
                  {servicesOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mb-4 border-l border-[var(--satt-gold)]/70 pl-5">

                        {eventServices.map(
                          (service, index) => {
                            const serviceActive =
                              isActive(service.href);

                            return (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={onClose}
                                className={`group relative flex items-center justify-between py-3 transition-all duration-300 ${
                                  serviceActive
                                    ? "translate-x-0.5"
                                    : ""
                                }`}
                              >

                                {/* ACTIVE LEFT LINE */}

                                <span
                                  className={`absolute -left-[21px] top-0 h-full w-[2px] bg-[var(--satt-gold)] transition-all duration-300 ${
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
                                    {String(
                                      index + 1
                                    ).padStart(2, "0")}
                                  </span>

                                  {/* LABEL */}

                                  <span
                                    className={`text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-300 ${
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
                          }
                        )}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>

              {/* =================================================
                  OUR BELIEVE
              ================================================= */}

              <MobileNavItem
                href="/beliefs"
                label="Our Believe"
                active={beliefsActive}
                delay={0.18}
              />

              {/* =================================================
                  EXPERIENCES
              ================================================= */}

              <MobileNavItem
                href="/experiences"
                label="Experiences"
                active={experiencesActive}
                delay={0.24}
              />

              {/* =================================================
                  EVENT STORIES
              ================================================= */}

              <MobileNavItem
                href="/events"
                label="Event Stories"
                active={eventsActive}
                delay={0.30}
              />

              {/* =================================================
                  OUR PARTNERS
              ================================================= */}

              <MobileNavItem
                href="/partners"
                label="Our Partners"
                active={partnersActive}
                delay={0.36}
              />

              {/* =================================================
                  GALLERY
              ================================================= */}

              <MobileNavItem
                href="/gallery"
                label="Gallery"
                active={galleryActive}
                delay={0.42}
              />

              {/* =================================================
                  CONTACT
              ================================================= */}

              <MobileNavItem
                href="/contact"
                label="Contact"
                active={contactActive}
                delay={0.48}
              />

            </nav>

            {/* =================================================
                MOBILE CTA
            ================================================= */}

            <div className="mt-auto pt-10">

              <Link
                href="/contact"
                onClick={onClose}
                className="
                  group relative block overflow-hidden
                  border border-[var(--satt-gold)]
                  bg-[var(--satt-gold)]
                  px-6 py-4
                  text-center text-sm uppercase tracking-[0.18em]
                  transition-all duration-300
                  hover:bg-[var(--satt-gold-dark)]
                  hover:text-white
                "
              >
                <span className="relative z-10">
                  Plan Your Event
                </span>
              </Link>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

