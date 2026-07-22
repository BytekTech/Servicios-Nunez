import type { Trade } from "../../types/trade";
import { tradeAccent } from "../../lib/tradeAccent";
import SectionLabel from "../ui/SectionLabel";
import TradeServiceItem from "./TradeServiceItem";

export default function TradeServices({ trade }: Readonly<{ trade: Trade }>) {
  const accent = tradeAccent(trade.slug);
  return (
    <div className="border-b border-line px-5 py-6 lg:px-8 lg:py-9 xl:px-14 xl:py-11">
      <SectionLabel className="reveal mb-1.5" accent={accent.text}>
        QUÉ HACEMOS
      </SectionLabel>
      <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
        {trade.services.map((service) => (
          <TradeServiceItem
            key={service}
            service={service}
            dotClass={accent.bg}
          />
        ))}
      </div>
      <p className="mt-5 font-mono text-[11px] leading-[1.7] tracking-[1.2px] text-ink-muted lg:text-[12.5px] xl:text-[14px]">
        {trade.cred}
      </p>
    </div>
  );
}
