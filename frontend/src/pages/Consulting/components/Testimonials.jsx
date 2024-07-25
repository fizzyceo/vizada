import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas optio quos maiores obcaecati, tenetur ex quam corrupti deleniti quae?",
      name: "John Doe",
      profession: "Web Developer",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas optio quos maiores obcaecati, tenetur ex quam corrupti deleniti quae?",
      name: "Jane Smith",
      profession: "Designer",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas optio quos maiores obcaecati, tenetur ex quam corrupti deleniti quae?",
      name: "Michael Johnson",
      profession: "CEO",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-[#f2f2f2] p-10 mb-10 border-b-8 border-[#1a2b6d]">
      <div className="text-center w-[90%] flex flex-col items-center justify-between mx-auto opensans">
        <div className="flex items-center justify-between w-full">
          <div onClick={prevTestimonial} className="cursor-pointer">
            <ArrowLeftIcon className="w-10" />
          </div>
          <div className="w-[80%] space-y-5 mx-auto text-center">
            <h1 className="text-3xl font-medium text-[#1a2b6d]">
              Testimonials
            </h1>
            <h1 className="text-2xl">
              {testimonials[currentTestimonial].quote}
            </h1>
            <div>
              <h1 className="text-base font-medium text-red-800">
                {testimonials[currentTestimonial].name}
              </h1>
              <h1 className="text-base font-medium text-red-800">
                {testimonials[currentTestimonial].profession}
              </h1>
            </div>
          </div>
          <div onClick={nextTestimonial} className="cursor-pointer">
            <ArrowRightIcon className="w-10" />
          </div>
        </div>
        <div className="flex items-center justify-center w-full mt-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${
                index === currentTestimonial ? "bg-blue-900" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
