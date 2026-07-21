import Link from "next/link";

export default function BackHeader() {
  return (
    <div className="bleed border-b border-line">
      <header className="mx-auto flex w-full max-w-[520px] items-center justify-between px-5 py-4 md:max-w-[760px] lg:max-w-[1040px] lg:px-8 xl:max-w-[1200px] xl:px-14 2xl:max-w-[1320px]">
        <Link
          href="/"
          className="select-none py-1.5 font-mono text-xs tracking-[1px] text-blue lg:text-[13px] xl:text-[14.5px]"
        >
          ← INICIO
        </Link>
        <span className="text-[15px] font-extrabold tracking-[-0.2px] lg:text-[17px] xl:text-[19px]">
          NUÑEZ
        </span>
      </header>
    </div>
  );
}
