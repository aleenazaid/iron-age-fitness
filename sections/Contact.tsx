"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-[#0f0f0f] text-white relative overflow-hidden"
    >
      {/* TOP ORANGE ACCENT */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#C96A2B]/40 via-[#C96A2B]/10 to-transparent" />

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-[#C96A2B] opacity-10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-24">
          <p className="text-sm uppercase tracking-[6px] text-[#C96A2B]">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let’s Connect
          </h2>
        </div>

        {/* GRID LEFT RIGHT */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE (INFO) */}
          <div className="space-y-10">
            <div>
              <p className="text-white/50 text-sm mb-2">Phone</p>
              <p className="text-xl font-medium tracking-wide">
                +92-349-6711887
              </p>
            </div>

            <div>
              <p className="text-white/50 text-sm mb-2">Email</p>
              <p className="text-xl font-medium tracking-wide">
                info@ironagefitness.com
              </p>
            </div>
 <div>
    <p className="text-white/50 text-sm mb-2">Address</p>
    <p className="text-lg text-white/80 leading-relaxed">
      Bahria Town Phase 7, Rawalpindi, Pakistan
    </p>
  </div>
            <div>
              <p className="text-white/50 text-sm mb-2">Follow</p>
              <div className="flex gap-6 text-white/70">
                <span className="hover:text-[#C96A2B] transition cursor-pointer">
                  Instagram
                </span>
                <span className="hover:text-[#C96A2B] transition cursor-pointer">
                  Facebook
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            {/* NAME */}
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#C96A2B] transition"
              />
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#C96A2B] group-focus-within:w-full transition-all duration-300" />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#C96A2B] transition"
              />
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-[#C96A2B] transition resize-none"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="bg-[#C96A2B] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-[0_0_25px_rgba(201,106,43,0.5)] transition-all"
            >
              Send Message →
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}