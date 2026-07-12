import Link from "next/link";

export default function BackHeader() {
  return (
    <header className="flex items-center justify-between border-b border-line px-5 py-4 lg:px-8 xl:px-14">
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
  );
}
