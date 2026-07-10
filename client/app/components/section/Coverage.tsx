import SectionLabel from "../ui/SectionLabel";
import Zone from "./Zone";

const ZONES: string[][] = [
  ["CABA", "Todos los barrios"],
  ["GBA", "Zona norte, oeste y sur"],
];

export default function Coverage() {
  return (
    <div className="border-b border-line px-5 py-6 lg:border-b-0 lg:px-8 xl:px-14">
      <SectionLabel className="mb-3.5">ZONA DE COBERTURA</SectionLabel>
      <div className="flex flex-col">
        {ZONES.map(([zone, detail]) => (
          <Zone key={zone} zone={zone} detail={detail} />
        ))}
      </div>
      <p className="mt-3.5 text-[13.5px] text-ink-muted">
        Consultanos por tu zona antes de pedir la visita.
      </p>
    </div>
  );
}
