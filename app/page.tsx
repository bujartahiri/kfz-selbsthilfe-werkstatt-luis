"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { ServicesCatalogue } from "@/components/sections/ServicesCatalogue";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WorkshopShowcase } from "@/components/sections/WorkshopShowcase";
import { WorkshopRules } from "@/components/sections/WorkshopRules";
import { FAQ } from "@/components/sections/FAQ";
import { LocationContact } from "@/components/sections/LocationContact";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileBar } from "@/components/ui/StickyMobileBar";
import { Modal } from "@/components/ui/Modal";
import { ImpressumContent } from "@/components/legal/ImpressumContent";
import { DatenschutzContent } from "@/components/legal/DatenschutzContent";
import { AGBContent } from "@/components/legal/AGBContent";

export default function Home() {
  const [modalState, setModalState] = useState<"impressum" | "datenschutz" | "agb" | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-[#0d0f12]">
      {/* Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* The DIY Concept Positioning */}
        <Positioning />

        {/* Confirmed Services & Transparent Pricing */}
        <ServicesCatalogue />

        {/* 3-Step Process Pipeline */}
        <HowItWorks />

        {/* Real Workshop Photography & Equipment Details */}
        <WorkshopShowcase />

        {/* Safety Rules & Operation Limits */}
        <WorkshopRules onOpenAGB={() => setModalState("agb")} />

        {/* Verified FAQs */}
        <FAQ />

        {/* Location, Directions, and Hours */}
        <LocationContact />
      </main>

      {/* Footer with Legal Triggers */}
      <Footer
        onOpenImpressum={() => setModalState("impressum")}
        onOpenDatenschutz={() => setModalState("datenschutz")}
        onOpenAGB={() => setModalState("agb")}
      />

      {/* Sticky Bottom Conversion Bar for Mobile Devices */}
      <StickyMobileBar />

      {/* Legal Modals */}
      <Modal
        isOpen={modalState === "impressum"}
        onClose={() => setModalState(null)}
        title="Impressum"
      >
        <ImpressumContent />
      </Modal>

      <Modal
        isOpen={modalState === "datenschutz"}
        onClose={() => setModalState(null)}
        title="Datenschutzerklärung"
      >
        <DatenschutzContent />
      </Modal>

      <Modal
        isOpen={modalState === "agb"}
        onClose={() => setModalState(null)}
        title="Allgemeine Geschäfts- & Werkstattbedingungen"
      >
        <AGBContent />
      </Modal>
    </div>
  );
}
