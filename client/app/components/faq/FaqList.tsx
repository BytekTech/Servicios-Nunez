"use client";

import { useState } from "react";
import type { Faq } from "../../lib/trades";
import FaqItem from "./FaqItem";

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState(-1);

  return (
    <div className="flex flex-col">
      {faqs.map((f, i) => (
        <FaqItem
          key={f.q}
          faq={f}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? -1 : i)}
        />
      ))}
    </div>
  );
}
