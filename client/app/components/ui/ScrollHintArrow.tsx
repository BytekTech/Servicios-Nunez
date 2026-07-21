"use client";

// Scroll animado a mano (rAF + easing). No usamos behavior:"smooth" ni
// scroll-behavior CSS porque el navegador los vuelve instantáneos cuando el
// sistema tiene "reducir movimiento" activo, y acá queremos el movimiento sí o sí.
function animatedScrollBy(distance: number, duration = 650) {
  const startY = window.scrollY;
  const startTime = performance.now();
  const easeInOutQuad = (t: number) =>
    t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

  const step = (now: number) => {
    const t = Math.min((now - startTime) / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutQuad(t));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export default function ScrollHintArrow({
  className = "",
}: Readonly<{ className?: string }>) {
  const handleClick = () => {
    // Mini scroll: baja ~45% de la pantalla, con movimiento.
    animatedScrollBy(Math.round(window.innerHeight * 0.45));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Bajar"
      className={`absolute inset-x-0 bottom-6 mx-auto flex w-fit cursor-pointer justify-center text-paper lg:bottom-8 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.25}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-11 animate-scroll-hint drop-shadow-[0_2px_10px_rgb(18_35_61/0.7)] lg:size-16"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}
