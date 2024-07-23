import React, { useEffect, useState } from "react";
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
import { useCoursesStore } from "../../stores/Courses";
import { useAuth } from "../../stores/Auth";
import withRouter from "../../Components/Common/withRouter";
import NavbarAdmin from "../Home/components/NavbarAdmin";
import NavbarWithMegaMenu from "../Home/components/Navbar";

const Courses = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const courseType = searchParams.get("type");
  const { getCoursesByCategory, getCourses, courses, getFavorites, favorites } =
    useCoursesStore((state) => state);
  const [currentSubCategory, setCurrentSubCategory] = useState(null);
  const [courseList, setCourseList] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [currentSubCategoryName, setCurrentSubCategoryName] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [infoText, setInfoText] = useState("");
  const [loading, setLoading] = useState(false);
  const { accessToken, user } = useAuth((state) => state);
  useEffect(() => {
    setLoading(false);
    if (accessToken) {
      getFavorites();
    }
    getCourses();

    setLoading(true);
  }, []);
  //getCoursesByCategory next...
  useEffect(() => {
    if (courses.length > 0 && currentSubCategory) {
      let list = courses.filter((crs) => crs.Id_sc === currentSubCategory);
      list = list.map((course) => {
        const isFavorite = favorites.find((fav) => fav.Id_c === course.id);
        console.log(isFavorite);

        return {
          ...course,
          idFav: isFavorite?.id || null,
          isFavorite: !!isFavorite,
        };
      });
      setCourseList(list);
      setFilteredCourses(list); // Initialize filtered courses with all courses
      console.log(list);
      if (list.length > 0) {
        setInfoText("");
      } else {
        setInfoText("Aucun cours pour cette catégorie...");
      }
    }
  }, [courses, currentSubCategory]);

  useEffect(() => {
    // Filter courses based on searchQuery
    if (searchQuery.length > 2) {
      const filtered = courseList.filter(
        (course) =>
          course.Nomc?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.Descriptionc?.toLowerCase().includes(
            searchQuery.toLowerCase()
          ) ||
          course.image?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.link?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCourses(filtered);
    } else {
      // If searchQuery length is less than or equal to 2, show all courses
      setFilteredCourses(courseList);
    }
  }, [searchQuery, courseList]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const [active, setActive] = useState(1);
  const itemsPerPage = 3;

  // Calculate total number of pages for filtered courses
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  // Calculate courses to display for the current page
  const start = (active - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const coursesToShow = filteredCourses.slice(start, end);

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
      {user?.role ? (
        <NavbarAdmin />
      ) : (
        <NavbarWithMegaMenu isLogged={user ? true : false} />
      )}{" "}
      <div className="w-[90%] mx-auto mt-10  space-y-5 roboto">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-gray-600">
            {courseList.length} Courses in {courseType}
          </h1>
          <Button
            onClick={(e) => {
              e.preventDefault();
              const newUrl = `/courses?type=${
                courseType === "IT" ? "management" : "IT"
              }`;
              window.location.href = newUrl;
            }}
          >
            {courseType === "IT" ? "Management" : "IT"} Courses
          </Button>
        </div>
        <div className="filters flex flex-row items-center justify-between flex-wrap w-full">
          <div className="flex flex-row items-center flex-wrap justify-center gap-5 w-full mb-8">
            <div className="lg:w-[30%] w-full">
              <Input
                type="text"
                label="Mot Cle"
                icon={<MagnifyingGlassIcon className="w-6" />}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <div className="subCategories flex-grow w-[60%] ">
              <MenuFilter
                courseType={courseType}
                currentSubCategory={currentSubCategory}
                setCurrentSubCategory={setCurrentSubCategory}
                setCurrentSubCategoryName={setCurrentSubCategoryName}
              />
            </div>
          </div>
        </div>
        <h1 className="text-lg text-gray-700">{infoText}</h1>
        <div className="courses w-full  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-10 justify-center flex-wrap p-2">
          {coursesToShow.map((course) => (
            <CourseCard
              router={props.router}
              key={course.id}
              content={course}
              isFavorite={course.isFavorite} // Pass isFavorite prop
            />
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

export default withRouter(Courses);
