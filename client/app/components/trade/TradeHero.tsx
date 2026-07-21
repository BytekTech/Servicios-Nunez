import Image from "next/image";
import SectionLabel from "../ui/SectionLabel";

export default function TradeHero({
  label,
  title,
  urgent,
  accentText,
  imageSrc,
  imageAlt,
}: Readonly<{
  label: string;
  title: string;
  urgent?: string;
  accentText: string;
  imageSrc: string;
  imageAlt: string;
}>) {
  return (
    <section className="bleed relative flex flex-1 flex-col justify-start overflow-hidden">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/20 to-transparent"
      />
      <div className="relative mx-auto w-full max-w-[520px] px-5 pt-24 pb-14 md:max-w-[760px] lg:max-w-[1040px] lg:px-8 lg:pt-28 lg:pb-20 xl:max-w-[1200px] xl:px-14 xl:pt-32 2xl:max-w-[1320px]">
        <SectionLabel className="rise mb-3.5" accent={accentText}>
          {label}
        </SectionLabel>
        <h1 className="rise rise-2 max-w-[22ch] text-[34px] leading-[1.06] font-extrabold tracking-[-0.8px] text-pretty text-paper lg:text-[46px] lg:leading-[1.04] lg:tracking-[-1.2px] xl:text-[56px] xl:tracking-[-1.6px] 2xl:text-[66px] 2xl:tracking-[-1.9px]">
          {title}
        </h1>
        {urgent && (
          <p className="rise rise-3 mt-5 max-w-[75ch] rounded-[6px] border border-paper/20 bg-navy/70 px-4 py-[15px] text-[14.5px] leading-[1.45] text-pretty text-paper backdrop-blur-sm lg:px-5 lg:py-[17px] lg:text-[17px] xl:text-[18.5px]">
            {urgent}
          </p>
        )}
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
  );
}