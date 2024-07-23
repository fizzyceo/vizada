import { Button, Card, CardBody } from "@material-tailwind/react";
import React from "react";
import vizadaLogo from "../../../assets/navlogonbg.png";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Picture from "../../../assets/intropic.png";
import InitialCourseCard from "../../../Components/InitialCourseCard";
import { Link, useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useCoursesStore } from "../../../stores/Courses";
import CategorySection from "./CategorySection";

const Courses = ({ categories }) => {
  return (
    <div id="formation" className="poppins ">
      <div className="indexer flex flex-col items-center w-full justify-center gap-10  mx-auto">
        <h1 className=" text-3xl text-center text-blue-gray-700 font-medium">
          Commencez à apprendre avec nos formations
        </h1>
        <div className="w-full flex flex-row items-center justify-center gap-5 flex-wrap">
          {categories.map((cat) => (
            <Card
              onClick={() => {
                const element = document.getElementById(
                  cat.Nomcategorie.toLowerCase()
                );
                element.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              key={cat.id}
              className={`p-2 py-7  cursor-pointer  ${
                cat.id % 2 === 0
                  ? "bg-gray-200 text-gray-900"
                  : "bg-gray-900 text-gray-50 "
              } relative z-10 card-wrapper flex items-center justify-center`}
            >
              <CardBody className="z-10 min-h-64 min-w-[250px] flex flex-col items-center justify-between ">
                <img src={vizadaLogo} alt="" className="w-44" />
                <h1 className="text-sm ">{cat.Nomcategorie} Cours</h1>
              </CardBody>
            </Card>
          ))}
        </div>
        {categories.map((cat) => (
          <CategorySection key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
