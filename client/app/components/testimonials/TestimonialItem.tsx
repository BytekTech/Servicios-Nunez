export default function TestimonialItem({
  quote,
  name,
  detail,
  rating,
  ariaHidden = false,
}: Readonly<{
  quote: string;
  name: string;
  detail: string;
  rating: number;
  ariaHidden?: boolean;
}>) {
  return (
    <figure
      aria-hidden={ariaHidden || undefined}
      className="mr-4 flex w-[280px] shrink-0 flex-col items-center gap-2.5 rounded-2xl border border-line bg-paper px-6 py-6 text-center shadow-[0_1px_2px_rgb(18_35_61/0.05)] transition-shadow hover:shadow-[0_6px_20px_rgb(18_35_61/0.08)] lg:mr-5 lg:w-[320px] lg:px-7 lg:py-7 xl:w-[344px]"
    >
      <span
        aria-label={`${rating} de 5 estrellas`}
        className="text-[11px] tracking-[3px] text-star md:text-[12px] lg:text-[12.5px] xl:text-[14px]"
      >
        {"★".repeat(rating)}
        <span className="text-ink-faint">{"☆".repeat(5 - rating)}</span>
      </span>
      <blockquote className="text-[15px] leading-[1.5] text-pretty md:text-[16px] lg:text-[16.5px] xl:text-[18.5px]">
        “{quote}”
      </blockquote>
      <figcaption className="mt-auto font-mono text-[11px] tracking-[1.2px] text-ink-muted md:text-[12px] lg:text-[12.5px] xl:text-[14px]">
        <span className="font-bold text-ink-soft">{name}</span> · {detail}
      </figcaption>
    </figure>
  );
}
