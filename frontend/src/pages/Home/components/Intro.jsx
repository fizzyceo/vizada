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
const Intro = () => {
  return (
    <div className=" w-full poppins">
      <div className="min-h-[550px] w-[90%]  xl:w-[80%]  py-5 mx-auto ">
        <div className="flex flex-row justify-between w-full flex-wrap z-10 ">
          <div className="flex  items-center mx-auto w-[90%]  lg:w-[55%] justify-start ">
            <div className=" flex flex-col poppins justify-center items-center mt-2 lg:mt-0 lg:items-start gap-3  mx-auto ">
              <div className="flex flex-row gap-2 items-start justify-start">
                <img
                  src={vizadaLogo}
                  className="w-28 sm:w-36 md:w-44 lg:w-52 "
                />
                <div>
                  <h1 className="lg:text-4xl text-xl md:text-2xl  whitespace-nowrap font-bold ">
                    Formez vous
                    {/* <span className="gradient-text no-underline ">Vizada</span> */}
                  </h1>
                  <h1 className="lg:text-4xl  text-xl md:text-2xl  whitespace-nowrap font-bold ">
                    à votre rythme

                    {/* <span className="gradient-text no-underline ">Vizada</span> */}
                  </h1>
                </div>
              </div>

              <h3 className="text-md md:text-xl">Multiverse des formations</h3>
              <Typography
                variant="paragraph"
                className="font-normal text-sm md:text-base  text-blue-gray-500"
              >
                Vizada propose une gamme complète de formations sur le
                management, le marketing, la sécurité, la gestion de projet et
                les systèmes d’information.
              </Typography>
              <div className="flex flex-row items-center justify-center gap-3 ">
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
            </div>
          </div>

          <div className=" 2xl:w-[420px] lg:w-[400px] w-[380px] h-[300px] lg:h-[450px] xl:h-[520px]   mx-auto z-0  relative">
            <div className="absolute right-[35%] translate-x-[45%] lg:right-80 z-0   bottom-0 rounded-full w-full h-full bg-orange-800 opacity-10 blur-xl"></div>
            <div className="absolute right-[50%] translate-x-[45%] lg:right-48 z-0   bottom-0 rounded-full w-full h-full bg-black opacity-10 blur-xl"></div>
            <div className="z-10 w-full h-full relative ">
              {" "}
              <LottiePc />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
