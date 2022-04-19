import React, { useState } from "react";

type TestimonialProps = {
    body: string;
    name: string;
    role: string;
};


/**
 * Comentário de teste
 * @param props props
 * @returns nothing
 */
export function Testimonial(props: TestimonialProps) {
  const [flag, setflag] = useState(true);
  return (
    <div className="h-full text-center ring-4 ring-indigo-700">
        {flag ? 
            <img
                className="mx-auto h-16 w-16 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="testimonial"
            />
         :
            <img
                className="mx-auto h-16 w-16 rounded-full"
                src="https://dummyimage.com/302x302"
                alt="testimonial"
            />
        }

      <p className="leading-relaxed">
        {props.body}
      </p>
      <span className="inline-block h-1 w-10 rounded bg-purple-500 mt-6 mb-4"></span>
      <h2 className="text-white font-medium title-font tracking-wider text-sm">
        <button className="border-2 p-2 rounded-xl bg-purple-500" onClick={() => setflag(flag => !flag)}>
            {props.name} + {flag ? "true" : "false"}
        </button>
      </h2>
      <p className="text-gray-500">{props.role}</p>
    </div>
  );
}
