import React from "react";
import { Testimonial } from "./testimonial";

export function Testimonials() {
  const testimonialsCount = 5;
  const flag = true;

  const testimonialTemplate = {
    body: `That bulb retro cloud bread echo park, helvetica stumptown taiyaki
    taxidermy 90s cronut +1 kinfolk. Single-origin coffee ennui shaman
    taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny
    pack vaporware.`,
    name: "HOLDEN CAULFIELD",
    role: "Senior Product Designer",
  }

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {Array.from({ length: testimonialsCount }).map((_, index) => (
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <Testimonial
                key={index}
                body={testimonialTemplate.body} 
                name={testimonialTemplate.name + " "+index}
                role={testimonialTemplate.role}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
