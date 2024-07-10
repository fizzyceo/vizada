import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useCoursesStore } from "../../../stores/Courses";
import { convertToBase64 } from "../../../Components/Common/convertToBase64";
import vizadaLogo from "../../../assets/vizadalogo.png";

export function ModifyCourseModel({
  id,
  content,
  OpenModifyCourse,
  setOpenModifyCourse,
}) {
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);

    setBody((prevBody) => ({ ...prevBody, image: base64 }));
  };

  const handleOpen = () => setOpenModifyCourse(!OpenModifyCourse);
  const { ModifyCourse } = useCoursesStore((state) => state);

  const [body, setBody] = useState({ ...content });

  useEffect(() => {
    setBody({ ...content });
  }, [content]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBody((prevBody) => ({
      ...prevBody,
      [name]: value,
    }));
  };

  const handleOk = () => {
    // Determine the modified fields
    const modifiedFields = {};
    for (const key in body) {
      if (body[key] !== content[key]) {
        modifiedFields[key] = body[key];
      }
    }

    try {
      ModifyCourse(id, modifiedFields);
      setOpenModifyCourse(!OpenModifyCourse);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Dialog
        className="overflow-y-scroll max-h-screen"
        open={OpenModifyCourse}
        onClick={() => {}}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Course Details</DialogHeader>
        <DialogBody>
          <div className="space-y-4">
            <div className="relative">
              <label
                htmlFor="courseImage"
                className="absolute -top-4 right-7 bg-gray-900 rounded-full p-2 hover:bg-gray-800 cursor-pointer"
              >
                <input
                  type="file"
                  id="courseImage"
                  name="courseImage"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileUpload}
                />
                <PencilIcon className="w-5 h-5 text-gray-50" />
              </label>

              {body?.image ? (
                <img
                  src={body?.image}
                  className="self-center w-[80%] mx-auto h-[300px] "
                  alt="image"
                />
              ) : (
                <div className="self-center flex items-center justify-center w-[80%] mx-auto h-[300px] bg-red-100">
                  <img src={vizadaLogo} alt="" className="w-[90%] mx-auto" />
                </div>
              )}
            </div>
            <div>
              <label className="text-gray-700">Name</label>
              <Input
                type="text"
                name="Nomc"
                value={body.Nomc || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-gray-700">Description</label>
              <Input
                type="text"
                name="Descriptionc"
                value={body.Descriptionc || ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-gray-700">Link</label>
              <Input
                type="text"
                name="link"
                value={body.link || ""}
                onChange={handleChange}
              />
            </div>
          </div>
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
