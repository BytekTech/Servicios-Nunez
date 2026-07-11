import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StatusBar from "../../components/header/StatusBar";
import BackHeader from "../../components/header/BackHeader";
import SectionLabel from "../../components/ui/SectionLabel";
import Hero from "../../components/ui/Hero";
import FaqList from "../../components/faq/FaqList";
import PageFooter from "../../components/footer/PageFooter";
import WhatsAppBar from "../../components/whatsapp/WhatsAppBar";
import HowWeWork from "../../components/section/HowWeWork";
import TradeServices from "../../components/trade/TradeServices";
import tradesData from "@/public/data/trades.json";
import type { Trade } from "../../types/trade";
import { waLink } from "../../lib/trades";

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
  return {
    title: `${trade.name} — Servicios Nuñez`,
    description: trade.tagline,
  };
}

export default async function TradePage({
  params,
}: Readonly<{ params: Params }>) {
  const trade = findTrade((await params).trade);
  if (!trade) notFound();

  const wa = waLink(trade.waMsg);
  return (
    <>
      <BackHeader />
      <StatusBar />
      <Hero
        label={`${trade.code} — ${trade.name.toUpperCase()}`}
        title={trade.tagline}
      >
        {trade.urgent && (
          <p className="mt-4 rounded-[4px] bg-navy px-3.5 py-[13px] text-[14.5px] leading-[1.45] text-pretty text-paper lg:text-[16px]">
            {trade.urgent}
          </p>
        )}
      </Hero>
      <TradeServices trade={trade} />
      <HowWeWork />
      <div className="px-5 pt-6 pb-2.5 lg:px-8 lg:pb-6 xl:px-14">
        <SectionLabel className="mb-1.5">PREGUNTAS FRECUENTES</SectionLabel>
        <FaqList faqs={trade.faqs} />
      </div>
      <PageFooter
        waHref={wa}
        brand="SERVICIOS NUÑEZ — ELECTRICIDAD · PLOMERÍA · GAS"
      />
      <WhatsAppBar href={wa} />
    </>
  );
}
