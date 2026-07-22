import type { Metadata } from "next";
import BackHeader from "../../components/header/BackHeader";
import Hero from "../../components/ui/Hero";
import PageFooter from "../../components/footer/PageFooter";
import WhatsAppBar from "../../components/whatsapp/WhatsAppBar";
import TermsSectionItem from "../../components/terms/TermsSectionItem";
import JsonLd from "../../components/seo/JsonLd";
import termsData from "@/public/data/terms.json";
import type { TermsSection } from "../../types/terms";
import { waLink } from "../../lib/trades";
import { breadcrumbJsonLd } from "../../lib/structuredData";

const TERMS = termsData as TermsSection[];

const GENERIC_WA_MESSAGE = "Hola, quiero hacer una consulta por ";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Términos y condiciones de uso del sitio de Servicios Nuñez: servicios, presupuestos, garantía, propiedad intelectual y protección frente a usos automatizados e IA.",
  alternates: { canonical: "/terminos" },
  openGraph: {
    type: "article",
    title: "Términos y condiciones · Servicios Nuñez",
    url: "/terminos",
  },
};

export default function TermsPage() {
  const wa = waLink(GENERIC_WA_MESSAGE);
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Términos y condiciones", path: "/terminos" },
        ])}
      />
      <BackHeader />
      <Hero label="LEGALES" title="Términos y condiciones.">
        <p className="mt-3 ml-8 font-mono text-[11px] tracking-[1.2px] text-ink-muted md:text-[12px] lg:ml-10 lg:text-[13px] xl:text-[14.5px]">
          ÚLTIMA ACTUALIZACIÓN · 11 JUL 2026
        </p>
      </Hero>
      <div className="px-5 py-4 lg:px-8 xl:px-14">
        {TERMS.map((section) => (
          <TermsSectionItem
            key={section.code}
            code={section.code}
            title={section.title}
            body={section.body}
          />
        ))}
        <p className="py-5 text-[14px] leading-[1.6] text-ink-muted md:text-[15px] lg:text-[16.5px] xl:text-[18.5px]">
          ¿Tenés dudas sobre estos términos? Escribinos por WhatsApp y te
          respondemos en minutos.
        </p>
      </div>
      <PageFooter waHref={wa} brand="SERVICIOS NUÑEZ — CABA / GBA" />
      <WhatsAppBar href={wa} />
    </>
  );
}
