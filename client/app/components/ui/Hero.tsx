import SectionLabel from "./SectionLabel";

export default function Hero({
  label,
  title,
  big = false,
  accent,
  children,
}: Readonly<{
  label: string;
  title: React.ReactNode;
  big?: boolean;
  accent?: string;
  children?: React.ReactNode;
}>) {
  return (
    <div className="border-b border-line px-5 pt-7 pb-6 lg:px-8 lg:pt-10 lg:pb-8 xl:px-14 xl:pt-14">
      <SectionLabel className="mb-3.5 rise" accent={accent}>
        {label}
      </SectionLabel>
      <h1
        className={`rise rise-2 font-extrabold text-pretty ${
          big
            ? "text-[34px] leading-[1.06] tracking-[-0.8px] lg:text-[44px] lg:leading-[1.04] lg:tracking-[-1.2px] xl:text-[54px] xl:tracking-[-1.6px] 2xl:text-[64px] 2xl:tracking-[-1.9px]"
            : "text-[28px] leading-[1.12] tracking-[-0.6px] lg:text-[36px] lg:leading-[1.08] lg:tracking-[-0.9px] xl:text-[42px] xl:tracking-[-1.1px] 2xl:text-[50px] 2xl:tracking-[-1.4px]"
        }`}
      >
        {title}
      </h1>
      {children}
    </div>
  );
}
