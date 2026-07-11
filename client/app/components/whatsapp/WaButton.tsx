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
      className={`flex min-h-[50px] items-center justify-center gap-2 rounded-[5px] bg-wa select-none text-[15.5px] font-bold tracking-[-0.1px] text-white hover:bg-wa-dark lg:min-h-[54px] lg:text-[16.5px] ${className}`}
    >
      Escribinos por WhatsApp
    </a>
  );
}
