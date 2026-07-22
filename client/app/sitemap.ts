import type { MetadataRoute } from "next";
import tradesData from "@/public/data/trades.json";
import type { Trade } from "./types/trade";
import { absoluteUrl } from "./lib/site";

const TRADES = tradesData as Trade[];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/terminos"), lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const tradeRoutes: MetadataRoute.Sitemap = TRADES.map((trade) => ({
    url: absoluteUrl(`/${trade.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...tradeRoutes];
}
