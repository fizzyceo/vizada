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
import { useSubStore } from "../../stores/Subs";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useCoursesStore } from "../../../stores/Courses";

export function ViewCategory({ content, openViewCat, setOpenViewCat }) {
  const handleOpen = () => setOpenViewCat(!openViewCat);
  const handleOk = () => {
    // Close the dialog
    setOpenViewCat(!openViewCat);
  };

  return (
    <>
      <Tooltip content="Edit Subscriber">
        <IconButton onClick={handleOpen} variant="text">
          <PencilIcon className="h-4 w-4" />
        </IconButton>
      </Tooltip>
      <Dialog
        open={openViewCat}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Category Details</DialogHeader>
        <DialogBody>
          <h1>Name: {content.Nomc}</h1>
          <h1>Description: {content.Descriptionc}</h1>
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
