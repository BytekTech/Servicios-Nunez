export default function TestimonialItem({
  quote,
  name,
  detail,
  rating,
}: Readonly<{
  quote: string;
  name: string;
  detail: string;
  rating: number;
}>) {
  return (
    <figure className="flex flex-col items-center gap-2 border-b border-line-soft py-[15px] text-center">
      <span
        aria-label={`${rating} de 5 estrellas`}
        className="text-[11px] tracking-[3px] text-blue lg:text-[12.5px]"
      >
        {"★".repeat(rating)}
        <span className="text-ink-faint">{"☆".repeat(5 - rating)}</span>
      </span>
      <blockquote className="max-w-[640px] text-[15px] leading-[1.5] text-pretty lg:text-[16.5px]">
        “{quote}”
      </blockquote>
      <figcaption className="font-mono text-[11px] tracking-[1.2px] text-ink-muted lg:text-[12.5px]">
        <span className="font-bold text-ink-soft">{name}</span> · {detail}
      </figcaption>
    </figure>
  );
}
