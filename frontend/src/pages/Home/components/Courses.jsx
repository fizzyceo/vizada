import { Button, Card, CardBody } from "@material-tailwind/react";
import React from "react";
import vizadaLogo from "../../../assets/vizada-logo.png";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Picture from "../../../assets/intropic.png";
import InitialCourseCard from "../../../Components/InitialCourseCard";
import { Link, useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();

  const navigateCourses = (courseType) => {
    console.log(courseType);
    navigate(`/courses/${courseType}`);
  };

  return (
    <div id="formation" className="teko-400">
      <div className="indexer flex flex-col items-center w-full justify-center gap-5  mx-auto">
        <h1 className=" text-4xl text-center">Choose your Course Type</h1>
        <div className="w-full flex flex-row items-center justify-center gap-5 flex-wrap">
          <Card className="p-2 py-7   bg-gray-200 text-gray-900 relative z-10 card-wrapper flex items-center justify-center">
            <CardBody className="z-10 min-h-64 flex flex-col items-center justify-between ">
              <img src={vizadaLogo} alt="" />
              <h1 className="text-xl ">Management Courses</h1>
            </CardBody>
          </Card>
          <Card className="p-2 py-7 bg-gray-900 text-gray-50 relative z-10 card-wrapper flex items-center justify-center">
            <CardBody className="min-h-64 flex flex-col items-center justify-between ">
              <img src={vizadaLogo} alt="" />
              <h1 className="text-xl ">Information technology Courses</h1>
            </CardBody>
          </Card>
        </div>

        <div className="managemet bg-gray-50 flex w-full  ">
          <div className="mx-auto flex flex-col items-center justify-center bg-orange-900 p-5 w-[95%] lg:w-[80%] rounded-lg ">
            <div className="min-h-[300px] relative  flex flex-row flex-wrap items-center justify-center gap-10 ">
              <div className="flex flex-col  justify-center items-start gap-5 lg:max-w-[45%]">
                <h1 className="text-5xl text-gray-50">Management Careers</h1>
                <p className="text-gray-50">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequuntur odit quod ratione perferendis ut tempora repellat
                  deleniti ipsa optio provident!
                </p>
                <Button className="w-40  ">
                  <Link
                    className="flex flex-row  items-center justify-between"
                    to={`/courses?type=management`}
                  >
                    <h1>All Courses</h1>
                    <ArrowRightIcon width={18} className="animate-pulse" />
                  </Link>
                </Button>
              </div>
              <div className=" my-2">
                <img
                  src={Picture}
                  className="w-[400px] lg:w-[450px]"
                  width={450}
                  alt=""
                />
              </div>
            </div>
            <div className="bg-blue-gray-50 p-2 lg:p-5 w-fit max-w-full flex flex-col gap-5 rounded-lg overflow-hidden items-center justify-center flex-wrap">
              {/* <h1 className="tex  t-lg">Trending Courses:</h1> */}
              <div className="flex flex-row gap-5 w-fit flex-wrap mx-auto items-center justify-center ">
                <InitialCourseCard />
                <InitialCourseCard />
                <InitialCourseCard />
              </div>
            </div>
          </div>
        </div>

        <div className="managemet bg-gray-50 flex w-full  ">
          <div className="mx-auto flex flex-col items-center justify-center bg-gray-900 p-5 w-[95%] lg:w-[80%] rounded-lg ">
            <div className="min-h-[300px] relative  flex flex-row flex-wrap items-center justify-center gap-10 ">
              <div className="flex flex-col  justify-center items-start gap-5 lg:max-w-[45%]">
                <h1 className="text-5xl text-gray-50">
                  {" "}
                  Information technology Careers
                </h1>
                <p className="text-gray-50 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequuntur odit quod ratione perferendis ut tempora repellat
                  deleniti ipsa optio provident!
                </p>
                <Button className="w-40 bg-orange-900 ">
                  <Link
                    className="flex flex-row  items-center justify-between"
                    to={`/courses?type=IT`}
                  >
                    <h1>All Courses</h1>
                    <ArrowRightIcon width={18} className="animate-pulse" />
                  </Link>
                </Button>
              </div>
              <div className=" my-2">
                <img
                  src={Picture}
                  className="w-[400px] lg:w-[450px]"
                  width={450}
                  alt=""
                />
              </div>
            </div>
            <div className="bg-blue-gray-50 p-2 lg:p-5 w-fit max-w-full flex flex-col gap-5 rounded-lg overflow-hidden items-center justify-center flex-wrap">
              {/* <h1 className="tex  t-lg">Trending Courses:</h1> */}
              <div className="flex flex-row gap-5 w-fit flex-wrap mx-auto items-center justify-center ">
                <InitialCourseCard />
                <InitialCourseCard />
                <InitialCourseCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
