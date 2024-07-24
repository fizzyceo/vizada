import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, IconButton, Input, Tooltip } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import MenuFilter from "./filters/MenuFilter";
import CourseCard from "./CourseCard";
import { FooterWithLogo } from "../Home/components/Footer";
import { useCoursesStore } from "../../stores/Courses";
import { useAuth } from "../../stores/Auth";
import withRouter from "../../Components/Common/withRouter";
import NavbarAdmin from "../Home/components/NavbarAdmin";
import NavbarWithMegaMenu from "../Home/components/Navbar";
import { wrapText } from "../../Components/Common/wrapText";
import { MagnifyingGlassIcon, PlayCircleIcon } from "@heroicons/react/24/solid";

const Courses3 = (props) => {
  const { param1, param2 } = useParams(); // Get param1 and param2 from URL
  const {
    getCoursesByCategory,
    categoryCourses,
    getFavorites,
    favorites,
    getSubCategories,
    subcategories,
  } = useCoursesStore((state) => state);

  const [courseList, setCourseList] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [relevantSubCategories, setRelevantSubCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [infoText, setInfoText] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAllSubcategories, setShowAllSubcategories] = useState(false); // State to manage showing all subcategories
  const [showLess, setShowLess] = useState(false); // State to manage showing fewer subcategories

  const { accessToken, user } = useAuth((state) => state);

  const [currentSubCategory, setCurrentSubCategory] = useState(param2 || null);
  const [currentSubCategoryName, setCurrentSubCategoryName] = useState(null);

  useEffect(() => {
    getSubCategories();
  }, []);

  useEffect(() => {
    if (subcategories.length > 0) {
      let stringparam1 = param1 === "IT" ? 1 : 2;
      let relevantSubCat = subcategories.filter((s) => s.Id_c === stringparam1);

      setRelevantSubCategories(relevantSubCat.slice(0, 7)); // Only show the first 7 initially
    }
  }, [param1, subcategories]);

  useEffect(() => {
    setLoading(true);
    if (accessToken) {
      getFavorites();
    }

    if (param1) {
      let prop = param1.toLowerCase() === "it" ? 1 : 2;
      console.log(prop);
      getCoursesByCategory(param1);
    }
  }, [param1]); // Ensure useEffect runs when param1 or param2 changes

  useEffect(() => {
    if (categoryCourses.length > 0 && param2) {
      console.log(param2, categoryCourses);
      let list = categoryCourses.filter(
        (crs) => crs.Id_sc === parseInt(param2)
      );
      console.log(list);
      list = list.map((course) => {
        const isFavorite = favorites.find((fav) => fav.Id_c === course.id);

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
  }, [categoryCourses, param2]);

  const handleSubcategoryClick = (id) => {
    props.router.navigate(`/courses/${param1}/${id}`); // Navigate to currenturl/Nomsouscategorie
  };

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
  const itemsPerPage = 6;

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

  const toggleSubcategories = () => {
    if (!showAllSubcategories) {
      // If showing only the first 7, set all subcategories
      setRelevantSubCategories(
        subcategories.filter((s) => s.Id_c === (param1 === "IT" ? 1 : 2))
      );
    } else {
      // Otherwise, set only the first 7 subcategories
      setRelevantSubCategories(
        subcategories
          .filter((s) => s.Id_c === (param1 === "IT" ? 1 : 2))
          .slice(0, 7)
      );
    }
    setShowAllSubcategories(!showAllSubcategories);
  };

  const toggleShowLess = () => {
    setShowLess(!showLess);
    if (showLess) {
      // If showing fewer subcategories, limit to first 7
      setRelevantSubCategories(
        subcategories
          .filter((s) => s.Id_c === (param1 === "IT" ? 1 : 2))
          .slice(0, 7)
      );
    } else {
      // Otherwise, show all subcategories
      setRelevantSubCategories(
        subcategories.filter((s) => s.Id_c === (param1 === "IT" ? 1 : 2))
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {user?.role ? (
        <NavbarAdmin />
      ) : (
        <NavbarWithMegaMenu isLogged={user ? true : false} />
      )}
      <div className="w-[90%] mx-auto flex flex-row items-center justify-between my-10">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-4xl text-blue-700 font-medium">
            Formations en{" "}
            {param1.toLowerCase() === "it" ? "Informatique" : "Management"}
          </h1>
          <div className="flex flex-row items-center justify-center gap-1">
            <PlayCircleIcon className="w-7 text-yellow-700" />
            <p className="text-sm">{courseList?.length} formations</p>
          </div>
        </div>
        <p
          variant="text"
          onClick={(e) => {
            e.preventDefault();

            window.location = `${import.meta.env.VITE_PUBLIC_URL}/courses/${
              param1.toLowerCase() === "it" ? "management" : "IT"
            }`;
          }}
          className="roboto font-medium text-blue-900 underline cursor-pointer"
        >
          {param1.toLowerCase() === "it" ? "management" : "IT"} Courses
        </p>
      </div>
      <div className="w-[90%] mx-auto mt-10 space-y-5 roboto flex flex-row items-center justify-center my-5">
        <div className="left flex flex-col md:flex-row items-start justify-center gap-4 w-full">
          <div className="sub cat flex flex-row md:flex-col items-center justify-center gap-5 overflow-x-scroll md:overflow-x-visible md:w-fit w-screen">
            <div
              onClick={() => props.router.navigate(`/courses/${param1}`)}
              className={`px-5 cursor-pointer py-3 w-[250px]  text-center transition-all text-green-800  border-green-600 border-2 rounded-lg text-sm                    `}
              style={{
                whiteSpace: "nowrap", // Prevent text wrapping
                overflow: "hidden", // Hide overflowed text
                textOverflow: "ellipsis", // Display ellipsis (...) when text overflows
                maxWidth: "200px", // Limit the width of the container
              }}
            >
              <h1>Tous Les Formations</h1>
            </div>
            {relevantSubCategories.length > 0 &&
              relevantSubCategories.map((category, index) => (
                <div
                  key={category.id}
                  onClick={() => handleSubcategoryClick(category.id)}
                  className={`p-5 cursor-pointer py-3 min-w-[150px] md:min-w-[200px] w-[250px]  text-center transition-all  border-gray-300 border-2 rounded-lg text-sm ${
                    parseInt(param2) === category.id
                      ? "text-blue-600 border-blue-900 "
                      : ""
                  }`}
                  style={{
                    whiteSpace: "nowrap", // Prevent text wrapping
                    overflow: "hidden", // Hide overflowed text
                    textOverflow: "ellipsis", // Display ellipsis (...) when text overflows
                    maxWidth: "200px", // Limit the width of the container
                  }}
                >
                  <Tooltip
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                    content={category.Nomsouscategorie}
                  >
                    <h1>{wrapText(category.Nomsouscategorie, 20)}</h1>
                  </Tooltip>
                </div>
              ))}
            {!showAllSubcategories ? (
              <Button
                onClick={toggleSubcategories}
                variant="outlined"
                size="sm"
                color="blueGray"
              >
                Voir plus
              </Button>
            ) : (
              <Button
                onClick={toggleSubcategories}
                variant="outlined"
                size="sm"
                color="blueGray"
              >
                Voir moins
              </Button>
            )}
            {/* {showAllSubcategories && } */}
          </div>

          <div className="flex-grow min-w-[80%] space-y-5 ">
            <div className="w-full">
              <Input
                type="text"
                label="Mot Cle"
                className="flex items-center "
                icon={<MagnifyingGlassIcon className="w-6" />}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <div className="courses w-full  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-10 justify-center flex-wrap p-2">
              {coursesToShow.map((course) => (
                <CourseCard
                  router={props.router}
                  key={course.id}
                  content={course}
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
        </div>
      </div>
      <FooterWithLogo />
    </div>
  );
};

export default withRouter(Courses3);
