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

import { PencilIcon } from "@heroicons/react/24/solid";

export function ViewCategory({
  content,
  OpenViewCategory,
  setOpenViewCategory,
}) {
  const handleOpen = () => setOpenViewCategory(!OpenViewCategory);
  const handleOk = () => {
    // Close the dialog
    setOpenViewCategory(!OpenViewCategory);
  };

  return (
    <>
      <Tooltip content="Edit Subscriber">
        <IconButton onClick={handleOpen} variant="text">
          <PencilIcon className="h-4 w-4" />
        </IconButton>
      </Tooltip>
      <Dialog
        open={OpenViewCategory}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Category Details</DialogHeader>
        <DialogBody className="space-y-3">
          <h1>Name: {content.Nomsouscategorie}</h1>
          <h1>Of Type : {content?.nom_categorie?.Nomcategorie}</h1>
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
