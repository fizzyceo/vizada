import React from "react";
import image from "../../../assets/Image1.png";

const Front = () => {
  return (
    <div className="w-full flex flex-row  items-center justify-between ">
      <div className="w-full m-0    mt-10">
        <div className="w-full  relative -32 ">
          <img src={image}  className="w-full object-contain  p-1 bg-white" />

          <div className="bg-[#f2f2f2] absolute top-0 lg:top-[300px] w-fit right-0  lg:right-16 p-5 lg:px-16 lg:py-16 lg:space-y-10 rounded-sm lg:w-[600px] ">
            <div className="text-center lg:text-start ">
              <h1 className="opensans text-[#1a2b6d] leading-none md:text-[2.5rem] text-[1.5rem] lg:text-[3.5rem]">
                IT Consulting
              </h1>
              <h1 className="opensans text-[#1a2b6d] leading-none md:text-[2.5rem] text-[1.5rem] lg:text-[3.5  rem]">
                & Services
              </h1>
            </div>
            <div className="flex items-start flex-wrap lg:flex-nowrap w-full justify-center gap-5">
              <div className="w-1/2 border-t-[3px] border-[#1a2b6d] mt-2"></div>
              <p className="tracking-widest opensans text-[#656562] text-sm max-w-80 md:text-base ">
              
              PlagPrevent Algerie est une plateforme révolutionnaire spécialisée dans la détection de ressemblances, élaborée dans le but de prévenir et de combattre le plagiat dans les secteurs de l’éducation, de la recherche et de la production de contenu. Introduite en 2008, PlagPrevent a rapidement émergé comme un acteur majeur dans la sauvegarde de l’honnêteté intellectuelle et artistique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
