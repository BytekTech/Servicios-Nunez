export const CONTACT = {
  whatsappDigits: "5491134675590",
  phonePretty: "11 6373-2393",
  instagram: "https://instagram.com/serviciosnunez",
  facebook: "https://facebook.com/serviciosnunez",
};

export const GENERIC_WA_MESSAGE = "Hola, quiero hacer una consulta por ";

export function waLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export type Faq = {
  q: string;
  a: string;
};

export type Trade = {
  slug: string;
  code: string;
  name: string;
  line: string;
  tagline: string;
  cred: string;
  urgent: string;
  waMsg: string;
  services: string[];
  faqs: Faq[];
};

export const TRADES: Trade[] = [
  {
    slug: "electricidad",
    code: "01",
    name: "Electricidad",
    line: "tableros · cortos · instalaciones",
    tagline: "Cortos, tableros e instalaciones. Te lo solucionamos hoy.",
    cred: "ELECTRICISTA MATRICULADO · GARANTÍA POR ESCRITO EN CADA TRABAJO",
    urgent: "",
    waMsg: "Hola, necesito un electricista. Mi consulta es por: ",
    services: [
      "Tableros, térmicas y disyuntores",
      "Cortocircuitos y fugas a tierra",
      "Instalaciones nuevas y ampliaciones",
      "Cableado y recableado completo",
      "Tomas, llaves y puntos nuevos",
      "Iluminación interior y exterior",
    ],
    faqs: [
      {
        q: "¿Cobrás la visita?",
        a: "El presupuesto es sin cargo dentro de la zona de cobertura. Si el trabajo se hace, la visita no se cobra.",
      },
      {
        q: "Salta la térmica y no sé por qué.",
        a: "Es el pedido más común: revisamos el tablero, medimos los circuitos y encontramos la fuga o la falla. En general se resuelve en la misma visita.",
      },
      {
        q: "¿Hacés trabajos de mantenimiento?",
        a: "Sí. Un toma flojo, una llave de luz, un ventilador de techo: ningún trabajo es demasiado chico.",
      },
    ],
  },
  {
    slug: "plomeria",
    code: "02",
    name: "Plomería",
    line: "griferías · tanques · cañerías",
    tagline: "Griferías, tanques y cañerías, sin romper de más.",
    cred: "PRESUPUESTO SIN CARGO · GARANTÍA POR ESCRITO",
    urgent: "",
    waMsg: "Hola, necesito un plomero. Mi consulta es por: ",
    services: [
      "Reparación e instalación de griferías",
      "Colocación de tanques y armado de colectores",
      "Instalación de cañerías de agua fría y caliente",
      "Soldadura de plomo e hidrobronz",
    ],
    faqs: [
      {
        q: "¿Atendés urgencias fuera de horario?",
        a: "El horario habitual es de 07:00 a 19:00 hs, pero hay disponibilidad 24 hs para urgencias. Una pérdida de agua no espera: escribinos a cualquier hora.",
      },
      {
        q: "¿Vas a tener que romper la pared?",
        a: "Primero ubicamos la pérdida. Solo se abre donde hace falta, y te lo avisamos antes de empezar.",
      },
      {
        q: "¿Traés los materiales?",
        a: "Sí, trabajamos con materiales de primera marca. Si preferís poner los tuyos, también.",
      },
    ],
  },
  {
    slug: "gas",
    code: "03",
    name: "Gas",
    line: "calefones · pérdidas · hermeticidad",
    tagline: "Gasista matriculado, con prueba de hermeticidad.",
    cred: "GASISTA MATRICULADO · PRUEBA DE HERMETICIDAD EN CADA TRABAJO",
    urgent:
      "¿Olor a gas? Cerrá la llave de paso, ventilá y no prendas luces ni artefactos. Después escribinos: las pérdidas se atienden con prioridad.",
    waMsg: "Hola, necesito un gasista. Mi consulta es por: ",
    services: [
      "Limpieza y reparación de estufas y calefones",
      "Reparación de pérdidas de gas",
      "Instalación de suministro de gas",
      "Alta o corte de suministro",
      "Prueba de hermeticidad",
    ],
    faqs: [
      {
        q: "¿Qué hago si hay olor a gas?",
        a: "Cerrá la llave de paso, abrí las ventanas y no prendas luces ni artefactos. Después escribinos: las pérdidas se atienden con prioridad, 24 hs.",
      },
      {
        q: "¿Hacés altas de suministro?",
        a: "Sí: instalaciones nuevas, altas y cortes de suministro, con prueba de hermeticidad y la documentación correspondiente.",
      },
      {
        q: "El calefón no calienta como antes.",
        a: "Suele ser suciedad en el serpentín o baja presión. Se revisa en la visita y en la mayoría de los casos tiene arreglo sin cambiar el equipo.",
      },
    ],
  },
];
