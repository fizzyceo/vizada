import React from "react";
import ITcourses from "./new/ITcourses";
import ManagementCourses from "./new/ManagementCourses";

const Courses2 = ({ categories }) => {
  return (
    <div id="formation" className="w-full  p-5 space-y-10">
      <ITcourses />
      <ManagementCourses />
    </div>
  );
};

export default Courses2;
