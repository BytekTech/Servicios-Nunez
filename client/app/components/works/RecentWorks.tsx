import worksData from "@/public/data/works.json";
import type { RecentWork } from "../../types/work";
import SectionLabel from "../ui/SectionLabel";
import WorkItem from "./WorkItem";


export default function RecentWorks() {
  const RECENT_WORKS = worksData as RecentWork[];

  return (
    <div className="border-y border-line px-5 py-6 lg:px-8 xl:px-14">
      <SectionLabel className="reveal mb-4">TRABAJOS RECIENTES</SectionLabel>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {RECENT_WORKS.map((work) => (
          <WorkItem key={work.title} work={work} />
        ))}
      </div>
    </div>
  );
}
