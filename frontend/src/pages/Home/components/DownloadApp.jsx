import React from "react";
import { Typography } from "@material-tailwind/react";
import downloadLottie from "../../../Components/Common/download3.json";
import Lottie from "react-lottie";
import googlePlayIcon from "../../../assets/google-play.png";
import appleIcon from "../../../assets/apple.png";
import laptopIcon from "../../../assets/laptop.png";
const DownloadApp = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: downloadLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="w-full">
      <div className="min-h-[550px] w-[90%]  xl:w-[80%]  py-5 mx-auto ">
        <div className="flex flex-row justify-between items-center w-full flex-wrap z-10 ">
          <div className="flex  items-center mx-auto w-[90%]  lg:w-[50%] justify-start   font-serif">
            <div className=" flex flex-col poppins items-center mt-2 lg:mt-0 lg:items-start gap-5  mx-auto ">
              <div className="flex flex-row gap-1 items-center justify-center">
                <h1 className="lg:text-4xl md:text-3xl text-2xl  font-normal ">
                  Profitez de nos applications iOS, Android & Desktop{" "}
                  {/* <span className="gradient-text no-underline ">Vizada</span> */}
                </h1>
              </div>

              <Typography
                variant="paragraph"
                className="font-normal  xl:text-base text-sm text-blue-gray-500"
              >
                Accédez à toutes vos formations et développez vos compétences
                quand vous voulez et où que vous soyez !
              </Typography>
              <div className="formation1  flex flex-row items-end justify-start gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.mobilev2"
                  className="border bg-black p-2 w-[130px] md:w-[150px] rounded-lg text-white border-white flex flex-row gap-1 items-center justify-center"
                >
                  <img src={googlePlayIcon} className="w-7" alt="" />
                  <div className="text-start mb-1 leading-none">
                    <small className="font-light " style={{ fontSize: "9px" }}>
                      DISPONIBLE SUR{" "}
                    </small>
                    <h1 className="text-xs md:text-sm">Google Play</h1>
                  </div>
                </a>
                <a
                  href="https://www.alphorm.com/formez-vous-en-mobilite"
                  className="border bg-black p-2 w-[130px] md:w-[150px] rounded-lg text-white border-white flex flex-row gap-1 items-center justify-center"
                >
                  <img src={laptopIcon} className="w-7" alt="" />
                  <div className="text-start mb-1 leading-none">
                    <small className="font-light " style={{ fontSize: "9px" }}>
                      Telecharger Pour{" "}
                    </small>
                    <h1 className="text-xs md:text-sm">Desktop</h1>
                  </div>
                </a>
                <a
                  href="https://apps.apple.com/us/app/alphorm-formations-it-en-ligne/id1016914468"
                  className="border bg-black p-2 rounded-lg w-[130px] md:w-[150px] text-white border-white flex flex-row gap-3 items-center justify-center"
                >
                  <img src={appleIcon} className="w-7" alt="" />
                  <div className="text-start mb-1 leading-none">
                    <small className="font-light " style={{ fontSize: "9px" }}>
                      DISPONIBLE SUR{" "}
                    </small>
                    <h1 className="text-xs md:text-sm">App Store</h1>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="xl:w-[520px] lg:w-[400px] md:w-[350px] sm:w-[300px] w-[250px] xl:h-[520px] lg:h-[400px] md:h-[350px] sm:h-[300px] h-[250px]    mx-auto z-0  relative">
            {/* <div className="absolute right-[35%] translate-x-[45%] lg:right-80 z-0   bottom-0 rounded-full w-full h-full bg-orange-800 opacity-10 blur-xl"></div>
          <div className="absolute right-[50%] translate-x-[45%] lg:right-48 z-0   bottom-0 rounded-full w-full h-full bg-black opacity-10 blur-xl"></div> */}
            <div className="z-10 w-full h-full relative ">
              {" "}
              <Lottie options={defaultOptions} height={"fit"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
