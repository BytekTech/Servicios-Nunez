import tradesData from "@/public/data/trades.json";
import type { Trade } from "../../types/trade";
import TradeNavItem from "./TradeNavItem";


export default function TradesNav() {
  const RISE_STAGGER = ["rise rise-2", "rise rise-3", "rise rise-4"];
  const TRADES = tradesData as Trade[];

  return (
    <nav className="flex flex-col">
      {TRADES.map((trade, i) => (
        <TradeNavItem
          key={trade.slug}
          trade={trade}
          className={RISE_STAGGER[i] ?? ""}
        />
      ))}
    </nav>
  );
}
