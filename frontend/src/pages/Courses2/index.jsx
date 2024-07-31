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

const Courses2 = (props) => {
  const { param1 } = useParams();
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
  const [showAllSubcategories, setShowAllSubcategories] = useState(false);
  const [showLess, setShowLess] = useState(false);
  const { accessToken, user } = useAuth((state) => state);

  useEffect(() => {
    getSubCategories();
  }, []);

  useEffect(() => {
    if (subcategories.length > 0) {
      let stringparam1 = param1 === "IT" ? 1 : 2;
      let relevantSubCat = subcategories.filter((s) => s.Id_c === stringparam1);

      setRelevantSubCategories(relevantSubCat.slice(0, 7));
    }
  }, [param1, subcategories]);

  useEffect(() => {
    setLoading(true);
    if (accessToken) {
      getFavorites();
    }

    if (param1) {
      let prop = param1.toLowerCase() === "it" ? 1 : 2;
      getCoursesByCategory(param1);
    }
  }, [param1]);

  useEffect(() => {
    if (categoryCourses.length > 0) {
      setCourseList(categoryCourses);
      setFilteredCourses(categoryCourses);
      setInfoText("");
    } else {
      setInfoText("Aucun cours pour cette catégorie...");
    }
  }, [categoryCourses]);

  const handleSubcategoryClick = (id) => {
    props.router.navigate(`/courses/${param1}/${id}`);
  };

  useEffect(() => {
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
      setFilteredCourses(courseList);
    }
  }, [searchQuery, courseList]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const [active, setActive] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  const start = (active - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const coursesToShow = filteredCourses.slice(start, end);

  const changePage = (pageNumber) => {
    setActive(pageNumber);
  };

  // Generate pagination buttons with ellipses
  const getPaginationButtons = () => {
    const buttons = [];
    const range = 2; // Number of pages to show on each side of the current page

    if (totalPages <= 5) {
      // If there are 5 or fewer pages, show all pages
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      // If there are more than 5 pages
      if (active <= range + 1) {
        // If the current page is close to the start
        for (let i = 1; i <= range + 2; i++) {
          buttons.push(i);
        }
        buttons.push("...");
        buttons.push(totalPages);
      } else if (active >= totalPages - range) {
        // If the current page is close to the end
        buttons.push(1);
        buttons.push("...");
        for (let i = totalPages - range - 1; i <= totalPages; i++) {
          buttons.push(i);
        }
      } else {
        // If the current page is in the middle
        buttons.push(1);
        buttons.push("...");
        for (let i = active - range; i <= active + range; i++) {
          buttons.push(i);
        }
        buttons.push("...");
        buttons.push(totalPages);
      }
    }
    return buttons;
  };

  const paginationButtons = getPaginationButtons().map((page, index) => (
    <IconButton
      key={index}
      variant={active === page ? "filled" : "text"}
      color="gray"
      onClick={() => {
        if (page !== "...") {
          changePage(page);
        }
      }}
      disabled={page === "..."}
    >
      {page}
    </IconButton>
  ));

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
      setRelevantSubCategories(
        subcategories.filter((s) => s.Id_c === (param1 === "IT" ? 1 : 2))
      );
    } else {
      setRelevantSubCategories(
        subcategories
          .filter((s) => s.Id_c === (param1 === "IT" ? 1 : 2))
          .slice(0, 7)
      );
    }
    setShowAllSubcategories(!showAllSubcategories);
  };
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {user?.role ? (
        <NavbarAdmin />
      ) : (
        <NavbarWithMegaMenu isLogged={user ? true : false} />
      )}
      <div className="w-[90%] mx-auto flex flex-row items-center justify-between my-10">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-2xl md:text-4xl text-blue-700 font-medium">
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
            {relevantSubCategories.length > 0 &&
              relevantSubCategories.map((category, index) => (
                <div
                  key={category.id}
                  onClick={() => handleSubcategoryClick(category.id)}
                  className={`px-5 cursor-pointer py-3 min-w-[150px] md:min-w-[200px] w-[250px]  text-center transition-all  border-gray-300 border-2 rounded-lg text-sm `}
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

export default withRouter(Courses2);
