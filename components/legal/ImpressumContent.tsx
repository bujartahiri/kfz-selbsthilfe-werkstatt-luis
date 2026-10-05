import React from "react";
import { BUSINESS } from "@/lib/constants";

export function ImpressumContent() {
  return (
    <div className="space-y-6 text-[#8e95a3]">
      <section>
        <h3 className="text-base font-bold text-[#f4f3ef] uppercase tracking-wide mb-2 font-mono">
          Angaben gemäß § 5 DDG (ehemals TMG)
        </h3>
        <p className="text-[#f4f3ef] font-semibold">{BUSINESS.name}</p>
        <p>{BUSINESS.address.street}</p>
        <p>{BUSINESS.address.zip} {BUSINESS.address.city}</p>
        <p>{BUSINESS.address.country}</p>
      </section>

      <section>
        <h3 className="text-base font-bold text-[#f4f3ef] uppercase tracking-wide mb-2 font-mono">
          Kontakt
        </h3>
        <p>Telefon: <a href={`tel:${BUSINESS.phone.clean}`} className="text-[#d4f82a] hover:underline">{BUSINESS.phone.display}</a></p>
        <p>Mobil / WhatsApp: <a href={`tel:${BUSINESS.phoneSecondary.clean}`} className="text-[#d4f82a] hover:underline">{BUSINESS.phoneSecondary.display}</a></p>
        <p>Standort: {BUSINESS.address.full}</p>
      </section>

      <section>
        <h3 className="text-base font-bold text-[#f4f3ef] uppercase tracking-wide mb-2 font-mono">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
        </h3>
        <p>{BUSINESS.name}</p>
        <p>{BUSINESS.address.street}</p>
        <p>{BUSINESS.address.zip} {BUSINESS.address.city}</p>
      </section>

      <section>
        <h3 className="text-base font-bold text-[#f4f3ef] uppercase tracking-wide mb-2 font-mono">
          EU-Streitschlichtung
        </h3>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#d4f82a] hover:underline"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          .
        </p>
        <p className="mt-2">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section>
        <h3 className="text-base font-bold text-[#f4f3ef] uppercase tracking-wide mb-2 font-mono">
          Haftung für Inhalte und Links
        </h3>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
      </section>
    </div>
  );
}
