"use client";

import { motion, AnimatePresence } from "framer-motion";

const productDetails: Record<string, any> = {
  hoodie: {
    title: "Signature Hoodie",
    desc: `
The Signature Hoodie is built for athletes who value comfort and identity.

Made from heavyweight premium cotton, it offers a structured fit that feels substantial without sacrificing softness.

Its minimal design allows it to move seamlessly between training sessions, recovery days, and daily wear.

Every stitch is designed to reflect the same discipline carried into your workouts.

This is not just apparel — it becomes part of the Iron Age mindset.
    `,
  },

  bottle: {
    title: "Steel Water Bottle",
    desc: `
The Steel Water Bottle is engineered to keep hydration cold for extended training sessions.

Its double-wall stainless construction preserves temperature while maintaining a sleek matte exterior.

The ergonomic design makes it easy to carry throughout the day.

Built for durability, it performs inside and outside the gym.

A simple object designed with premium intention.
    `,
  },

  duffel: {
    title: "Performance Duffel",
    desc: `
The Performance Duffel is designed for athletes who move between discipline and lifestyle.

It offers structured storage, reinforced materials, and a refined silhouette.

Separate compartments allow efficient organization for shoes, apparel, and essentials.

Every detail was created to feel purposeful.

A training bag that reflects the standard of your routine.
    `,
  },
};

interface Props {
  selectedProduct: string | null;
  setSelectedProduct: (value: string | null) => void;
}

export default function ViewProductPanel({
  selectedProduct,
  setSelectedProduct,
}: Props) {
  const product = selectedProduct ? productDetails[selectedProduct] : null;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100] flex items-center justify-center px-6"
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.45 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-3xl w-full bg-[#111] border border-white/10 rounded-3xl p-10 text-white"
          >
            <div className="w-14 h-1 bg-[#C96A2B] rounded-full mb-6" />

            <h2 className="text-4xl font-bold mb-6">
              {product.title}
            </h2>

            <p className="text-white/70 leading-8 text-lg whitespace-pre-line">
              {product.desc}
            </p>

            <button
              onClick={() => setSelectedProduct(null)}
              className="mt-10 text-[#C96A2B] font-medium"
            >
              Close →
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}