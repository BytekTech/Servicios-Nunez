import Header from "../components/header/Header";
import Coverage from "../components/section/Coverage";
import HowWeWork from "../components/section/HowWeWork";
import Image from "next/image";
import Hero from "../components/ui/Hero";
import Testimonials from "../components/testimonials/Testimonials";
import PageFooter from "../components/footer/PageFooter";
import WhatsAppBar from "../components/whatsapp/WhatsAppBar";
import TradesNav from "../components/trade/TradesNav";
import RecentWorks from "../components/works/RecentWorks";
import { waLink } from "../lib/trades";

const GENERIC_WA_MESSAGE = "Hola, quiero hacer una consulta por ";

export default function Home() {
  const wa = waLink(GENERIC_WA_MESSAGE);
  return (
    <>
      <Header />
      <Hero
        big
        label="ELECTRICIDAD · PLOMERÍA · GAS"
        title={
          <>
            <span className="text-elec">Electricista</span>,{" "}
            <span className="text-agua">plomero</span> y{" "}
            <span className="text-flame">gasista</span> matriculado.
          </>
        }
      >
        <p className="rise rise-3 mt-3 max-w-[65ch] text-[15.5px] leading-normal text-pretty text-ink-soft lg:mt-4 lg:text-[19px] xl:text-[21px]">
          Atendemos CABA y GBA. Escribinos por WhatsApp con una foto o un
          video detallado del problema y el presupuesto no se cobra.
        </p>
        <div className="rise rise-4 relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-[6px] border border-line lg:mt-6 lg:aspect-[21/9] xl:aspect-[3/1]">
          <Image
            src="/images/gasista.webp"
            alt="Técnico matriculado de Servicios Nuñez reparando un calefón"
            fill
            priority
            sizes="(min-width: 1280px) 1200px, (min-width: 1024px) 1040px, 100vw"
            className="object-cover"
          />
        </div>
      </Hero>
      <TradesNav />
      <Coverage />
      <HowWeWork />
      <RecentWorks />
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
