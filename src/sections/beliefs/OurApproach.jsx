"use client";

import { motion } from "framer-motion";

const approach = [
  {
    number: "01",
    title: "Listen",
    text: "We begin by understanding your story, your vision and what the moment means to you.",
  },
  {
    number: "02",
    title: "Imagine",
    text: "We turn conversations into ideas, concepts and possibilities that feel uniquely yours.",
  },
  {
    number: "03",
    title: "Create",
    text: "We carefully bring the vision together through design, planning and thoughtful execution.",
  },
  {
    number: "04",
    title: "Celebrate",
    text: "Then comes the moment that matters most — stepping back and watching the experience unfold.",
  },
];

const OurApproach = () => {
  return (
    <section className="bg-[var(--satt-bg-secondary)] ">
      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-36">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[var(--satt-gold)]" />

            <span className="text-[24px] uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
            Our Approach
            </span>

            <span className="h-px w-12 bg-[var(--satt-gold)]" />
          </div>

          <h2 className="font-heading mx-auto mt-7 max-w-4xl text-4xl leading-tight text-[var(--satt-text-primary)] md:text-6xl">
            From an idea
            <span className="text-[var(--satt-gold)]">
              {" "}
              to a memory.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[var(--satt-text-secondary)] md:text-base">
            A thoughtful approach that keeps creativity at the heart
            of every experience.
          </p>
        </motion.div>

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mt-14 h-[350px] overflow-hidden md:mt-20 md:h-[520px]"
        >
          <img
            src="/images/beliefs/approach.jpg"
            alt="Satt Event Planners approach"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-4 border border-[var(--satt-gold)]/50 md:inset-6" />
        </motion.div>

        {/* Approach Steps */}

        <div className="mt-10 grid border-t border-[var(--satt-border)]/30 md:grid-cols-2 lg:grid-cols-4">

          {approach.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="border-b border-[var(--satt-border)]/30 p-7 md:border-r md:p-8 lg:border-b-0"
            >

              <span className="text-[10px] tracking-[0.25em] text-[var(--satt-gold-dark)]">
                {item.number}
              </span>

              <h3 className="font-heading mt-8 text-3xl text-[var(--satt-text-primary)]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--satt-text-secondary)]">
                {item.text}
              </p>

            </motion.article>
          ))}

        </div>

        {/* Final Statement */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="font-signature text-4xl text-[var(--satt-gold-dark)] md:text-5xl">
            With heart. With purpose. With you.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default OurApproach;