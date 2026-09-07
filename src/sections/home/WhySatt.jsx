"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Compass,
  Layers3,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Thoughtful Planning",
    description:
      "Every event begins with understanding your vision, your audience and the experience you want to create.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Creative Direction",
    description:
      "From the overall concept to the smallest details, we bring creativity and character into every experience.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Seamless Execution",
    description:
      "We coordinate the details behind the scenes so your event feels effortless, organised and beautifully executed.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Personal Approach",
    description:
      "We believe every event is different. Our approach is shaped around your people, your purpose and your story.",
    icon: HeartHandshake,
  },
];

const WhySatt = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--satt-bg-secondary)] py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[var(--satt-gold)]" />

              <span className="text-[24px] uppercase tracking-[0.3em] text-[var(--satt-text-secondary)]">
                Why Satt
              </span>
            </div>

            <p className="font-signature mt-8 text-4xl text-[var(--satt-gold-dark)] md:text-5xl">
              more than an event
            </p>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading max-w-5xl text-4xl leading-[1.15] text-[var(--satt-text-primary)] md:text-5xl lg:text-6xl xl:text-7xl">
              Because the details
              <br />
              <span className="text-[var(--satt-gold-dark)]">
                make the difference.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-12 max-w-2xl lg:ml-[25%]"
        >
          <p className="font-body text-base leading-8 text-[var(--satt-text-secondary)] md:text-lg">
            Great events don't happen by accident. They are shaped by
            thoughtful decisions, meaningful ideas and careful execution.
            That's where we come in.
          </p>
        </motion.div>

        {/* Reasons */}
        <div className="mt-20 grid border-t border-[var(--satt-border)]/40 md:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="group border-b border-[var(--satt-border)]/40 p-7 transition-colors duration-500 hover:bg-[var(--satt-bg-primary)] md:border-r md:p-8 lg:min-h-[360px] lg:border-b-0 lg:p-9 xl:p-10"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  {/* <span className="text-[10px] tracking-[0.2em] text-[var(--satt-gold-dark)]">
                    {reason.number}
                  </span> */}

                  <Icon
                    size={20}
                    strokeWidth={1.2}
                    className="text-[var(--satt-gold)] transition-transform duration-500 group-hover:rotate-12"
                  />
                </div>

                {/* Content */}
                <div className="mt-20 lg:mt-28">
                  <h3 className="font-heading text-2xl text-[var(--satt-text-primary)] md:text-3xl">
                    {reason.title}
                  </h3>

                  <p className="font-body mt-5 text-sm leading-7 text-[var(--satt-text-secondary)]">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom line */}
                <div className="mt-8 h-px w-0 bg-[var(--satt-gold)] transition-all duration-500 group-hover:w-12" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex flex-col gap-6 border-t border-[var(--satt-border)]/40 pt-8 md:mt-24 md:flex-row md:items-center md:justify-between"
        >
          <p className="font-signature text-3xl text-[var(--satt-gold-dark)] md:text-5xl">
            thoughtfully planned. beautifully experienced.
          </p>

          <span className="text-[9px] uppercase tracking-[0.25em] text-[var(--satt-text-secondary)]">
            Satt Event Planners
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default WhySatt;