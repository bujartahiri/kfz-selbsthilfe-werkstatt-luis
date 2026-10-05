import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImpressumContent } from "@/components/legal/ImpressumContent";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Impressum | KFZ Selbsthilfe Werkstatt Luis",
  description: "Impressum und rechtliche Angaben gemäß § 5 DDG für die KFZ Selbsthilfe Werkstatt Luis in Teltow.",
};

export default function ImpressumPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0d0f12]">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 pt-32 pb-20">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#d4f82a] hover:underline uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Zurück zur Startseite</span>
          </Link>
        </div>

        <div className="bg-[#14161c] border border-[#242935] p-6 sm:p-10 rounded-sm technical-corner">
          <h1 className="text-3xl font-black text-[#f4f3ef] uppercase tracking-tight font-mono mb-8 pb-4 border-b border-[#242935]">
            Impressum
          </h1>
          <ImpressumContent />
        </div>
      </main>
      <Footer />
    </div>
  );
}
