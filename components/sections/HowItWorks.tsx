import React from "react";
import { WORKSHOP_STEPS, BUSINESS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Calendar, ArrowRight, CornerDownRight } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="ablauf" className="py-20 md:py-28 border-b border-[#242935] bg-[#0c0d10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          tag="WORKFLOW // SCHRITT FÜR SCHRITT"
          title="SO FUNKTIONIERT DIE MIETWERKSTATT"
          description="In drei einfachen Schritten vom freien Hebebühnen-Slot zur fertigen Reparatur an deinem Fahrzeug."
        />

        {/* Industrial Pipeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {WORKSHOP_STEPS.map((step, idx) => (
            <div
              key={step.num}
              className="relative bg-[#14161c] border border-[#242935] p-7 sm:p-8 rounded-sm technical-corner flex flex-col justify-between group hover:border-[#363d4e] transition-all"
            >
              <div>
                {/* Number & Tag Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-[#242935] mb-6">
                  <span className="text-3xl sm:text-4xl font-black text-[#d4f82a] font-mono tracking-tighter">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-[#8e95a3] uppercase bg-[#1d212a] px-2 py-0.5 rounded-[2px] border border-[#2b3140]">
                    [{step.tag}]
                  </span>
                </div>

                <div className="text-xs font-mono text-[#d4f82a] uppercase tracking-wider mb-1 flex items-center gap-1">
                  <CornerDownRight className="w-3.5 h-3.5" />
                  <span>{step.subtitle}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f4f3ef] uppercase font-mono mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-[#8e95a3] font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-8 pt-4 border-t border-[#242935] flex items-center justify-between text-[11px] font-mono text-[#5b6271]">
                <span>PHASE {idx + 1} VON 3</span>
                <span className="text-[#d4f82a] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  BEREIT <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Booking Callout Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#14161c] to-[#1a1e27] border border-[#242935] p-6 sm:p-8 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono text-[#d4f82a] uppercase tracking-wider mb-1">
              [DIREKTE RESERVIERUNG]
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#f4f3ef] uppercase font-mono">
              Hebebühne für heute oder diese Woche sichern
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-[#8e95a3]">
              Kein Warten vor verschlossenen Toren: Buche deinen Wunschzeitraum vorab verbindlich online.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
            <Button
              href={BUSINESS.bookingUrl}
              isExternal
              variant="primary"
              size="md"
              icon={<Calendar className="w-4 h-4" />}
              iconPosition="left"
              className="text-center"
            >
              JETZT TERMIN WÄHLEN
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
