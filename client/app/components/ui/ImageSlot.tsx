export default function ImageSlot({
  label,
  className = "",
}: Readonly<{
  label?: string;
  className?: string;
}>) {
  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-[6px] border border-dashed border-line-strong bg-[repeating-linear-gradient(45deg,transparent,transparent_12px,rgb(18_35_61/0.04)_12px,rgb(18_35_61/0.04)_13px)] ${className}`}
    >
      {label && (
        <span className="px-4 text-center font-mono text-[10.5px] tracking-[1.5px] text-ink-faint lg:text-[11.5px] xl:text-[13px]">
          {label}
        </span>
      )}
    </div>
  )
}
