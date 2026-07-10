import SocialLinks from "./SocialLinks";

export default function PageFooter({
  waHref,
  note,
  brand,
}: {
  waHref: string;
  note?: string;
  brand: string;
}) {
  return (
    <footer className="flex flex-col gap-3.5 px-5 py-5 lg:flex-row lg:items-center lg:justify-between lg:border-t lg:border-line lg:px-8 lg:py-6">
      <SocialLinks waHref={waHref} />
      <div className="flex flex-col gap-2 lg:items-end">
        {note && (
          <span className="font-mono text-[10.5px] tracking-[1.5px] text-ink-muted">
            {note}
          </span>
        )}
        <span className="font-mono text-[10.5px] tracking-[1.5px] text-ink-faint">
          {brand}
        </span>
      </div>
    </footer>
  );
}
