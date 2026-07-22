import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Home from "@/app/(site)/page";
import TermsPage from "@/app/(site)/terminos/page";
import TradePage from "@/app/(site)/[trade]/page";

import terms from "@/public/data/terms.json";
import trades from "@/public/data/trades.json";

describe("Home page (sync Server Component)", () => {
  it("renders the hero heading and the trades nav", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        name: /Electricista, plomero y gasista matriculado\./,
      })
    ).toBeInTheDocument();
    // One nav link per trade from the JSON.
    for (const t of trades) {
      const link = screen
        .getAllByRole("link")
        .find((l) => l.getAttribute("href") === `/${t.slug}`);
      expect(link, `home link for ${t.slug}`).toBeDefined();
    }
  });
});

describe("Terms page (sync Server Component)", () => {
  it("renders every term section title", () => {
    render(<TermsPage />);
    for (const section of terms) {
      expect(
        screen.getByRole("heading", { name: section.title })
      ).toBeInTheDocument();
    }
  });

  it("renders the page hero", () => {
    render(<TermsPage />);
    expect(
      screen.getByRole("heading", { name: /Términos y condiciones\./ })
    ).toBeInTheDocument();
  });
});

/**
 * [trade]/page.tsx is an async Server Component. Vitest does not officially
 * support async Server Components (see next/docs vitest guide), but this one
 * only awaits `params` (a plain Promise) and then does a synchronous data
 * lookup, so we can await the component function to obtain its element tree
 * and render that. This is a pragmatic workaround, not full RSC support.
 */
describe("[trade] page (async Server Component)", () => {
  it("renders the trade name/tagline for a valid slug", async () => {
    const params = Promise.resolve({ trade: "electricidad" });
    const ui = await TradePage({ params });
    render(ui);

    const trade = trades.find((t) => t.slug === "electricidad")!;
    // El hero muestra el nombre del oficio en mayúsculas como etiqueta.
    expect(
      screen.getByText(trade.name.toUpperCase())
    ).toBeInTheDocument();
    // Tagline is the hero heading.
    expect(
      screen.getByRole("heading", { name: trade.tagline })
    ).toBeInTheDocument();
  });

  it("calls notFound() (throws) for an unknown slug", async () => {
    const params = Promise.resolve({ trade: "no-existe" });
    await expect(TradePage({ params })).rejects.toThrow();
  });
});
