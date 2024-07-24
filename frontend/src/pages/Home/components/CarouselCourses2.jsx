import React, { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import CourseCard from "../../Courses/CourseCard";

const CarouselCourses = ({
  router,
  randomCourseList,
  autoplayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayActive, setAutoplayActive] = useState(true); // State to manage autoplay
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    setAutoplayActive(false); // Pause autoplay on arrow click
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? randomCourseList.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setAutoplayActive(false); // Pause autoplay on arrow click
    setCurrentIndex((prevIndex) =>
      prevIndex === randomCourseList.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoplayActive) {
        // Check if autoplay is active before incrementing index
        setCurrentIndex((prevIndex) =>
          prevIndex === randomCourseList.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplayActive, randomCourseList.length, autoplayInterval]);

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current) {
        const cardWidth = carouselRef.current?.firstChild?.offsetWidth;
        carouselRef.current.style.transform = `translateX(-${
          currentIndex * cardWidth
        }px)`;
      }
    };
    scroll();
  }, [currentIndex, carouselRef.current]);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={carouselRef}
        className="items-center flex flex-row gap-4 translate-x-[0px] transition-all xl:max-w-[850px] lg:max-w-[700px] md:max-w-[500px] max-w-[350px]"
        style={{ scrollBehavior: "smooth" }}
      >
        {randomCourseList.map((item, index) => (
          <CourseCard key={index} content={item} router={router} />
        ))}
      </div>
      <button
        onClick={handlePrevClick}
        className="absolute inset-y-0 left-0 top-1/2 -translate-y-1/2 p-2 flex items-center justify-center w-fit gap-5 h-fit rounded-full bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 focus:outline-none z-10"
      >
        <ChevronLeftIcon className="w-7" />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute inset-y-0 right-0 top-1/2 -translate-y-1/2 p-2 flex items-center justify-center w-fit gap-5 h-fit rounded-full bg-gray-800 bg-opacity-50 text-white hover:bg-opacity-75 focus:outline-none z-10"
      >
        <ChevronRightIcon className="w-7" />
      </button>
    </div>
  );
};

export default CarouselCourses;
