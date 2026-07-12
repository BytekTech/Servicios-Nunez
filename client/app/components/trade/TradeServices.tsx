import type { Trade } from "../../types/trade";
import { tradeAccent } from "../../lib/tradeAccent";
import SectionLabel from "../ui/SectionLabel";
import TradeServiceItem from "./TradeServiceItem";

export default function TradeServices({ trade }: Readonly<{ trade: Trade }>) {
  const accent = tradeAccent(trade.slug);
  return (
    <div className="border-b border-line px-5 py-6 lg:px-8 xl:px-14">
      <SectionLabel className="reveal mb-1.5" accent={accent.text}>
        QUÉ HACEMOS
      </SectionLabel>
      <div className="flex flex-col">
        {trade.services.map((service) => (
          <TradeServiceItem
            key={service}
            service={service}
            dotClass={accent.bg}
          />
        ))}
      </div>
      <p className="mt-4 font-mono text-[10.5px] leading-[1.7] tracking-[1.2px] text-ink-muted lg:text-[12px] xl:text-[13.5px]">
        {trade.cred}
      </p>
    </div>
  );
}
