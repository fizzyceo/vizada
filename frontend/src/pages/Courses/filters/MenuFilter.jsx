import { useEffect, useRef, useState } from "react";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Checkbox,
} from "@material-tailwind/react";

export default function MenuFilter() {
  const categories = [
    { id: 1, name: "Development" },
    { id: 2, name: "Data Science" },
    { id: 3, name: "Artificial Intelligence" },
    { id: 4, name: "Cyber Security" },
    { id: 5, name: "Cyber Security1" },
    { id: 6, name: "Cyber Security2" },
    { id: 7, name: "Cyber Security3" },
  ];
  const contentRef = useRef(null);
  const rightArrowRef = useRef(null);
  const leftArrowRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [currentSubCategory, setCurrentSubCategory] = useState(
    categories[0].id
  );

  const Move = (dir) => {
    const contentElement = contentRef.current;
    const totalWidth = contentElement.getBoundingClientRect().width;
    const widthToMove = 150 + 20 + 150 + 20;
    const buttonWidth = 32;
    const nbSlides = totalWidth / widthToMove;
    let leftValue = parseFloat(contentElement.style.left) || 0;

    if (dir === "left") {
      if (currentSlide === 1) leftValue -= widthToMove + buttonWidth;
      else leftValue -= widthToMove;

      setCurrentSlide(currentSlide + 1);
      contentElement.style.left = `${leftValue}px`;
    } else {
      if (currentSlide === 2) leftValue = 8;
      else leftValue += widthToMove;

      setCurrentSlide(currentSlide - 1);
      contentElement.style.left = `${leftValue}px`;
    }
  };

  useEffect(() => {
    manageButtons();
  }, [currentSlide]);
  const manageButtons = () => {
    const contentElement = contentRef.current;
    const totalWidth = contentElement.getBoundingClientRect().width;
    const widthToMove = 150 + 20 + 150 + 20;
    const nbSlides = totalWidth / widthToMove;
    const rightElement = rightArrowRef.current;
    const leftElement = leftArrowRef.current;
    console.log(nbSlides, currentSlide);
    if (currentSlide === parseInt(nbSlides))
      rightElement.style.display = "none";
    else rightElement.style.display = "flex";

    if (currentSlide === 1) leftElement.style.display = "none";
    else leftElement.style.display = "flex";
  };
  return (
    <div className="min-w-[95%] lg:min-w-[100%] relative overflow-hidden min-h-14 p-5 transition-all bg-gray-200 rounded-full">
      <span
        ref={leftArrowRef}
        onClick={() => Move("right")}
        className="absolute flex items-center cursor-pointer z-20 justify-center top-0 left-0 bg-gradient-to-r rounded-lg from-black to-transparent p-4 h-full"
      >
        <span className="text-gray-50">
          <ArrowLeftCircleIcon width={32} />
        </span>
      </span>
      <span
        ref={rightArrowRef}
        onClick={() => Move("left")}
        className="absolute flex cursor-pointer items-center z-20 justify-center top-0 right-0 bg-gradient-to-l rounded-lg from-black to-transparent p-4 h-full"
      >
        <span className="text-gray-50">
          <ArrowRightCircleIcon width={32} />
        </span>
      </span>

      <div
        ref={contentRef}
        className="absolute left-0 top-[50%] translate-y-[-50%] transition-all  flex flex-row gap-5 items-center justify-center"
      >
        {categories.length > 0 &&
          categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setCurrentSubCategory(category.id)}
              className={`px-5 cursor-pointer py-3 min-w-[150px] text-center transition-all bg-gray-200 border-orange-800 border rounded-full text-sm ${
                currentSubCategory === category.id
                  ? "text-gray-50 bg-orange-800 "
                  : ""
              }`}
            >
              <h1>{category.name}</h1>
            </div>
          ))}
      </div>
    </div>
  );
}
