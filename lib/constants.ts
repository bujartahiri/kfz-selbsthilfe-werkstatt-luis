export const BUSINESS = {
  name: "KFZ Selbsthilfe Werkstatt Luis",
  shortName: "LUIS",
  descriptor: "KFZ SELBSTHILFE WERKSTATT",
  tagline: "DU SCHRAUBST. WIR STELLEN DEN RAUM.",
  subline: "Hebebühnen, Werkzeug und Platz für dein Fahrzeug – mitten in Teltow.",
  address: {
    street: "Ruhlsdorfer Str. 105",
    zip: "14513",
    city: "Teltow",
    country: "Deutschland",
    region: "Brandenburg / Raum Berlin Süd",
    full: "Ruhlsdorfer Str. 105, 14513 Teltow",
  },
  phone: {
    display: "+49 1525 5366959",
    clean: "+4915255366959",
  },
  phoneSecondary: {
    display: "+49 176 146 56 161",
    clean: "+4917614656161",
  },
  whatsappUrl: "https://wa.me/4917614656161?text=Hallo%20Luis%2C%20ich%20interessiere%20mich%20f%C3%BCr%20einen%20Werkstattplatz.",
  bookingUrl: "https://www.etermin.net/selbsthilfewerkstattluis",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Ruhlsdorfer+Str.+105,+14513+Teltow",
  hours: [
    { days: "Montag – Samstag", time: "09:00 – 20:00 Uhr", open: true },
    { days: "Sonntag & Feiertage", time: "Geschlossen", open: false },
  ],
  payment: "Barzahlung vor Ort",
};

export const SERVICES = [
  {
    id: "hebebuehne",
    title: "Hebebühnenvermietung",
    category: "Selbsthilfe / DIY",
    badge: "Beliebt",
    price: "20 €",
    unit: "pro Stunde",
    priceNote: "ab 20,00 € / Std.",
    description: "Moderne, TÜV-geprüfte 2-Säulen-Hebebühnen für PKW, Kastenwagen und Transporter. Sicher arbeiten in Stehhöhe.",
    includes: [
      "TÜV-geprüfte Hebebühne",
      "Voll bestückter Werkzeugwagen inklusive",
      "Druckluftanschluss & Basisausstattung",
      "Sicherheits-Kurzeinweisung vor Ort",
    ],
    ctaText: "Hebebühne reservieren",
    featured: true,
  },
  {
    id: "oelwechsel",
    title: "Ölwechsel DIY",
    category: "Selbsthilfe / DIY",
    badge: "Inkl. Altöl",
    price: "25 €",
    unit: "pro Stunde",
    priceNote: "ab 25,00 € / Std.",
    description: "Motorölwechsel selbst durchführen – sauber, schnell und umweltgerecht mit Profi-Auffanggeräten.",
    includes: [
      "Hebebühnen-Nutzung inklusive",
      "Fachgerechte Altöl-Entsorgung inklusive",
      "Spezial-Ölfilterschlüssel & Auffangwagen",
      "Werkzeugwagen inklusive",
    ],
    ctaText: "Ölwechsel-Slot buchen",
    featured: true,
  },
  {
    id: "klimawartung",
    title: "Klimawartung & Service",
    category: "Werkstattservice",
    badge: "Service durch Personal",
    price: "80 €",
    unit: "Pauschal ab",
    priceNote: "ab 80,00 €",
    description: "Professionelle Klimawartung für optimale Kühlleistung und frische Luft im Innenraum. Auffüllen und Check durch unser Fachpersonal.",
    includes: [
      "Evakuierung & Dichtigkeitsprüfung",
      "Kältemittel neu befüllen / ergänzen",
      "Innenraumfilter-Tausch möglich (eigene Filter mitbringen oder 1 Tag Vorbestellung)",
      "Bedienung ausschließlich durch Werkstattpersonal",
    ],
    ctaText: "Klimaservice anfragen",
    featured: false,
  },
  {
    id: "reifenwechsel",
    title: "Reifenwechsel & Auswuchten",
    category: "Werkstattservice",
    badge: "Inkl. Wuchten",
    price: "20 €",
    unit: "pro Reifen (bis 17\")",
    priceNote: "bis 17\": 20 € / ab 17\": 25 €",
    description: "Neue Reifen aufziehen oder Saisonwechsel. Professionelle Montage auf moderner Reifen- und Auswuchtmaschine durch Fachpersonal.",
    includes: [
      "Reifenmontage & exaktes Auswuchten",
      "Bis 17 Zoll: 20,00 € / Reifen",
      "Ab 17 Zoll: 25,00 € / Reifen",
      "Neue Reifenventile: 5,00 € / Stück",
    ],
    ctaText: "Reifenservice buchen",
    featured: false,
  },
  {
    id: "achsvermessung",
    title: "3D-Achsvermessung",
    category: "Werkstattservice",
    badge: "Nur mit Termin",
    price: "Auf Anfrage",
    unit: "Präzisions-Justage",
    priceNote: "Termin zwingend erforderlich",
    description: "Exakte Vermessung von Spur, Sturz und Nachlauf auf unserem modernen optischen Messstand. Kein spontaner Termin möglich.",
    includes: [
      "Hochpräziser digitaler Messstand",
      "Exakte Dokumentation der Fahrwerksgeometrie",
      "Gleichmäßiger Reifenverschleiß & stabiler Geradeauslauf",
      "Ausschließlich mit fester Online- oder Telefon-Voranmeldung",
    ],
    ctaText: "Achsvermessung anfragen",
    featured: true,
  },
];

