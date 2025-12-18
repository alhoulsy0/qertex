import { NavBar } from "@/components/ui/NavBar";
import { Hero } from "@/components/sections/Hero";
import { ServiceQuadrant } from "@/components/sections/ServiceQuadrant";
import { TriBridge } from "@/components/sections/TriBridge";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden selection:bg-[var(--color-cobalt)] selection:text-white">
      <NavBar />
      <Hero />
      <ServiceQuadrant />
      <TriBridge />
      <Footer />
    </main>
  );
}
