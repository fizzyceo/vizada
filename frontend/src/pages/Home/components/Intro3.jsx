import React from "react";
import Picture from "../../../assets/intropic.png";
import {
  Typography,
  Button,
  IconButton,
  Carousel,
} from "@material-tailwind/react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import animatedSvg from "../../../assets/animated.svg";
import LottieAnimation from "./svgs/IntroSvg";
import vizadaLogo from "../../../assets/vizadalogo.png";

import LottiePc from "./svgs/LottiePc";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
const Intro3 = () => {
  return (
    <div id="services" className=" w-full poppins">
      <div className="min-h-[550px] w-[90%]  xl:w-[80%]  my-5 pt-10 mx-auto flex flex-col items-center gap-10">
        <h1 className="lg:text-4xl text-light-red-700 text-xl md:text-2xl  whitespace-nowrap font-bold ">
          Nos Services
        </h1>
        <h1 className="lg:text-2xl text-lg md:text-xl  whitespace-nowrap font-semibold ">
          Apprenez selon vos propres cadences
        </h1>
        <div className="flex  items-center flex-wrap md:flex-nowrap  mx-auto gap-10 justify-between ">
          <div className="bg-gray-200 rounded-sm p-5 py-10 border-t-4 border-red-700 transition-all hover:scale-105 flex flex-col gap-4 items-center">
            <h1 className="lg:text-2xl text-lg md:text-xl  whitespace-nowrap font-semibold ">
              Formations IT{" "}
            </h1>
            <Typography
              variant="paragraph"
              className="font-normal text-sm md:text-base  text-blue-gray-500 text-center"
            >
              Découvrez nos formations pointues en technologies de l'information
              (IT), allant de la cybersécurité à la gestion des données, conçues
              pour vous préparer aux défis du monde numérique.
            </Typography>
            <Button
              style={{ textTransform: "initial" }}
              className="text-sm xl:text-base font-medium bg-red-900 flex items-center justify-between place-self-start rounded-full space-x-4 self-center lg:self-auto"
            >
              <a
                className="flex items-center justify-between w-full space-x-4"
                onClick={() => {
                  const element = document.getElementById("formation");
                  element.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <p>Nos Formations</p>
                <ArrowDownIcon className="w-6" />
              </a>
            </Button>
          </div>
          <div className="bg-gray-200 rounded-sm p-5 py-10 scale-105 border-t-4 border-blue-700  transition-all hover:scale-110 flex flex-col gap-4 items-center">
            <h1 className="lg:text-2xl text-lg md:text-xl  whitespace-nowrap font-semibold ">
              Consulting{" "}
            </h1>
            <Typography
              variant="paragraph"
              className="font-normal text-sm md:text-base  text-blue-gray-500 text-center"
            >
              En plus de nos formations, nous proposons des services de
              consultation personnalisée. Nos experts vous guideront à travers
              des stratégies adaptées pour atteindre vos objectifs commerciaux.
            </Typography>
            <Button
              style={{ textTransform: "initial" }}
              className="text-sm xl:text-base font-medium bg-blue-800 flex items-center justify-between place-self-start rounded-full space-x-4 self-center lg:self-auto "
            >
              <a
                className="flex items-center justify-between w-full space-x-4"
                onClick={() => {
                  window.location = `${
                    import.meta.env.VITE_PUBLIC_URL
                  }/consulting`;
                }}
              >
                <p>Notre Consultation</p>
                <ArrowPathIcon className="w-6" />
              </a>
            </Button>
          </div>
          <div className="bg-gray-200 rounded-sm p-5 py-10 border-t-4 border-red-700  transition-all hover:scale-105 flex flex-col gap-4 items-center">
            <h1 className="lg:text-2xl text-lg md:text-xl  whitespace-nowrap font-semibold ">
              Formations SoftSkills{" "}
            </h1>
            <Typography
              variant="paragraph"
              className="font-normal text-sm md:text-base  text-blue-gray-500 text-center"
            >
              Explorez nos programmes de formation en management pour développer
              vos compétences en leadership stratégique et gestion d'équipe,
              adaptés à tous les niveaux de votre carrière.
            </Typography>
            <Button
              style={{ textTransform: "initial" }}
              className="text-sm xl:text-base font-medium bg-red-900 flex items-center justify-between place-self-start rounded-full space-x-4 self-center lg:self-auto"
            >
              <a
                className="flex items-center justify-between w-full space-x-4"
                onClick={() => {
                  const element = document.getElementById("formation2");
                  element.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <p>Nos Formations</p>
                <ArrowDownIcon className="w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro3;
