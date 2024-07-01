import React from "react";
import NavbarWithMegaMenu from "../Home/components/Navbar";
import "./styling.css";
import NavbarAdmin from "../Home/components/NavbarAdmin";
import { SubscribersTable } from "./SubscribersTable";
import { NewUsers } from "./NewUsers";
import { Card, CardBody } from "@material-tailwind/react";
import CountUp from "react-countup";
import { UserGroupIcon, UserIcon } from "@heroicons/react/24/solid";

const Analytics = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 ">
      <NavbarAdmin />
      <div className="w-full">
        <div className="cards w-full p-5 bg-green-500"></div>
        <div className="tables w-[95%] mx-auto">
          <div className="subscribers w-full flex flex-row items-center justify-center gap-5 flex-wrap">
            <div className="flex-grow">
              <SubscribersTable />
            </div>
            <div className="flex-grow">
              <div className="flex flex-row items-center flex-wrap gap-4 my-5">
                <Card className="flex-grow">
                  <CardBody className="text-center">
                    <div className="mb-1">
                      <span
                        className="counter-value text-3xl"
                        data-target="36.48"
                      >
                        <CountUp
                          start={0}
                          end={501}
                          decimals={0}
                          suffix=""
                          duration={4}
                        />
                      </span>
                    </div>
                    <div className="mb-1 items-center justify-center gap-3 flex flex-row">
                      {" "}
                      <UserGroupIcon className="w-5" />
                      <p className="text-gray-600 mb-0 text-sm">total users</p>
                    </div>
                  </CardBody>
                </Card>
                <Card className="flex-grow">
                  <CardBody className="text-center">
                    <div className="mb-1">
                      <span
                        className="counter-value text-3xl"
                        data-target="36.48"
                      >
                        <CountUp
                          start={0}
                          end={210}
                          decimals={0}
                          suffix=""
                          duration={4}
                        />
                      </span>
                    </div>
                    <div className="mb-1 items-center justify-center gap-3 flex flex-row">
                      {" "}
                      <UserGroupIcon className="w-5" />
                      <p className="text-gray-600 mb-0 text-sm">
                        total subscribers
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <Card className="flex-grow">
                <CardBody>
                  <h1 className="roboto text-sm mb-3">
                    A list of the 5 latest Joined Users
                  </h1>
                  <NewUsers />
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
