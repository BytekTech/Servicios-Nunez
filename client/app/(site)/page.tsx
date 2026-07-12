import Header from "../components/header/Header";
import Coverage from "../components/section/Coverage";
import HowWeWork from "../components/section/HowWeWork";
import Hero from "../components/ui/Hero";
import ImageSlot from "../components/ui/ImageSlot";
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
        <p className="rise rise-3 mt-3 max-w-[70ch] text-[15.5px] leading-normal text-pretty text-ink-soft lg:text-[17px] xl:text-[19px]">
          Atendemos CABA y GBA. Escribinos por WhatsApp con una foto o un
          video detallado del problema y el presupuesto no se cobra.
        </p>
        <ImageSlot
          label="FOTO · EQUIPO O TRABAJO EN OBRA"
          className="rise rise-4 mt-5 aspect-[16/9] w-full lg:mt-6 lg:aspect-[21/9] xl:aspect-[3/1]"
        />
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
