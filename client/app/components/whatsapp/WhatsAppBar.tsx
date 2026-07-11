import contactData from "@/public/data/contact.json";
import type { Contact } from "../../types/contact";
import WaButton from "./WaButton";


export default function WhatsAppBar({ href }: Readonly<{ href: string }>) {
  const CONTACT = contactData as Contact;
  
  return (
    <div className="pointer-events-none fixed bottom-0 left-1/2 flex w-full max-w-[520px] -translate-x-1/2 items-center gap-3 border-t border-[rgb(18_35_61/0.14)] bg-[rgb(248_247_243/0.94)] px-3.5 pt-2.5 pb-3.5 backdrop-blur-[8px] md:max-w-[760px] lg:max-w-[880px] lg:px-8 xl:max-w-[960px] xl:px-14">
      <div className="flex flex-none flex-col gap-0.5">
        <span className="font-mono text-[9.5px] font-bold tracking-[1.5px] text-blue lg:text-[11px]">
          URGENCIAS 24 HS
        </span>
        <span className="font-mono text-[11px] text-ink-soft lg:text-[12.5px]">
          {CONTACT.phonePretty}
        </span>
      </div>
      <WaButton href={href} className="pointer-events-auto flex-1" />
    </div>
  );
}
