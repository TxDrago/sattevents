"use client";

import { motion } from "framer-motion";

const CapabilityProcess = ({ capability }) => {
  const process = capability.process;

  return (
    <section className="bg-[var(--satt-bg-secondary)] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">
        <div className="text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
            {process.eyebrow}
          </span>

          <h2 className="mx-auto mt-6 max-w-3xl font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {process.title}
          </h2>
        </div>

        <div className="mt-20 grid border-y border-[var(--satt-border)]/30 md:grid-cols-3">
          {process.steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="border-b border-[var(--satt-border)]/30 p-8 last:border-b-0 md:border-b-0 md:border-r md:p-12 md:last:border-r-0"
            >
              <span className="text-[10px] tracking-[0.2em] text-[var(--satt-gold)]">
                {step.number}
              </span>

              <h3 className="mt-8 font-heading text-3xl">
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

export default CapabilityProcess;