export default function Step({
  code,
  title,
  detail,
}: Readonly<{
  code: string;
  title: string;
  detail: string;
}>) {
  return (
    <div className="flex gap-4 border-b border-line-soft py-[13px]">
      <span className="font-mono text-[13px] leading-[1.4] font-bold text-blue lg:text-[14px]">
        {code}
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-[15px] leading-[1.3] font-semibold lg:text-[16.5px]">{title}</span>
        <span className="text-[13.5px] leading-[1.5] text-ink-muted lg:text-[15px]">
          {detail}
        </span>
      </span>
    </div>
  );
}