export const WORKSHOP_STEPS = [
  {
    num: "01",
    title: "Termin online wählen",
    subtitle: "Schnell & planbar",
    description: "Wähle deinen Wunschtermin über unser digitales Buchungssystem (eTermin) oder ruf uns kurz an. Keine Wartezeiten, dein Platz steht bereit.",
    tag: "BUCHUNG",
  },
  {
    num: "02",
    title: "Auto auf die Bühne",
    subtitle: "Ruhlsdorfer Str. 105",
    description: "Fahr direkt in Teltow auf das Werkstattgelände. Nach einer kurzen Sicherheitseinweisung wird dein Fahrzeug auf die Hebebühne gefahren.",
    tag: "ANKUNFT",
  },
  {
    num: "03",
    title: "Eigenständig schrauben",
    subtitle: "Werkzeugwagen inklusive",
    description: "Du reparierst dein Auto mit Profi-Werkzeug in deinem eigenen Tempo. Wenn du fertig bist, hinterlässt du den Platz sauber – fertig.",
    tag: "DIY",
  },
];

export const WORKSHOP_GALLERY = [
  {
    src: "/images/workshop/lift-bay.jpg",
    alt: "Einfahrtsschild der KFZ Selbsthilfe Werkstatt Luis an der Ruhlsdorfer Straße 105",
    title: "Werkstatt-Einfahrt",
    category: "Standort",
    technical: "Ruhlsdorfer Str. 105 · Gut sichtbar von der Straße · Großer Hof",
  },
  {
    src: "/images/workshop/tool-cart.jpg",
    alt: "Voll bestückter roter Profi-Werkzeugwagen der Werkstatt",
    title: "Profi-Werkzeugwagen",
    category: "Werkzeug",
    technical: "Inklusive bei jeder Bühnenmiete · Steckschlüssel, Ratschen, Zangen",
  },
  {
    src: "/images/workshop/lift-front.jpg",
    alt: "Blick in die Werkstatthalle mit 2-Säulen-Hebebühnen und Stellplätzen",
    title: "Werkstatthalle & Bühnen",
    category: "Hebebühnen",
    technical: "Moderne 2-Säulen-Hubtechnik · Hohe Hallendecke · Helle Beleuchtung",
  },
  {
    src: "/images/workshop/underbody-work.jpg",
    alt: "Werkstattschild am Eingang der Halle",
    title: "Werkstatteingang",
    category: "Haupteingang",
    technical: "Luis Werkstattschild · Schnelle Anmeldung vor Ort",
  },
  {
    src: "/images/workshop/tire-service.jpg",
    alt: "Werbebanner der KFZ Selbsthilfe Werkstatt Luis am Werkstattzaun",
    title: "Geländebeschilderung",
    category: "Außengelände",
    technical: "Orientierung auf dem Betriebsgelände · Feste Stellflächen",
  },
  {
    src: "/images/workshop/workshop-overview.jpg",
    alt: "Offizielle Visitenkarte der KFZ Selbsthilfe Werkstatt Luis",
    title: "Offizielle Kontaktdaten",
    category: "Kontakt",
    technical: "selbsthilfewerkstatt.luis@gmail.com · Tel. +49 176 146 56 161",
  },
];

