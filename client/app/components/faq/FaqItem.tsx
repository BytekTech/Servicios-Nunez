import type { Faq } from "../../types/trade";

export default function FaqItem({
  faq,
  isOpen,
  onToggle,
}: Readonly<{
  faq: Faq;
  isOpen: boolean;
  onToggle: () => void;
}>) {
  return (
    <div className="border-b border-line-soft">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="flex min-h-11 w-full cursor-pointer select-none items-center justify-between gap-3 py-[15px] text-left"
      >
        <span className="text-[15px] leading-[1.3] font-semibold lg:text-[16.5px]">{faq.q}</span>
        <span className="flex-none font-mono text-[24px] leading-none text-blue">
          {isOpen ? "–" : "+"}
        </span>
      </button>
      {isOpen && (
        <p className="pr-6 pb-4 text-[14.5px] leading-[1.55] text-pretty text-ink-soft lg:text-[15.5px]">
          {faq.a}
        </p>
      )}
    </div>
  );
}
