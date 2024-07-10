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

export function DeleteCategory({
  id,
  OpenDeleteCategory,
  setOpenDeleteCategory,
}) {
  const handleOpen = () => setOpenDeleteCategory(!OpenDeleteCategory);
  const { deleteSousCategory } = useCoursesStore((state) => state);
  const handleOk = () => {
    // Close the dialog
    deleteSousCategory(id);
    setOpenDeleteCategory(!OpenDeleteCategory);
  };

  return (
    <>
      <Dialog
        open={OpenDeleteCategory}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Removing Category {id}</DialogHeader>
        <DialogBody>Are you sure you want to delete this category ?</DialogBody>
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
