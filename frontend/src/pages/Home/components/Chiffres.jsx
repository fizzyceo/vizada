import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import React, { useRef, useState } from "react";
import { useIsVisible } from "../../../helpers/useIsVisible";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Chiffres = () => {
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef();
  const isVisible3 = useIsVisible(ref3);

  const [dotLottie, setDotLottie] = React.useState(null);

  const dotLottieRefCallback = (dotLottie) => {
    setDotLottie(dotLottie);
  };
  return (
    <Card className=" lg:w-4/5 mx-auto ">
      <CardHeader className="rounded-tl-full rounded-br-none py-2   rounded-tr-full  ">
        <h1 className="teko-400 text-3xl text-center">NOS CHIFFRES </h1>
      </CardHeader>

      <CardBody>
        <div className=" flex flex-col lg:flex-row items-center gap-5 lg:gap-10 my-3 justify-center">
          <div
            ref={ref1}
            className={`teko-400 text-gray-800 w-fit text-center space-y-1 p-8 rounded-full bg-orange-700 bg-opacity-35
          transition-all duration-1000 delay-500 ease-in-out ${
            isVisible1
              ? "translate-y-0 lg:translate-x-0 opacity-100"
              : "opacity-0 -translate-y-28 lg:-translate-y-28"
          } `}
          >
            <h2 className="text-2xl">1854</h2>
            <p>Eleves Inscrit</p>
          </div>

          <div
            ref={ref3}
            className={`teko-400 text-gray-800 w-fit text-center space-y-1 p-10 rounded-full bg-orange-700 bg-opacity-50
          transition-all duration-1000 delay-500 ease-in-out ${
            isVisible3
              ? "translate-x-5 lg:translate-x-0 lg:-translate-y-5 opacity-100"
              : "opacity-0 translate-x-60 lg:translate-x-0 lg:translate-y-60"
          } `}
          >
            <h2 className="text-2xl">24 ans</h2>
            <p className="">D'experience</p>
          </div>

          <div
            ref={ref2}
            className={`teko-400 text-gray-800 w-fit text-center space-y-1 p-8 rounded-full bg-orange-700 bg-opacity-35
          transition-all duration-1000 delay-500 ease-in-out ${
            isVisible2
              ? "translate-x-0 opacity-100"
              : "opacity-0 translate-x-28"
          } `}
          >
            <h2 className="text-2xl">1481</h2>
            <p>Cours Proposes</p>
          </div>
        </div>
        <hr className="my-5 border-orange-500 border-2 rounded-full w-[80%] mx-auto animate-line" />
        <div className="flex flex-col items-start justify-center gap-2 mx-auto lg:w-3/5">
          <div className="flex flex-row items-center justify-center gap-3">
            <DotLottieReact
              className="w-32"
              src="https://lottie.host/b037240d-6c69-42b2-813c-e85c64354d83/pp7yY3pPiE.json"
              loop
              autoplay
            />
            <div className=" relative ">
              <p className="relative z-10">
                {" "}
                98% de réussite au post-baccalauréat
              </p>
              <span className="absolute p-4 bg-yellow-800  z-0 rounded-full -top-1 -left-1 "></span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <DotLottieReact
              className="w-32"
              src="https://lottie.host/59b84a82-b495-4cb4-b74f-db406cb5b7eb/MJqko6BBic.json"
              loop
              autoplay
            />
            <div className=" relative ">
              <p className="relative z-10">
                {" "}
                98% de réussite au post-baccalauréat
              </p>
              <span className="absolute p-4 bg-yellow-800  z-0 rounded-full -top-1 -left-1 "></span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-3">
            <DotLottieReact
              className="w-32"
              src="https://lottie.host/5d518996-4956-49dd-8125-5cf4dbd2d94d/yKkyDiXyUD.json"
              loop
              autoplay
            />
            <div className=" relative ">
              <p className="relative z-10">
                {" "}
                98% de réussite au post-baccalauréat
              </p>
              <span className="absolute p-4 bg-yellow-800  z-0 rounded-full -top-1 -left-1 "></span>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Chiffres;
