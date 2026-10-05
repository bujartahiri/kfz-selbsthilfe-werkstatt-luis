import React from "react";
import Image from "next/image";
import { Wrench, Layers, ShieldCheck, Banknote } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function Positioning() {
  return (
    <section id="konzept" className="py-20 md:py-28 border-b border-[#242935] bg-[#0c0d10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Visual tension with authentic photo & technical specs */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative border border-[#242935] bg-[#14161c] p-2 rounded-sm technical-corner">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2px] bg-[#0d0f12]">
                <Image
                  src="/images/workshop/tool-cart.jpg"
                  alt="Profi-Werkzeugwagen der KFZ Selbsthilfe Werkstatt Luis"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-transparent opacity-70" />

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-[11px] font-mono text-[#d4f82a] uppercase tracking-wider mb-1">
                    [WERKSTATT-INVENTAR]
                  </div>
                  <div className="text-sm font-bold text-[#f4f3ef] uppercase tracking-tight">
                    Inklusive Werkzeugwagen bei jeder Miete
                  </div>
                </div>
              </div>

              <div className="mt-3 px-2 py-1 text-[11px] font-mono text-[#8e95a3] flex justify-between border-t border-[#242935]">
                <span>STANDORT: TELTOW</span>
                <span>TÜV-HUBTECHNIK</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <div className="mb-4">
              <Badge variant="accent" dot>
                DAS KONZEPT // SELBSTHILFE
              </Badge>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#f4f3ef] uppercase leading-[1.05] font-mono">
              DEIN AUTO.
              <span className="block text-[#d4f82a]">DEINE ARBEIT.</span>
              UNSERE WERKSTATT.
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-[#8e95a3] font-normal leading-relaxed">
              <p>
                Viele Autobesitzer und Hobbyschrauber kennen das Problem: Man weiß genau, wie Bremsen, Ölfilter oder Stoßdämpfer gewechselt werden – aber auf dem Hof oder in der Garage fehlen Hebebühne, passendes Spezialwerkzeug und sichere Entsorgung.
              </p>
              <p className="text-[#f4f3ef] font-medium">
                Genau hier setzt die KFZ Selbsthilfe Werkstatt Luis an: Du schraubst selbst an deinem Fahrzeug, wir stellen dir die professionelle Infrastruktur zur Verfügung.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="bg-[#14161c] border border-[#242935] p-5 rounded-sm hover:border-[#363d4e] transition-colors">
                <div className="w-9 h-9 rounded-sm bg-[#1e222c] border border-[#2c3342] flex items-center justify-center text-[#d4f82a] mb-3">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#f4f3ef] uppercase tracking-wide font-mono">
                  Profiausstattung bereit
                </h3>
                <p className="mt-1.5 text-xs text-[#8e95a3] leading-relaxed">
                  Steckschlüssel, Ratschen, Hebebühnen und Druckluft – kein zeitraubendes Suchen oder Improvisieren.
                </p>
              </div>

              <div className="bg-[#14161c] border border-[#242935] p-5 rounded-sm hover:border-[#363d4e] transition-colors">
                <div className="w-9 h-9 rounded-sm bg-[#1e222c] border border-[#2c3342] flex items-center justify-center text-[#d4f82a] mb-3">
                  <Banknote className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#f4f3ef] uppercase tracking-wide font-mono">
                  Werkstattkosten halbieren
                </h3>
                <p className="mt-1.5 text-xs text-[#8e95a3] leading-relaxed">
                  Du zahlst nur die tatsächliche Mietzeit der Hebebühne (ab 20 €/h). Keine teuren Arbeitsstunden-Rechnungen.
                </p>
              </div>

              <div className="bg-[#14161c] border border-[#242935] p-5 rounded-sm hover:border-[#363d4e] transition-colors">
                <div className="w-9 h-9 rounded-sm bg-[#1e222c] border border-[#2c3342] flex items-center justify-center text-[#d4f82a] mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#f4f3ef] uppercase tracking-wide font-mono">
                  Sicher in Stehhöhe
                </h3>
                <p className="mt-1.5 text-xs text-[#8e95a3] leading-relaxed">
                  Kein gefährliches Aufbocken mit Wagenhebern. Unsere TÜV-geprüften Bühnen heben sicher bis 4 Tonnen.
                </p>
              </div>

              <div className="bg-[#14161c] border border-[#242935] p-5 rounded-sm hover:border-[#363d4e] transition-colors">
                <div className="w-9 h-9 rounded-sm bg-[#1e222c] border border-[#2c3342] flex items-center justify-center text-[#d4f82a] mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#f4f3ef] uppercase tracking-wide font-mono">
                  Werkstattservice optional
                </h3>
                <p className="mt-1.5 text-xs text-[#8e95a3] leading-relaxed">
                  Achsvermessung, Reifenmontage oder Klimawartung führen wir auf Wunsch gerne direkt für dich durch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
