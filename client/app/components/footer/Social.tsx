export default function Social({
  content,
  contact,
}: {
  content: string;
  contact: string;
}) {
  return (
    <a
      href={contact}
      target="_blank"
      rel="noopener"
      className="rounded-[3px] border border-line-strong px-3 py-[9px] font-mono text-[11px] tracking-[1.2px] text-ink hover:border-blue hover:text-blue"
    >
      {content}
    </a>
  );
}
