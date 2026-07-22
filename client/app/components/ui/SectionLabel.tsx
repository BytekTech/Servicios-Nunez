export default function SectionLabel({
  children,
  className = "",
  accent = "text-blue",
  textClassName = "text-[11px] md:text-[12px] lg:text-[13px] xl:text-[15px]",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  accent?: string;
  textClassName?: string;
}>) {
  return (
    <div className={`flex items-center gap-2.5 ${accent} ${className}`}>
      <span className="h-0.5 w-[22px] flex-none bg-current lg:w-[28px]" />
      <span className={`font-mono tracking-[2px] ${textClassName}`}>
        {children}
      </span>
    </div>
  );
}
