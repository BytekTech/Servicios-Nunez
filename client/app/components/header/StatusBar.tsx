import TricolorRule from "../ui/TricolorRule";
import { CONTENT_WIDTH } from "../../lib/container";

export default function StatusBar() {
  return (
    <>
      <div className="bleed bg-navy">
        <div className={`mx-auto flex w-full items-center gap-2.5 px-5 py-[9px] lg:px-8 xl:px-14 ${CONTENT_WIDTH}`}>
          <span className="size-[7px] flex-none rounded-full bg-status-dot animate-pulse" />
          <span className="font-mono text-[10.5px] tracking-[1.5px] text-mist md:text-[11.5px] lg:text-[12px] xl:text-[13.5px]">
            LUN A SÁB 7:00–19:00 · URGENCIAS 24 HS
          </span>
        </div>
      </div>
      <TricolorRule />
    </>
  );
}
