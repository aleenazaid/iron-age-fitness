import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import GymPrograms from "@/sections/GymPrograms";
import Merch from "@/sections/Merch";
import Gallery from "@/sections/Gallery";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      <Navbar />
      <Hero />
      <GymPrograms />
      <Merch />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>
  );
}