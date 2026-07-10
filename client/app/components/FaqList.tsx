"use client";

import { useState } from "react";
import type { Faq } from "../lib/trades";

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState(-1);

  return (
    <div className="flex flex-col">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-b border-line-soft">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex min-h-11 w-full cursor-pointer items-center justify-between gap-3 py-[15px] text-left"
            >
              <span className="text-[15px] leading-[1.3] font-semibold">
                {f.q}
              </span>
              <span className="flex-none font-mono text-[17px] text-blue">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen && (
              <p className="pr-6 pb-4 text-[14.5px] leading-[1.55] text-pretty text-ink-soft">
                {f.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
