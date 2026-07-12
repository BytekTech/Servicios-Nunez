export default function TradeServiceItem({
  service,
  dotClass = "bg-blue",
}: Readonly<{ service: string; dotClass?: string }>) {
  return (
    <div className="reveal flex items-center gap-3 border-b border-line-soft py-[13px] text-[15px] leading-[1.35] lg:text-[16.5px] xl:text-[18.5px]">
      <span className={`size-[7px] flex-none ${dotClass}`} />
      <span>{service}</span>
    </div>
  );
}
