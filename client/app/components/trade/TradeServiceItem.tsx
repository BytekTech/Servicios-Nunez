export default function TradeServiceItem({
  service,
}: Readonly<{ service: string }>) {
  return (
    <div className="flex items-center gap-3 border-b border-line-soft py-[13px] text-[15px] leading-[1.35] lg:text-[16.5px]">
      <span className="size-[7px] flex-none bg-blue" />
      <span>{service}</span>
    </div>
  );
}
