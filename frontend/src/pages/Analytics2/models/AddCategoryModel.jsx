import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useCoursesStore } from "../../../stores/Courses";

export function AddCategoryModel({ id, open, setOpen }) {
  const { getOneSousCategory } = useCoursesStore((state) => state);
  const handleOpen = () => setOpen(!open);
  useEffect(() => {}, []);
  const handleOk = () => {
    // Check if modifySubState function is defined and callable

    // Close the dialog
    setOpen(!open);
  };

  return (
    <>
      <Tooltip content="Edit Subscriber">
        <IconButton onClick={handleOpen} variant="text">
          <PencilIcon className="h-4 w-4" />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Confirm The User's Subscription</DialogHeader>
        <DialogBody>
          By Updating this status, the subscription will take effect
          immediately, meaning the subscription countdown for the subscriber
          will start
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
