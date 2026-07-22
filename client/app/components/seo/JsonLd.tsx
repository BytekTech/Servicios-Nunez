// Inyecta datos estructurados schema.org. Se escapa "<" para que ningún valor
// pueda cerrar el <script> y derivar en inyección de HTML.
export default function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
