import React, { useEffect, useState } from "react";
import {
  BellAlertIcon,
  ComputerDesktopIcon,
  CreditCardIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/solid";
import { Button, Spinner } from "@material-tailwind/react";
import Timer from "./CountDown";
import moment from "moment";

const Subscription = ({ isActive, subscriberContent }) => {
  const [secondsLeft, setSecondsLeft] = useState(-1);
  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    console.log(subscriberContent);
    if (subscriberContent?.DateDebSession && subscriberContent?.typeS) {
      const startDate = new Date(subscriberContent.DateDebSession); // Subscription start date
      const duration = parseInt(
        subscriberContent.typeS === "yearly" ? 365 : 30
      ); // Subscription duration in days

      // Calculate end date by adding duration to start date
      const endDate = new Date(
        startDate.getTime() + duration * 24 * 60 * 60 * 1000
      );
      console.log("End Date:", endDate);

      // Calculate remaining seconds until subscription end
      const now = new Date();
      const secondsLeft = Math.max(
        0,
        (endDate.getTime() - now.getTime()) / 1000
      );
      setSecondsLeft(secondsLeft);

      // Calculate total seconds for the timer (duration of subscription in seconds)
      const totalSeconds = duration * 24 * 60 * 60; // Convert duration from days to seconds
      setTotalSeconds(totalSeconds);
      console.log("Total Seconds:", totalSeconds, "Seconds Left:", secondsLeft);
    }
  }, [subscriberContent]);
  useEffect(() => {
    console.log(isActive);
  }, [isActive]);
  return (
    <div className="w-full flex flex-col items-center justify-start text-gray-100 my-3 pb-7 min-h-[350px]">
      {isActive === 1 ? (
        <>
          {totalSeconds > 0 && secondsLeft !== -1 ? (
            <>
              <CreditCardIcon className="w-24 lg:w-24 text-gray-100 z-20" />

              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex flex-row items-center justify-center gap-2">
                  {subscriberContent.Id_c === 1 ? (
                    <ComputerDesktopIcon className="h-8 text-gray-100 w-8" />
                  ) : (
                    <RectangleGroupIcon className="h-8 text-gray-100 w-8" />
                  )}
                  <h1 className="text-xl">
                    You Are Subscribed to{" "}
                    <span className="font-bold">
                      {subscriberContent.Id_c === 1
                        ? "Information Technology"
                        : "Management"}
                    </span>
                  </h1>
                </div>
                <Timer secondsLeft={secondsLeft} totalSeconds={totalSeconds} />
              </div>
            </>
          ) : (
            <Spinner />
          )}
        </>
      ) : isActive === 0 ? (
        <div className=" flex flex-col items-center justify-center gap-6">
          <div className="text-center bg-orange-900 gap-2 p-4 mt-8 rounded-lg roboto mx-auto w-[95%] text-gray-50 flex flex-col items-center justify-center">
            <BellAlertIcon className="w-7 " />
            <p>
              Your account is currently being processed. You'll receive an email
              shortly <span className="font-bold">(less than a 24h)</span>{" "}
              containing the credentials to access the platform.
            </p>
          </div>
          <div className="infos text-xl flex flex-col items-center justify-center">
            <h2>
              Paid on :{" "}
              {moment(subscriberContent.Datesub).format("YYYY.MM.DD hh:mm")}
            </h2>
            <h2>
              Plan:{" "}
              {subscriberContent.Id_c === 1
                ? "IT Package"
                : "Management Package"}
            </h2>
            <h2>Duration: {subscriberContent.typeS}</h2>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-5 my-10">
          <h1 className="text-xl font-semibold">
            You are not Subscribed to any Plan.
          </h1>
          <Button color="black" className="text-sm">
            <a href="/#plans"> Check Current Plans</a>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Subscription;
