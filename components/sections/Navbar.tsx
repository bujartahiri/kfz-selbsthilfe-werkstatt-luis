"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar, ArrowUpRight } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-200">
      {/* Top Technical Info Bar */}
      <div className="hidden lg:block bg-[#08090b] border-b border-[#1b1e25] text-[11px] font-mono text-[#8e95a3] px-6 py-1.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4f82a]" aria-hidden="true" />
              <span>TELTOW · RUHLSDORFER STR. 105</span>
            </span>
            <span>MO–SA: 09:00–20:00 UHR</span>
            <span className="text-[#5b6271]">|</span>
            <span>TÜV-GEPRÜFTE HEBEBÜHNEN & WERKZEUG</span>
          </div>
          <div className="flex items-center gap-4 text-[#8e95a3]">
            <span className="flex items-center gap-1.5 text-[#f4f3ef]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4f82a]" aria-hidden="true" />
              <span>BARZAHLUNG VOR ORT</span>
            </span>
            <span className="text-[#5b6271]">|</span>
            <span className="text-[#d4f82a] font-medium">ONLINE-TERMINE VERFÜGBAR</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`px-4 sm:px-6 md:px-8 py-3.5 transition-all duration-200 ${
          scrolled
            ? "bg-[#0d0f12]/95 backdrop-blur-md border-b border-[#242935] shadow-lg shadow-black/40"
            : "bg-[#0d0f12]/75 backdrop-blur-sm border-b border-[#242935]/60"
        }`}
        aria-label="Hauptnavigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Typographic Wordmark Identity */}
          <Link href="/" className="group flex flex-col focus-visible:outline-none">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-black tracking-tighter text-[#f4f3ef] group-hover:text-[#d4f82a] transition-colors font-mono">
                {BUSINESS.shortName}
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest text-[#d4f82a] uppercase bg-[#181c22] border border-[rgba(212,248,42,0.3)] px-1.5 py-0.5 rounded-[2px]">
                TELTOW
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#8e95a3] uppercase -mt-0.5 group-hover:text-[#f4f3ef] transition-colors">
              {BUSINESS.descriptor}
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase font-mono tracking-wider text-[#8e95a3] hover:text-[#f4f3ef] transition-colors focus-visible:outline-none focus-visible:text-[#d4f82a]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phone.clean}`}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-mono tracking-wider text-[#8e95a3] hover:text-[#f4f3ef] hover:bg-[#1a1e26] border border-transparent hover:border-[#2b3140] rounded-sm transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4f82a]" />
              <span>{BUSINESS.phone.display}</span>
            </a>

            <Button
              href={BUSINESS.bookingUrl}
              isExternal
              variant="primary"
              size="sm"
              icon={<Calendar className="w-3.5 h-3.5" />}
              iconPosition="left"
            >
              HEBEBÜHNE BUCHEN
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={BUSINESS.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold font-mono tracking-wider px-3 py-2 bg-[#d4f82a] text-[#0d0f12] rounded-sm active:scale-95 transition-transform"
            >
              BUCHEN
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={mobileMenuOpen}
              className="p-2 text-[#8e95a3] hover:text-[#f4f3ef] hover:bg-[#1a1e26] rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4f82a]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0f12] border-b border-[#242935] px-6 py-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            <div className="pb-3 border-b border-[#1f232d] flex justify-between items-center text-xs font-mono text-[#8e95a3]">
              <span>STANDORT: TELTOW</span>
              <span className="text-[#d4f82a]">MO–SA 09–20 UHR</span>
            </div>

            <div className="flex flex-col gap-3 py-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold tracking-tight text-[#f4f3ef] hover:text-[#d4f82a] py-1 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#5b6271]" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#1f232d] flex flex-col gap-2.5">
              <Button
                href={BUSINESS.bookingUrl}
                isExternal
                variant="primary"
                size="md"
                className="w-full text-center"
                icon={<Calendar className="w-4 h-4" />}
                iconPosition="left"
              >
                HEBEBÜHNE ONLINE BUCHEN
              </Button>
              <Button
                href={`tel:${BUSINESS.phone.clean}`}
                variant="secondary"
                size="md"
                className="w-full text-center"
                icon={<Phone className="w-4 h-4 text-[#d4f82a]" />}
                iconPosition="left"
              >
                JETZT ANRUFEN ({BUSINESS.phone.display})
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
