import Header from "../components/header/Header";
import HomeHero from "../components/section/HomeHero";
import Coverage from "../components/section/Coverage";
import HowWeWork from "../components/section/HowWeWork";
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
        <HomeHero />
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
