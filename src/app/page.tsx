"use client";

import { Analytics } from "@vercel/analytics/next";
import { useState } from "react";
import Navbar from "@/features/navigation/Navbar";
import Hero from "@/features/hero/Hero";
import PortfolioCarousel from "@/features/portfolio/PortfolioCarousel";
import ServicesSection from "@/features/services/ServicesSection";
import CtaBanner from "@/features/cta/CtaBanner";
import Footer from "@/features/footer/Footer";
import Gallery from "@/features/gallery/Gallery";
import AboutModal from "@/features/about/AboutModal";
import ContactModal from "@/features/contact/ContactModal";
import ScrollToTopButton from "@/shared/components/ScrollToTopButton";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-100 select-none">
      <main
        className="min-h-screen w-full relative overflow-x-hidden bg-gradient-to-b from-zinc-200 via-zinc-100 to-zinc-200 shadow-[inset_60px_0_80px_-40px_rgba(0,0,0,0.1),inset_-60px_0_80px_-40px_rgba(0,0,0,0.1)]">

          {/* Textura de Fundo (Dot Pattern) */}
          <div className="absolute inset-0 bg-[radial-gradient(theme(colors.zinc.400)_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.15] pointer-events-none" />

          <Analytics />
          <h1 className="sr-only">Inovart Design Gráfico e Artes Digitais</h1>

          <Navbar
            onAboutClick={() => setAboutOpen(true)}
            onContactClick={() => setContactOpen(true)}
            onGalleryClick={() => setGalleryOpen(true)}
          />

          {/* Espaçador para compensar a navegação fixa */}
          <div className="h-20 md:h-24" />

          <Hero onContactClick={() => setContactOpen(true)} />

          {/* Luzes Desfocadas no Fundo */}
          <div className="absolute top-20 left-0 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-60 right-0 w-96 h-96 bg-pink-500/15 rounded-full blur-[100px] pointer-events-none" />

          <PortfolioCarousel />

          <ServicesSection />

          <CtaBanner onContactClick={() => setContactOpen(true)} />

          <Footer />

          <Gallery
            isOpen={galleryOpen}
            onClose={() => setGalleryOpen(false)}
          />

          <AboutModal
            isOpen={aboutOpen}
            onClose={() => setAboutOpen(false)}
          />

          <ContactModal
            isOpen={contactOpen}
            onClose={() => setContactOpen(false)}
          />

          <ScrollToTopButton />
      </main>
    </div>
  );
}
