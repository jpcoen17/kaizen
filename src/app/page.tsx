// src/app/page.tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PricelistSection } from "@/components/sections/PricelistSection";
import { InformationSection } from "@/components/sections/InformationSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ReservationSection } from "@/components/sections/ReservationSection";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PricelistSection />
      <InformationSection />
      <MenuSection />
      <GallerySection />
      <LocationsSection />
      <ReservationSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
