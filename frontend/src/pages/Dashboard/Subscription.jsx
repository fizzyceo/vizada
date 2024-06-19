import {
  CreditCardIcon,
  InformationCircleIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { Button, Rating } from "@material-tailwind/react";
import React from "react";

const Subscription = ({ state, type }) => {
  return (
    <div className=" w-full flex flex-col items-center justify-start text-gray-50 pb-7">
      <CreditCardIcon className="w-24 lg:w-24 text-red-50 z-20" />
      <div className="teko-400 flex flex-row gap-2 w-full z-20 items-center justify-center">
        {" "}
        <InformationCircleIcon className="text-red-50 w-7 lg:w-14" />
        <h1 className="text-lg lg:text-3xl">
          You are{" "}
          <span className={`text-gray-800`}>
            {!state ? "Subscribed" : "Not Subscribed"}
          </span>
        </h1>
      </div>
      {!state ? (
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex flex-row items-center justify-center gap-2">
            <StarIcon className="text-gray-50 w-6" />

            <h1 className="text-lg">Management{type}</h1>
          </div>
          <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center ">
            <h1 className="text-xl text-gray-900">14 Days </h1>
          </div>
        </div>
      ) : (
        <div className="">
          <Button className="text-sm">Check Current Plans</Button>
        </div>
      )}

      {/**if subscribed: state: Subscribed | Courses of Management\IT |  Time Left from the Subscription 
     * if not subscibed: state: Unsubscribed | paragraph convicing them to subscribe | 1 button that takes them to the Subscription cards on the first page
     | explore the available courses in IT and\or Managemnt
     */}
    </div>
  );
};

export default Subscription;
