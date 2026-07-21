export default function TradeServiceItem({
  service,
  dotClass = "bg-blue",
}: Readonly<{ service: string; dotClass?: string }>) {
  return (
    <div className="reveal flex items-center gap-3 border-b border-line-soft py-[14px] text-[15.5px] leading-[1.35] lg:py-4 lg:text-[17.5px] xl:text-[19.5px]">
      <span className={`size-[7px] flex-none ${dotClass}`} />
      <span>{service}</span>
    </div>
  );
}
