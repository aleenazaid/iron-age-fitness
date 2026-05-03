"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const scenes = [
  {
    title: "Discipline",
    subtitle: "Built in silence. Shown in results.",
    image: "/assets/gallery1.jpg",
  },
  {
    title: "Power",
    subtitle: "Strength is earned under pressure.",
    image: "/assets/gallery2.jpg",
  },
  {
    title: "Control",
    subtitle: "Movement refined to precision.",
    image: "/assets/gallery3.jpg",
  },
  {
    title: "Endurance",
    subtitle: "Limits exist only in mindset.",
    image: "/assets/gallery4.jpg",
  },
];

export default function Gallery() {
  const { scrollYProgress } = useScroll();

  return (
    <section className="bg-[#0f0f0f] text-white relative">

      {/* HEADER */}
      <div className="text-center py-24 px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#C96A2B] uppercase tracking-[6px] text-sm"
        >
          Momentum Showcase
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mt-4"
        >
          Built Through Motion
        </motion.h2>

        <p className="mt-6 text-white/60 max-w-xl mx-auto">
          A visual journey of discipline, strength, and transformation.
        </p>
      </div>

      {/* CINEMATIC PANELS */}
      <div className="relative">

        {scenes.map((scene, i) => (
          <div
            key={i}
            className="h-screen w-full relative flex items-center justify-center overflow-hidden"
          >
            {/* IMAGE */}
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <img
                src={scene.image}
                alt={scene.title}
                className="w-full h-full object-cover opacity-40"
              />
            </motion.div>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />

            {/* ORANGE GLOW */}
            <div className="absolute w-[500px] h-[500px] bg-[#C96A2B] opacity-10 blur-[150px] rounded-full" />

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 text-center px-6"
            >
              <h3 className="text-4xl md:text-6xl font-bold">
                {scene.title}
              </h3>

              <p className="mt-6 text-white/70 text-lg max-w-xl mx-auto">
                {scene.subtitle}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}