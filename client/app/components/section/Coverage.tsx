import zonesData from "@/public/data/zones.json";
import type { CoverageZone } from "../../types/zone";
import SectionLabel from "../ui/SectionLabel";
import Zone from "./Zone";

const COVERAGE_ZONES = zonesData as CoverageZone[];

export default function Coverage() {
  return (
    <div className="border-b border-line px-5 py-6 lg:px-8 lg:py-9 xl:px-14 xl:py-11">
      <SectionLabel className="reveal mb-3.5">ZONA DE COBERTURA</SectionLabel>
      <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
        {COVERAGE_ZONES.map((zone) => (
          <Zone key={zone.zone} zone={zone.zone} detail={zone.detail} />
        ))}
      </div>
      <p className="mt-4 text-[14px] text-ink-muted lg:text-[15px] xl:text-[16.5px]">
        Consultanos por tu zona antes de pedir la visita.
      </p>
    </div>
  );
}
