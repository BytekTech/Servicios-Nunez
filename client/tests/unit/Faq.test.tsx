import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FaqItem from "@/app/components/faq/FaqItem";
import FaqList from "@/app/components/faq/FaqList";
import type { Faq } from "@/app/types/trade";

const faqs: Faq[] = [
  { q: "¿Cobrás la visita?", a: "El presupuesto es sin cargo." },
  { q: "¿Traés los materiales?", a: "Sí, de primera marca." },
];

describe("FaqItem (controlled)", () => {
  it("hides the answer and shows + when closed", () => {
    render(<FaqItem faq={faqs[0]} isOpen={false} onToggle={() => {}} />);
    const button = screen.getByRole("button", { name: /¿Cobrás la visita?/ });
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByText("El presupuesto es sin cargo.")).not.toBeInTheDocument();
    expect(screen.getByText("+")).toBeInTheDocument();
  });

  it("shows the answer and – when open", () => {
    render(<FaqItem faq={faqs[0]} isOpen={true} onToggle={() => {}} />);
    const button = screen.getByRole("button", { name: /¿Cobrás la visita?/ });
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("El presupuesto es sin cargo.")).toBeInTheDocument();
    expect(screen.getByText("–")).toBeInTheDocument();
  });

  it("calls onToggle when the button is clicked", async () => {
    const user = userEvent.setup();
    let toggled = 0;
    render(
      <FaqItem faq={faqs[0]} isOpen={false} onToggle={() => (toggled += 1)} />
    );
    await user.click(screen.getByRole("button"));
    expect(toggled).toBe(1);
  });
});

describe("FaqList (open/close behavior with state)", () => {
  it("starts fully collapsed", () => {
    render(<FaqList faqs={faqs} />);
    expect(screen.queryByText("El presupuesto es sin cargo.")).not.toBeInTheDocument();
    expect(screen.queryByText("Sí, de primera marca.")).not.toBeInTheDocument();
  });

  it("opens an item on click and closes it on a second click", async () => {
    const user = userEvent.setup();
    render(<FaqList faqs={faqs} />);

    const firstButton = screen.getByRole("button", {
      name: /¿Cobrás la visita?/,
    });

    await user.click(firstButton);
    expect(screen.getByText("El presupuesto es sin cargo.")).toBeInTheDocument();
    expect(firstButton).toHaveAttribute("aria-expanded", "true");

    await user.click(firstButton);
    expect(
      screen.queryByText("El presupuesto es sin cargo.")
    ).not.toBeInTheDocument();
    expect(firstButton).toHaveAttribute("aria-expanded", "false");
  });

  it("opening a second item closes the first (accordion behavior)", async () => {
    const user = userEvent.setup();
    render(<FaqList faqs={faqs} />);

    await user.click(screen.getByRole("button", { name: /¿Cobrás la visita?/ }));
    expect(screen.getByText("El presupuesto es sin cargo.")).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /¿Traés los materiales?/ })
    );
    expect(screen.getByText("Sí, de primera marca.")).toBeInTheDocument();
    expect(
      screen.queryByText("El presupuesto es sin cargo.")
    ).not.toBeInTheDocument();
  });
});
