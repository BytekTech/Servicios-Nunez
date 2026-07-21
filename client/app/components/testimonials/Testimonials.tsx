import testimonialsData from "@/public/data/testimonials.json";
import type { Testimonial } from "../../types/testimonial";
import SectionLabel from "../ui/SectionLabel";
import TestimonialItem from "./TestimonialItem";


export default function Testimonials() {
  const TESTIMONIALS = testimonialsData as Testimonial[];
  // Dos copias seguidas: el track se desplaza -50% y reinicia sin salto.
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="py-6 lg:py-9 xl:py-11">
      <SectionLabel className="reveal mb-4 px-5 lg:px-8 xl:px-14">
        LO QUE DICEN LOS CLIENTES
      </SectionLabel>
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee">
          {loop.map((testimonial, i) => (
            <TestimonialItem
              key={`${testimonial.name}-${i}`}
              quote={testimonial.quote}
              name={testimonial.name}
              detail={testimonial.detail}
              rating={testimonial.rating}
              ariaHidden={i >= TESTIMONIALS.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
