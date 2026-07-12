import type { RecentWork } from "../../types/work";
import { tradeAccent } from "../../lib/tradeAccent";
import ImageSlot from "../ui/ImageSlot";

export default function WorkItem({ work }: Readonly<{ work: RecentWork }>) {
  const accent = tradeAccent(work.trade);
  return (
    <figure className="reveal flex flex-col gap-2.5">
      <ImageSlot
        label="FOTO DEL TRABAJO"
        className={`aspect-[4/3] ${accent.soft}`}
      />
      <figcaption className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.5px] text-ink-muted lg:text-[12.5px] xl:text-[14px]">
        <span className={`size-[7px] flex-none ${accent.bg}`} />
        <span>
          <span className="font-bold text-ink-soft">{work.title}</span> ·{" "}
          {work.place}
        </span>
      </figcaption>
    </figure>
  );
}
