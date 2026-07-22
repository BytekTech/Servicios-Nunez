import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StatusBar from "../../components/header/StatusBar";
import BackHeader from "../../components/header/BackHeader";
import SectionLabel from "../../components/ui/SectionLabel";
import TradeHero from "../../components/trade/TradeHero";
import FaqList from "../../components/faq/FaqList";
import PageFooter from "../../components/footer/PageFooter";
import WhatsAppBar from "../../components/whatsapp/WhatsAppBar";
import HowWeWork from "../../components/section/HowWeWork";
import TradeServices from "../../components/trade/TradeServices";
import JsonLd from "../../components/seo/JsonLd";
import tradesData from "@/public/data/trades.json";
import type { Trade } from "../../types/trade";
import { waLink } from "../../lib/trades";
import { tradeAccent } from "../../lib/tradeAccent";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  serviceJsonLd,
} from "../../lib/structuredData";

type Params = Promise<{ trade: string }>;

const TRADES = tradesData as Trade[];

const findTrade = (slug: string) =>
  TRADES.find((trade) => trade.slug === slug);

export function generateStaticParams() {
  return TRADES.map((t) => ({ trade: t.slug }));
}

export async function generateMetadata({
  params,
}: Readonly<{
  params: Params;
}>): Promise<Metadata> {
  const trade = findTrade((await params).trade);
  if (!trade) return {};
  const path = `/${trade.slug}`;
  const description = `${trade.tagline} ${trade.cred}`;
  return {
    title: trade.seoTitle,
    description,
    keywords: trade.keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      title: `${trade.seoTitle} · Servicios Nuñez`,
      description,
      url: path,
      images: [{ url: trade.background, alt: `${trade.name} — Servicios Nuñez` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${trade.seoTitle} · Servicios Nuñez`,
      description,
      images: [trade.background],
    },
  };
}

export default async function TradePage({
  params,
}: Readonly<{ params: Params }>) {
  const trade = findTrade((await params).trade);
  if (!trade) notFound();

  const wa = waLink(trade.waMsg);
  const accent = tradeAccent(trade.slug);
  return (
    <>
      <JsonLd data={serviceJsonLd(trade)} />
      <JsonLd data={faqJsonLd(trade.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: trade.name, path: `/${trade.slug}` },
        ])}
      />
      <div className="flex min-h-[100svh] flex-col short-landscape:min-h-0">
        <BackHeader />
        <StatusBar />
        <TradeHero
          label={trade.name.toUpperCase()}
          title={trade.tagline}
          urgent={trade.urgent}
          accentText={accent.text}
          imageSrc={trade.background}
          imageAlt={`Trabajo de ${trade.name} — Servicios Nuñez`}
        />
      </div>
      <TradeServices trade={trade} />
      <HowWeWork tradeSlug={trade.slug} />
      <div className="px-5 pt-6 pb-2.5 lg:px-8 lg:pb-6 xl:px-14">
        <SectionLabel className="reveal mb-1.5" accent={accent.text}>
          PREGUNTAS FRECUENTES
        </SectionLabel>
        <FaqList faqs={trade.faqs} accentText={accent.text} />
      </div>
      <PageFooter
        waHref={wa}
        brand="SERVICIOS NUÑEZ — ELECTRICIDAD · PLOMERÍA · GAS"
      />
      <WhatsAppBar href={wa} />
    </>
  );
}
