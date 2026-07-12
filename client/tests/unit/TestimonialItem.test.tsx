import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TestimonialItem from "@/app/components/testimonials/TestimonialItem";

describe("TestimonialItem", () => {
  it("renders the quote, name and detail", () => {
    render(
      <TestimonialItem
        quote="Trabajo impecable"
        name="MARIANA G."
        detail="BELGRANO · PLOMERÍA"
        rating={5}
      />
    );

    expect(screen.getByText(/Trabajo impecable/)).toBeInTheDocument();
    expect(screen.getByText("MARIANA G.")).toBeInTheDocument();
    expect(screen.getByText(/BELGRANO · PLOMERÍA/)).toBeInTheDocument();
  });

  it("shows 4 filled and 1 empty star for rating 4", () => {
    render(
      <TestimonialItem quote="q" name="n" detail="d" rating={4} />
    );

    // Accessible label reflects the rating.
    expect(screen.getByLabelText("4 de 5 estrellas")).toBeInTheDocument();

    // Count filled (★) and empty (☆) star glyphs in the rendered text.
    const stars = screen.getByLabelText("4 de 5 estrellas");
    const filled = (stars.textContent?.match(/★/g) ?? []).length;
    const empty = (stars.textContent?.match(/☆/g) ?? []).length;
    expect(filled).toBe(4);
    expect(empty).toBe(1);
  });

  it("shows 5 filled and 0 empty stars for rating 5", () => {
    render(<TestimonialItem quote="q" name="n" detail="d" rating={5} />);
    const stars = screen.getByLabelText("5 de 5 estrellas");
    expect((stars.textContent?.match(/★/g) ?? []).length).toBe(5);
    expect((stars.textContent?.match(/☆/g) ?? []).length).toBe(0);
  });
});
