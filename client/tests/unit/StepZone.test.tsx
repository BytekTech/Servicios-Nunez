import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Step from "@/app/components/section/Step";
import Zone from "@/app/components/seo/Zone";
import { tradeAccent } from "@/app/lib/tradeAccent";

describe("Step", () => {
  it("renders code, title and detail", () => {
    render(
      <Step
        code="01"
        title="Escribinos por WhatsApp"
        detail="Contanos el problema."
        accent={tradeAccent("electricidad")}
      />
    );
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("Escribinos por WhatsApp")).toBeInTheDocument();
    expect(screen.getByText("Contanos el problema.")).toBeInTheDocument();
  });
});

describe("Zone", () => {
  it("renders zone and detail", () => {
    render(<Zone zone="CABA" detail="Todos los barrios" />);
    expect(screen.getByText("CABA")).toBeInTheDocument();
    expect(screen.getByText("Todos los barrios")).toBeInTheDocument();
  });
});
