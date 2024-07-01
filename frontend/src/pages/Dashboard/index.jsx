import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../Home/components/Navbar";
import { Button, IconButton, Input } from "@material-tailwind/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import { FooterWithLogo } from "../Home/components/Footer";
import { useAuth } from "../../stores";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  CreditCardIcon,
  AcademicCapIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import vizadaLogo from "../../assets/vizada-logo.png";
import Subscription from "./Subscription";
import Credentials from "./Credentials";

const Dashboard = (props) => {
  const [tabSelected, setTabSelected] = useState(1);

  const user = useAuth((state) => state.user);
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar />
      <div className="my-10 flex flex-row items-center justify-between w-[90%] mx-auto">
        <h1>Marhaba {user?.name || "ilyes"}!</h1>
        <p className="text-gray-600 text-sm">Need Help ?</p>
      </div>
      <div className="lg:w-[70%] w-[90%] border-orange-900  border-2 border-dashed h-fit  min-h-[350px] mx-auto my-10 p-0   teko-400 flex flex-row py-0 relative overflow-hidden">
        <div
          className={`absolute w-[550px] h-[550px] lg:w-[750px] transition-all duration-500 lg:h-[750px] -top-[30%] z-0 -translate-y-[45%] ${
            tabSelected === 2
              ? "lg:-translate-y-[70%] lg:-translate-x-[-20%]"
              : "lg:-translate-y-[40%] lg:-translate-x-[38%]"
          } lg:-translate-y-[40%] -translate-x-[25%] lg:-translate-x-[38%] bg-gradient-to-b from-orange-700 to-red-900 rounded-full left-[50%]`}
        ></div>
        <div className="w-[30%] lg:w-[20%]   bg-gray-100 min-h-full">
          <div className="text-center border-b-2 z-20   py-5 flex items-center justify-center">
            <img src={vizadaLogo} alt="logo-ct" className="w-24 z-20" />
          </div>
          <div className="space-y-4">
            <h2 className="text-gray-700 mx-2 my-2 text-sm">Menu</h2>
            <div className="flex flex-col items-center gap-3 justify-center  rounded-r-md cursor-pointer">
              <div
                onClick={() => setTabSelected(1)}
                className={` rounded-r-full p-2 w-full  border-transparent border hover:border-orange-800 hover:bg-white hover:font-semibold hover:text-orange-800  transition-all flex flex-row items-center justify-center gap-4 ${
                  tabSelected === 1 ? "bg-orange-800 text-gray-50" : ""
                }`}
              >
                <CreditCardIcon width={24} />

                <h1>Subscription</h1>
              </div>
              {/* <div
                onClick={() => setTabSelected(2)}
                className={` rounded-r-full p-2  w-full  border-transparent border hover:border-orange-800 hover:bg-white hover:font-semibold hover:text-orange-800 transition-all flex flex-row items-center justify-center gap-4 ${
                  tabSelected === 2 ? "bg-orange-800 text-gray-50" : ""
                }`}
              >
                <LockClosedIcon width={24} />

                <h1>Credentials</h1>
              </div> */}
            </div>
          </div>
        </div>
        <div className="relative content  h-full     w-full items-center  flex flex-col gap-3  ">
          <div className="absolute right-4 lg:right-8 z-0   top-0 rounded-full w-24 h-24 opacity-25 bg-orange-400 blur-xl"></div>
          <div className="absolute left-8 lg:right-16 z-0   bottom-0 rounded-full w-24 h-24 opacity-30 bg-gray-400 blur-xl"></div>
          {/* {document.createElement("img", data[tabSelected - 1].icon)} */}
          {tabSelected === 1 && <Subscription type={"management"} />}
          {/* {tabSelected === 2 && <Credentials />} */}
        </div>
      </div>{" "}
      <FooterWithLogo />
    </div>
  );
};

export default Dashboard;
