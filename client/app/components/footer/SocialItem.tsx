export default function SocialItem({
  content,
  contact,
}: Readonly<{
  content: string;
  contact: string;
}>) {
  return (
    <a
      href={contact}
      target="_blank"
      rel="noopener noreferrer"
      className="select-none rounded-[3px] border border-line-strong px-3 py-[9px] font-mono text-[11px] tracking-[1.2px] text-ink transition-colors duration-150 hover:border-blue hover:text-blue lg:text-[12.5px] xl:text-[14px]"
    >
      {content}
    </a>
  );
}
