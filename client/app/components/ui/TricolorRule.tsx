export default function TricolorRule() {
  return (
    <div aria-hidden className="grid h-[3px] grid-cols-3">
      <span className="bg-elec grow-x" />
      <span className="bg-agua grow-x grow-x-2" />
      <span className="bg-flame grow-x grow-x-3" />
    </div>
  );
}
