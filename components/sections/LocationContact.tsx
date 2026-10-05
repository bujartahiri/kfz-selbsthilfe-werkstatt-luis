import React from "react";
import { BUSINESS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  MapPin,
  Clock,
  Phone,
  Calendar,
  Navigation,
  MessageSquare,
  Car,
  Compass,
} from "lucide-react";

export function LocationContact() {
  return (
    <section id="kontakt" className="py-20 md:py-28 border-b border-[#242935] bg-[#0c0d10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          tag="STANDORT // KONTAKT"
          title="ANFAHRT & ÖFFNUNGSZEITEN"
          description="Zentral gelegen in Teltow, schnell erreichbar aus Berlin-Steglitz, Zehlendorf, Kleinmachnow, Stahnsdorf und Potsdam."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact & Hours Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Address Box */}
            <div className="bg-[#14161c] border border-[#242935] p-6 sm:p-7 rounded-sm technical-corner">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-[#5b6271] uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#d4f82a]" /> WERKSTATT-ADRESSE
                </span>
                <Badge variant="accent">TELTOW</Badge>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#f4f3ef] font-mono uppercase">
                {BUSINESS.name}
              </h3>
              <p className="mt-1 text-base text-[#8e95a3]">
                {BUSINESS.address.street}
              </p>
              <p className="text-base text-[#8e95a3]">
                {BUSINESS.address.zip} {BUSINESS.address.city}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  href={BUSINESS.mapsUrl}
                  isExternal
                  variant="primary"
                  size="md"
                  icon={<Navigation className="w-4 h-4" />}
                  iconPosition="left"
                >
                  ROUTE IN MAPS PLANEN
                </Button>
                <Button
                  href={`tel:${BUSINESS.phone.clean}`}
                  variant="secondary"
                  size="md"
                  icon={<Phone className="w-4 h-4 text-[#d4f82a]" />}
                  iconPosition="left"
                >
                  {BUSINESS.phone.display}
                </Button>
              </div>
            </div>

            {/* Opening Hours Box */}
            <div className="bg-[#14161c] border border-[#242935] p-6 sm:p-7 rounded-sm technical-corner">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-[#5b6271] uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#d4f82a]" /> ÖFFNUNGSZEITEN
                </span>
                <span className="w-2 h-2 rounded-full bg-[#d4f82a]" />
              </div>

              <div className="space-y-3 font-mono">
                {BUSINESS.hours.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-2 border-b border-[#242935] text-xs sm:text-sm"
                  >
                    <span className="text-[#8e95a3]">{item.days}</span>
                    <span
                      className={`font-semibold ${
                        item.open ? "text-[#f4f3ef]" : "text-[#5b6271]"
                      }`}
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-2 flex items-center justify-between text-xs text-[#8e95a3] font-mono">
                <span>Zahlung: {BUSINESS.payment}</span>
                <span className="text-[#d4f82a]">[KEINE KARTENZAHLUNG]</span>
              </div>
            </div>
          </div>

          {/* Right Column: Directions & Map Link Card */}
          <div className="lg:col-span-6 bg-[#14161c] border border-[#242935] p-6 sm:p-8 rounded-sm technical-corner flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-[#5b6271] uppercase tracking-wider flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-[#d4f82a]" /> EINFACHE ANFAHRT
                </span>
                <span className="text-[11px] font-mono text-[#8e95a3]">
                  B101 / L40 SCHNELLANBINDUNG
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#f4f3ef] font-mono uppercase mb-4">
                GUTE ERREICHBARKEIT IM SÜDEN
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#8e95a3] leading-relaxed">
                <div className="p-3.5 bg-[#1b1e25] border border-[#262a34] rounded-sm">
                  <div className="font-bold text-[#f4f3ef] font-mono uppercase mb-1 flex items-center gap-1.5">
                    <Car className="w-4 h-4 text-[#d4f82a]" /> Aus Berlin-Steglitz / Zehlendorf:
                  </div>
                  <div>Über die Potsdamer Chaussee / L40 in ca. 12–15 Minuten direkt zum Gewerbegebiet Teltow.</div>
                </div>

                <div className="p-3.5 bg-[#1b1e25] border border-[#262a34] rounded-sm">
                  <div className="font-bold text-[#f4f3ef] font-mono uppercase mb-1 flex items-center gap-1.5">
                    <Car className="w-4 h-4 text-[#d4f82a]" /> Aus Potsdam / Babelsberg:
                  </div>
                  <div>Über die Nuthe-Schnellstraße / L40 Ausfahrt Teltow in ca. 15–18 Minuten.</div>
                </div>

                <div className="p-3.5 bg-[#1b1e25] border border-[#262a34] rounded-sm">
                  <div className="font-bold text-[#f4f3ef] font-mono uppercase mb-1 flex items-center gap-1.5">
                    <Car className="w-4 h-4 text-[#d4f82a]" /> Aus Kleinmachnow & Stahnsdorf:
                  </div>
                  <div>In nur 5–8 Minuten direkt erreichbar. Ausreichend Park- und Rangiermöglichkeit auf dem Hof.</div>
                </div>
              </div>
            </div>

            {/* Direct Interaction Actions */}
            <div className="mt-8 pt-6 border-t border-[#242935] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                href={BUSINESS.bookingUrl}
                isExternal
                variant="primary"
                size="md"
                icon={<Calendar className="w-4 h-4" />}
                iconPosition="left"
                className="w-full sm:flex-1 text-center"
              >
                TERMIN BUCHEN
              </Button>

              <Button
                href={BUSINESS.whatsappUrl}
                isExternal
                variant="secondary"
                size="md"
                icon={<MessageSquare className="w-4 h-4 text-[#d4f82a]" />}
                iconPosition="left"
                className="w-full sm:flex-1 text-center"
              >
                WHATSAPP ANFRAGE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
