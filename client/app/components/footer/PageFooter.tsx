import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function PageFooter({
  waHref,
  note,
  brand,
}: Readonly<{
  waHref: string;
  note?: string;
  brand: string;
}>) {
  return (
    <footer className="mt-auto flex flex-col gap-3.5 border-t border-line px-5 py-5 lg:px-8 lg:py-6 xl:px-14">
      <SocialLinks waHref={waHref} />
      <div className="flex flex-col gap-2">
        {note && (
          <span className="font-mono text-[10.5px] tracking-[1.5px] text-ink-muted lg:text-[12px]">
            {note}
          </span>
        )}
        <Link
          href="/terminos"
          className="select-none font-mono text-[10.5px] tracking-[1.5px] text-ink-muted underline-offset-2 hover:underline lg:text-[12px]"
        >
          TÉRMINOS Y CONDICIONES
        </Link>
        <span className="font-mono text-[10.5px] tracking-[1.5px] text-ink-faint lg:text-[12px]">
          {brand}
        </span>
        <span className="font-mono text-[9.5px] tracking-[1.5px] text-ink-faint lg:text-[11px]">
          POWERED BY BYTEK TECHNOLOGY
        </span>
      </div>
    </footer>
  );
}
