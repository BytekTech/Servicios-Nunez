import stepsData from "@/public/data/steps.json";
import type { WorkStep } from "../../types/step";
import SectionLabel from "../ui/SectionLabel";
import Step from "./Step";


export default function HowWeWork() {
  const WORK_STEPS = stepsData as WorkStep[];
  
  return (
    <div className="px-5 py-6 lg:px-8 xl:px-14">
      <SectionLabel className="mb-1.5">CÓMO TRABAJAMOS</SectionLabel>
      <div className="flex flex-col">
        {WORK_STEPS.map((step) => (
          <Step
            key={step.code}
            code={step.code}
            title={step.title}
            detail={step.detail}
          />
        ))}
      </div>
    </div>
  );
}
