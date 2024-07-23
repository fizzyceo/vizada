import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InitialCourseCard from "../../../Components/InitialCourseCard";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { useCoursesStore } from "../../../stores/Courses";
import CarouselCourses from "./CarouselCourses";

const CategorySection = ({ cat }) => {
  const { getCoursesByCategory, categoryCourses } = useCoursesStore(
    (state) => state
  );

  const [randomCourseList, setRandomCourseList] = useState([]);
  useEffect(() => {
    const fetchingCourses = async () => {
      let relevant = await getCoursesByCategory(cat.Nomcategorie);
      if (relevant.length > 0) {
        const coursesCopy = relevant.slice(); // Create a copy of courses array
        const randomCourses = [];

        while (randomCourses.length < 9 && coursesCopy.length > 0) {
          const randomIndex = Math.floor(Math.random() * coursesCopy.length);
          randomCourses.push(coursesCopy[randomIndex]);
          coursesCopy.splice(randomIndex, 1); // Remove selected course to avoid duplicates
        }
        console.log(randomCourses);

        setRandomCourseList(randomCourses);
      }
    };

    fetchingCourses();
  }, []);
  //   useEffect(() => {
  //     if (categoryCourses.length > 0) {
  //       const coursesCopy = categoryCourses.slice(); // Create a copy of courses array
  //       const randomCourses = [];

  //       while (randomCourses.length < 3 && coursesCopy.length > 0) {
  //         const randomIndex = Math.floor(Math.random() * coursesCopy.length);
  //         randomCourses.push(coursesCopy[randomIndex]);
  //         coursesCopy.splice(randomIndex, 1); // Remove selected course to avoid duplicates
  //       }
  //       setRandomCourseList(randomCourses);
  //     }
  //   }, [categoryCourses]);

  return (
    <div
      id={cat.Nomcategorie?.toLowerCase()}
      className="managemet  flex w-full  "
    >
      <div
        className={`mx-auto flex flex-col items-center justify-center ${
          cat.id % 2 === 0 ? "bg-orange-900" : "bg-gray-900"
        }   p-5 w-[95%] lg:w-[80%] rounded-lg `}
      >
        <div className="min-h-[250px] relative  flex flex-row flex-wrap items-center justify-center gap-10 ">
          <div className="flex flex-col p-5 justify-center items-start gap-5 lg:max-w-[45%]">
            <h1 className="text-4xl text-gray-50">
              {cat.Nomcategorie === "IT"
                ? "Information technology"
                : cat.Nomcategorie}{" "}
              Careers
            </h1>
            <p className="text-gray-50">{cat.Descriptionc}</p>
            <Button
              className={`w-40  ${cat.id % 2 !== 0 ? "bg-orange-900" : ""} `}
            >
              <Link
                className="flex flex-row  items-center justify-between"
                to={`/courses?type=management`}
              >
                <h1>Tous les Cours</h1>
                <ArrowRightIcon width={18} className="animate-pulse" />
              </Link>
            </Button>
          </div>
          <div className=" my-2">
            <DotLottieReact
              className=" h-[400px] w-[550px]"
              src={`${cat.link}`}
              loop
              autoplay
            />

            {/*cat.id % 2 !== 0
                ? "https://lottie.host/f8106ca0-0aa7-464c-9a5e-7a0fde860e6e/IQgHKxuEgd.json"
                : "https://lottie.host/b07a8965-0aca-40ac-8c07-67f5e65a5f40/OgLXmeErPc.json"
            */}
          </div>
        </div>
        <div className="bg-blue-gray-800 p-2 lg:p-5 w-fit max-w-full flex flex-col gap-5 rounded-lg overflow-hidden items-center justify-center flex-wrap">
          {/* <h1 className="tex  t-lg">Trending Courses:</h1> */}

          <CarouselCourses
            type={cat.Nomcategorie}
            randomCourseList={randomCourseList}
          />
          {/* <div className="flex flex-row gap-5 w-fit flex-wrap mx-auto items-center justify-center ">
            {randomCourseList.length > 0 &&
              randomCourseList.map((crs) => (
                <InitialCourseCard type={cat.Nomcategorie} course={crs} />
              ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
