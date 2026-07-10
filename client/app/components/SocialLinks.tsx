import { CONTACT } from "../lib/trades";

const linkClass =
  "rounded-[3px] border border-line-strong px-3 py-[9px] font-mono text-[11px] tracking-[1.2px] text-ink hover:border-blue hover:text-blue";

export default function SocialLinks({ waHref }: { waHref: string }) {
  return (
    <div className="flex gap-2">
      <a href={waHref} target="_blank" rel="noopener" className={linkClass}>
        WHATSAPP
      </a>
      <a
        href={CONTACT.instagram}
        target="_blank"
        rel="noopener"
        className={linkClass}
      >
        INSTAGRAM
      </a>
      <a
        href={CONTACT.facebook}
        target="_blank"
        rel="noopener"
        className={linkClass}
      >
        FACEBOOK
      </a>
    </div>
  );
}
