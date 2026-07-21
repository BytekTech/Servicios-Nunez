import Link from "next/link";
import Hero from "../components/ui/Hero";

export default function NotFound() {
  return (
    <>
      <div className="bleed border-b border-line">
        <header className="mx-auto flex w-full max-w-[520px] items-center justify-between px-5 py-4 md:max-w-[760px] lg:max-w-[1040px] lg:px-8 xl:max-w-[1200px] xl:px-14 2xl:max-w-[1320px]">
          <span className="font-mono text-xs tracking-[1px] text-blue lg:text-[13px]">
            ERROR 404
          </span>
          <span className="text-[15px] font-extrabold tracking-[-0.2px] lg:text-[17px]">
            NUÑEZ
          </span>
        </header>
      </div>
      <Hero label="PÁGINA NO ENCONTRADA" title="Esta página no existe.">
        <p className="mt-3 text-[15.5px] leading-normal text-pretty text-ink-soft lg:text-[17px]">
          La dirección que ingresaste no corresponde a ninguna sección del
          sitio. Volvé al inicio para ver nuestros servicios.
        </p>
      </Hero>
      <div className="px-5 py-6 lg:px-8 xl:px-14">
        <Link
          href="/"
          className="flex min-h-[50px] items-center justify-center gap-2 rounded-[5px] bg-navy select-none text-[15.5px] font-bold tracking-[-0.1px] text-paper hover:bg-blue lg:min-h-[54px] lg:text-[16.5px]"
        >
          ← Volver al inicio
        </Link>
      </div>
    </>
  );
}
