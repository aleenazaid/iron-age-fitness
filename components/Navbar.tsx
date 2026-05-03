"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = ["home", "gym", "merch", "gallery", "testimonials", "contact"];

  const labels = {
    home: "Home",
    gym: "Programs",
    merch: "Merch",
    gallery: "Gallery",
    testimonials: "Reviews",
    contact: "Contact",
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/30 backdrop-blur-2xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO (cleaner + less bulky) */}
        <div className="flex items-center gap-2">
        
          <h1 className="text-white font-semibold tracking-wider text-sm">
            IRON AGE FITNESS
          </h1>
        </div>

        {/* CENTER NAV */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="relative flex items-center gap-1 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full px-2 py-2">

            {items.map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                onClick={() => setActive(item)}
                className="relative px-4 py-2 text-sm text-white/70 hover:text-white transition"
              >
                {labels[item]}

                {active === item && (
                  <motion.div
                    layoutId="pill"
                    className="absolute inset-0 bg-[#C96A2B] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </Link>
            ))}

          </div>
        </div>

        {/* LOGIN BUTTON (clean + modern) */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-white/70 hover:text-white transition text-sm">
            Login
          </button>

          <button className="bg-[#C96A2B] text-white px-5 py-2 rounded-full text-sm font-medium hover:scale-105 hover:shadow-[0_0_20px_rgba(201,106,43,0.5)] transition-all">
            Join
          </button>
        </div>

      </nav>
    </motion.header>
  );
}