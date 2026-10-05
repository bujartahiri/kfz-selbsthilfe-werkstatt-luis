"use client";

import React, { useEffect, useState } from "react";
import { Phone, Calendar } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function StickyMobileBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Schnellzugriff Buchung und Anruf"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0d0f12]/95 backdrop-blur-md border-t border-[#242935] px-3.5 py-2.5 shadow-[0_-4px_25px_rgba(0,0,0,0.5)] transition-all duration-300 transform translate-y-0"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${BUSINESS.phone.clean}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-sm bg-[#1a1e26] text-[#f4f3ef] border border-[#2b3140] text-xs font-semibold tracking-wide active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-[#d4f82a]" />
          <span>ANRUFEN</span>
        </a>

        <a
          href={BUSINESS.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.5] flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-[#d4f82a] text-[#0d0f12] text-xs font-bold tracking-wide active:scale-95 transition-transform shadow-[0_0_15px_rgba(212,248,42,0.3)]"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>TERMIN BUCHEN</span>
        </a>
      </div>
    </aside>
  );
}
