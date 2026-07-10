export default function Logo() {
  return (
    <>
      <div className="flex size-[42px] flex-none items-center justify-center rounded-lg bg-navy font-mono text-sm font-bold text-paper">
        SN
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-px">
        <span className="font-mono text-[10px] tracking-[2.5px] text-ink-muted">
          SERVICIOS
        </span>
        <span className="text-[21px] leading-none font-extrabold tracking-[-0.3px]">
          NUÑEZ
        </span>
      </div>
    </>
  );
}
