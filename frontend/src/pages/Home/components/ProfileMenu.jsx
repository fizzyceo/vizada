import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Typography,
} from "@material-tailwind/react";
import { useAuth } from "../../../stores/Auth";

export function ProfileMenu() {
  const { user } = useAuth((state) => state);

  const { first_name } = user;
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
      <MenuList className="roboto">
        <MenuItem className="flex items-center gap-2">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Your SVG path */}
          </svg>
          <a href="/profile">
            <Typography variant="small" className="font-medium">
              My Profile
            </Typography>
          </a>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Your SVG path */}
          </svg>
          <a href="/dashboard">
            <Typography variant="small" className="font-medium ">
              Dashboard
            </Typography>{" "}
          </a>
        </MenuItem>

        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2 ">
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Your SVG path */}
          </svg>
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
