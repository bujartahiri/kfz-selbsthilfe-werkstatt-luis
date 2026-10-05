"use client";

import React, { useState } from "react";
import Image from "next/image";
import { WORKSHOP_GALLERY } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Maximize2, ShieldCheck, Wrench, Eye } from "lucide-react";

export function WorkshopShowcase() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  return (
    <section id="werkstatt" className="py-20 md:py-28 border-b border-[#242935] bg-[#0d0f12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          tag="AUSSTATTUNG // ECHTE EINBLICKE"
          title="DIE WERKSTATT IN TELTOW"
          description="100% echte Aufnahmen aus unserer Halle: TÜV-geprüfte Hebebühnen, Spezialwerkzeuge, Reifenmontage und modernste 3D-Achsmesstechnik."
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKSHOP_GALLERY.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-[#14161c] border border-[#242935] hover:border-[#383f4f] p-2.5 rounded-sm transition-all flex flex-col technical-corner"
            >
              {/* Image Frame */}
              <div
                className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-[#0c0d10] cursor-pointer"
                onClick={() => setActivePhoto(idx)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Category Pill Over Image */}
                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[10px] font-mono tracking-wider text-[#0d0f12] bg-[#d4f82a] font-bold px-2 py-0.5 rounded-[2px]">
                    {item.category}
                  </span>
                </div>

                {/* Expand Overlay Icon */}
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-sm bg-[#0d0f12]/80 backdrop-blur-sm border border-[#242935] flex items-center justify-center text-[#f4f3ef] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Technical Caption Box */}
              <div className="mt-3 px-1 py-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#f4f3ef] uppercase font-mono tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#5b6271]">
                    [FOTO 0{idx + 1}]
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#8e95a3] font-mono">
                  {item.technical}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Highlights Badges */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#242935] text-xs font-mono text-[#8e95a3]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4f82a]" />
            <span>2-SÄULEN-BÜHNEN BIS 4 TONNEN</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4f82a]" />
            <span>PROFI-WERKZEUGWAGEN INKLUSIVE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4f82a]" />
            <span>3D-ACHSVERMESSUNGSSTAND</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4f82a]" />
            <span>KLIMA- & REIFENSERVICE VOR ORT</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#14161c] border border-[#242935] p-3 rounded-sm technical-corner"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full bg-[#0c0d10] rounded-[2px] overflow-hidden">
              <Image
                src={WORKSHOP_GALLERY[activePhoto].src}
                alt={WORKSHOP_GALLERY[activePhoto].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs font-mono px-2">
              <div>
                <span className="text-[#f4f3ef] font-bold">
                  {WORKSHOP_GALLERY[activePhoto].title}
                </span>{" "}
                <span className="text-[#8e95a3]">
                  · {WORKSHOP_GALLERY[activePhoto].technical}
                </span>
              </div>
              <button
                onClick={() => setActivePhoto(null)}
                className="text-xs font-mono text-[#d4f82a] hover:underline"
              >
                [SCHLIESSEN ✕]
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
