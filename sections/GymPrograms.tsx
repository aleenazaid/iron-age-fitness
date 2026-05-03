"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { exploreData } from "@/components/ExplorePanel";

type ProgramKey =
  | "strength-foundation"
  | "fat-loss-system"
  | "athletic-performance"
  | "body-recomposition"
  | "recovery-protocol";

const programs = [
  {
    title: "Strength Foundation",
    slug: "strength-foundation",
    desc: "Build core strength with structured progressive overload training.",
  },
  {
    title: "Fat Loss System",
    slug: "fat-loss-system",
    desc: "High intensity training designed for maximum calorie burn.",
  },
  {
    title: "Athletic Performance",
    slug: "athletic-performance",
    desc: "Speed, agility, explosiveness and endurance development.",
  },
  {
    title: "Body Recomposition",
    slug: "body-recomposition",
    desc: "Lean muscle gain with fat reduction balance program.",
  },
  {
    title: "Recovery Protocol",
    slug: "recovery-protocol",
    desc: "Mobility, stretching and injury prevention system.",
  },
];

export default function GymPrograms() {
  const [active, setActive] = useState<
    (typeof exploreData)[keyof typeof exploreData] | null
  >(null);

  useEffect(() => {
    const handler = (e: CustomEvent<ProgramKey>) => {
      if (!e.detail) return;

      const key = e.detail;

      if (exploreData[key]) {
        setActive(exploreData[key]);
      }
    };

    window.addEventListener(
      "open-explore",
      handler as unknown as EventListener
    );

    return () => {
      window.removeEventListener(
        "open-explore",
        handler as unknown as EventListener
      );
    };
  }, []);

  return (
    <section
      id="gym"
      className="py-28 bg-[#0f0f0f] text-white relative overflow-hidden"
    >
      {/* glow */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-[#C96A2B] to-transparent" />

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          Built for Transformation
        </h2>

        <p className="mt-4 text-white/60">
          Structured programs designed like a performance system
        </p>

        <div className="mt-6 w-20 h-[2px] bg-white/20 mx-auto" />
      </div>

      {/* TIMELINE WRAPPER */}
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="absolute left-1/2 top-0 bottom-0 w-[4px] bg-[#C96A2B] -translate-x-1/2 rounded-full opacity-80" />

        <div className="space-y-20">
          {programs.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className={`flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <div className="w-[38%] bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-5 hover:border-[#C96A2B] transition-all duration-300 hover:-translate-y-1">
                  <div className="w-8 h-1 bg-[#C96A2B] rounded-full mb-4" />

                  <h3 className="text-lg font-semibold">{item.title}</h3>

                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    {item.desc}
                  </p>

                  <button
                    onClick={() =>
                      window.dispatchEvent(
                        new CustomEvent<ProgramKey>("open-explore", {
                          detail: item.slug as ProgramKey,
                        })
                      )
                    }
                    className="mt-5 text-[#C96A2B] text-sm font-medium hover:tracking-wide transition-all"
                  >
                    Explore →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* EXPLORE PANEL */}
      {active && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 px-6">
          <div className="max-w-4xl w-full bg-[#111] border border-white/10 rounded-2xl p-10">
            <button
              onClick={() => setActive(null)}
              className="text-[#A3B18A] mb-6"
            >
              ← Back
            </button>

            <h2 className="text-3xl font-bold text-white">
              {active.title}
            </h2>

            <p className="mt-6 text-white/70 leading-relaxed whitespace-pre-line">
              {active.full}
            </p>

            <div className="mt-8 w-16 h-1 bg-[#C96A2B] rounded-full" />
          </div>
        </div>
      )}
    </section>
  );
}