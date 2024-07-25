import React from "react";
import image from "../../../assets/Image1.png";

const Front = () => {
  return (
    <div className="w-full flex flex-row  items-center justify-between ">
      <div className="w-[85%]    mt-10">
        <div className="w-full  relative mb-32">
          <img src={image} className="w-full  p-1 bg-white" />

          <div className="bg-[#f2f2f2] absolute -bottom-52 w-fit right-0  lg:right-16 p-5 lg:px-16 lg:py-16 lg:space-y-10 rounded-sm lg:w-[600px] ">
            <div className="text-center lg:text-start ">
              <h1 className="opensans text-[#1a2b6d] leading-none text-[2.5rem] lg:text-[4rem]">
                IT Consulting
              </h1>
              <h1 className="opensans text-[#1a2b6d] leading-none text-[2.5rem] lg:text-[4rem]">
                & Services
              </h1>
            </div>
            <div className="flex items-start flex-wrap lg:flex-nowrap w-full justify-center gap-5">
              <div className="w-1/2 border-t-[3px] border-[#1a2b6d] mt-2"></div>
              <p className="tracking-widest opensans text-[#656562] text-sm max-w-80 md:text-base ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis sapiente fugiat labore quos vero veritatis
                voluptates vitae nulla voluptatem nostrum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
