import type { TradeAccent } from "../../lib/tradeAccent";

export default function Step({
  code,
  title,
  detail,
  accent,
}: Readonly<{
  code: string;
  title: string;
  detail: string;
  accent: TradeAccent;
}>) {
  return (
    <div
      className={`reveal flex h-full flex-col gap-2 rounded-2xl border border-line bg-paper px-5 py-5 shadow-[0_1px_2px_rgb(18_35_61/0.05)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 ${accent.borderHover} ${accent.shadowHover} lg:gap-2.5 lg:px-6 lg:py-7`}
    >
      <span
        className={`font-mono text-[15px] leading-none font-bold tracking-[1px] md:text-[16px] lg:text-[17px] xl:text-[19px] ${accent.text}`}
      >
        {code}
      </span>
      <span className="text-[16.5px] leading-[1.25] font-semibold md:text-[17.5px] lg:text-[18.5px] xl:text-[20.5px]">
        {title}
      </span>
      <span className="text-[14px] leading-[1.5] text-ink-muted md:text-[15px] lg:text-[15.5px] xl:text-[17px]">
        {detail}
      </span>
    </div>
  );
}
