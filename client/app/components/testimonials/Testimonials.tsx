import testimonialsData from "@/public/data/testimonials.json";
import type { Testimonial } from "../../types/testimonial";
import SectionLabel from "../ui/SectionLabel";
import TestimonialItem from "./TestimonialItem";


export default function Testimonials() {
  const TESTIMONIALS = testimonialsData as Testimonial[];
  return (
    <div className="px-5 py-6 lg:px-8 xl:px-14">
      <SectionLabel className="reveal mb-1.5">
        LO QUE DICEN LOS CLIENTES
      </SectionLabel>
      <div className="mx-auto flex w-full max-w-[760px] flex-col xl:max-w-[960px]">
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
