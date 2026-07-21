import Header from "../components/header/Header";
import Coverage from "../components/section/Coverage";
import HowWeWork from "../components/section/HowWeWork";
import Image from "next/image";
import SectionLabel from "../components/ui/SectionLabel";
import Testimonials from "../components/testimonials/Testimonials";
import PageFooter from "../components/footer/PageFooter";
import WhatsAppBar from "../components/whatsapp/WhatsAppBar";
import TradesNav from "../components/trade/TradesNav";
import { waLink } from "../lib/trades";

const GENERIC_WA_MESSAGE = "Hola, quiero hacer una consulta por ";

export default function Home() {
  const wa = waLink(GENERIC_WA_MESSAGE);
  return (
    <>
      <div className="flex min-h-[100svh] flex-col">
        <Header />
        <section className="bleed relative flex flex-1 flex-col justify-center overflow-hidden">
        <Image
          src="/images/gasista.webp"
          alt="Técnico matriculado de Servicios Nuñez reparando un calefón"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-navy/65 via-navy/35 to-navy/60"
        />
        <div className="relative mx-auto w-full max-w-[520px] px-5 py-24 md:max-w-[760px] lg:max-w-[1040px] lg:px-8 xl:max-w-[1200px] xl:px-14 2xl:max-w-[1320px]">
          <SectionLabel className="rise mb-3.5" accent="text-paper">
            ELECTRICIDAD · PLOMERÍA · GAS
          </SectionLabel>
          <h1 className="rise rise-2 text-[34px] leading-[1.06] font-extrabold tracking-[-0.8px] text-pretty text-paper lg:text-[44px] lg:leading-[1.04] lg:tracking-[-1.2px] xl:text-[54px] xl:tracking-[-1.6px] 2xl:text-[64px] 2xl:tracking-[-1.9px]">
            <span className="text-elec">Electricista</span>,{" "}
            <span className="text-agua">plomero</span> y{" "}
            <span className="text-flame">gasista</span> matriculado.
          </h1>
          <p className="rise rise-3 mt-4 max-w-[65ch] text-[15.5px] leading-normal text-pretty text-mist lg:text-[19px] xl:text-[21px]">
            Atendemos CABA y GBA. Escribinos por WhatsApp con una foto o un
            video detallado del problema y el presupuesto no se cobra.
          </p>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center lg:bottom-8"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-7 animate-scroll-hint text-paper/80 lg:size-9"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        </section>
      </div>
      <TradesNav />
      <Coverage />
      <HowWeWork />
      <Testimonials />
      <PageFooter
        waHref={wa}
        note="PRESUPUESTO VIRTUAL SIN CARGO · GARANTÍA POR ESCRITO"
        brand="SERVICIOS NUÑEZ — CABA / GBA"
      />
      <WhatsAppBar href={wa} />
    </>
  );
}
