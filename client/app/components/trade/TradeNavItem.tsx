import Link from "next/link";
import type { Trade } from "../../types/trade";
import { tradeAccent } from "../../lib/tradeAccent";
import ImageSlot from "../ui/ImageSlot";

export default function TradeNavItem({
  trade,
  className = "",
}: Readonly<{ trade: Trade; className?: string }>) {
  const accent = tradeAccent(trade.slug);
  return (
    <Link
      href={`/${trade.slug}`}
      className={`group grid select-none grid-cols-[1fr_56px_30px] items-center gap-3 border-b border-line px-5 py-4 transition-colors duration-200 lg:grid-cols-[1fr_88px_36px] lg:gap-5 lg:px-8 lg:py-7 xl:grid-cols-[1fr_112px_44px] xl:px-14 xl:py-9 ${accent.rowHover} ${className}`}
    >
      <span className="flex min-w-0 flex-col gap-1 lg:gap-1.5">
        <span
          className={`text-[21px] leading-none font-bold tracking-[-0.3px] lg:text-[30px] xl:text-[38px] 2xl:text-[42px] ${accent.text}`}
        >
          {trade.name}
        </span>
        <span className="font-mono text-[11px] tracking-[0.3px] text-ink-muted lg:text-[13.5px] xl:text-[15px]">
          {trade.line}
        </span>
      </span>
      <ImageSlot
        className={`aspect-square w-14 transition-transform duration-200 group-hover:scale-[1.04] lg:w-[88px] xl:w-28 ${accent.soft}`}
      />
      <span
        className={`justify-self-end text-[26px] transition-transform duration-200 group-hover:translate-x-1 lg:text-[34px] xl:text-[42px] ${accent.text}`}
      >
        →
      </span>
    </Link>
  );
}
