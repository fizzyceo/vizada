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
import vizadaLogo from "../../../assets/vizadalogo.png";
import { toast } from "react-toastify";

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
  const [errormsg, setError] = useState("");
  const [loading, setLoading] = useState(false);
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

  const handleOk = async () => {
    // Validate fields before proceeding
    if (!body.image) {
      setError("Please choose an image.");
      return;
    }
    if (!body?.link || !body?.Id_sc || !body?.Nomc || !body?.Descriptionc) {
      setError("Please fill in all required fields.");

      return;
    }

    // Validate link format
    const linkRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!linkRegex.test(body.link)) {
      setError("Please enter a valid URL for the link field.");
      return;
    }

    setLoading(true);
    try {
      await AddCourse({ ...body, prix: 4.1 });
      setOpenAddCourse(false); // Close the dialog
    } catch (error) {
      console.error("Error modifying course:", error);
      // Handle error (e.g., show error message to the user)
    }
    setLoading(false);
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
            <p className="text-red-900 font-bold text-lg">{errormsg}</p>
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
          <Button
            loading={loading}
            variant="gradient"
            color="green"
            onClick={handleOk}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
