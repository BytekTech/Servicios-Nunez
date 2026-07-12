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
    <div className="reveal flex gap-4 border-b border-line-soft py-[13px]">
      <span
        className={`font-mono text-[13px] leading-[1.4] font-bold lg:text-[14px] xl:text-[15.5px] ${codeClass}`}
      >
        {code}
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-[15px] leading-[1.3] font-semibold lg:text-[16.5px] xl:text-[18.5px]">{title}</span>
        <span className="text-[13.5px] leading-[1.5] text-ink-muted lg:text-[15px] xl:text-[17px]">
          {detail}
        </span>
      </span>
    </div>
  );
}
