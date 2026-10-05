import React from "react";
import { WORKSHOP_RULES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  ShieldAlert,
  UserCheck,
  Wrench,
  Sparkles,
  Ban,
  Coins,
} from "lucide-react";

const ICON_MAP = {
  ShieldAlert,
  UserCheck,
  Wrench,
  Sparkles,
  Ban,
  Coins,
};

interface WorkshopRulesProps {
  onOpenAGB?: () => void;
}

export function WorkshopRules({ onOpenAGB }: WorkshopRulesProps) {
  return (
    <section id="regeln" className="py-20 md:py-28 border-b border-[#242935] bg-[#0c0d10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          tag="SICHERHEIT // WERKSTATT-ORDNUNG"
          title="REGELN FÜR SICHERES ARBEITEN"
          description="Damit jeder Schrauber sicher, zügig und unfallfrei arbeiten kann, gelten in unserer Werkstatt klare Spielregeln."
        />

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKSHOP_RULES.map((rule, idx) => {
            const IconComponent =
              ICON_MAP[rule.icon as keyof typeof ICON_MAP] || ShieldAlert;

            return (
              <div
                key={idx}
                className="bg-[#14161c] border border-[#242935] p-6 rounded-sm technical-corner flex flex-col justify-between hover:border-[#383f4f] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-sm bg-[#1e222c] border border-[#2c3342] flex items-center justify-center text-[#d4f82a]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#5b6271]">
                      REGEL 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#f4f3ef] uppercase tracking-tight font-mono mb-2">
                    {rule.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8e95a3] leading-relaxed">
                    {rule.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Link to Full Legal AGB */}
        {onOpenAGB && (
          <div className="mt-8 text-center">
            <button
              onClick={onOpenAGB}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#d4f82a] hover:underline uppercase tracking-wider"
            >
              [Vollständige AGB & Haftungsausschluss anzeigen →]
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
