"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { eventServices } from "@/data/services";

const MobileMenu = ({ open, onClose }) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const navigation = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Our Believe",
      href: "/beliefs",
    },
    {
      label: "Experiences",
      href: "/experiences",
    },
    {
      label: "Event Stories",
      href: "/events",
    },
    {
      label: "Gallery",
      href: "/gallery",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] overflow-y-auto bg-[var(--satt-bg-primary)] lg:hidden"
        >
          <div className="flex min-h-screen flex-col px-6 py-6">

            {/* =================================================
                MOBILE HEADER
            ================================================= */}

            <div className="flex items-center justify-between">

              <Link
                href="/"
                onClick={onClose}
                className="font-heading text-xl tracking-wide"
              >
                SATT
              </Link>

              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center border border-[var(--satt-border)]"
              >
                <X size={20} strokeWidth={1.5} />
              </button>

            </div>

            {/* =================================================
                MOBILE NAVIGATION
            ================================================= */}

            <nav className="mt-16 flex flex-col">

              {/* HOME */}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0 }}
                className="border-b border-[var(--satt-border)]/20 py-4"
              >
                <Link
                  href="/"
                  onClick={onClose}
                  className="font-heading text-3xl font-bold transition-colors hover:text-[var(--satt-gold-dark)]"
                >
                  Home
                </Link>
              </motion.div>

              {/* ABOUT */}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.06 }}
                className="border-b border-[var(--satt-border)]/20 py-4"
              >
                <Link
                  href="/about"
                  onClick={onClose}
                  className="font-heading text-3xl font-bold transition-colors hover:text-[var(--satt-gold-dark)]"
                >
                  About
                </Link>
              </motion.div>

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
                    className="font-heading text-3xl font-bold transition-colors hover:text-[var(--satt-gold-dark)]"
                  >
                    Services
                  </Link>

                  {/* DROPDOWN TOGGLE */}

                  <button
                    type="button"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-label="Toggle services submenu"
                    aria-expanded={servicesOpen}
                    className="flex h-10 w-10 items-center justify-center"
                  >
                    <ChevronDown
                      size={22}
                      strokeWidth={1.4}
                      className={`text-[var(--satt-gold-dark)] transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                </div>

                {/* SERVICE SUBMENU */}

                <AnimatePresence initial={false}>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mb-4 border-l border-[var(--satt-gold)] pl-5">

                        {eventServices.map((service, index) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={onClose}
                            className="group flex items-center justify-between py-3"
                          >
                            <div className="flex items-center gap-3">

                              <span className="text-[8px] tracking-[0.15em] text-[var(--satt-gold-dark)]">
                                {String(index + 1).padStart(2, "0")}
                              </span>

                              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--satt-text-primary)] transition-colors group-hover:text-[var(--satt-gold-dark)]">
                                {service.label}
                              </span>

                            </div>

                            <ArrowUpRight
                              size={13}
                              strokeWidth={1.4}
                              className="text-[var(--satt-gold-dark)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </Link>
                        ))}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>

              {/* =================================================
                  REMAINING LINKS
              ================================================= */}

              {navigation.slice(2).map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.18 + index * 0.06,
                  }}
                  className="border-b border-[var(--satt-border)]/20 py-4"
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="font-heading text-3xl font-bold transition-colors hover:text-[var(--satt-gold-dark)]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

            </nav>

            {/* =================================================
                MOBILE CTA
            ================================================= */}

            <div className="mt-auto pt-10">

              <Link
                href="/contact"
                onClick={onClose}
                className="block border border-[var(--satt-gold)] bg-[var(--satt-gold)] px-6 py-4 text-center text-sm uppercase tracking-[0.18em] transition-colors duration-300 hover:bg-[var(--satt-gold-dark)]"
              >
                Plan Your Event
              </Link>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;