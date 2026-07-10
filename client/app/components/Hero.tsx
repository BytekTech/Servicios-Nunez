import SectionLabel from "./SectionLabel";

export default function Hero({
  label,
  title,
  big = false,
  children,
}: {
  label: string;
  title: string;
  big?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="border-b border-line px-5 pt-7 pb-6 lg:px-8 lg:pt-10 lg:pb-8">
      <SectionLabel className="mb-3.5">{label}</SectionLabel>
      <h1
        className={`font-extrabold text-pretty ${
          big
            ? "text-[34px] leading-[1.06] tracking-[-0.8px] lg:text-[44px] lg:leading-[1.04] lg:tracking-[-1.2px]"
            : "text-[28px] leading-[1.12] tracking-[-0.6px] lg:text-[36px] lg:leading-[1.08] lg:tracking-[-0.9px]"
        }`}
      >
        {title}
      </h1>
      {children}
    </div>
  );
}
