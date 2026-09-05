"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

import { eventServices, supportingCapabilities } from "@/data/services";

const Footer = () => {
  // Show the most important services in the footer
  const footerServices = eventServices.slice(0, 7);

  // Show all current capabilities
  const footerCapabilities = supportingCapabilities;

  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#171717] text-white"
    >
      {/* =========================================
          MAIN FOOTER
      ========================================= */}

      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-24 lg:px-16 lg:py-28">

        {/* =========================================
            BRAND INTRO
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-b border-[var(--satt-gold)]/30 pb-12 md:pb-16"
        >
          <p className="font-signature text-5xl text-[var(--satt-gold-bright)] md:text-6xl lg:text-7xl">
            Satt Event Planners
          </p>

          <h2 className="font-heading mt-5 max-w-4xl text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
            We design experiences
            <br />
            <span className="text-[var(--satt-gold-bright)]">
              that become memories.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 md:text-base md:leading-8">
            From intimate celebrations to grand productions, we bring
            together thoughtful design, immersive experiences and seamless
            execution to turn your vision into moments worth remembering.
          </p>
        </motion.div>

        {/* =========================================
            FOOTER CONTENT
        ========================================= */}

        <div className="grid gap-14 py-14 md:grid-cols-2 lg:grid-cols-[0.7fr_1fr_1.2fr] lg:gap-16 lg:py-20">

          {/* =========================================
              QUICK LINKS
          ========================================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-[var(--satt-gold-bright)]">
              Explore
            </h3>

            <nav className="mt-7 flex flex-col gap-4">

              <Link
                href="/"
                className="group flex w-fit items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-[var(--satt-gold-bright)]"
              >
                Home

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </Link>

              <Link
                href="/about"
                className="group flex w-fit items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-[var(--satt-gold-bright)]"
              >
                About Satt

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </Link>

              <Link
                href="/experiences"
                className="group flex w-fit items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-[var(--satt-gold-bright)]"
              >
                Experiences

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </Link>

              <Link
                href="/services"
                className="group flex w-fit items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-[var(--satt-gold-bright)]"
              >
                Services

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </Link>

              <Link
                href="/gallery"
                className="group flex w-fit items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-[var(--satt-gold-bright)]"
              >
                Gallery

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </Link>

              <Link
                href="/contact"
                className="group flex w-fit items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-[var(--satt-gold-bright)]"
              >
                Contact

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </Link>

            </nav>
          </motion.div>

          {/* =========================================
              SERVICES
          ========================================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-[var(--satt-gold-bright)]">
              Services
            </h3>

            <nav className="mt-7 flex flex-col gap-4">

              {footerServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-[var(--satt-gold-bright)]"
                >
                  {service.title}

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.5}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}

              <Link
                href="/services"
                className="mt-2 flex w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--satt-gold-bright)]"
              >
                View All Services

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                />
              </Link>

            </nav>
          </motion.div>

          {/* =========================================
              CONTACT + CAPABILITIES
          ========================================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >
            <h3 className="text-[10px] uppercase tracking-[0.25em] text-[var(--satt-gold-bright)]">
              Contact
            </h3>

            <div className="mt-7 grid gap-8 md:grid-cols-2 lg:grid-cols-[1fr_220px]">

              {/* =========================================
                  CONTACT DETAILS
              ========================================= */}

              <div className="space-y-6">

                {/* Address */}

                <div className="flex gap-4">

                  <MapPin
                    size={18}
                    strokeWidth={1.4}
                    className="mt-1 shrink-0 text-[var(--satt-gold-bright)]"
                  />

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                      Address
                    </p>

                    <p className="mt-2 text-sm leading-6 uppercase text-white/80">
                      106, BANK COLONY,
                      <br />
                      ANNAPURNA ROAD,
                      <br />
                      INDORE, MP, INDIA
                      <br />
                      PIN CODE: 452009
                    </p>
                  </div>

                </div>

                {/* Mobile */}

                <a
                  href="tel:+917415077724"
                  className="group flex gap-4"
                >
                  <Phone
                    size={18}
                    strokeWidth={1.4}
                    className="mt-1 shrink-0 text-[var(--satt-gold-bright)]"
                  />

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                      Mobile
                    </p>

                    <p className="mt-2 text-sm text-white/80 transition-colors duration-300 group-hover:text-[var(--satt-gold-bright)]">
                      +91 74150-77724
                    </p>
                  </div>
                </a>

                {/* Email */}

                <a
                  href="mailto:visit.sattevents@gmail.com"
                  className="group flex gap-4"
                >
                  <Mail
                    size={18}
                    strokeWidth={1.4}
                    className="mt-1 shrink-0 text-[var(--satt-gold-bright)]"
                  />

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                      Email
                    </p>

                    <p className="mt-2 break-all text-sm text-white/80 transition-colors duration-300 group-hover:text-[var(--satt-gold-bright)]">
                      visit.sattevents@gmail.com
                    </p>
                  </div>
                </a>

                {/* Capabilities */}

                {/* <div className="pt-3">

                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                    Capabilities
                  </p>

                  <nav className="mt-4 flex flex-col gap-3">

                    {footerCapabilities.slice(0, 3).map((capability) => (
                      <Link
                        key={capability.href}
                        href={capability.href}
                        className="group flex w-fit items-center gap-2 text-xs text-white/60 transition-colors duration-300 hover:text-[var(--satt-gold-bright)]"
                      >
                        {capability.title}

                        <ArrowUpRight
                          size={11}
                          strokeWidth={1.5}
                          className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                        />
                      </Link>
                    ))}

                    <Link
                      href="/capabilities"
                      className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--satt-gold-bright)]"
                    >
                      View All Capabilities
                    </Link>

                  </nav>

                </div> */}

              </div>

              {/* =========================================
                  MAP
              ========================================= */}

              <div className="group relative h-[240px] overflow-hidden border border-[var(--satt-gold)]/60">

                <iframe
                  title="Satt Event Planners Location"
                  src="https://maps.google.com/maps?q=22.69417,75.837778&z=17&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                />

                <div className="pointer-events-none absolute inset-2 border border-[var(--satt-gold)]/70" />

                <div className="pointer-events-none absolute left-0 top-0 h-10 w-10 border-l border-t border-[var(--satt-gold)]" />

                <div className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 border-b border-r border-[var(--satt-gold)]" />

              </div>

            </div>
          </motion.div>

        </div>

        {/* =========================================
            BOTTOM BAR
        ========================================= */}

        <div className="flex flex-col gap-6 border-t border-[var(--satt-gold)]/30 pt-7 md:flex-row md:items-center md:justify-between">

          <p className="text-[9px] uppercase tracking-[0.18em] text-white/40">
            © {new Date().getFullYear()} SATT EVENT PLANNERS. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-6">

            <Link
              href="/events"
              className="text-[9px] uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 hover:text-[var(--satt-gold-bright)]"
            >
              Event Stories
            </Link>

            <Link
              href="/contact"
              className="text-[9px] uppercase tracking-[0.2em] text-white/40 transition-colors duration-300 hover:text-[var(--satt-gold-bright)]"
            >
              Plan Your Event
            </Link>

          </div>

        </div>

      </div>

      {/* =========================================
          GOLD BOTTOM LINE
      ========================================= */}

      <div className="h-1 bg-[var(--satt-gold)]" />
    </footer>
  );
};

export default Footer;