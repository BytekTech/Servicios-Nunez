export default function Step({
  code,
  title,
  detail,
  codeClass = "text-blue",
}: Readonly<{
  code: string;
  title: string;
  detail: string;
  codeClass?: string;
}>) {
  return (
    <div className="reveal flex h-full flex-col gap-2 rounded-2xl border border-line bg-paper px-5 py-5 shadow-[0_1px_2px_rgb(18_35_61/0.05)] lg:gap-2.5 lg:px-6 lg:py-7">
      <span
        className={`font-mono text-[15px] leading-none font-bold tracking-[1px] lg:text-[17px] xl:text-[19px] ${codeClass}`}
      >
        {code}
      </span>
      <span className="text-[16.5px] leading-[1.25] font-semibold lg:text-[18.5px] xl:text-[20.5px]">
        {title}
      </span>
      <span className="text-[14px] leading-[1.5] text-ink-muted lg:text-[15.5px] xl:text-[17px]">
        {detail}
      </span>
    </div>
  );
}
