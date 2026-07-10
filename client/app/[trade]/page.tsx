import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import StatusBar from "../components/StatusBar";
import SectionLabel from "../components/SectionLabel";
import Hero from "../components/Hero";
import FaqList from "../components/FaqList";
import PageFooter from "../components/PageFooter";
import WhatsAppBar from "../components/WhatsAppBar";
import CtaPanel from "../components/CtaPanel";
import DesktopSplit from "../components/DesktopSplit";
import { TRADES, waLink, type Trade } from "../lib/trades";

type Params = Promise<{ trade: string }>;

const findTrade = (slug: string) => TRADES.find((t) => t.slug === slug);

export function generateStaticParams() {
  return TRADES.map((t) => ({ trade: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const trade = findTrade((await params).trade);
  if (!trade) return {};
  return {
    title: `${trade.name} — Servicios Nuñez`,
    description: trade.tagline,
  };
}

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-line px-5 py-4 lg:px-8">
      <Link href="/" className="py-1.5 font-mono text-xs tracking-[1px] text-blue">
        ← INICIO
      </Link>
      <span className="text-[15px] font-extrabold tracking-[-0.2px]">
        NUÑEZ
      </span>
    </header>
  );
}

function Services({ trade }: { trade: Trade }) {
  return (
    <div className="border-b border-line px-5 py-6 lg:px-8">
      <SectionLabel className="mb-1.5">QUÉ HACEMOS</SectionLabel>
      <div className="flex flex-col">
        {trade.services.map((s) => (
          <div
            key={s}
            className="flex items-center gap-3 border-b border-line-soft py-[13px] text-[15px] leading-[1.35]"
          >
            <span className="size-[7px] flex-none bg-blue" />
            <span>{s}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 font-mono text-[10.5px] leading-[1.7] tracking-[1.2px] text-ink-muted">
        {trade.cred}
      </p>
    </div>
  );
}

export default async function TradePage({ params }: { params: Params }) {
  const trade = findTrade((await params).trade);
  if (!trade) notFound();

  const wa = waLink(trade.waMsg);
  return (
    <>
      <Header />
      <StatusBar />
      <DesktopSplit
        left={
          <>
            <Hero
              label={`${trade.code} — ${trade.name.toUpperCase()}`}
              title={trade.tagline}
            >
              {trade.urgent && (
                <p className="mt-4 rounded-[4px] bg-navy px-3.5 py-[13px] text-[14.5px] leading-[1.45] text-pretty text-paper">
                  {trade.urgent}
                </p>
              )}
            </Hero>
            <CtaPanel href={wa} />
          </>
        }
        right={
          <>
            <Services trade={trade} />
            <div className="px-5 pt-6 pb-2.5 lg:px-8 lg:pb-6">
              <SectionLabel className="mb-1.5">
                PREGUNTAS FRECUENTES
              </SectionLabel>
              <FaqList faqs={trade.faqs} />
            </div>
          </>
        }
      />
      <PageFooter
        waHref={wa}
        brand="SERVICIOS NUÑEZ — ELECTRICIDAD · PLOMERÍA · GAS"
      />
      <WhatsAppBar href={wa} />
    </>
  );
}
