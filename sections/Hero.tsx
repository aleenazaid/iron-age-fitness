"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { easeOut } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1],
}
  },
};

export default function Hero() {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.92]);
  const y = useTransform(scrollY, [0, 400], [0, 80]);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0f0f0f] pt-24"
    >
      {/* TOP ORANGE ACCENT */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#C96A2B]/40 via-[#C96A2B]/10 to-transparent z-0 pointer-events-none" />

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/assets/gym.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/90" />

      {/* ANIMATED GLOW */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[550px] h-[550px] bg-[#C96A2B] opacity-20 blur-[160px] rounded-full"
        />

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[280px] h-[280px] bg-[#C96A2B] opacity-10 blur-[120px] rounded-full translate-x-16 translate-y-10"
        />
      </div>

      {/* CONTENT */}
      <motion.div
        style={{ opacity, scale, y }}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-3xl px-6"
      >
        <motion.p
          variants={item}
          className="text-[#A3B18A] uppercase tracking-[8px] text-xs"
        >
          Iron Age Fitness Club
        </motion.p>

        <motion.h1
          variants={item}
          className="text-white text-5xl md:text-7xl font-bold leading-tight mt-6 whitespace-nowrap"
        >
          Train. Build. Dominate.
        </motion.h1>

        <motion.p
          variants={item}
          className="text-white/70 mt-6 text-lg leading-relaxed"
        >
          Structured strength training systems designed for real transformation, discipline, and performance.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex items-center justify-center gap-5"
        >
          <button className="bg-[#C96A2B] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-[0_0_25px_rgba(201,106,43,0.5)] transition-all duration-300">
            Start Transformation
          </button>

          <a
            href="#gym"
            className="text-white/70 hover:text-white transition"
          >
            Explore Programs →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}