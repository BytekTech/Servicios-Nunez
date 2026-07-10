export default function Zone({
  zone,
  detail,
}: {
  zone: string;
  detail: string;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-line-soft py-[11px]">
      <span className="size-[7px] flex-none bg-blue" />
      <span className="font-mono text-[14px] font-bold">{zone}</span>
      <span className="text-[13px] text-ink-muted">{detail}</span>
    </div>
  );
}
