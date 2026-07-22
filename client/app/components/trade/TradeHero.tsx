import HeroBackdrop from "../ui/HeroBackdrop";
import SectionLabel from "../ui/SectionLabel";
import ScrollHintArrow from "../ui/ScrollHintArrow";
import { CONTENT_WIDTH } from "../../lib/container";

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
      <HeroBackdrop
        src={imageSrc}
        alt={imageAlt}
        overlayClassName="bg-gradient-to-b from-navy/60 via-navy/20 to-transparent"
      />
      <div className={`relative mx-auto w-full px-5 pt-24 pb-14 lg:px-8 lg:pt-28 lg:pb-20 xl:px-14 xl:pt-32 ${CONTENT_WIDTH}`}>
        <SectionLabel
          className="rise mb-3.5"
          accent={accentText}
          textClassName="text-[17px] font-bold lg:text-[21px] xl:text-[24px]"
        >
          {label}
        </SectionLabel>
        <h1 className="rise rise-2 max-w-[22ch] text-[40px] leading-[1.05] font-extrabold tracking-[-1px] text-pretty text-paper lg:text-[56px] lg:leading-[1.03] lg:tracking-[-1.6px] xl:text-[68px] xl:tracking-[-2px] 2xl:text-[80px] 2xl:tracking-[-2.4px]">
          {title}
        </h1>
        {urgent && (
          <p className="rise rise-3 mt-5 max-w-[75ch] rounded-[6px] border border-paper/20 bg-navy/70 px-4 py-[15px] text-[14.5px] leading-[1.45] text-pretty text-paper backdrop-blur-sm lg:px-5 lg:py-[17px] lg:text-[17px] xl:text-[18.5px]">
            {urgent}
          </p>
        )}
      </div>
      <ScrollHintArrow />
    </section>
  );
}