import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export default function PricingCard({ price, isYearly }) {
  return (
    <Card
      color="blue-gray"
      variant="gradient"
      className="w-fit max-w-[20rem] p-8"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-orange-800/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-normal uppercase"
        >
          Management{" "}
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-6 flex justify-center gap-1 text-5xl font-normal"
        >
          <span className="mt-2 text-lg">DZD</span>
          {price}{" "}
          <span className="self-end text-4xl">{isYearly ? "/yr" : "/mo"}</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-orange-800/70 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">Membership</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-orange-800/70 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">400+ Courses</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-orange-800/70 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
              Access to Alphorm Platform
            </Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-orange-800/70 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">
              7/7 Customer Service
            </Typography>
          </li>
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          color="orange"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
          ripple={false}
          fullWidth={true}
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
}
