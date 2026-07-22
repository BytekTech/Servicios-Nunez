import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src="/images/logo.png"
        alt="Servicios Nuñez"
        width={454}
        height={552}
        priority
        className="size-[42px] flex-none rounded-lg xl:size-[48px]"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-px">
        <span className="font-mono text-[10px] tracking-[2.5px] text-ink-muted md:text-[11px] lg:text-[11.5px] xl:text-[13px]">
          SERVICIOS
        </span>
        <span className="text-[21px] leading-none font-extrabold tracking-[-0.3px] md:text-[22px] lg:text-[23px] xl:text-[26px]">
          NUÑEZ
        </span>
      </div>
    </>
  );
}
