import Link from "next/link";
import StatusBar from "./components/StatusBar";
import SectionLabel from "./components/SectionLabel";
import Hero from "./components/Hero";
import PageFooter from "./components/PageFooter";
import WhatsAppBar from "./components/WhatsAppBar";
import CtaPanel from "./components/CtaPanel";
import DesktopSplit from "./components/DesktopSplit";
import { GENERIC_WA_MESSAGE, TRADES, waLink } from "./lib/trades";

function Header() {
  return (
    <header className="flex items-center gap-3 border-b border-line px-5 py-4 lg:px-8">
      <div className="flex size-[42px] flex-none items-center justify-center rounded-lg bg-navy font-mono text-sm font-bold text-paper">
        SN
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-px">
        <span className="font-mono text-[10px] tracking-[2.5px] text-ink-muted">
          SERVICIOS
        </span>
        <span className="text-[21px] leading-none font-extrabold tracking-[-0.3px]">
          NUÑEZ
        </span>
      </div>
      <span className="rounded-[3px] border border-blue px-2 py-[5px] font-mono text-[10px] tracking-[1.5px] whitespace-nowrap text-blue">
        24 HS
      </span>
    </header>
  );
}

function TradesNav() {
  return (
    <nav className="flex flex-col">
      {TRADES.map((t) => (
        <Link
          key={t.slug}
          href={`/${t.slug}`}
          className="grid grid-cols-[44px_1fr_24px] items-center gap-2 border-b border-line px-5 py-[22px] hover:bg-row-hover lg:px-8 lg:py-7"
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
          <span className="justify-self-end text-[19px] text-blue">→</span>
        </Link>
      ))}
    </nav>
  );
}

const ZONES = [
  ["CABA", "todos los barrios"],
  ["GBA", "Gran Buenos Aires"],
];

function Coverage() {
  return (
    <div className="border-b border-line px-5 py-6 lg:border-b-0 lg:px-8">
      <SectionLabel className="mb-3.5">ZONA DE COBERTURA</SectionLabel>
      <div className="flex gap-2">
        {ZONES.map(([zone, detail]) => (
          <div
            key={zone}
            className="flex flex-1 flex-col gap-[3px] rounded-[3px] border border-line-strong px-3.5 py-3"
          >
            <span className="font-mono text-[15px] font-bold">{zone}</span>
            <span className="text-[12.5px] text-ink-muted">{detail}</span>
          </div>
        ))}
      </div>
      <p className="mt-3.5 text-[13.5px] text-ink-muted">
        Consultanos por tu zona antes de pedir la visita.
      </p>
    </div>
  );
}

export default function Home() {
  const wa = waLink(GENERIC_WA_MESSAGE);
  return (
    <>
      <Header />
      <StatusBar />
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
