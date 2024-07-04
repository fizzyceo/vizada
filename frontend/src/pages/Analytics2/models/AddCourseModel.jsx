import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useCoursesStore } from "../../../stores/Courses";
import { convertToBase64 } from "../../../Components/Common/convertToBase64";

export function AddCourseModel({
  subcategories,
  OpenAddCourse,
  setOpenAddCourse,
}) {
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setBody((prevBody) => ({ ...prevBody, image: base64 }));
  };

  const handleOpen = () => setOpenAddCourse(!OpenAddCourse);
  const { AddCourse } = useCoursesStore((state) => state);

  const [body, setBody] = useState({
    Id_sc: "", // Initialize Id_sc in body
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBody((prevBody) => ({
      ...prevBody,
      [name]: value,
    }));
  };

  const handleSubcategoryChange = (e) => {
    const { value } = e.target;
    setBody((prevBody) => ({
      ...prevBody,
      Id_sc: value, // Update Id_sc based on selected subcategory
    }));
  };

  const handleOk = () => {
    // Convert image to base64 if a new image was selected
    console.log(body);
    AddCourse({ ...body, prix: 4.1 });

    setOpenAddCourse(!OpenAddCourse);
  };

  return (
    <>
      <Dialog
        className="overflow-y-scroll max-h-screen"
        open={OpenAddCourse}
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

              <img
                src={body?.image}
                className="self-center w-[80%] mx-auto h-[300px]"
                alt="image"
              />
            </div>
            <div>
              <label className="text-gray-700">Name</label>
              <Input
                type="text"
                name="Nomc"
                value={body?.Nomc || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-gray-700">Description</label>
              <Input
                type="text"
                name="Descriptionc"
                value={body?.Descriptionc || ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-gray-700">Link</label>
              <Input
                type="text"
                name="link"
                value={body?.link || ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-gray-700">SubCategory</label>
              <select
                name="Id_sc"
                value={body?.Id_sc || ""}
                onChange={handleSubcategoryChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select a Subcategory</option>
                {subcategories &&
                  subcategories.map((subcategory) => (
                    <option key={subcategory.id} value={subcategory.id}>
                      {subcategory.Nomsouscategorie}
                    </option>
                  ))}
              </select>
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
