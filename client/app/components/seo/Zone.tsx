export default function Zone({
  zone,
  detail,
}: Readonly<{
  zone: string;
  detail: string;
}>) {
  return (
    <div className="reveal flex items-center gap-3 border-b border-line-soft py-[13px] lg:py-[15px]">
      <span className="size-[7px] flex-none bg-blue" />
      <span className="font-mono text-[15px] font-bold md:text-[16px] lg:text-[16.5px] xl:text-[18px]">{zone}</span>
      <span className="text-[13.5px] text-ink-muted md:text-[14.5px] lg:text-[15px] xl:text-[16.5px]">{detail}</span>
    </div>
  );
}
