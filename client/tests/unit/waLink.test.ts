import { describe, it, expect } from "vitest";
import { waLink } from "@/app/lib/trades";
import contact from "@/public/data/contact.json";

describe("waLink", () => {
  const digits = contact.whatsappDigits;

  it("builds a wa.me URL with the contact digits", () => {
    const url = waLink("hola");
    expect(url).toBe(`https://wa.me/${digits}?text=hola`);
    expect(url.startsWith(`https://wa.me/${digits}?text=`)).toBe(true);
  });

  it("percent-encodes spaces and special characters in the message", () => {
    const message = "Hola, necesito ayuda con: cañería & 100% urgente ¿sí?";
    const url = waLink(message);

    expect(url).toBe(
      `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
    );
    // Spaces must not survive raw in the URL.
    expect(url).not.toContain(" ");
    // Spot-check specific encodings.
    expect(url).toContain("%20"); // space
    expect(url).toContain("%26"); // &
    // Round-trips back to the original message.
    const decoded = decodeURIComponent(url.split("?text=")[1]);
    expect(decoded).toBe(message);
  });

  it("encodes an empty message to an empty text param", () => {
    expect(waLink("")).toBe(`https://wa.me/${digits}?text=`);
  });
});
