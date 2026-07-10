export default function WaButton({
  href,
  className = "",
}: {
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={`flex min-h-[50px] items-center justify-center gap-2 rounded-[5px] bg-wa text-[15.5px] font-bold tracking-[-0.1px] text-white hover:bg-wa-dark ${className}`}
    >
      Escribinos por WhatsApp
    </a>
  );
}
