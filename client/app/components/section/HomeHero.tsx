import HeroBackdrop from "../ui/HeroBackdrop";
import SectionLabel from "../ui/SectionLabel";
import ScrollHintArrow from "../ui/ScrollHintArrow";
import { CONTENT_WIDTH } from "../../lib/container";

export default function HomeHero() {
  return (
    <section className="bleed relative flex flex-1 flex-col justify-center overflow-hidden">
      <HeroBackdrop
        src="/images/gasista.webp"
        alt="Técnico matriculado de Servicios Nuñez reparando un calefón"
        overlayClassName="bg-gradient-to-b from-navy/65 via-navy/35 to-navy/60"
      />
      <div className={`relative mx-auto w-full px-5 py-24 lg:px-8 xl:px-14 ${CONTENT_WIDTH}`}>
        <SectionLabel className="rise mb-3.5" accent="text-paper">
          ELECTRICIDAD · PLOMERÍA · GAS
        </SectionLabel>
        <h1 className="rise rise-2 text-[34px] leading-[1.06] font-extrabold tracking-[-0.8px] text-pretty text-paper lg:text-[44px] lg:leading-[1.04] lg:tracking-[-1.2px] xl:text-[54px] xl:tracking-[-1.6px] 2xl:text-[64px] 2xl:tracking-[-1.9px]">
          <span className="text-elec">Electricista</span>,{" "}
          <span className="text-agua">plomero</span> y{" "}
          <span className="text-flame">gasista</span> matriculado.
        </h1>
        <p className="rise rise-3 mt-4 max-w-[65ch] text-[15.5px] leading-normal text-pretty text-mist lg:text-[19px] xl:text-[21px]">
          Atendemos CABA y GBA. Escribinos por WhatsApp con una foto o un video
          detallado del problema y el presupuesto no se cobra.
        </p>
      </div>
      <ScrollHintArrow />
    </section>
  );
}
