import { Button, Card, CardBody } from "@material-tailwind/react";
import React from "react";
import vizadaLogo from "../../../assets/navlogonbg.png";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Picture from "../../../assets/intropic.png";
import InitialCourseCard from "../../../Components/InitialCourseCard";
import { Link, useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Courses = () => {
  const navigate = useNavigate();

  const navigateCourses = (courseType) => {
    console.log(courseType);
    navigate(`/courses/${courseType}`);
  };

  return (
    <div id="formation" className="poppins ">
      <div className="indexer flex flex-col items-center w-full justify-center gap-10  mx-auto">
        <h1 className=" text-3xl text-center text-blue-gray-700 font-medium">
          Commencez à apprendre avec nos formations
        </h1>
        <div className="w-full flex flex-row items-center justify-center gap-5 flex-wrap">
          <Card
            onClick={() => {
              const element = document.getElementById("management");
              element.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="p-2 py-7  cursor-pointer  bg-gray-200 text-gray-900 relative z-10 card-wrapper flex items-center justify-center"
          >
            <CardBody className="z-10 min-h-64 min-w-[250px] flex flex-col items-center justify-between ">
              <img src={vizadaLogo} alt="" className="w-44" />
              <h1 className="text-sm ">Management Courses</h1>
            </CardBody>
          </Card>
          <Card
            onClick={() => {
              const element = document.getElementById("IT");
              element.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="p-2 py-7 cursor-pointer bg-gray-900 text-gray-50 relative z-10 card-wrapper flex items-center justify-center"
          >
            <CardBody className="min-h-64  flex flex-col items-center justify-between ">
              <img src={vizadaLogo} alt="" className="w-44" />
              <h1 className="text-sm ">Information Technology Courses</h1>
            </CardBody>
          </Card>
        </div>

        <div id="management" className="managemet  flex w-full  ">
          <div className="mx-auto flex flex-col items-center justify-center bg-orange-900 p-5 w-[95%] lg:w-[80%] rounded-lg ">
            <div className="min-h-[250px] relative  flex flex-row flex-wrap items-center justify-center gap-10 ">
              <div className="flex flex-col p-5 justify-center items-start gap-5 lg:max-w-[45%]">
                <h1 className="text-4xl text-gray-50">Management Careers</h1>
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
                <DotLottieReact
                  className=" h-[400px] w-[550px]"
                  src="https://lottie.host/f8106ca0-0aa7-464c-9a5e-7a0fde860e6e/IQgHKxuEgd.json"
                  loop
                  autoplay
                />
                {/* <img
                  src={Picture}
                  className="w-[400px] lg:w-[450px]"
                  width={450}
                  alt=""
                /> */}
              </div>
            </div>
            <div className="bg-blue-gray-50 p-2 lg:p-5 w-fit max-w-full flex flex-col gap-5 rounded-lg overflow-hidden items-center justify-center flex-wrap">
              {/* <h1 className="tex  t-lg">Trending Courses:</h1> */}
              <div className="flex flex-row gap-5 w-fit flex-wrap mx-auto items-center justify-center ">
                <InitialCourseCard type={"management"} />
                <InitialCourseCard type={"management"} />
                <InitialCourseCard type={"management"} />
              </div>
            </div>
          </div>
        </div>

        <div id="IT" className="IT  flex w-full  ">
          <div className="mx-auto flex flex-col items-center justify-center bg-gray-900 p-5 w-[95%] lg:w-[80%] rounded-lg ">
            <div className="min-h-[300px] relative  flex flex-row flex-wrap items-center justify-center gap-10 ">
              <div className="flex flex-col  justify-center items-start gap-5 lg:max-w-[45%]">
                <h1 className="text-4xl text-gray-50">
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
                <DotLottieReact
                  className=" h-[400px] w-[550px]"
                  src="https://lottie.host/b07a8965-0aca-40ac-8c07-67f5e65a5f40/OgLXmeErPc.json"
                  loop
                  autoplay
                />
              </div>
            </div>
            <div className="bg-blue-gray-50 p-2 lg:p-5 w-fit max-w-full flex flex-col gap-5 rounded-lg overflow-hidden items-center justify-center flex-wrap">
              {/* <h1 className="tex  t-lg">Trending Courses:</h1> */}
              <div className="flex flex-row gap-5 w-fit flex-wrap mx-auto items-center justify-center ">
                <InitialCourseCard type={"IT"} />
                <InitialCourseCard type={"IT"} />
                <InitialCourseCard type={"IT"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
