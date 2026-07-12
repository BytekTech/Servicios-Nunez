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
import ImageSlot from "../../components/ui/ImageSlot";
import tradesData from "@/public/data/trades.json";
import type { Trade } from "../../types/trade";
import { waLink } from "../../lib/trades";
import { tradeAccent } from "../../lib/tradeAccent";

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
  const accent = tradeAccent(trade.slug);
  return (
    <>
      <BackHeader />
      <StatusBar />
      <Hero
        label={trade.name.toUpperCase()}
        title={trade.tagline}
        accent={accent.text}
      >
        {trade.urgent && (
          <p className="rise rise-3 mt-4 max-w-[80ch] rounded-[4px] bg-navy px-3.5 py-[13px] text-[14.5px] leading-[1.45] text-pretty text-paper lg:text-[16px] xl:text-[17.5px]">
            {trade.urgent}
          </p>
        )}
        <ImageSlot
          label={`FOTO · TRABAJO DE ${trade.name.toUpperCase()}`}
          className={`rise rise-4 mt-5 aspect-[16/9] w-full lg:aspect-[21/9] xl:aspect-[3/1] ${accent.soft}`}
        />
      </Hero>
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
