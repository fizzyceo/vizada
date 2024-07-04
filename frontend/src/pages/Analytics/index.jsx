import React, { useEffect, useState } from "react";
import NavbarWithMegaMenu from "../Home/components/Navbar";
import "./styling.css";
import NavbarAdmin from "../Home/components/NavbarAdmin";
import { SubscribersTable } from "./SubscribersTable";
import { NewUsers } from "./NewUsers";
import { Card, CardBody } from "@material-tailwind/react";
import CountUp from "react-countup";
import { UserGroupIcon, UserIcon } from "@heroicons/react/24/solid";
import { useSubStore } from "../../stores/Subs";

const Analytics = () => {
  const { getUsers, users, getSubs, subs } = useSubStore((state) => state);
  const [usersRows, setUsersRows] = useState([]);
  const [subsRows, setSubsRows] = useState([]);
  useEffect(() => {
    getUsers();
    getSubs();
  }, []);
  useEffect(() => {
    if (users.length > 0) {
      setUsersRows(users);
    }
  }, [users]);
  useEffect(() => {
    if (subs.length > 0) {
      setSubsRows(subs);
    }
  }, [subs]);
  return (
    <div className="min-h-screen w-full bg-gray-100 p-3">
      <NavbarAdmin />
      <div className="w-full">
        <div className="cards w-full p-5 "></div>
        <div className="tables w-[95%] mx-auto">
          <div className="subscribers w-full flex flex-row  gap-5 flex-wrap">
            <div className="flex-grow">
              <SubscribersTable subsRows={subsRows} />
            </div>
            <div className="flex-grow  py-0 flex flex-col gap-4">
              <div className="flex flex-row items-center flex-wrap gap-4 ">
                <Card className="flex-grow">
                  <CardBody className="text-center">
                    <div className="mb-1">
                      <span
                        className="counter-value text-3xl"
                        data-target="36.48"
                      >
                        <CountUp
                          start={0}
                          end={users.length}
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
                          end={subs.length}
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
              <Card className="  w-full flex-grow ">
                <CardBody className="w-full h-full">
                  <h1 className="roboto text-xs mb-3">
                    A list of the 5 latest Joined Users
                  </h1>
                  <NewUsers usersRows={usersRows} />
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
