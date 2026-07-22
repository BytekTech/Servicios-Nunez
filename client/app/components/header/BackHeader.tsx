import Link from "next/link";
import { CONTENT_WIDTH } from "../../lib/container";

export default function BackHeader() {
  return (
    <div className="bleed border-b border-line">
      <header className={`mx-auto flex w-full items-center justify-between px-5 py-4 lg:px-8 xl:px-14 ${CONTENT_WIDTH}`}>
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
