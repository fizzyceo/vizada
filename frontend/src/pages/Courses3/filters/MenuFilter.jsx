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
  Tooltip,
} from "@material-tailwind/react";
import { useCoursesStore } from "../../../stores/Courses";

export default function MenuFilter({
  currentSubCategory,
  setCurrentSubCategory,
  setCurrentSubCategoryName,
  courseType,
}) {
  // const categories = [
  //   { id: 1, name: "Development" },
  //   { id: 2, name: "Data Science" },
  //   { id: 3, name: "Artificial Intelligence" },
  //   { id: 4, name: "Cyber Security" },
  //   { id: 5, name: "Cyber Security1" },
  //   { id: 6, name: "Cyber Security2" },
  //   { id: 7, name: "Cyber Security3" },
  // ];

  const { getSubCategories, subcategories, getCategories, categories } =
    useCoursesStore((state) => state);
  const contentRef = useRef(null);
  const rightArrowRef = useRef(null);
  const leftArrowRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [relevantSubCat, setRelevantSubCat] = useState([]);
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
    getSubCategories();
    getCategories();
  }, []);
  useEffect(() => {
    if (subcategories.length > 0 && categories.length > 0) {
      let chosenCat = categories.filter(
        (cat) => cat.Nomcategorie.toLowerCase() === courseType.toLowerCase()
      );

      console.log(chosenCat);

      let relevant = subcategories.filter(
        (cat) => cat.Id_c === chosenCat[0].id
      );
      console.log(relevant);

      setRelevantSubCat(relevant);
      // if (relevant.length > 0) {
      //   setCurrentSubCategory(relevant[0].id);
      //   setCurrentSubCategoryName(relevant[0].Nomsouscategorie);
      // }
    }
  }, [subcategories, categories]);
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
    if (currentSlide === parseInt(nbSlides))
      rightElement.style.display = "none";
    else rightElement.style.display = "flex";

    if (currentSlide === 1) leftElement.style.display = "none";
    else leftElement.style.display = "flex";
  };
  function wrapText(text, length) {
    if (text.length > length) {
      return text.substring(0, length) + " ...";
    } else {
      return text;
    }
  }

  return (
    <div className="min-w-[95%] lg:min-w-fit relative overflow-hidden min-h-14 p-5 transition-all   rounded-lg">
      <span
        ref={leftArrowRef}
        onClick={() => Move("right")}
        className="absolute flex items-center cursor-pointer z-20 justify-center top-0 -left-2 bg-gradient-to-r rounded-lg from-white to-transparent p-4 h-full"
      >
        <span className="text-red-900">
          <ArrowLeftCircleIcon width={32} />
        </span>
      </span>
      <span
        ref={rightArrowRef}
        onClick={() => Move("left")}
        className="absolute flex cursor-pointer items-center z-20 justify-center top-0 -right-2 bg-gradient-to-l  rounded-lg from-white to-transparent p-4 h-full"
      >
        <span className="text-red-900">
          <ArrowRightCircleIcon width={32} />
        </span>
      </span>

      <div
        ref={contentRef}
        className="absolute left-0 top-[50%] translate-y-[-50%] transition-all  flex flex-row gap-5 items-center justify-center"
      >
        {relevantSubCat.length > 0 &&
          relevantSubCat.map((category) => (
            <div
              key={category.id}
              onClick={() => {
                setCurrentSubCategory(category.id);
                setCurrentSubCategoryName(category.Nomsouscategorie);
              }}
              className={`px-5 cursor-pointer py-3 min-w-[150px] w-fit  text-center transition-all bg-gray-200 border-red-900 border rounded-lg text-sm ${
                currentSubCategory === category.id
                  ? "text-gray-50 bg-red-900 "
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
      </div>
    </div>
  );
}
