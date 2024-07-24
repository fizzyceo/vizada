import React, { useEffect, useState } from "react";
import MenuFilter from "../../../Courses/filters/MenuFilter";
import { useCoursesStore } from "../../../../stores/Courses";
import CourseCard from "../../../Courses/CourseCard";
import withRouter from "../../../../Components/Common/withRouter";
import { Spinner } from "@material-tailwind/react";
import CarouselCourses from "../CarouselCourses2";

const ITcourses = ({ router }) => {
  const { getCoursesBySousCategory } = useCoursesStore((state) => state);
  const [sousCategoryCourses, setSousCategoryCourses] = useState([]);
  const [currentSubCategory, setCurrentSubCategory] = useState(null);
  const [currentSubCategoryName, setCurrentSubCategoryName] = useState(null);

  const [loading, setLoading] = useState(false); // Loading state

  const [randomCourseList, setRandomCourseList] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      if (currentSubCategoryName) {
        setLoading(true); // Set loading to true when fetching starts
        try {
          let crs = await getCoursesBySousCategory(currentSubCategoryName);
          setSousCategoryCourses(crs);
        } catch (error) {
          console.error("Error fetching courses:", error);
        } finally {
          setLoading(false); // Set loading to false when fetching completes (success or error)
        }
      }
    };
    fetchCourses();
  }, [currentSubCategoryName, getCoursesBySousCategory]);

  useEffect(() => {
    if (sousCategoryCourses.length >= 0) {
      console.log(sousCategoryCourses);
      const coursesCopy = [...sousCategoryCourses]; // Create a copy of courses array
      const randomCourses = [];

      while (randomCourses.length < 16 && coursesCopy.length > 0) {
        const randomIndex = Math.floor(Math.random() * coursesCopy.length);
        randomCourses.push(coursesCopy[randomIndex]);
        coursesCopy.splice(randomIndex, 1); // Remove selected course to avoid duplicates
      }

      setRandomCourseList(randomCourses);
    }
  }, [sousCategoryCourses]);
  return (
    <div className="w-[90%] mx-auto space-y-5 ">
      <div className="flex justify-between w-full items-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-[#4e6ba3] w-[70%] md:w-[50%]">
          Commencez à apprendre avec nos formations IT
        </h1>
      </div>
      <div className="flex items-end justify-end">
        <a
          className="text-sm font-semibold text-blue-900 text-end"
          href="/courses/IT"
        >
          Voir tous nos formations IT
        </a>
      </div>
      <MenuFilter
        currentSubCategory={currentSubCategory}
        setCurrentSubCategory={setCurrentSubCategory}
        setCurrentSubCategoryName={setCurrentSubCategoryName}
        courseType={"IT"}
      />
      {loading ? (
        <div className="w-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div>
          {randomCourseList.length === 0 && (
            <div>Aucun cours pour cette catégorie</div>
          )}
          {randomCourseList.length > 0 && (
            <CarouselCourses
              router={router}
              randomCourseList={randomCourseList}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default withRouter(ITcourses);
