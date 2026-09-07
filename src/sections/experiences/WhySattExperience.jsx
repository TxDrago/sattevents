"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "We Think About People",
    text: "Every decision begins with the people who will experience the event. Their expectations, emotions, comfort and journey shape the experience.",
  },
  {
    number: "02",
    title: "We Connect Creativity With Execution",
    text: "Beautiful ideas only matter when they can be delivered. Our creative thinking is supported by detailed planning and production.",
  },
  {
    number: "03",
    title: "We Notice The Details",
    text: "From the first welcome to the smallest visual detail, we believe the little things often create the strongest impressions.",
  },
  {
    number: "04",
    title: "We Create With Purpose",
    text: "Every element has a reason. We design experiences around the objective, audience and story rather than following a formula.",
  },
];

const WhySattExperience = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 xl:px-10">

        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/images/experiences/why-satt.webp"
                alt="SATT event experience"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/15" />

              <div className="absolute bottom-7 left-7">

                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold)]">
                  SATT
                </span>

                <h3 className="mt-3 font-heading text-3xl text-white">
                  Creating experiences
                  <br />
                  worth remembering.
                </h3>

              </div>

            </div>

          </motion.div>

          {/* Content */}

          <div>

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--satt-gold-dark)]">
              Why SATT
            </span>

            <h2 className="mt-6 font-heading text-4xl leading-tight sm:text-5xl">
              Because an event
              <span className="block text-[var(--satt-gold-dark)]">
                should feel different.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--satt-text-secondary)]">
              We believe the best events are not remembered because they were
              expensive or elaborate. They are remembered because they made
              people feel something.
            </p>

            <div className="mt-12 space-y-8">

              {reasons.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="flex gap-5 border-t border-[var(--satt-border)]/30 pt-6"
                >

                  {/* <span className="shrink-0 text-[9px] tracking-[0.2em] text-[var(--satt-gold)]">
                    {item.number}
                  </span> */}

                  <div>

                    <h3 className="font-heading text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--satt-text-secondary)]">
                      {item.text}
                    </p>

                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhySattExperience;