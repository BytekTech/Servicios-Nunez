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
      <span className="h-0.5 w-[22px] flex-none bg-current lg:w-[28px]" />
      <span className="font-mono text-[11px] tracking-[2px] lg:text-[13px] xl:text-[15px]">
        {children}
      </span>
    </div>
  );
}
