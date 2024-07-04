import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { InformationCircleIcon, PencilIcon } from "@heroicons/react/24/solid";

export function ViewCourse({ content, OpenViewCourse, setOpenViewCourse }) {
  const handleOpen = () => setOpenViewCourse(!OpenViewCourse);
  const handleOk = () => {
    // Close the dialog
    setOpenViewCourse(!OpenViewCourse);
  };

  return (
    <>
      <Dialog
        open={OpenViewCourse}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Course Details</DialogHeader>
        <DialogBody>
          <img src={content.image} className="w-full max-h-64" alt="" />
          <p>Name: {content.Nomc}</p>

          <p>Description: {content.Descriptionc}</p>
          <p>Category: {content.Souscategorie.Nomsouscategorie}</p>
          <Button className="">
            <a href={content.link}>Course Link</a>
          </Button>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOk}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
