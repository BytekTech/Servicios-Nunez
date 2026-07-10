import SectionLabel from "../ui/SectionLabel";
import Step from "./Step";

const STEPS: string[][] = [
  [
    "01",
    "Escribinos por WhatsApp",
    "Contanos el problema; si podés, mandá una foto.",
  ],
  [
    "02",
    "Presupuesto sin cargo",
    "Te respondemos en minutos con el costo y cuándo podemos ir.",
  ],
  [
    "03",
    "Trabajo con garantía",
    "Lo resolvemos y te queda la garantía por escrito.",
  ],
];

export default function HowWeWork() {
  return (
    <div className="px-5 py-6 lg:px-8 xl:px-14">
      <SectionLabel className="mb-1.5">CÓMO TRABAJAMOS</SectionLabel>
      <div className="flex flex-col">
        {STEPS.map(([code, title, detail]) => (
          <Step key={code} code={code} title={title} detail={detail} />
        ))}
      </div>
    </div>
  );
}
