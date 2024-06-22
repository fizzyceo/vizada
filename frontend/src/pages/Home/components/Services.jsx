import {
  Card,
  CardBody,
  CardHeader,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React, { useRef, useState } from "react";
import { useIsVisible } from "../../../helpers/useIsVisible";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { TabsContext } from "@material-tailwind/react/components/Tabs/TabsContext";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  CogIcon,
} from "@heroicons/react/24/solid";
import Chiffres from "./Chiffres";
const Services = () => {
  const [tabSelected, setTabSelected] = useState(1);

  const data = [
    {
      label: "Dashboard",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Profile",
      value: "profile",
      icon: UserCircleIcon,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Settings",
      value: "settings",
      icon: Cog6ToothIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  const displayContent = (val) => {
    return data[val - 1].desc;
  };

  return (
    <div id="about" className="w-full p-5">
      <div className=" lg:w-4/5 mx-auto p-1 space-y-10">
        <Chiffres />
        <Card className="lg:w-4/5 mx-auto">
          <CardHeader className=" rounded-br-full  rounded-bl-full">
            <h1 className="teko-400 text-3xl text-center">NOS SERVICES </h1>
          </CardHeader>

          <CardBody className="w-full pl-3 pr-0 min-h-80 flex items-center">
            <div className=" flex flex-row items-center justify-center gap-5">
              <div className="w-[25%] flex flex-col items-center justify-center  bg-gray-100 rounded-md cursor-pointer">
                <div
                  onClick={() => setTabSelected(1)}
                  className={` rounded-t-md p-2 w-full  border-transparent border hover:border-orange-800 hover:bg-white hover:font-semibold hover:text-orange-800  transition-all flex flex-row items-center justify-center gap-4 ${
                    tabSelected === 1 ? "bg-orange-800 text-gray-50" : ""
                  }`}
                >
                  <AcademicCapIcon width={24} />

                  <h1>tab3</h1>
                </div>
                <div
                  onClick={() => setTabSelected(2)}
                  className={`  p-2  w-full  border-transparent border hover:border-orange-800 hover:bg-white hover:font-semibold hover:text-orange-800 transition-all flex flex-row items-center justify-center gap-4 ${
                    tabSelected === 2 ? "bg-orange-800 text-gray-50" : ""
                  }`}
                >
                  <ChatBubbleLeftRightIcon width={24} />

                  <h1>tab1</h1>
                </div>
                <div
                  onClick={() => setTabSelected(3)}
                  className={`  p-2  w-full rounded-b-md  border-transparent border hover:border-orange-800 hover:bg-white hover:font-semibold hover:text-orange-800 transition-all flex flex-row items-center justify-center gap-4 ${
                    tabSelected === 3 ? "bg-orange-800 text-gray-50" : ""
                  }`}
                >
                  <BellIcon width={24} />

                  <h1>tab1</h1>
                </div>
              </div>
              <div className="relative content p-4 min-h-40 rounded-l-xl   w-full items-center justify-center flex flex-col gap-3 bg-gray-100 ">
                <div className="absolute right-4 lg:right-8 z-0   top-0 rounded-full w-24 h-24 opacity-25 bg-orange-400 blur-xl"></div>
                <div className="absolute right-8 lg:right-16 z-0   bottom-0 rounded-full w-24 h-24 opacity-30 bg-gray-400 blur-xl"></div>
                {/* {document.createElement("img", data[tabSelected - 1].icon)} */}
                {tabSelected === 1 && (
                  <Square3Stack3DIcon className="w-16 h-16" />
                )}
                {tabSelected === 2 && <UserCircleIcon className="w-16 h-16" />}
                {tabSelected === 3 && <CogIcon className="w-16 h-16" />}
                <h1 className="font-semibold text-xl">
                  {data[tabSelected - 1].label}
                </h1>
                {data[tabSelected - 1].desc}
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Services;
