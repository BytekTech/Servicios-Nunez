import type { TermsSection } from "../../types/terms";

export default function TermsSectionItem({
  code,
  title,
  body,
}: Readonly<TermsSection>) {
  return (
    <section className="flex gap-4 border-b border-line-soft py-5">
      <span className="font-mono text-[13px] leading-[1.4] font-bold text-blue lg:text-[14px]">
        {code}
      </span>
      <div className="flex max-w-[760px] flex-col gap-2">
        <h2 className="text-[16px] leading-[1.3] font-semibold lg:text-[17.5px]">
          {title}
        </h2>
        {body.map((paragraph) => (
          <p
            key={paragraph}
            className="text-[14px] leading-[1.6] text-ink-soft lg:text-[15.5px]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
