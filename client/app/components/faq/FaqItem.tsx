import type { Faq } from "../../types/trade";

export default function FaqItem({
  faq,
  isOpen,
  onToggle,
  accentText = "text-blue",
}: Readonly<{
  faq: Faq;
  isOpen: boolean;
  onToggle: () => void;
  accentText?: string;
}>) {
  return (
    <div className="reveal border-b border-line-soft">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="flex min-h-11 w-full cursor-pointer select-none items-center justify-between gap-3 py-[15px] text-left"
      >
        <span className="text-[15px] leading-[1.3] font-semibold md:text-[16px] lg:text-[16.5px] xl:text-[18.5px]">{faq.q}</span>
        <span
          className={`flex-none font-mono text-[24px] leading-none transition-transform duration-200 md:text-[25px] xl:text-[27px] ${accentText} ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        aria-hidden={!isOpen}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`ml-4 pr-6 pb-4 text-[14.5px] leading-[1.55] text-pretty text-ink-soft transition-opacity duration-300 md:text-[15px] lg:ml-5 lg:text-[15.5px] xl:max-w-[1120px] xl:text-[17px] 2xl:max-w-[1240px] ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}
