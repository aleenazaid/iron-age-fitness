"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Body Recomposition Client",
    quote:
      "Iron Age completely changed the way I approach training. The structure and coaching transformed not only my body, but my confidence.",
  },
  {
    name: "Daniel Ross",
    role: "Strength Program Client",
    quote:
      "For the first time, every workout felt intentional. I stopped guessing and started seeing measurable progress week after week.",
  },
  {
    name: "Ayesha Khan",
    role: "Fat Loss Client",
    quote:
      "The physical transformation was incredible, but the biggest change was mental. I became more disciplined in every part of life.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-32 bg-[#0f0f0f] text-white relative overflow-hidden"
    >
      {/* glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#C96A2B]/10 to-transparent" />

      {/* header */}
      <div className="text-center max-w-3xl mx-auto mb-20 px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-sm uppercase tracking-[6px] text-[#C96A2B]"
        >
          Client Voices
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mt-4"
        >
          Real Stories. Real Results.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-6 text-white/60"
        >
          Every transformation starts with discipline and ends with confidence.
        </motion.p>
      </div>

      {/* testimonials */}
      <div className="max-w-4xl mx-auto px-6 space-y-10 relative z-10">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-10 shadow-[0_0_30px_rgba(201,106,43,0.05)] hover:border-[#C96A2B]/40 transition-all"
          >
            <div className="w-12 h-1 bg-[#C96A2B] rounded-full mb-6"></div>

            <p className="text-lg md:text-xl text-white/85 leading-relaxed">
              “{item.quote}”
            </p>

            <div className="mt-8">
              <h4 className="font-semibold text-lg">{item.name}</h4>
              <p className="text-sm text-[#C96A2B]">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}