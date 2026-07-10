export default function DesktopSplit({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="lg:grid lg:flex-1 lg:grid-cols-[5fr_7fr]">
      <div className="lg:sticky lg:top-0 lg:self-start">{left}</div>
      <div className="lg:border-l lg:border-line">{right}</div>
    </div>
  );
}
