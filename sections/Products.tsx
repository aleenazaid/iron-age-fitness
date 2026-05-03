"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "Whey Protein",
    price: "$69",
    desc: "Premium isolate protein for muscle recovery.",
    image:
      "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f",
  },
  {
    name: "Pre Workout",
    price: "$39",
    desc: "Clean energy formula for intense training.",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  },
  {
    name: "Shaker Bottle",
    price: "$18",
    desc: "Minimal design bottle for your daily fuel.",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37",
  },
];

export default function Products() {
  return (
    <section id="products" className="px-10 py-24 bg-[#F5EFE6]">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm uppercase tracking-[6px] text-[#A3B18A]">
          Performance Products
        </p>

        <h2 className="text-4xl font-bold text-[#2F2F2F] mt-3">
          Fuel Your Performance
        </h2>

        <p className="mt-4 text-[#5a5a5a]">
          Carefully selected products that support your training goals.
        </p>
      </div>

      {/* Product Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden border border-[#e8dfd2] shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-6">
              <div className="w-10 h-1 bg-[#A3B18A] rounded-full mb-3"></div>

              <h3 className="text-xl font-semibold text-[#2F2F2F]">
                {item.name}
              </h3>

              <p className="mt-2 text-sm text-[#5a5a5a]">
                {item.desc}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-[#C96A2B] font-bold text-lg">
                  {item.price}
                </span>

                <button className="rounded-full bg-[#C96A2B] px-4 py-2 text-white text-sm hover:scale-105 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}