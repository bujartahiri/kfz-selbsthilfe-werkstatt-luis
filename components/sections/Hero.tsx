import React from "react";
import Image from "next/image";
import { Calendar, ArrowDown, MapPin, Clock, Wrench, Navigation } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 border-b border-[#242935] overflow-hidden bg-grid-pattern">
      {/* Ambient subtle industrial backdrop lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#d4f82a]/5 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Technical location badge */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="accent" dot>
                SELBSTHILFE-WERKSTATT · TELTOW
              </Badge>
              <Badge variant="muted">
                BERLIN-SÜD / POTSDAM
              </Badge>
            </div>

            {/* Oversized Statement Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#f4f3ef] uppercase leading-[0.98] font-mono">
              DU SCHRAUBST.
              <span className="block text-[#d4f82a] mt-1">WIR STELLEN DEN RAUM.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 text-base sm:text-lg md:text-xl text-[#8e95a3] font-normal leading-relaxed max-w-xl">
              TÜV-geprüfte Hebebühnen, voll bestückter Werkzeugwagen und der nötige Platz für dein Fahrzeug – eigenständig reparieren mitten in Teltow.
            </p>

            {/* Primary & Secondary Conversions */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <Button
                href={BUSINESS.bookingUrl}
                isExternal
                variant="primary"
                size="lg"
                icon={<Calendar className="w-4 h-4" />}
                iconPosition="left"
                className="w-full sm:w-auto text-center"
              >
                HEBEBÜHNE BUCHEN
              </Button>

              <Button
                href="#leistungen"
                variant="secondary"
                size="lg"
                icon={<ArrowDown className="w-4 h-4 text-[#d4f82a]" />}
                iconPosition="right"
                className="w-full sm:w-auto text-center"
              >
                LEISTUNGEN & PREISE
              </Button>
            </div>

            {/* Quick Technical Specs Strip */}
            <div className="mt-10 pt-6 border-t border-[#242935] grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-[#5b6271] uppercase tracking-wider flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#d4f82a]" /> STANDORT
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#f4f3ef] mt-0.5">
                  Ruhlsdorfer Str. 105
                </span>
                <span className="text-[11px] text-[#8e95a3]">14513 Teltow</span>
              </div>

              <div className="flex flex-col">
                <span className="text-[11px] font-mono text-[#5b6271] uppercase tracking-wider flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#d4f82a]" /> ÖFFNUNGSZEITEN
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#f4f3ef] mt-0.5">
                  Mo–Sa 09:00–20:00
                </span>
                <span className="text-[11px] text-[#8e95a3]">Sonntag geschlossen</span>
              </div>

              <div className="col-span-2 sm:col-span-1 flex flex-col">
                <span className="text-[11px] font-mono text-[#5b6271] uppercase tracking-wider flex items-center gap-1">
                  <Wrench className="w-3 h-3 text-[#d4f82a]" /> PREISMODELL
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#d4f82a] mt-0.5">
                  ab 20 € / Stunde
                </span>
                <span className="text-[11px] text-[#8e95a3]">inkl. Werkzeugwagen</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Workshop Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative border border-[#242935] bg-[#14161c] p-2 rounded-sm shadow-2xl technical-corner group">
              {/* Technical framing header */}
              <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-[#242935] text-[10px] font-mono text-[#5b6271] mb-2">
                <span>WERKSTATTGELÄNDE // ZUFAHRT</span>
                <span className="text-[#d4f82a]">AUTHENTISCHES FOTO</span>
              </div>

              {/* Main Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-[#0d0f12]">
                <Image
                  src="/images/workshop/lift-bay.jpg"
                  alt="Einfahrt und Firmenschild der KFZ Selbsthilfe Werkstatt Luis an der Ruhlsdorfer Straße 105 in Teltow"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-transparent to-transparent opacity-80" />

                {/* Overlaid Badges */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                  <span className="bg-[#0d0f12]/90 backdrop-blur-sm border border-[#242935] px-2.5 py-1 text-[#f4f3ef] rounded-[2px]">
                    HAUPTZUFAHRT · RUHLSDORFER STR. 105
                  </span>
                  <span className="bg-[#d4f82a] text-[#0d0f12] px-2 py-1 font-bold rounded-[2px]">
                    STANDORT TELTOW
                  </span>
                </div>
              </div>

              {/* Secondary Detail Strip */}
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="bg-[#1b1e25] border border-[#262a34] p-2.5 rounded-[2px] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#d4f82a] shrink-0" />
                  <div>
                    <div className="text-[#f4f3ef] font-semibold text-[11px]">DIREKT AN DER STRASSE</div>
                    <div className="text-[10px] text-[#8e95a3]">Sofort gut erkennbar</div>
                  </div>
                </div>

                <div className="bg-[#1b1e25] border border-[#262a34] p-2.5 rounded-[2px] flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#d4f82a] shrink-0" />
                  <div>
                    <div className="text-[#f4f3ef] font-semibold text-[11px]">GROSSER WERKSTATTHOF</div>
                    <div className="text-[10px] text-[#8e95a3]">Bequemes Rangieren</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Anchor link to read more */}
            <div className="mt-4 flex justify-end">
              <a
                href="#konzept"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8e95a3] hover:text-[#d4f82a] transition-colors"
              >
                <span>WIE FUNKTIONIERT ES?</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
