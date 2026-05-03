import Image from "next/image";
import { notFound } from "next/navigation";

const programs: Record<string, any> = {
  "strength-foundation": {
    title: "Strength Foundation",
    desc: `Strength Foundation is a structured training system designed to build raw strength, control, and long-term physical resilience.

It focuses on progressive overload, compound movements, and stability training to build a strong base for all athletic performance.

You develop better posture, stronger lifts, and improved muscle coordination over time.`,
    img: "/assets/strength.jpg",
  },

  "fat-loss-system": {
    title: "Fat Loss System",
    desc: `Fat Loss System is a high-intensity training protocol designed to burn fat while preserving lean muscle.

It combines resistance training and metabolic conditioning for maximum calorie burn and afterburn effect.

This system helps you transform your body composition efficiently and sustainably.`,
    img: "/assets/fatloss.jpg",
  },
};

export default function ProgramPage({
  params,
}: {
  params: { slug: string };
}) {
  const program = programs[params.slug];

  if (!program) return notFound();

  return (
    <div className="min-h-screen bg-[#F5EFE6] pt-28 px-6">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* IMAGE */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={program.img}
            alt={program.title}
            fill
            className="object-cover"
          />
        </div>

        {/* TEXT */}
        <div>
          <h1 className="text-4xl font-bold text-[#2F2F2F]">
            {program.title}
          </h1>

          <p className="mt-6 text-[#5a5a5a] leading-relaxed whitespace-pre-line">
            {program.desc}
          </p>
        </div>

      </div>
    </div>
  );
}