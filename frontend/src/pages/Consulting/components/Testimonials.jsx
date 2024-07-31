import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Notre partenariat avec cette équipe a été exceptionnel. Leur expertise en conseil a permis à Sonatrach d'optimiser nos processus et d'assurer l'originalité de nos projets. Nous avons une confiance totale en leurs capacités.",
      name: "Toufik Hakkar",
      profession: "Sonatrach",
    },
    {
      quote:
        "Algérie Télécom a bénéficié grandement de l'accompagnement personnalisé et des solutions sur mesure fournies par cette équipe. Leur service de détection de similarités a été crucial pour garantir la conformité de nos travaux.",
      name: "Adel BENTOUMI",
      profession: " Algérie Télécom",
    },
    {
      quote:
        "La collaboration avec cette équipe a transformé nos opérations chez Société Générale. Leur approche professionnelle et leur expertise nous ont aidés à atteindre nos objectifs de manière efficace et innovante.",
      name: "Frédéric Oudéa",
      profession: "Société Générale",
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
            Ils nous font confiance

            </h1>
            <h1 className="text-2xl">
              {testimonials[currentTestimonial].quote}
            </h1>
            <div>
              {/* <h1 className="text-base font-medium text-red-800">
                {testimonials[currentTestimonial].name}
              </h1> */}
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
