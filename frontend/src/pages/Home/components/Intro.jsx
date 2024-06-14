import React from "react";
import Picture from "../../../assets/intropic.png";
import {
  Typography,
  Button,
  IconButton,
  Carousel,
} from "@material-tailwind/react";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
const Intro = () => {
  return (
    <div className="min-h-[550px] w-[95%] lg:w-[80%]  py-5 mx-auto">
      <div className="flex flex-row justify-between w-full flex-wrap z-10 ">
        <div className="flex items-center mx-auto w-[90%]  lg:w-[50%] justify-start   font-serif">
          <div className=" flex flex-col items-center mt-2 lg:mt-0 lg:items-start gap-5  mx-auto ">
            <h1 className="text-5xl teko-600 font-bold letter">
              {" "}
              GROW WITH <span className="gradient-text ">VIZADA</span>
            </h1>

            <h3 className="text-xl">reach 10x your potentiel</h3>
            <Typography
              variant="h4"
              className="text-md !font-medium text-blue-gray-800"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              impedit eum sapiente adipisci laboriosam blanditiis quos velit.
              Facilis nostrum dolorum consectetur excepturi qui quis, tempora
              velit in, neque mollitia consequuntur.
            </Typography>
            <Button className=" bg-orange-800 flex items-center justify-between place-self-start rounded-full space-x-4">
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
        <div className="w-fit  mx-auto z-0  relative">
          <div className="absolute right-24 lg:right-48 z-0   bottom-0 rounded-full w-64 h-64 opacity-50 bg-orange-400 blur-xl"></div>

          <div className="absolute z-0 right-0 rounded-full w-64 h-64 bg-black opacity-30 blur-xl"></div>

          <div className="z-10 relative">
            {/**this could change to videos or even a background image */}
            <img src={Picture} className="lg:w-[550px]  w-[400px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
