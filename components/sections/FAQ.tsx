"use client";

import React, { useState } from "react";
import { FAQS, BUSINESS } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 border-b border-[#242935] bg-[#0d0f12]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          tag="FAQ // FRAGEN & ANTWORTEN"
          title="HÄUFIG GESTELLTE FRAGEN"
          description="Alle wichtigen Antworten rund um Hebebühnenmiete, Werkzeugnutzung, Termine und Werkstattregeln."
          align="center"
        />

        {/* Accessible Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-[#14161c] border border-[#242935] rounded-sm overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  className="w-full text-left px-5 sm:px-6 py-4.5 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4f82a]"
                >
                  <span className="text-sm sm:text-base font-bold text-[#f4f3ef] font-mono uppercase tracking-tight">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#d4f82a] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#8e95a3] leading-relaxed border-t border-[#1d212a]"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-10 p-6 bg-[#14161c] border border-[#242935] rounded-sm text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#f4f3ef] uppercase font-mono">
              Deine Frage ist nicht dabei?
            </h4>
            <p className="text-xs text-[#8e95a3] mt-0.5">
              Ruf uns während der Öffnungszeiten einfach kurz an oder schreib uns bei WhatsApp.
            </p>
          </div>
          <a
            href={`tel:${BUSINESS.phone.clean}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1d212b] hover:bg-[#252a36] text-[#f4f3ef] text-xs font-mono font-bold border border-[#2c3342] rounded-sm transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4f82a]" />
            <span>{BUSINESS.phone.display}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
