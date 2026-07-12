import zonesData from "@/public/data/zones.json";
import type { CoverageZone } from "../../types/zone";
import SectionLabel from "../ui/SectionLabel";
import Zone from "./Zone";


export default function Coverage() {
  const COVERAGE_ZONES = zonesData as CoverageZone[];
  
  return (
    <div className="border-b border-line px-5 py-6 lg:px-8 xl:px-14">
      <SectionLabel className="reveal mb-3.5">ZONA DE COBERTURA</SectionLabel>
      <div className="flex flex-col">
        {COVERAGE_ZONES.map((zone) => (
          <Zone key={zone.zone} zone={zone.zone} detail={zone.detail} />
        ))}
      </div>
      <p className="mt-3.5 text-[13.5px] text-ink-muted xl:text-[15.5px]">
        Consultanos por tu zona antes de pedir la visita.
      </p>
    </div>
  );
}
