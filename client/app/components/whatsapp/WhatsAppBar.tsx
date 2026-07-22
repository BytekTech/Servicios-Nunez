"use client";

import { useEffect, useState } from "react";
import contactData from "@/public/data/contact.json";
import type { Contact } from "../../types/contact";
import { CONTENT_WIDTH } from "../../lib/container";
import WaButton from "./WaButton";

const CONTACT = contactData as Contact;

export default function WhatsAppBar({ href }: Readonly<{ href: string }>) {
  // Aparece con fade al primer scroll; se oculta al volver arriba.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Aparece (fade-in) apenas se hace el primer scroll; se oculta al volver arriba.
    const update = () => setVisible(window.scrollY > 8);
    const raf = requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 border-t border-[rgb(18_35_61/0.14)] bg-[rgb(248_247_243/0.94)] pt-2.5 pb-3.5 backdrop-blur-[8px] transition-[opacity,transform] duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      <div className={`mx-auto flex w-full items-center gap-3 px-3.5 lg:gap-4 lg:px-8 xl:px-14 ${CONTENT_WIDTH}`}>
        <div className="flex flex-none flex-col gap-0.5">
          <span className="font-mono text-[9.5px] font-bold tracking-[1.5px] text-blue lg:text-[11px] xl:text-[12.5px]">
            URGENCIAS 24 HS
          </span>
          <span className="font-mono text-[11px] text-ink-soft lg:text-[12.5px] xl:text-[14px]">
            {CONTACT.phonePretty}
          </span>
        </div>
        <WaButton
          href={href}
          className={`flex-1 ${visible ? "pointer-events-auto" : "pointer-events-none"}`}
        />
      </div>
    </div>
  );
}
