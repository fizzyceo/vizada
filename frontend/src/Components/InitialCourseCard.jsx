import {
  ComputerDesktopIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

// Helper function to wrap text
function wrapText(text, length) {
  if (text.length > length) {
    return text.substring(0, length) + " ...";
  } else {
    return text;
  }
}

export default function InitialCourseCard({ type, course }) {
  return (
    <Card className="w-64 sm:w-64 md:w-52 lg:w-64 h-52">
      <CardBody className="space-y-2">
        {type === "IT" ? (
          <ComputerDesktopIcon className="h-8 text-gray-900 w-8" />
        ) : (
          <RectangleGroupIcon className="h-8 text-gray-900 w-8" />
        )}

        <Typography variant="h5" color="blue-gray" className="text-sm mb-1">
          {wrapText(course.Nomc, 30)}
        </Typography>
        <Typography className="text-xs">
          {wrapText(course.Descriptionc, 60)}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button
            size="sm"
            variant="text"
            onClick={() => (window.location.href = course.link)}
            className="text-xs flex items-center gap-2"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
