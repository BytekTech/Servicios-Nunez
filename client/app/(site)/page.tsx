import Header from "../components/header/Header";
import Coverage from "../components/section/Coverage";
import HowWeWork from "../components/section/HowWeWork";
import Hero from "../components/ui/Hero";
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
      <Header />
      <Hero
        big
        label="ELECTRICIDAD · PLOMERÍA · GAS"
        title="Electricista, plomero y gasista matriculado."
      >
        <p className="mt-3 text-[15.5px] leading-normal text-pretty text-ink-soft lg:text-[17px]">
          Atendemos CABA y GBA. Escribinos por WhatsApp y te respondemos en
          minutos.
        </p>
      </Hero>
      <TradesNav />
      <Coverage />
      <HowWeWork />
      <Testimonials />
      <PageFooter
        waHref={wa}
        note="PRESUPUESTO SIN CARGO · GARANTÍA POR ESCRITO"
        brand="SERVICIOS NUÑEZ — CABA / GBA"
      />
      <WhatsAppBar href={wa} />
    </>
  );
}
