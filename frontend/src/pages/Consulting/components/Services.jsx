import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import test from "../../../assets/test.png"
import test1 from "../../../assets/test1.png"
import test2 from "../../../assets/test2.png"
import test3 from "../../../assets/test3.png"
const Services = () => {
 
  const servicesData = [
    {
      title: "Détection de la similarité",
      description: "Nous offrons des services de détection de similarités pour garantir l'originalité de vos documents et projets. Notre équipe d'experts propose des solutions sur mesure pour répondre à vos besoins spécifiques.",
      link:"https://vitrine.plagprevent.com/",
    },
    {
      title: "CRM (customer relationship management)",
      description: "Optimisez vos interactions client avec nos services de conseil en Gestion de la Relation Client. Nous vous aidons à choisir et implémenter les outils CRM adaptés, automatiser vos processus, et personnaliser vos communications.",
      link:"",
    },
    {
      title: "Accompagnement",
      description: "Découvrez notre service d'accompagnement personnalisé, conçu pour répondre précisément à vos besoins. Notre équipe d'experts vous guide à chaque étape, offrant des conseils sur mesure et des solutions adaptées pour optimiser vos projets.",
      link:"",

    },
    // Add more services here if needed
  ];
      
  return (
    <div>
      <div className="services mt-10  bg-[#1a2b6d]  p-10 text-start  ">
        <div className="lg:w-[70%] md:w-[80%] w-[100%] mx-auto relative">
          <h1 className="opensans font-medium tracking-wide mb-5   text-white text-3xl lg:text-[3rem]">
            Our Services
          </h1>{" "}
          <div>
            <p className="text-gray-100">
            PlagPrevent est la technologie au service de la recherche; un système SAAS complétement automatisé pour la prévention et le contrôle du plagiat développé par les dernières technologies pour que la détection du plagiat devient une solution et non pas une mission pour l’enseignant.     </p>
            
            <br />
            <br />

            <br />
            <br />
            <br />
            <br />

            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="relative lg:w-[85%] md:w-[80%] w-[95%] bottom-28 mx-auto gap-5 lg:gap-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* {servicesData.map((service, index) => (
        
         <div className="card w-full h-full " key={index}>
          <div className="card-content w-full h-full relative text-start p-5 space-y-5">
            <h1 className="opensans   text-[#1a2b6d] leading-none  whitespace-pre-wrap text-base lg:text-lg">
            {service.title}
            </h1>
            <p className=" text-gray-700 leading-normal   whitespace-normal pb-5">
            {service.description}

            </p>
            <a href={service.link} className="pt-0 absolute bottom-4 text-red-500  flex flex-row items-center cursor-pointer justify-start gap-1 font-light pl-0 hover:text-red-900 my-5">
              <PlusIcon className="w-4" />
              <h1> Read More</h1>{" "}
            </a>
          </div>
        </div>
         
        ))} */}
        <div className="bg-blue-gray-50 relative p-5 rounded-lg flex flex-col items-center">
          <img className="pb-8 w-[450px]" src={test1} alt="" />
          <p className=" absolute bottom-5 left-1/2 -translate-x-3/4 text-2xl">Mission</p>
        </div>
        <div className="bg-blue-gray-50 relative p-5 rounded-lg flex flex-col items-center">
          <img src={test2} alt="" />
          <p className=" absolute bottom-5 left-1/2 -translate-x-3/4 text-2xl">Vision</p>
        </div>
        <div className="bg-blue-gray-50 relative p-5 rounded-lg flex flex-col items-center ">
          <img src={test3} alt="" />
          <p className=" absolute bottom-5 left-1/2 -translate-x-3/4 text-2xl">Valeurs</p>
        </div>

    
        {/* <div className="card w-full h-full ">
          <div className="card-content w-full h-full text-start p-5 space-y-5">
            <h1 className="opensans text-[#1a2b6d] leading-none text-base lg:text-lg">
              IT Consulting
            </h1>
            <p className=" text-gray-700 leading-normal whitespace-normal pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              neque rerum cupiditate cumque repudiandae nam. Dolores architecto
              obcaecati dignissimos. Commodi?
            </p>
            <a className="text-red-500 flex flex-row items-center cursor-pointer justify-start gap-1 font-light pl-0 hover:text-red-900 my-5">
              <PlusIcon className="w-4" />
              <h1> Read More</h1>{" "}
            </a>
          </div>
        </div> */}
        {/* <div className="card w-full h-full ">
          <div className="card-content w-full h-full text-start p-5 space-y-5">
            <h1 className="opensans text-[#1a2b6d] leading-none text-base lg:text-lg">
              IT Consulting
            </h1>
            <p className=" text-gray-700 leading-normal whitespace-normal pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              neque rerum cupiditate cumque repudiandae nam. Dolores architecto
              obcaecati dignissimos. Commodi?
            </p>
            <a className="text-red-500 flex flex-row items-center cursor-pointer justify-start gap-1 font-light pl-0 hover:text-red-900 my-5">
              <PlusIcon className="w-4" />
              <h1> Read More</h1>{" "}
            </a>
          </div>
        </div>
        <div className="card w-full h-full ">
          <div className="card-content w-full h-full text-start p-5 space-y-5">
            <h1 className="opensans text-[#1a2b6d] leading-none text-base lg:text-lg">
              IT Consulting
            </h1>
            <p className=" text-gray-700 leading-normal whitespace-normal pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              neque rerum cupiditate cumque repudiandae nam. Dolores architecto
              obcaecati dignissimos. Commodi?
            </p>
            <a className="text-red-500 flex flex-row items-center cursor-pointer justify-start gap-1 font-light pl-0 hover:text-red-900 my-5">
              <PlusIcon className="w-4" />
              <h1> Read More</h1>{" "}
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Services;