export const WORKSHOP_RULES = [
  {
    icon: "ShieldAlert",
    title: "Sicherheitseinweisung",
    text: "Vor Aufnahme aller Arbeiten erfolgt eine persönliche Einführung in die Sicherheits- und Betriebsanweisungen. Diese sind strikt einzuhalten.",
  },
  {
    icon: "UserCheck",
    title: "Altersgrenzen (15+ / 18+)",
    text: "Im Werkstattbereich dürfen sich nur Personen ab 15 Jahren aufhalten, die direkt am Fahrzeug mitarbeiten. Die Hebebühnenbedienung ist erst ab 18 Jahren erlaubt.",
  },
  {
    icon: "Wrench",
    title: "Spezialgeräte durch Personal",
    text: "Reifenmontage- & Wuchtmaschine, Abgasabsaugung, Klimagerät und Diagnosetester dürfen aus Sicherheitsgründen ausschließlich durch unser Werkstattpersonal bedient werden.",
  },
  {
    icon: "Sparkles",
    title: "Sauberkeit & Ordnung",
    text: "Der Arbeitsplatz und die anvertrauten Werkzeuge sind sauber und ordnungsgemäß zu übergeben. Bei unsauberem Verlassen fällt eine Reinigungspauschale von 15 € an.",
  },
  {
    icon: "Ban",
    title: "Keine Lackier- / Karosseriearbeiten",
    text: "Karosseriebau- und Spritzlackierarbeiten sind in der Halle ausdrücklich nicht möglich. Striktes Rauch-, Alkohol- und Drogenverbot im gesamten Hallenbereich.",
  },
  {
    icon: "Coins",
    title: "Barzahlung vor Ort",
    text: "Die Abrechnung erfolgt direkt im Anschluss an deine Reparaturzeit in bar. Bitte halte Bargeld bereit.",
  },
];

export const FAQS = [
  {
    question: "Was genau bedeutet Selbsthilfe-Werkstatt?",
    answer: "In unserer Selbsthilfewerkstatt mietest du stundenweise eine Hebebühne inklusive eines voll bestückten Werkzeugwagens. Du führst Reparaturen, Wartungen oder den Reifenwechsel an deinem Auto eigenständig durch. Wir stellen dir die professionelle Infrastruktur, den Platz und die Entsorgung zur Verfügung.",
  },
  {
    question: "Muss ich vorher einen Termin vereinbaren?",
    answer: "Ja, wir empfehlen dringend eine Online-Reservierung über eTermin oder eine telefonische Voranmeldung. So ist sichergestellt, dass deine Hebebühne pünktlich frei ist und keine Wartezeiten entstehen. Für die 3D-Achsvermessung ist ein Termin zwingend erforderlich (keine Spontanabnahme möglich).",
  },
  {
    question: "Welche Fahrzeuge passen auf eure Hebebühnen?",
    answer: "Unsere modernen 2-Säulen-Bühnen sind für alle gängigen PKW, Kombis, SUV, Kastenwagen sowie Transporter geeignet.",
  },
  {
    question: "Ist Werkzeug in der Miete enthalten?",
    answer: "Ja! Bei der regulären Hebebühnenmiete (ab 20 €/Std.) ist ein voll ausgestatteter Werkzeugwagen mit gängigen Ratschen, Nüssen, Schlüsseln und Zangen bereits im Stundenpreis enthalten.",
  },
  {
    question: "Was muss ich selbst mitbringen?",
    answer: "Bringe bitte deine benötigten Ersatzteile, Verbrauchsmaterialien (z.B. passendes Motoröl, Ölfilter, Bremsen etc.) und geeignete Arbeitskleidung mit. Falls du für die Klimawartung einen Innenraumfilter getauscht haben möchtest, kannst du diesen mitbringen oder wir bestellen ihn mit 1 Tag Vorlaufzeit für dich.",
  },
  {
    question: "Welche Reparaturen sind NICHT erlaubt?",
    answer: "Spritzlackierarbeiten und schwere Karosseriearbeiten sind bei uns nicht möglich. Alle mechanischen Arbeiten an Bremsen, Fahrwerk, Auspuff, Motor oder Unterboden sind herzlich willkommen.",
  },
  {
    question: "Wie wird abgerechnet und wie kann ich bezahlen?",
    answer: "Die Abrechnung erfolgt minutengenau nach deiner Nutzungsdauer direkt vor Ort. Derzeit ist ausschließlich Barzahlung möglich.",
  },
  {
    question: "Wer darf die Hebebühne bedienen?",
    answer: "Die Hebebühne darf nur von Personen bedient werden, die mindestens 18 Jahre alt sind und eine Einweisung durch unser Personal erhalten haben. Begleitpersonen im Werkstattbereich müssen mindestens 15 Jahre alt sein und direkt mitarbeiten.",
  },
];

export const NAV_LINKS = [
  { label: "Konzept", href: "#konzept" },
  { label: "Leistungen & Preise", href: "#leistungen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Werkstatt", href: "#werkstatt" },
  { label: "FAQ & Anfahrt", href: "#kontakt" },
];
