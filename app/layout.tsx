import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KFZ Selbsthilfe Werkstatt Luis | Hebebühne mieten in Teltow",
  description:
    "Deine professionelle KFZ-Selbsthilfewerkstatt in Teltow nahe Berlin und Potsdam. TÜV-geprüfte Hebebühnen ab 20 €/h inkl. Werkzeugwagen, Ölwechsel DIY, Klimawartung, Reifenwechsel & 3D-Achsvermessung.",
  keywords: [
    "KFZ Selbsthilfe Werkstatt Teltow",
    "Selbsthilfewerkstatt Teltow",
    "Hebebühne mieten Teltow",
    "Mietwerkstatt Teltow",
    "Hebebühne mieten Berlin Steglitz Zehlendorf",
    "Ölwechsel DIY Teltow",
    "Achsvermessung Teltow",
    "Reifenwechsel Teltow",
    "KFZ Werkstatt Luis",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  metadataBase: new URL("https://www.kfz-selbsthilfe-werkstatt-luis.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KFZ Selbsthilfe Werkstatt Luis | Hebebühne mieten in Teltow",
    description:
      "Du schraubst. Wir stellen den Raum. TÜV-geprüfte Hebebühnen ab 20 €/h inkl. Werkzeugwagen in Teltow.",
    url: "https://www.kfz-selbsthilfe-werkstatt-luis.de",
    siteName: BUSINESS.name,
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/workshop/lift-bay.jpg",
        width: 1200,
        height: 675,
        alt: "KFZ Selbsthilfe Werkstatt Luis Teltow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KFZ Selbsthilfe Werkstatt Luis | Hebebühne mieten in Teltow",
    description:
      "TÜV-geprüfte Hebebühnen ab 20 €/h inkl. Werkzeugwagen in Teltow nahe Berlin & Potsdam.",
    images: ["/images/workshop/lift-bay.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": BUSINESS.name,
  "image": "https://www.kfz-selbsthilfe-werkstatt-luis.de/images/workshop/lift-bay.jpg",
  "url": "https://www.kfz-selbsthilfe-werkstatt-luis.de",
  "telephone": BUSINESS.phone.clean,
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": BUSINESS.address.street,
    "addressLocality": BUSINESS.address.city,
    "postalCode": BUSINESS.address.zip,
    "addressCountry": "DE",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.382802,
    "longitude": 13.2617701,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00",
    },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Werkstattleistungen",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hebebühnenvermietung mit Werkzeugwagen",
          "description": "TÜV-geprüfte 2-Säulen-Hebebühne stundenweise mieten inklusive voll bestücktem Werkzeugwagen.",
        },
        "price": "20.00",
        "priceCurrency": "EUR",
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ölwechsel DIY",
          "description": "Ölwechsel selbst durchführen inklusive Hebebühne und fachgerechter Altöl-Entsorgung.",
        },
        "price": "25.00",
        "priceCurrency": "EUR",
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Klimawartung",
          "description": "Professioneller Klimaservice und Kältemittelbefüllung durch Fachpersonal.",
        },
        "price": "80.00",
        "priceCurrency": "EUR",
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "3D-Achsvermessung",
          "description": "Präzise Fahrwerks- und Spurvermessung auf digitalem 3D-Messstand.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0d0f12] text-[#f4f3ef] font-sans selection:bg-[#d4f82a] selection:text-[#0d0f12]">
        {children}
      </body>
    </html>
  );
}
