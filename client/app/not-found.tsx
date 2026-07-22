import Link from "next/link";
import BackHeader from "./components/header/BackHeader";
import TricolorRule from "./components/ui/TricolorRule";
import SectionLabel from "./components/ui/SectionLabel";

export default function NotFound() {
  return (
    <>
      <BackHeader />
      <TricolorRule />
      <section className="flex min-h-[calc(100svh-140px)] flex-1 flex-col items-center justify-center px-5 py-16 text-center short-landscape:min-h-0 short-landscape:py-10 lg:px-8 xl:px-14">
        <p
          aria-hidden
          className="rise flex items-baseline font-mono text-[110px] leading-none font-bold tracking-[-4px] tabular-nums select-none md:text-[130px] lg:text-[150px] xl:text-[180px]"
        >
          <span className="text-elec">4</span>
          <span className="text-agua">0</span>
          <span className="text-flame">4</span>
        </p>
        <SectionLabel className="rise rise-2 mt-8 justify-center">
          PÁGINA NO ENCONTRADA
        </SectionLabel>
        <h1 className="rise rise-2 mt-4 text-[28px] leading-[1.1] font-extrabold tracking-[-0.6px] text-balance md:text-[32px] lg:text-[38px] lg:tracking-[-1px] xl:text-[44px]">
          Esta página no existe.
        </h1>
        <p className="rise rise-3 mt-3.5 max-w-[46ch] text-[15.5px] leading-normal text-pretty text-ink-soft md:text-[16px] lg:text-[17px]">
          La dirección que ingresaste no corresponde a ninguna sección del
          sitio. Volvé al inicio para ver nuestros servicios.
        </p>
        <Link
          href="/"
          className="rise rise-4 mt-8 flex min-h-[50px] w-full max-w-[320px] items-center justify-center gap-2 rounded-[5px] bg-navy text-[15.5px] font-bold tracking-[-0.1px] text-paper select-none hover:bg-blue md:text-[16px] lg:min-h-[54px] lg:text-[16.5px]"
        >
          ← Volver al inicio
        </Link>
      </section>
    </>
  );
}
