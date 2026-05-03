"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ViewProductPanel from "../components/ViewProductPanel";
import Image from "next/image";

const merchItems = [
  {
    key: "hoodie",
    title: "Signature Hoodie",
    subtitle: "Minimal comfort. Maximum presence.",
    desc: "Crafted from heavyweight premium cotton, the Iron Age hoodie is built for recovery days, warm-ups, and effortless streetwear presence.",
    image: "/assets/hoodie.jpg",
  },
  {
    key: "bottle",
    title: "Steel Water Bottle",
    subtitle: "Hydration refined.",
    desc: "Double-wall stainless steel with a matte finish designed to keep performance hydration cold through every session.",
    image: "/assets/bottle.jpg",
  },
  {
    key: "duffel",
    title: "Performance Duffel",
    subtitle: "Built for discipline.",
    desc: "A premium carry system designed for athletes who move between training, work, and lifestyle without compromise.",
    image: "/assets/duffle.jpg",
  },
];

export default function Merch() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <section
      id="merch"
      className="py-32 bg-[#0f0f0f] text-white relative overflow-hidden"
    >
      {/* glow */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-b from-[#C96A2B] to-transparent" />

      {/* header */}
      <div className="text-center max-w-3xl mx-auto mb-24 px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-sm uppercase tracking-[6px] text-[#C96A2B]"
        >
          Performance Merch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mt-4"
        >
          Designed Beyond Training
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-6 text-white/60"
        >
          Premium essentials that carry the same discipline as your training.
        </motion.p>
      </div>

      {/* products */}
      <div className="max-w-6xl mx-auto px-6 space-y-24 relative z-10">
        {merchItems.map((item, index) => {
          const reverse = index % 2 !== 0;

          return (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* text */}
              <div>
                <p className="text-[#C96A2B] uppercase tracking-[4px] text-sm">
                  {item.subtitle}
                </p>

                <h3 className="text-3xl md:text-4xl font-bold mt-4">
                  {item.title}
                </h3>

                <p className="mt-6 text-white/60 leading-relaxed max-w-lg">
                  {item.desc}
                </p>

                <button
                  onClick={() => setSelectedProduct(item.key)}
                  className="mt-8 text-[#C96A2B] font-medium hover:tracking-wide transition-all"
                >
                  View Product →
                </button>
              </div>

              {/* product visual (FINAL PREMIUM VERSION) */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="group h-[320px] rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden shadow-[0_0_40px_rgba(201,106,43,0.08)] relative"
              >
                {/* glass reflection sweep */}
                <div className="glass-sweep" />

                <motion.div
                  className="w-full h-full relative"
                  whileHover={{ rotateX: 8, rotateY: -8 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover scale-110"
                  />

                  {/* dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <ViewProductPanel
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
    </section>
  );
}