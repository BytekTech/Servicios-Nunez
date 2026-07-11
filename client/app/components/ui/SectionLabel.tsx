export default function SectionLabel({
  children,
  className = "",
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="h-0.5 w-[22px] flex-none bg-blue" />
      <span className="font-mono text-[11px] tracking-[2px] text-blue lg:text-[12.5px]">
        {children}
      </span>
    </div>
  );
}