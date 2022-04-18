import React from "react";
import { Testimonial } from "./testimonial";

export function Testimonials() {
  const testimonialsCount = 5;

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {Array.from({ length: testimonialsCount }).map((_, index) => (
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <Testimonial />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
