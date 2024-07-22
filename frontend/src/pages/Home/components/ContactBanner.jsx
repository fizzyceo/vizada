import { InboxArrowDownIcon, PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";

const ContactBanner = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+213540974762";
  };

  const handleEmailClick = () => {
    window.open("mailto:contact@vizada.com");
  };

  return (
    <div className="relative bg-[#ffdd00] flex items-center justify-center py-10 overflow-hidden">
      <div className="absolute -bottom-16 right-32 bg-[#3767da] w-[150px] rounded-full h-[200px] z-0"></div>
      <div className="absolute -top-16 left-24 bg-[#3767da] opacity-35 w-[130px] rounded-full h-[200px] z-0"></div>
      <div className="md:px-16 flex flex-row items-start justify-start gap-5 flex-wrap w-[80%] mx-auto z-10">
        <div className="lg:w-[50%]">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#4e6ba3]">
            Support Client 24H/24 et 7J/7 Contactez notre équipe commerciale
            pour toutes vos questions
          </h1>
        </div>
        <div className="flex-grow flex flex-col gap-3 items-end justify-end">
          <a
            href="tel:+213540974762"
            className="bg-white text-blue-800 rounded-lg shadow-md text-sm w-full md:w-[80%] lg:w-[60%] flex flex-row items-center gap-5 p-5"
          >
            <PhoneIcon className="w-7 text-[#ffdd00]" />
            <p>(+213) 540 974 762</p>
          </a>
          <a
            href="mailto:contact@vizada.com"
            className="bg-white text-blue-800 rounded-lg shadow-md text-sm w-full md:w-[80%] lg:w-[60%] flex flex-row items-center gap-5 p-5"
          >
            <InboxArrowDownIcon className="w-7 text-[#ffdd00]" />
            <p>contact@vizada.dz</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
