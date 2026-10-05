import React from "react";
import { BUSINESS } from "@/lib/constants";

export function AGBContent() {
  return (
    <div className="space-y-6 text-[#8e95a3]">
      <div className="p-3.5 bg-[#1b1e25] border border-[#2b3140] rounded-sm text-xs text-[#d4f82a] font-mono">
        Hinweis: Dies sind die verbindlichen Werkstatt- und Nutzungsbedingungen der {BUSINESS.name} in Teltow.
      </div>

      <section>
        <h3 className="text-base font-bold text-[#f4f3ef] uppercase tracking-wide mb-2 font-mono">
          1. Bereitstellung und Zweck
        </h3>
        <p>
          Die KFZ- und Mietwerkstatt (nachfolgend Vermieter genannt) stellt Hebebühnen, Werkzeuge und Maschinen gegen Mietgebühr zur Verfügung, um Privatpersonen und Gewerbetreibenden (nachfolgend Mieter genannt) die Möglichkeit zu geben, Reparaturarbeiten an ihren Fahrzeugen selbst durchzuführen.
        </p>
      </section>

      <section>
        <h3 className="text-base font-bold text-[#f4f3ef] uppercase tracking-wide mb-2 font-mono">
          2. Sicherheitsbetriebsanweisungen
        </h3>
        <p>
          Vor Aufnahme der Arbeiten erfolgt eine Einführung in die Sicherheitsbetriebsanweisungen. Diese sind vom Mieter sowie eventuellen Begleitpersonen unbedingt zu beachten und ausnahmslos einzuhalten.
        </p>
      </section>

      <section>
        <h3 className="text-base font-bold text-[#f4f3ef] uppercase tracking-wide mb-2 font-mono">
          3. Altersbeschränkungen
        </h3>
        <p>
          Es dürfen sich nur Personen im Arbeits-, Bühnen- und Werkstattbereich aufhalten, die <strong>mindestens 15 Jahre alt</strong> sind und direkt Arbeiten am Fahrzeug ausführen. Die eigenständige Bedienung der Hebebühnen darf ausschließlich von Personen erfolgen, die <strong>mindestens 18 Jahre alt</strong> sind.
        </p>
      </section>

      <section>
        <h3 className="text-base font-bold text-[#f4f3ef] uppercase tracking-wide mb-2 font-mono">
          4. Haftung und Schadensersatz
        </h3>
        <p>
          Der Mieter haftet in vollem Umfang für alle Schäden, die an der Ausstattung, den Mietgegenständen, Werkzeugen, Maschinen und an der Hebebühnentechnik entstehen.
        </p>
        <p className="mt-2">
          Bei Schäden am Inventar ist der Mieter verpflichtet, den Wiederbeschaffungswert in vollem Umfang an den Vermieter zu erstatten. Dies gilt uneingeschränkt auch dann, wenn der Schaden durch eine Begleitperson des Mieters verursacht wurde.
        </p>
        <p className="mt-2">
          Für die ordnungsgemäße Durchführung der Reparatur am eigenen Fahrzeug ist der Mieter selbst verantwortlich. Der Vermieter übernimmt keine Gewährleistung oder Haftung für fehlerhafte Eigenreparaturen des Mieters.
        </p>
      </section>

      <section>
        <h3 className="text-base font-bold text-[#f4f3ef] uppercase tracking-wide mb-2 font-mono">
          5. Sorgfaltspflicht und Arbeitsplatzübergabe
        </h3>
        <p>
          Der Mieter hat die Pflicht, mit den ihm anvertrauten Mietgegenständen sorgsam und sachgerecht umzugehen und sie nach Beendigung der Arbeit im unbeschädigten und sauberen Zustand an den Vermieter zurückzugeben.
        </p>
        <p className="mt-2">
          Der Arbeitsplatz muss sauber und ordentlich übergeben werden. Andernfalls wird eine <strong>Reinigungspauschale von 15,00 €</strong> erhoben.
        </p>
      </section>

      <section>
        <h3 className="text-base font-bold text-[#f4f3ef] uppercase tracking-wide mb-2 font-mono">
          6. Bedienung von Spezialgeräten ausschließlich durch Personal
        </h3>
        <p>
          Aus Sicherheits- und Eichgründen darf die Inbetriebnahme von:
        </p>
        <ul className="list-disc pl-5 mt-1.5 space-y-1">
          <li>Reifenmontage- und Auswuchtmaschine</li>
          <li>Abgasabsauganlage</li>
          <li>Klimacheck- und Befüllgerät</li>
          <li>AU-Gerät</li>
          <li>Elektronischer Diagnose-Tester</li>
        </ul>
        <p className="mt-2">
          <strong>ausschließlich durch das Werkstattpersonal</strong> erfolgen.
        </p>
      </section>

      <section>
        <h3 className="text-base font-bold text-[#f4f3ef] uppercase tracking-wide mb-2 font-mono">
          7. Rauch-, Alkohol- und Drogenverbot
        </h3>
        <p>
          Das Rauchen ist nur in den dafür gesondert gekennzeichneten Bereichen außerhalb des Arbeits- und Bühnenbereiches gestattet. Der Genuss von Alkohol sowie sonstigen berauschenden Mitteln ist auf dem gesamten Gelände und in der Halle generell strengstens verboten.
        </p>
      </section>

      <section>
        <h3 className="text-base font-bold text-[#f4f3ef] uppercase tracking-wide mb-2 font-mono">
          8. Ausgeschlossene Arbeiten
        </h3>
        <p>
          Karosserie- und Spritzlackierarbeiten sind in unserer Werkstatt nicht gestattet.
        </p>
      </section>
    </div>
  );
}
