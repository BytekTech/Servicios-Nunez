import Link from "next/link";
import type { Trade } from "../../types/trade";

export default function TradeNavItem({ trade }: Readonly<{ trade: Trade }>) {
  return (
    <Link
      href={`/${trade.slug}`}
      className="select-none grid grid-cols-[44px_1fr_30px] items-center gap-2 border-b border-line px-5 py-[22px] hover:bg-row-hover lg:px-8 lg:py-7 xl:px-14"
    >
      <span className="font-mono text-[13px] font-bold text-blue lg:text-[14px]">
        {trade.code}
      </span>
      <span className="flex min-w-0 flex-col gap-1">
        <span className="text-[21px] leading-none font-bold tracking-[-0.3px] lg:text-[24px]">
          {trade.name}
        </span>
        <span className="font-mono text-[11px] tracking-[0.3px] text-ink-muted lg:text-[12.5px]">
          {trade.line}
        </span>
      </span>
      <span className="justify-self-end text-[26px] text-blue">→</span>
    </Link>
  );
}
