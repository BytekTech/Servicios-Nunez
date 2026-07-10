import type { Faq } from "../../lib/trades";

export default function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: Faq;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-line-soft">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="flex min-h-11 w-full cursor-pointer items-center justify-between gap-3 py-[15px] text-left"
      >
        <span className="text-[15px] leading-[1.3] font-semibold">{faq.q}</span>
        <span className="flex-none font-mono text-[24px] leading-none text-blue">
          {isOpen ? "–" : "+"}
        </span>
      </button>
      {isOpen && (
        <p className="pr-6 pb-4 text-[14.5px] leading-[1.55] text-pretty text-ink-soft">
          {faq.a}
        </p>
      )}
    </div>
  );
}
