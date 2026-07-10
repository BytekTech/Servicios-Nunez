import Link from "next/link";
import Header from "./components/header/Header";
import Coverage from "./components/section/Coverage";
import HowWeWork from "./components/section/HowWeWork";
import Hero from "./components/ui/Hero";
import DesktopSplit from "./components/ui/DesktopSplit";
import PageFooter from "./components/footer/PageFooter";
import WhatsAppBar from "./components/whatsapp/WhatsAppBar";
import CtaPanel from "./components/whatsapp/CtaPanel";
import { GENERIC_WA_MESSAGE, TRADES, waLink } from "./lib/trades";

function TradesNav() {
  return (
    <nav className="flex flex-col">
      {TRADES.map((t) => (
        <Link
          key={t.slug}
          href={`/${t.slug}`}
          className="grid grid-cols-[44px_1fr_30px] items-center gap-2 border-b border-line px-5 py-[22px] hover:bg-row-hover lg:px-8 lg:py-7 xl:px-14"
        >
          <span className="font-mono text-[13px] font-bold text-blue">
            {t.code}
          </span>
          <span className="flex min-w-0 flex-col gap-1">
            <span className="text-[21px] leading-none font-bold tracking-[-0.3px] lg:text-[24px]">
              {t.name}
            </span>
            <span className="font-mono text-[11px] tracking-[0.3px] text-ink-muted">
              {t.line}
            </span>
          </span>
          <span className="justify-self-end text-[26px] text-blue">→</span>
        </Link>
      ))}
    </nav>
  );
}

export default function Home() {
  const wa = waLink(GENERIC_WA_MESSAGE);
  return (
    <>
      <Header />
      <DesktopSplit
        left={
          <>
            <Hero
              big
              label="ELECTRICIDAD · PLOMERÍA · GAS"
              title="Electricista, plomero y gasista matriculado."
            >
              <p className="mt-3 text-[15.5px] leading-normal text-pretty text-ink-soft">
                Atendemos CABA y GBA. Escribinos por WhatsApp y te respondemos
                en minutos.
              </p>
            </Hero>
            <HowWeWork />
            <CtaPanel href={wa} />
          </>
        }
        right={
          <>
            <TradesNav />
            <Coverage />
          </>
        }
      />
      <PageFooter
        waHref={wa}
        note="PRESUPUESTO SIN CARGO · GARANTÍA POR ESCRITO"
        brand="SERVICIOS NUÑEZ — CABA / GBA"
      />
      <WhatsAppBar href={wa} />
    </>
  );
}
