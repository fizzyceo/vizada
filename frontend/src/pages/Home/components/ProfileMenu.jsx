import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from "@material-tailwind/react";
import { useAuth } from "../../../stores/Auth";
import {
  BookmarkIcon,
  InboxIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export function ProfileMenu() {
  const { user } = useAuth((state) => state);

  const { first_name, role } = user;
  const [randomColor, setRandomColor] = useState("#EF4444");

  // Function to generate random background color
  const getRandomColor = () => {
    const colors = [
      "#EF4444", // Red
      "#F59E0B", // Amber
      "#10B981", // Green
      "#3B82F6", // Blue
      "#6366F1", // Indigo
      "#8B5CF6", // Purple
      "#EC4899", // Pink
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };
  useEffect(() => {
    setRandomColor(getRandomColor());
  }, []);
  // Get the first letter of first_name
  const firstLetter = first_name ? first_name.charAt(0).toUpperCase() : "";

  return (
    <Menu>
      <MenuHandler>
        <div
          className="cursor-pointer flex items-center justify-center rounded-full "
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: randomColor,
            color: "#ffffff", // Text color
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          {firstLetter}
        </div>
      </MenuHandler>
      <MenuList className="roboto flex flex-col items-center justify-center gap-2">
        <MenuItem className="flex items-center gap-2">
          <UserCircleIcon className="w-6 h-6 text-gray-600" />
          <a href="/profile">
            <Typography variant="small" className="font-medium">
              My Profile
            </Typography>
          </a>
        </MenuItem>

        {role === false && (
          <>
            <MenuItem className="flex items-center gap-2">
              <InboxIcon className="w-6 h-6 text-gray-600" />

              <a href="/dashboard" className="w-full">
                <Typography variant="small" className="font-medium ">
                  Dashboard
                </Typography>{" "}
              </a>
            </MenuItem>
            <MenuItem className="flex items-center gap-2">
              <BookmarkIcon className="w-6 h-6 text-gray-600" />

              <a href="/saved" className=" w-full ">
                <Typography variant="small" className="font-medium ">
                  Saved Courses
                </Typography>{" "}
              </a>
            </MenuItem>
          </>
        )}
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center justify-center gap-2 ">
          <a href="/logout">
            <Typography variant="small" className="font-medium text-red-900">
              Sign Out
            </Typography>
          </a>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
