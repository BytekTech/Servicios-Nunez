export default function SectionLabel({
  children,
  className = "",
  accent = "text-blue",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  accent?: string;
}>) {
  return (
    <div className={`flex items-center gap-2.5 ${accent} ${className}`}>
      <span className="h-0.5 w-[22px] flex-none bg-current" />
      <span className="font-mono text-[11px] tracking-[2px] lg:text-[12.5px] xl:text-[14px]">
        {children}
      </span>
    </div>
  );
}
