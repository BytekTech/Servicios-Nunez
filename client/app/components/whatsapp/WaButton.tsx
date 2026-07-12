export default function WaButton({
  href,
  className = "",
}: Readonly<{
  href: string;
  className?: string;
}>) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={`flex min-h-[50px] items-center justify-center gap-2 rounded-[5px] bg-wa select-none text-[15.5px] font-bold tracking-[-0.1px] text-white transition-[background-color,transform] duration-150 hover:bg-wa-dark active:scale-[0.985] lg:min-h-[54px] lg:text-[16.5px] xl:min-h-[58px] xl:text-[18px] ${className}`}
    >
      Escribinos por WhatsApp
    </a>
  );
}
