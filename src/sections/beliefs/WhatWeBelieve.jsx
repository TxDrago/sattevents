"use client";

import { motion } from "framer-motion";

const beliefs = [
  {
    number: "01",
    title: "Meaning over magnificence.",
    text: "Beautiful events become memorable when they mean something to the people experiencing them.",
  },
  {
    number: "02",
    title: "Details create the difference.",
    text: "From the grandest element to the smallest finishing touch, every detail deserves thought.",
  },
  {
    number: "03",
    title: "People come first.",
    text: "We design experiences around people, their stories, their emotions and the moments they want to remember.",
  },
  {
    number: "04",
    title: "Creativity has no boundaries.",
    text: "We believe imagination should lead the way, while thoughtful execution brings the idea to life.",
  },
];

const WhatWeBelieve = () => {
  return (
    <section className="bg-[var(--satt-bg-primary)] ">
      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-36">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[var(--satt-gold)]" />

            <span className="text-[24px] uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              What We Believe
            </span>
          </div>

          <h2 className="font-heading mt-7 max-w-4xl text-4xl leading-tight text-[var(--satt-text-primary)] md:text-6xl">
            The principles behind
            <span className="text-[var(--satt-gold)]">
              {" "}
              everything we do.
            </span>
          </h2>
        </motion.div>

        {/* Beliefs */}

        <div className="mt-14 grid border-t border-[var(--satt-border)]/30 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">

          {beliefs.map((belief, index) => (
            <motion.article
              key={belief.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="border-b border-[var(--satt-border)]/30 p-7 md:min-h-[300px] md:border-r md:p-8 lg:border-b-0"
            >

              {/* <span className="text-[10px] tracking-[0.25em] text-[var(--satt-gold-dark)]">
                {belief.number}
              </span> */}

              <h3 className="font-heading mt-12 text-2xl leading-tight text-[var(--satt-text-primary)] md:text-3xl">
                {belief.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-[var(--satt-text-secondary)]">
                {belief.text}
              </p>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhatWeBelieve;