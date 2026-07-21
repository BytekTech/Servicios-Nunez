import Image from "next/image";
import logo from "./logo.webp";

export default function Logo() {
  return (
    <>
      <Image
        src={logo}
        alt="Servicios Nuñez"
        priority
        className="size-[42px] flex-none rounded-lg xl:size-[48px]"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-px">
        <span className="font-mono text-[10px] tracking-[2.5px] text-ink-muted lg:text-[11.5px] xl:text-[13px]">
          SERVICIOS
        </span>
        <span className="text-[21px] leading-none font-extrabold tracking-[-0.3px] lg:text-[23px] xl:text-[26px]">
          NUÑEZ
        </span>
      </div>
    </>
  );
}
