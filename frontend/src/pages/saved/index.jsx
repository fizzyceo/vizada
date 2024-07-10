import React, { useEffect, useState } from "react";
import NavbarWithMegaMenu from "../Home/components/Navbar";
import { FooterWithLogo } from "../Home/components/Footer";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BookmarkIcon,
} from "@heroicons/react/24/solid";
import { useCoursesStore } from "../../stores/Courses";
import withRouter from "../../Components/Common/withRouter";
import CourseCard from "../Courses/CourseCard";
import { Button, IconButton } from "@material-tailwind/react";
import NavbarAdmin from "../Home/components/NavbarAdmin";
import { useAuth } from "../../stores";

const saved = (props) => {
  const { getCoursesByCategory, getCourses, courses, getFavorites, favorites } =
    useCoursesStore((state) => state);
  const [coursesList, SetCoursesList] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const user = useAuth((state) => state.user);
  const { role } = user;
  useEffect(() => {
    getFavorites();
    getCourses();
  }, []);
  useEffect(() => {
    if (courses.length > 0) {
      console.log(courses);
      console.log(favorites);

      let currentCourses = courses.filter((c) =>
        favorites.some(({ Id_c }) => Id_c === c.id)
      );

      currentCourses = currentCourses.map((crs) => {
        let currFAV = favorites.find((fav) => fav.Id_c === crs.id);
        return {
          ...crs,
          idFav: currFAV.id,
          isFavorite: true,
        };
      });

      console.log(currentCourses);
      SetCoursesList(currentCourses);
      setFilteredCourses(currentCourses); // Initialize filtered courses with all courses
    }
  }, [favorites, courses]);

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
    <div className="flex items-center bg-gradient-to-b from-blue-700 to-white justify-center w-full min-h-screen roboto">
      <div className="w-full min-h-screen  overflow-x-hidden ">
        {role === false ? (
          <NavbarWithMegaMenu isLogged={user ? true : false} />
        ) : (
          <NavbarAdmin />
        )}
        <div className="w-full h-full flex  my-24 items-center flex-col ">
          <div className=" flex items-center justify-center w-fit h-fit mx-auto mb-10">
            <BookmarkIcon className="w-16 text-white" />
            <h1 className="text-center text-3xl font-medium text-gray-100 ">
              Explore Your Saved Courses
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-5 space-y-5 md:grid-cols-2 lg:grid-cols-3  w-5/6 z-30">
            {coursesToShow.length > 0 &&
              coursesToShow.map((crs) => (
                <CourseCard
                  router={props.router}
                  key={crs.id}
                  content={crs}
                  isFavorite={crs.isFavorite}
                />
              ))}
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
        </div>
        <FooterWithLogo />
      </div>
    </div>
  );
};

export default withRouter(saved);
