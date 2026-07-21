import testimonialsData from "@/public/data/testimonials.json";
import type { Testimonial } from "../../types/testimonial";
import SectionLabel from "../ui/SectionLabel";
import TestimonialItem from "./TestimonialItem";


export default function Testimonials() {
  const TESTIMONIALS = testimonialsData as Testimonial[];
  return (
    <div className="px-5 py-6 lg:px-8 lg:py-9 xl:px-14 xl:py-11">
      <SectionLabel className="reveal mb-4">
        LO QUE DICEN LOS CLIENTES
      </SectionLabel>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialItem
            key={testimonial.name}
            quote={testimonial.quote}
            name={testimonial.name}
            detail={testimonial.detail}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </div>
  );
}
