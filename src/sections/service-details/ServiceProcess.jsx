"use client";

import { motion } from "framer-motion";

const ServiceProcess = ({ service }) => {
  const { process } = service;

  return (
    <section className="bg-[var(--satt-bg-primary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
        {/* Header */}

        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[16px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]"
          >
            {process.eyebrow}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6 font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl"
          >
            {process.title}
          </motion.h2>
        </div>

        {/* Process */}

        <div className="mt-20 grid border-y border-[var(--satt-border)]/30 md:grid-cols-2 lg:grid-cols-3">
          {process.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              className="group border-b border-[var(--satt-border)]/30 p-8 md:p-10 lg:min-h-[260px] lg:p-12"
            >
              <span className="text-[12px] tracking-[0.2em] text-[var(--satt-gold)]">
                {step.number}
              </span>

              <h3 className="mt-8 font-heading text-3xl transition-colors duration-300 group-hover:text-[var(--satt-gold-dark)]">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--satt-text-secondary)]">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;