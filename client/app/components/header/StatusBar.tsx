import TricolorRule from "../ui/TricolorRule";

export default function StatusBar() {
  return (
    <>
      <div className="bleed bg-navy">
        <div className="mx-auto flex w-full max-w-[520px] items-center gap-2.5 px-5 py-[9px] md:max-w-[760px] lg:max-w-[1040px] lg:px-8 xl:max-w-[1200px] xl:px-14 2xl:max-w-[1320px]">
          <span className="size-[7px] flex-none rounded-full bg-status-dot animate-pulse" />
          <span className="font-mono text-[10.5px] tracking-[1.5px] text-mist lg:text-[12px] xl:text-[13.5px]">
            LUN A SÁB 7:00–19:00 · URGENCIAS 24 HS
          </span>
        </div>
      </div>
      <TricolorRule />
    </>
  );
}
