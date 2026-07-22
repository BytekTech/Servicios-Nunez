import Image from "next/image";

// Fondo de hero a pantalla completa: imagen `fill` + degradado por encima.
// Compartido por el hero de inicio y el de cada oficio; solo cambia el degradado.
// quality alto porque la imagen se re-codifica desde una fuente ya comprimida:
// bajar la compresión evita sumar artefactos sobre los que ya trae el original.
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
        quality={95}
        // En pantallas < notebook el hero es un `object-cover` en un contenedor
        // alto (100svh): para cubrir ese alto la imagen se amplía mucho más que
        // el ancho del viewport. Con "100vw" el navegador bajaría una variante
        // chica que luego se estira y se ve borrosa; pedimos ~2x el ancho para
        // que baje la fuente a resolución completa. De notebook para arriba,
        // 100vw alcanza.
        sizes="(max-width: 1023px) 200vw, 100vw"
        className="object-cover"
      />
      <div aria-hidden className={`absolute inset-0 ${overlayClassName}`} />
      {/* Oscurecido extra solo en la banda de tablet (md hasta antes de
          notebook): ahí el degradado base se ve lavado. En mobile y de notebook
          para arriba ya queda bien, por eso no se muestra. */}
      <div aria-hidden className="absolute inset-0 hidden bg-navy/25 md:block lg:hidden" />
    </>
  );
}
