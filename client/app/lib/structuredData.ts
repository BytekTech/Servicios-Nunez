import { SITE, SITE_URL, absoluteUrl } from "./site";
import type { Faq, Trade } from "../types/trade";

const BUSINESS_ID = `${SITE_URL.origin}/#business`;

const areaServed = SITE.areasServed.map((name) => ({
  "@type": "Place",
  name,
}));

const businessRef = {
  "@type": "HomeAndConstructionBusiness",
  "@id": BUSINESS_ID,
  name: SITE.name,
};

/** Ficha del negocio para búsquedas locales (una sola por sitio, en el home). */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": BUSINESS_ID,
    name: SITE.name,
    description: SITE.description,
    url: SITE_URL.origin,
    telephone: SITE.telephone,
    image: absoluteUrl("/images/electricista.webp"),
    areaServed,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    sameAs: [SITE.instagram],
    knowsAbout: ["Electricidad", "Plomería", "Gas"],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "07:00",
      closes: "19:00",
    },
  };
}

/** Servicio ofrecido en una página de oficio, con su catálogo de prestaciones. */
export function serviceJsonLd(trade: Trade) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/${trade.slug}`)}#service`,
    serviceType: trade.name,
    name: trade.seoTitle,
    description: trade.tagline,
    url: absoluteUrl(`/${trade.slug}`),
    provider: businessRef,
    areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Servicios de ${trade.name}`,
      itemListElement: trade.services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service },
      })),
    },
  };
}

/** Preguntas frecuentes de un oficio, elegibles para rich results de Google. */
export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

/** Ruta de migas para páginas internas. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
