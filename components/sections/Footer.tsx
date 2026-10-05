"use client";

import React from "react";
import Link from "next/link";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { Phone, Calendar, MapPin, Clock } from "lucide-react";

interface FooterProps {
  onOpenImpressum?: () => void;
  onOpenDatenschutz?: () => void;
  onOpenAGB?: () => void;
}

export function Footer({
  onOpenImpressum,
  onOpenDatenschutz,
  onOpenAGB,
}: FooterProps) {
  return (
    <footer className="bg-[#08090b] border-t border-[#1b1e25] text-xs font-mono text-[#8e95a3] pt-14 pb-20 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1b1e25]">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-[#f4f3ef] tracking-tighter">
                {BUSINESS.shortName}
              </span>
              <span className="text-[11px] tracking-widest text-[#8e95a3] uppercase -mt-0.5">
                {BUSINESS.descriptor}
              </span>
            </div>

            <p className="mt-4 text-xs text-[#8e95a3] leading-relaxed max-w-sm font-sans">
              Deine professionelle Selbsthilfewerkstatt in Teltow. TÜV-geprüfte Hebebühnen, Profi-Werkzeugwagen und Spezialausstattung für dein Auto.
            </p>

            <div className="mt-5 text-[11px] text-[#5b6271]">
              © {new Date().getFullYear()} {BUSINESS.name}. Alle Rechte vorbehalten.
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-[#f4f3ef] uppercase tracking-wider mb-3">
              STANDORT & KONTAKT
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#d4f82a] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#f4f3ef] font-medium">{BUSINESS.address.street}</p>
                <p>{BUSINESS.address.zip} {BUSINESS.address.city}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <Phone className="w-4 h-4 text-[#d4f82a] shrink-0" />
              <a
                href={`tel:${BUSINESS.phone.clean}`}
                className="text-[#f4f3ef] hover:text-[#d4f82a] transition-colors"
              >
                {BUSINESS.phone.display}
              </a>
            </div>

            <div className="flex items-start gap-2 pt-1">
              <Clock className="w-4 h-4 text-[#d4f82a] shrink-0 mt-0.5" />
              <div>
                <p>Mo–Sa: 09:00 – 20:00 Uhr</p>
                <p className="text-[#5b6271]">Sonntag: Geschlossen</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <div className="text-xs font-bold text-[#f4f3ef] uppercase tracking-wider mb-3">
              NAVIGATION
            </div>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#f4f3ef] transition-colors uppercase tracking-wider"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BUSINESS.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4f82a] hover:underline uppercase tracking-wider font-bold"
                >
                  Termin buchen →
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold text-[#f4f3ef] uppercase tracking-wider mb-3">
              RECHTLICHES
            </div>
            <ul className="space-y-2">
              <li>
                {onOpenImpressum ? (
                  <button
                    onClick={onOpenImpressum}
                    className="hover:text-[#f4f3ef] transition-colors uppercase tracking-wider text-left"
                  >
                    Impressum
                  </button>
                ) : (
                  <Link href="/impressum" className="hover:text-[#f4f3ef] transition-colors uppercase tracking-wider">
                    Impressum
                  </Link>
                )}
              </li>
              <li>
                {onOpenDatenschutz ? (
                  <button
                    onClick={onOpenDatenschutz}
                    className="hover:text-[#f4f3ef] transition-colors uppercase tracking-wider text-left"
                  >
                    Datenschutzerklärung
                  </button>
                ) : (
                  <Link href="/datenschutz" className="hover:text-[#f4f3ef] transition-colors uppercase tracking-wider">
                    Datenschutzerklärung
                  </Link>
                )}
              </li>
              <li>
                {onOpenAGB ? (
                  <button
                    onClick={onOpenAGB}
                    className="hover:text-[#f4f3ef] transition-colors uppercase tracking-wider text-left"
                  >
                    AGB & Werkstattordnung
                  </button>
                ) : (
                  <Link href="/agb" className="hover:text-[#f4f3ef] transition-colors uppercase tracking-wider">
                    AGB & Werkstattordnung
                  </Link>
                )}
              </li>
            </ul>

            <div className="mt-5 p-3 bg-[#111317] border border-[#1b1e25] rounded-[2px] text-[11px] text-[#5b6271]">
              Abrechnung vor Ort ausschließlich in bar. Keine EC- oder Kreditkartenzahlung.
            </div>
          </div>
        </div>

        {/* Bottom Technical Line */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#5b6271]">
          <div>
            KFZ SELBSTHILFE WERKSTATT LUIS · RUHLSDORFER STR. 105 · 14513 TELTOW
          </div>
          <div>
            DEUTSCHES HANDWERK & INDUSTRIESTANDARD
          </div>
        </div>
      </div>
    </footer>
  );
}
