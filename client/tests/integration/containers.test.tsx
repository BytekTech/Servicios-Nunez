import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Testimonials from "@/app/components/testimonials/Testimonials";
import Coverage from "@/app/components/section/Coverage";
import HowWeWork from "@/app/components/section/HowWeWork";
import TradesNav from "@/app/components/trade/TradesNav";

import testimonials from "@/public/data/testimonials.json";
import zones from "@/public/data/zones.json";
import steps from "@/public/data/steps.json";
import trades from "@/public/data/trades.json";

describe("Testimonials (reads testimonials.json)", () => {
  it("renders one real (non-duplicated) figure per testimonial in the JSON", () => {
    const { container } = render(<Testimonials />);
    // El carrusel infinito duplica las cards; las copias van con aria-hidden.
    // Las figuras "reales" (una por testimonio) son las que NO están ocultas.
    expect(
      container.querySelectorAll("figure:not([aria-hidden])")
    ).toHaveLength(testimonials.length);
  });

  it("renders content from specific testimonials", () => {
    render(<Testimonials />);
    // Aparece en cada copia del loop, así que hay al menos una ocurrencia.
    expect(screen.getAllByText("MARIANA G.").length).toBeGreaterThan(0);
    expect(screen.getAllByText("SILVIA R.").length).toBeGreaterThan(0);
    // A quote fragment from the JSON.
    expect(
      screen.getAllByText(/Gasista con matrícula de verdad/).length
    ).toBeGreaterThan(0);
  });
});

describe("Coverage (reads zones.json)", () => {
  it("renders every zone with its detail", () => {
    render(<Coverage />);
    for (const z of zones) {
      expect(screen.getByText(z.zone)).toBeInTheDocument();
      expect(screen.getByText(z.detail)).toBeInTheDocument();
    }
  });
});

describe("HowWeWork (reads steps.json)", () => {
  it("renders every step title and detail", () => {
    render(<HowWeWork />);
    for (const s of steps) {
      expect(screen.getByText(s.title)).toBeInTheDocument();
      expect(screen.getByText(s.detail)).toBeInTheDocument();
    }
  });
});

describe("TradesNav (reads trades.json)", () => {
  it("renders one link per trade pointing to /<slug>", () => {
    render(<TradesNav />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(trades.length);

    for (const t of trades) {
      const link = links.find(
        (l) => l.getAttribute("href") === `/${t.slug}`
      );
      expect(link, `link for slug ${t.slug}`).toBeDefined();
      expect(link).toHaveTextContent(t.name);
      expect(link).toHaveTextContent(t.code);
    }
  });
});
