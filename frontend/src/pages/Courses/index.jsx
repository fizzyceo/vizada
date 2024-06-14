import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../Home/components/Navbar";
import { Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import MenuFilter from "./filters/MenuFilter";
import CourseCard from "./CourseCard";
//url  = http://localhost:3000/main/ride?type=send
const Courses = (props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const courseType = searchParams.get("type");
  let [courseList, setCourseList] = useState([
    {
      id: 1,
      link: "/",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      title: "Comptia+",
      description:
        "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
      subCategory: "Cyber Security",
    },
    {
      id: 2,
      link: "/",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      title: "Comptia+",
      description:
        "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
      subCategory: "Cyber Security",
    },
    {
      id: 3,
      link: "/",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      title: "Comptia+",
      description:
        "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
      subCategory: "Cyber Security",
    },
    {
      id: 4,
      link: "/",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      title: "Comptia+",
      description:
        "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
      subCategory: "Cyber Security",
    },
    {
      id: 5,
      link: "/",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      title: "Comptia+",
      description:
        "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
      subCategory: "Cyber Security",
    },
  ]);
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/**navbar: logo login button  + hyperlinks(courses, Pricing, Q/A,  ) */}
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <div className="w-[90%]  mx-auto mt-10 space-y-5 teko-400">
        <h1 className="text-gray-600">
          {111} Courses in {courseType}
        </h1>
        <div className="filters flex flex-row items-center justify-between">
          <h1 className="text-2xl">Apply Filters:</h1>
          <div className="flex flex-row items-center justify-center gap-5">
            <div>
              <Input
                type="text"
                label="Mot Cle"
                icon={<MagnifyingGlassIcon className="w-6" />}
              />
            </div>
            <div className="subCategories">
              <MenuFilter />
            </div>
          </div>
        </div>
        <div className="courses  w-full flex flex-row items-center gap-10 justify-center flex-wrap">
          {courseList.length > 0 &&
            courseList.map((course) => (
              <CourseCard key={course.id} content={course} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
