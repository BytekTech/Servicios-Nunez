import stepsData from "@/public/data/steps.json";
import type { WorkStep } from "../../types/step";
import { tradeAccent } from "../../lib/tradeAccent";
import SectionLabel from "../ui/SectionLabel";
import Step from "./Step";


export default function HowWeWork({
  tradeSlug = "",
}: Readonly<{ tradeSlug?: string }>) {
  const WORK_STEPS = stepsData as WorkStep[];
  const accent = tradeAccent(tradeSlug);

  return (
    <div className="px-5 py-6 lg:px-8 lg:py-9 xl:px-14 xl:py-11">
      <SectionLabel className="reveal mb-4" accent={accent.text}>
        CÓMO TRABAJAMOS
      </SectionLabel>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
        {WORK_STEPS.map((step) => (
          <Step
            key={step.code}
            code={step.code}
            title={step.title}
            detail={step.detail}
            accent={accent}
          />
        ))}
      </div>
    </div>
  );
}
