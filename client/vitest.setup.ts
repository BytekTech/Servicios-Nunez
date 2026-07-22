import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";
import React from "react";

// `next/image` exige `width`/`height` para `src` string. En los tests, los
// imports estáticos de imágenes se resuelven como URL string (no como
// StaticImageData), así que lo reemplazamos por un <img> plano.
vi.mock("next/image", () => ({
  default: ({ src, alt, ...rest }: Record<string, unknown>) => {
    const resolved =
      typeof src === "object" && src !== null
        ? ((src as { src?: string }).src ?? "")
        : src;
    // Props propias de next/image que un <img> no entiende.
    const { fill, priority, quality, sizes, ...imgProps } = rest;
    void fill;
    void priority;
    void quality;
    void sizes;
    return React.createElement("img", { src: resolved, alt, ...imgProps });
  },
}));

afterEach(() => {
  cleanup();
});
