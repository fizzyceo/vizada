import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function AccordionCustomStyles() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div id="qa" className="bg-gray-50 p-5 space-y-5 ">
      <div>
        <h1 className="roboto text-4xl text-center">
          Vous avez des questions à nous poser ?
        </h1>
      </div>
      <div className="w-4/5 mx-auto">
        <Accordion
          open={open === 1}
          className={`mb-2 rounded-lg border ${
            open === 1 ? "border-orange-600" : "border-blue-gray-100"
          }  px-4`}
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-b-0 transition-colors ${
              open === 1 ? "text-orange-700 hover:!text-orange-800" : ""
            }`}
          >
            Qui sommes-nous?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            VIZADA Academy, organisme de consulting, d'accompagnement et de
            formation, qui propose aux entreprises, aux organisations et aux
            individus des programmes pour le développement de leurs compétences
            dans le domaine professionnel.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          className={`mb-2 rounded-lg border ${
            open == 2 ? "border-orange-600" : "border-blue-gray-100"
          }  px-4`}
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`border-b-0 transition-colors ${
              open === 2 ? "text-orange-700 hover:!text-orange-800" : ""
            }`}
          >
            Pourquoi choisir Vizada?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            À votre rythme, que vous soyez en poste et souhaitez évoluer ou que
            votre emploi du temps soit trop chargé pour reprendre une formation,
            tous nos parcours s'adaptent à vos envies et à vos disponibilités.
            Profitez d'un démarrage immédiat et d'un planning modulable pendant
            votre formation. Nos cours en ligne sont accessibles 24h/24h, que
            vous soyez chez vous ou à l'autre bout du monde.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          className={`rounded-lg border ${
            open === 3 ? "border-orange-700" : "border-blue-gray-100"
          }  px-4`}
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`border-b-0 transition-colors ${
              open === 3 ? "text-orange-700 hover:!text-orange-800" : ""
            }`}
          >
            Où se trouve Vizada ?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            Rue Mahmoud KHODJAT EL DJELD, Les Sources, Alger.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}
