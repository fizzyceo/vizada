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
import {
  InformationCircleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useCoursesStore } from "../../../stores/Courses";

export function DeleteCourse({ id, OpenDeleteCourse, setOpenDeleteCourse }) {
  const handleOpen = () => setOpenDeleteCourse(!OpenDeleteCourse);
  const { deleteCourse } = useCoursesStore((state) => state);
  const handleOk = () => {
    // Close the dialog
    deleteCourse(id);
    setOpenDeleteCourse(!OpenDeleteCourse);
  };

  return (
    <>
      <Dialog
        open={OpenDeleteCourse}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Course Details</DialogHeader>
        <DialogBody>Are you sure you want to delete this course ?</DialogBody>
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
