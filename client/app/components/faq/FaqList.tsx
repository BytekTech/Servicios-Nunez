"use client";

import { useState } from "react";
import type { Faq } from "../../types/trade";
import FaqItem from "./FaqItem";

export default function FaqList({
  faqs,
  accentText,
}: Readonly<{ faqs: readonly Faq[]; accentText?: string }>) {
  const [open, setOpen] = useState(-1);

  return (
    <div className="flex flex-col">
      {faqs.map((f, i) => (
        <FaqItem
          key={f.q}
          faq={f}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? -1 : i)}
          accentText={accentText}
        />
      ))}
    </div>
  );
}
