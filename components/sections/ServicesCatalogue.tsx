"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Calendar, Phone } from "lucide-react";
import { SERVICES, BUSINESS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function ServicesCatalogue() {
  const [activeTab, setActiveTab] = useState<"all" | "diy" | "service">("all");

  const filteredServices = SERVICES.filter((service) => {
    if (activeTab === "all") return true;
    if (activeTab === "diy") return service.category.includes("DIY");
    if (activeTab === "service") return service.category.includes("Werkstattservice");
    return true;
  });

  return (
    <section id="leistungen" className="py-20 md:py-28 border-b border-[#242935] bg-[#0d0f12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6">
          <SectionHeader
            tag="PREISKATALOG // TRANSPARENZ"
            title="LEISTUNGEN & PREISE"
            description="Faire, transparente Stundensätze und Festpreise ohne versteckte Kosten. Abrechnung erfolgt vor Ort in bar."
            className="mb-0"
          />

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-[#14161c] border border-[#242935] rounded-sm self-start shrink-0 font-mono text-xs">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1.5 rounded-[2px] transition-all font-medium ${
                activeTab === "all"
                  ? "bg-[#d4f82a] text-[#0d0f12] font-bold shadow-sm"
                  : "text-[#8e95a3] hover:text-[#f4f3ef]"
              }`}
            >
              ALLE LEISTUNGEN
            </button>
            <button
              onClick={() => setActiveTab("diy")}
              className={`px-3 py-1.5 rounded-[2px] transition-all font-medium ${
                activeTab === "diy"
                  ? "bg-[#d4f82a] text-[#0d0f12] font-bold shadow-sm"
                  : "text-[#8e95a3] hover:text-[#f4f3ef]"
              }`}
            >
              SELBST SCHRAUBEN (DIY)
            </button>
            <button
              onClick={() => setActiveTab("service")}
              className={`px-3 py-1.5 rounded-[2px] transition-all font-medium ${
                activeTab === "service"
                  ? "bg-[#d4f82a] text-[#0d0f12] font-bold shadow-sm"
                  : "text-[#8e95a3] hover:text-[#f4f3ef]"
              }`}
            >
              WERKSTATTSERVICE
            </button>
          </div>
        </div>

        {/* Custom Automotive Service Catalogue Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const isFeatured = service.featured;

            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-sm border transition-all duration-200 ${
                  isFeatured
                    ? "bg-[#14161c] border-[#363d4e] shadow-lg hover:border-[#d4f82a]"
                    : "bg-[#101217] border-[#222631] hover:border-[#323948]"
                } technical-corner group`}
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#8e95a3]">
                      {service.category}
                    </span>
                    <Badge variant={isFeatured ? "accent" : "muted"}>
                      {service.badge}
                    </Badge>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f4f3ef] uppercase font-mono group-hover:text-[#d4f82a] transition-colors">
                    {service.title}
                  </h3>

                  {/* Price Block */}
                  <div className="mt-4 pb-4 border-b border-[#242935]">
                    <div className="flex items-baseline gap-1.5 font-mono">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#f4f3ef] tracking-tight">
                        {service.price}
                      </span>
                      <span className="text-xs text-[#8e95a3] uppercase tracking-wider">
                        / {service.unit}
                      </span>
                    </div>
                    <div className="text-[11px] font-mono text-[#5b6271] mt-0.5">
                      {service.priceNote}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-[#8e95a3] leading-relaxed">
                    {service.description}
                  </p>

                  {/* What is Included List */}
                  <ul className="mt-5 space-y-2.5">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#f4f3ef]/90">
                        <Check className="w-4 h-4 text-[#d4f82a] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="mt-8 pt-5 border-t border-[#242935]/80">
                  {service.id === "achsvermessung" ? (
                    <div className="flex flex-col gap-2">
                      <Button
                        href={BUSINESS.bookingUrl}
                        isExternal
                        variant="primary"
                        size="md"
                        className="w-full text-center"
                        icon={<Calendar className="w-4 h-4" />}
                        iconPosition="left"
                      >
                        TERMIN VORANMELDEN
                      </Button>
                      <a
                        href={`tel:${BUSINESS.phone.clean}`}
                        className="text-center text-[11px] font-mono text-[#8e95a3] hover:text-[#d4f82a] py-1 flex items-center justify-center gap-1.5"
                      >
                        <Phone className="w-3 h-3 text-[#d4f82a]" />
                        <span>Oder telefonisch: {BUSINESS.phone.display}</span>
                      </a>
                    </div>
                  ) : (
                    <Button
                      href={BUSINESS.bookingUrl}
                      isExternal
                      variant={isFeatured ? "primary" : "secondary"}
                      size="md"
                      className="w-full text-center"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      {service.ctaText}
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Transparency Note */}
        <div className="mt-10 p-5 bg-[#14161c] border border-[#242935] rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#8e95a3]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#d4f82a]" aria-hidden="true" />
            <span>
              <strong>Zahlungshinweis:</strong> Die Abrechnung erfolgt minutengenau nach Nutzungsdauer vor Ort in bar.
            </span>
          </div>
          <div className="text-[11px] text-[#5b6271]">
            KEINE VERSTECKTEN PAUSCHALEN · KEINE ABO-BINDUNG
          </div>
        </div>
      </div>
    </section>
  );
}
