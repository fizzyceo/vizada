import React, { useEffect, useState } from "react";
import NavbarAdmin from "../Home/components/NavbarAdmin";
import { CoursesTable } from "./CoursesTable";
import { CategoriesTable } from "./CategoriesTable";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { Card, CardBody } from "@material-tailwind/react";
// import "bootstrap/dist/css/bootstrap.min.css";
import CountUp from "react-countup";
import toutApprendre from "../../assets/toutapprendre.svg";
import alphrom from "../../assets/alphorm.svg";
import { useCoursesStore } from "../../stores/Courses";
const Analytics2 = () => {
  const { subcategories, getCoursesDetails, courses, getSubCategories } =
    useCoursesStore((state) => state);
  const [coursesRows, setCoursesRows] = useState([]);
  const [categoriesRows, setCategoriesRows] = useState([]);
  useEffect(() => {
    getCoursesDetails();

    getSubCategories();
  }, []);
  useEffect(() => {
    setCoursesRows(courses);
  }, [courses]);

  useEffect(() => {
    setCategoriesRows(subcategories);
  }, [subcategories]);

  return (
    <div className="min-h-screen w-full bg-gray-100 p-3">
      <NavbarAdmin />
      <div className="w-full">
        <div className="cards w-full p-5 "></div>
        <section className=" w-[100%]   my-5  flex items-center justify-center flex-col gap-5 partners ">
          <div className="flex flex-row items-center justify-center gap-10 lg:gap-20  w-full opacity-50 ">
            <img
              src={toutApprendre}
              className="w-40 lg:w-44 h-24 invert cursor-pointer hover:bg-red-900 py-1 px-4 rounded-full  text-gray-900"
              alt=""
            />
            <img
              src={alphrom}
              className="w-40 lg:w-44 h-24 invert cursor-pointer hover:bg-red-900 p-3 rounded-full  text-gray-900"
              alt=""
            />
          </div>
        </section>
        <div className="tables w-[95%] mx-auto">
          <div className="subscribers w-full flex flex-row  gap-5 flex-wrap">
            <div className="flex-grow">
              <CoursesTable courses={courses} />
            </div>
            <div className="flex-grow  py-0 flex flex-col gap-4">
              <Card className="  w-full flex-grow ">
                <CardBody className="w-full h-full">
                  <h1 className="roboto text-xs mb-3">
                    A list of the 5 latest Joined Users
                  </h1>
                  {/* <CategoriesTable categories={subcategories} /> */}
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Analytics2;
