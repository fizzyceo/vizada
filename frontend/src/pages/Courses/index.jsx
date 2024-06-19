import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "../Home/components/Navbar";
import { Button, IconButton, Input } from "@material-tailwind/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import MenuFilter from "./filters/MenuFilter";
import CourseCard from "./CourseCard";
import { FooterWithLogo } from "../Home/components/Footer";

const Courses = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const courseType = searchParams.get("type");
  const [courseList, setCourseList] = useState([
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

    {
      id: 6,
      link: "/",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      title: "Comptia+",
      description:
        "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
      subCategory: "Cyber Security",
    },
    {
      id: 7,
      link: "/",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      title: "Comptia+",
      description:
        "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
      subCategory: "Cyber Security",
    },
    {
      id: 8,
      link: "/",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      title: "Comptia+",
      description:
        "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story",
      subCategory: "Cyber Security",
    },
  ]);
  const [active, setActive] = useState(1);
  const itemsPerPage = 3;

  // Calculate total number of pages
  const totalPages = Math.ceil(courseList.length / itemsPerPage);

  // Calculate courses to display for the current page
  const start = (active - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const coursesToShow = courseList.slice(start, end);

  // Handler for changing active page
  const changePage = (pageNumber) => {
    setActive(pageNumber);
  };

  // Pagination buttons logic
  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <IconButton
        key={i}
        variant={active === i ? "filled" : "text"}
        color="gray"
        onClick={() => changePage(i)}
      >
        {i}
      </IconButton>
    );
  }

  const next = () => {
    if (active < totalPages) {
      setActive(active + 1);
    }
  };

  const prev = () => {
    if (active > 1) {
      setActive(active - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar />
      <div className="w-[90%] mx-auto mt-10  space-y-5 teko-400">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-gray-600">
            {courseList.length} Courses in {courseType}
          </h1>
          <Button>
            <Link
              className="flex flex-row  items-center justify-between"
              to={`/courses?type=${courseType === "IT" ? "management" : "IT"}`}
            >
              {courseType === "IT" ? "Management" : "IT"} Courses
            </Link>
          </Button>
        </div>
        <div className="filters flex flex-row items-center justify-between flex-wrap w-full">
          <div className="flex flex-row items-center flex-wrap justify-center gap-5 w-full mb-8">
            <div className="lg:w-[30%] w-full">
              <Input
                type="text"
                label="Mot Cle"
                icon={<MagnifyingGlassIcon className="w-6" />}
              />
            </div>
            <div className="subCategories flex-grow w-[60%] ">
              <MenuFilter />
            </div>
          </div>
        </div>
        <div className="courses w-full  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-10 justify-center flex-wrap p-2">
          {coursesToShow.map((course) => (
            <CourseCard key={course.id} content={course} />
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 my-5 mx-auto w-fit">
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-2">{paginationButtons}</div>
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === totalPages}
        >
          Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>

      <FooterWithLogo />
    </div>
  );
};

export default Courses;
