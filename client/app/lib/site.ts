import contactData from "@/public/data/contact.json";
import type { Contact } from "../types/contact";

const CONTACT = contactData as Contact;

const FALLBACK_SITE_URL = "serviciosnuñez.com.ar";

// El dominio se carga desde NEXT_PUBLIC_SITE_URL. Se admite con o sin
// protocolo: `new URL` normaliza el host (los caracteres no ASCII como la "ñ"
// quedan en punycode, que es la forma canónica que esperan los buscadores).
function resolveSiteUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || FALLBACK_SITE_URL;
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  return new URL(withProtocol);
}

export const SITE_URL = resolveSiteUrl();

export const SITE = {
  name: "Servicios Nuñez",
  description:
    "Electricidad, plomería y gas en CABA y GBA. Urgencias 24 hs, presupuesto virtual sin cargo y garantía por escrito. Escribinos por WhatsApp.",
  locale: "es_AR",
  telephone: `+54 ${CONTACT.phonePretty}`,
  instagram: CONTACT.instagram,
  areasServed: [
    "Ciudad Autónoma de Buenos Aires",
    "Gran Buenos Aires",
  ],
  keywords: [
    "electricista",
    "plomero",
    "gasista matriculado",
    "servicios para el hogar",
    "CABA",
    "GBA",
    "urgencias 24 horas",
    "presupuesto sin cargo",
  ],
} as const;

/** Resuelve una ruta relativa contra el dominio del sitio. */
export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString();
