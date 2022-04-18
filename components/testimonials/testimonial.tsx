import React from "react";

export function Testimonial() {
  return (
    <div className="h-full text-center">
      <img
        alt="testimonial"
        className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
        src="https://dummyimage.com/302x302"
      />
      <p className="leading-relaxed">
        Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki
        taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman
        taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny
        pack vaporware.
      </p>
      <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4"></span>
      <h2 className="text-white font-medium title-font tracking-wider text-sm">
        HOLDEN CAULFIELD
      </h2>
      <p className="text-gray-500">Senior Product Designer</p>
    </div>
  );
}
