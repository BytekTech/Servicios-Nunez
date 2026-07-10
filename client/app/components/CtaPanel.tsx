import WaButton from "./WaButton";
import { CONTACT } from "../lib/trades";

export default function CtaPanel({ href }: { href: string }) {
  return (
    <div className="hidden flex-col gap-3 px-5 py-6 lg:flex lg:px-8">
      <WaButton href={href} />
      <span className="font-mono text-[10.5px] tracking-[1.5px] text-ink-muted">
        URGENCIAS 24 HS · {CONTACT.phonePretty}
      </span>
    </div>
  );
}
