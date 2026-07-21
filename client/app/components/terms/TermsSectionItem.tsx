import type { TermsSection } from "../../types/terms";

export default function TermsSectionItem({
  code,
  title,
  body,
}: Readonly<TermsSection>) {
  return (
    <section className="flex gap-4 border-b border-line-soft py-5 lg:gap-5 lg:py-6">
      <span className="font-mono text-[13px] leading-[1.4] font-bold text-blue lg:text-[15px] xl:text-[17px]">
        {code}
      </span>
      <div className="flex max-w-[900px] flex-col gap-2 lg:max-w-[1040px] lg:gap-2.5 xl:max-w-[1200px]">
        <h2 className="text-[16px] leading-[1.3] font-semibold lg:text-[19px] xl:text-[21.5px]">
          {title}
        </h2>
        {body.map((paragraph) => (
          <p
            key={paragraph}
            className="text-[14px] leading-[1.6] text-ink-soft lg:text-[16.5px] xl:text-[18.5px]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
