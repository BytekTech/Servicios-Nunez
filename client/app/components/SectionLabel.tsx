export default function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="h-0.5 w-[22px] flex-none bg-blue" />
      <span className="font-mono text-[11px] tracking-[2px] text-blue">
        {children}
      </span>
    </div>
  );
}
