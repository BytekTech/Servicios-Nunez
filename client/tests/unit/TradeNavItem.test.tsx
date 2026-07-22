import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TradeNavItem from "@/app/components/trade/TradeNavItem";
import type { Trade } from "@/app/types/trade";

const trade: Trade = {
  slug: "electricidad",
  code: "01",
  name: "Electricidad",
  line: "tableros · cortos · instalaciones",
  tagline: "tagline",
  seoTitle: "Electricista matriculado en CABA y GBA",
  keywords: [],
  background: "/images/electricista.webp",
  cred: "cred",
  urgent: "",
  waMsg: "msg",
  services: [],
  faqs: [],
};

describe("TradeNavItem", () => {
  it("renders a link pointing to /<slug>", () => {
    render(<TradeNavItem trade={trade} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/electricidad");
  });

  it("shows the trade name and line", () => {
    render(<TradeNavItem trade={trade} />);
    expect(screen.getByText("Electricidad")).toBeInTheDocument();
    expect(
      screen.getByText("tableros · cortos · instalaciones")
    ).toBeInTheDocument();
  });
});
