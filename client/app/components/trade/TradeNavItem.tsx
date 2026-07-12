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
      className={`group select-none grid grid-cols-[1fr_56px_30px] items-center gap-2 border-b border-line px-5 py-4 transition-colors duration-200 lg:grid-cols-[1fr_64px_30px] lg:px-8 lg:py-5 xl:grid-cols-[1fr_80px_36px] xl:px-14 xl:py-6 ${accent.rowHover} ${className}`}
    >
      <span className="flex min-w-0 flex-col gap-1">
        <span
          className={`text-[21px] leading-none font-bold tracking-[-0.3px] lg:text-[24px] xl:text-[28px] xl:mx-15 ${accent.text}`}
        >
          {trade.name}
        </span>
        <span className="font-mono text-[11px] tracking-[0.3px] text-ink-muted lg:text-[12.5px] xl:text-[14px] xl:mx-15">
          {trade.line}
        </span>
      </span>
      <ImageSlot
        className={`aspect-square w-14 transition-transform duration-200 group-hover:scale-[1.04] lg:w-16 xl:w-20 ${accent.soft}`}
      />
      <span
        className={`justify-self-end text-[26px] transition-transform duration-200 group-hover:translate-x-1 xl:text-[30px] xl:mr-45 ${accent.text}`}
      >
        →
      </span>
    </Link>
  );
}
