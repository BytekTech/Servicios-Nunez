import contactData from "@/public/data/contact.json";
import type { Contact } from "../../types/contact";
import WaButton from "./WaButton";

const CONTACT = contactData as Contact;

export default function Panel({ href }: Readonly<{ href: string }>) {
  return (
    <div className="hidden flex-col gap-3 border-b border-line px-5 py-6 lg:flex lg:px-8 xl:px-14">
      <WaButton href={href} />
      <span className="font-mono text-[10.5px] tracking-[1.5px] text-ink-muted lg:text-[12px]">
        URGENCIAS 24 HS · {CONTACT.phonePretty}
      </span>
    </div>
  )
}