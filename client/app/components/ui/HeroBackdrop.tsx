import Image from "next/image";

// Fondo de hero a pantalla completa: imagen `fill` + degradado por encima.
// Compartido por el hero de inicio y el de cada oficio; solo cambia el degradado.
export default function HeroBackdrop({
  src,
  alt,
  overlayClassName,
}: Readonly<{
  src: string;
  alt: string;
  overlayClassName: string;
}>) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden className={`absolute inset-0 ${overlayClassName}`} />
    </>
  );
}
