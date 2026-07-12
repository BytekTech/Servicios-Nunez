import TricolorRule from "../ui/TricolorRule";

export default function StatusBar() {
  return (
    <>
      <div className="flex items-center gap-2.5 bg-navy px-5 py-[9px] lg:px-8 xl:px-14">
        <span className="size-[7px] flex-none rounded-full bg-status-dot animate-pulse" />
        <span className="font-mono text-[10.5px] tracking-[1.5px] text-mist lg:text-[12px] xl:text-[13.5px]">
          LUN A SÁB 7:00–19:00 · URGENCIAS 24 HS
        </span>
      </div>
      <TricolorRule />
    </>
  );
}
