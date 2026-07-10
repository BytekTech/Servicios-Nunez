export default function Step({
  code,
  title,
  detail,
}: {
  code: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex gap-4 border-b border-line-soft py-[13px]">
      <span className="font-mono text-[13px] leading-[1.4] font-bold text-blue">
        {code}
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-[15px] leading-[1.3] font-semibold">{title}</span>
        <span className="text-[13.5px] leading-[1.5] text-ink-muted">
          {detail}
        </span>
      </span>
    </div>
  );
}
