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

export function AddCategoryModel({
  categories,
  OpenAddCategory,
  setOpenAddCategory,
}) {
  const handleOpen = () => setOpenAddCategory(!OpenAddCategory);
  const { AddSousCategory } = useCoursesStore((state) => state);

  const [body, setBody] = useState({
    Id_c: "", // Initialize Id_sc in body
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBody((prevBody) => ({
      ...prevBody,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setBody((prevBody) => ({
      ...prevBody,
      Id_c: value, // Update Id_sc based on selected subcategory
    }));
  };

  const handleOk = () => {
    // Convert image to base64 if a new image was selected
    console.log(body);
    AddSousCategory({ ...body });

    setOpenAddCategory(!OpenAddCategory);
  };

  return (
    <>
      <Dialog
        className="overflow-y-scroll max-h-screen"
        open={OpenAddCategory}
        onClick={() => {}}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>SubCategory Details</DialogHeader>
        <DialogBody>
          <div className="space-y-4">
            <div>
              <label className="text-gray-700">Name</label>
              <Input
                type="text"
                name="Nomsouscategorie"
                value={body?.Nomsouscategorie || ""}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-gray-700">SubCategory</label>
              <select
                name="Id_c"
                onChange={handleCategoryChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select a Subcategory</option>
                {categories &&
                  categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.Nomcategorie}
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
