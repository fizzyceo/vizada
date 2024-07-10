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

export function CredModel({ body, id, open, setOpen }) {
  const { modifySubState } = useSubStore((state) => state);
  const handleOpen = () => setOpen(!open);
  const handleOk = () => {
    console.log("Body:", { ...body, active: 1 });
    console.log("ID:", id);
    console.log("Open:", open);

    // Check if modifySubState function is defined and callable
    console.log("Modify sub state function:", modifySubState);

    // Call modifySubState to update the subscription state
    modifySubState(id, { ...body, active: 1, DateDebSession: new Date() });

    // Log confirmation message
    console.log("Subscription state updated.");

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
