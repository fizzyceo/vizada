import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";

export default function CourseCard({ content }) {
  return (
    <Card className="">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={content.image} alt="card-image" />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h6"
          color="blue-gray"
          className="text-xs text-gray-500 mb-2"
        >
          {content.subCategory}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {content.title}
        </Typography>
        <Typography>{content.description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
