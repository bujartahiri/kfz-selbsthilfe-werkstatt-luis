import React from "react";
import { BUSINESS } from "@/lib/constants";

export function DatenschutzContent() {
  return (
    <div className="space-y-6 text-[#8e95a3]">
      <section>
        <h3 className="text-base font-bold text-[#f4f3ef] uppercase tracking-wide mb-2 font-mono">
          1. Datenschutz auf einen Blick
        </h3>
        <p>
          Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
      </section>

      <section>
        <h3 className="text-base font-bold text-[#f4f3ef] uppercase tracking-wide mb-2 font-mono">
          2. Verantwortliche Stelle
        </h3>
        <p className="text-[#f4f3ef] font-semibold">{BUSINESS.name}</p>
        <p>{BUSINESS.address.street}</p>
        <p>{BUSINESS.address.zip} {BUSINESS.address.city}</p>
        <p>Telefon: {BUSINESS.phone.display}</p>
      </section>

      <section>
        <h3 className="text-base font-bold text-[#f4f3ef] uppercase tracking-wide mb-2 font-mono">
          3. Datenerfassung auf dieser Website
        </h3>
        <p>
          <strong>Server-Log-Dateien:</strong> Beim Aufrufen unserer Website erfasst der Webserver automatisch technische Informationen (z. B. Browsertyp, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage). Diese Daten sind nicht bestimmten Personen zuordenbar.
        </p>
        <p className="mt-2">
          <strong>Kontaktaufnahme per Telefon oder WhatsApp:</strong> Wenn Sie uns per Telefon oder WhatsApp kontaktieren, wird Ihre Telefonnummer und Ihre Nachricht zur Bearbeitung Ihrer Anfrage verarbeitet (Art. 6 Abs. 1 lit. b DSGVO).
        </p>
        <p className="mt-2">
          <strong>Online-Terminbuchung (eTermin):</strong> Für die verbindliche Buchung von Werkstattplätzen binden wir den externen Dienstleister eTermin ein oder verlinken darauf. Bei einer Buchung werden die von Ihnen eingegebenen Daten (Name, Kontaktdaten, Wunschtermin) direkt auf den gesicherten Servern von eTermin verarbeitet.
        </p>
      </section>

      <section>
        <h3 className="text-base font-bold text-[#f4f3ef] uppercase tracking-wide mb-2 font-mono">
          4. Externe Links zu Kartendiensten
        </h3>
        <p>
          Zur Routenplanung bieten wir direkte Links zu Google Maps an. Erst mit Klick auf den entsprechenden Link verlassen Sie unsere Website und rufen den externen Dienst auf. Wir betten keine trackingintensiven Third-Party-Karten ohne Ihre ausdrückliche Interaktion ein.
        </p>
      </section>

      <section>
        <h3 className="text-base font-bold text-[#f4f3ef] uppercase tracking-wide mb-2 font-mono">
          5. Ihre Rechte
        </h3>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung und ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
        </p>
      </section>
    </div>
  );
}
