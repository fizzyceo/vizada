import { BookmarkIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCoursesStore } from "../../stores/Courses";
import { useAuth } from "../../stores/Auth";
import vizadaLogo from "../../assets/navlogonbg.png";

export default function CourseCard({ content, isFavorite, router }) {
  const [isSaved, setIsSaved] = useState(content.isFavorite);
  const { insertFavorite, RemoveFavorite } = useCoursesStore((state) => state);
  const user = useAuth((state) => state.user);
  const verifyRefreshAuthenticity = useAuth(
    (state) => state.verifyRefreshAuthenticity
  );
  // const deleteFavorite = async()=>{

  // }

  // const addFavorite = async()=>{
  //   insertFavorite()

  // }
  useEffect(() => {
    console.log(content);
  }, [content]);
  const Saved = async () => {
    verifyRefreshAuthenticity(router);
    if (isSaved) {
      RemoveFavorite(content.idFav);
    } else {
      insertFavorite(user.id, content.id);
    }
    setIsSaved(!isSaved);
  };
  return (
    <Card className="">
      <CardHeader
        color="blue-gray"
        className="relative h-56 "
        style={{
          overflow: "hidden", // Ensure the image does not overflow the CardHeader
        }}
      ></CardHeader>
      <CardBody>
        <div>
          <span className="w-7 fontb absolute top-1 right-2 z-20 cursor-pointer ">
            <BookmarkIcon
              onClick={Saved}
              className={`shadow-md hover:fill-orange-400 ${
                isSaved ? "text-orange-900 fill-orange-900" : "text-gray-100"
              }`}
              style={{
                transition: "color 0.3s ease", // Transition effect on color change
              }}
            />
          </span>
          {content.image ? (
            <img
              style={{
                width: "100%", // Make the image cover the entire CardHeader
                height: "100%",
                transition: "transform 0.2s ease-in-out", // Add a transition effect on transform
                objectFit: "cover", // Ensure the image covers the space without stretching
              }}
              src={content.image}
              alt="card-image"
              className="hover:scale-105" // Apply scale transform on hover
            />
          ) : (
            <div
              style={{
                width: "100%", // Make the image cover the entire CardHeader
                height: "100%",
                transition: "transform 0.2s ease-in-out", // Add a transition effect on transform
                objectFit: "cover", // Ensure the image covers the space without stretching
              }}
              className="bg-red-100 flex items-center justify-center"
            >
              <img src={vizadaLogo} className="w-40" />
            </div>
          )}
        </div>
        <Typography
          variant="h6"
          color="blue-gray"
          className="text-xs text-gray-500 mb-2"
        >
          {content.subCategory}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {content.Nomc}
        </Typography>
        <Typography>{content.Descriptionc}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>
          <Link to={content.link}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
