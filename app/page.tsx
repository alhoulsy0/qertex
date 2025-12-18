import { NavBar } from "@/components/ui/NavBar";
import { Hero } from "@/components/sections/Hero";
import { TrustSection } from "@/components/sections/TrustSection";
import { ServiceQuadrant } from "@/components/sections/ServiceQuadrant";
import { InnovationHub } from "@/components/sections/InnovationHub";
import { Academy } from "@/components/sections/Academy";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { Footer } from "@/components/sections/Footer";
import { Chatbot } from "@/components/ui/Chatbot";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden selection:bg-[var(--color-cobalt)] selection:text-white">
      <NavBar />
      <Hero />
      <TrustSection />
      <ServiceQuadrant />
      <InnovationHub />
      <Academy />
      <PortfolioGrid />
      <Footer />
      <Chatbot />
    </main>
  );
}
