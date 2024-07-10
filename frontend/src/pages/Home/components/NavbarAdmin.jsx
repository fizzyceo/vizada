import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ComputerDesktopIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/solid";
import vizadaLogo from "../../../assets/navlogonbg.png";
import { ProfileMenu } from "./ProfileMenu";
import { useAuth } from "../../../stores/Auth";
import { useNavigate } from "react-router-dom";

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 items-center justify-center">
      <ListItem className="flex items-center w-fit justify-center ">
        <a href="/analytics1">
          <Typography variant="small" className="font-medium ">
            Subscribers
          </Typography>{" "}
        </a>
      </ListItem>

      <ListItem className="flex items-center w-fit justify-center ">
        <a href="/analytics2">
          <Typography variant="small" className="font-medium ">
            Courses & Categories
          </Typography>{" "}
        </a>
      </ListItem>
    </List>
  );
}

export default function NavbarAdmin() {
  const [openNav, setOpenNav] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const { refreshToken, accessToken, user, verifyRefreshAuthenticity } =
    useAuth((state) => state);
  let navigate = useNavigate();

  useEffect(() => {
    if (refreshToken) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [refreshToken]);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="z-20 mx-auto max-w-screen-xl px-4 py-2 sticky top-3">
      <div className="flex items-center justify-between text-blue-gray-600">
        <Typography variant="h6" className="mr-4 cursor-pointer py-1.5 lg:ml-2">
          <a href="/">
            <img src={vizadaLogo} width={84} alt="Vizada Logo" />
          </a>
        </Typography>
        <div className="flex flex-row justify-center items-center gap-2">
          <div className="hidden lg:block">
            <NavList />
          </div>

          <ProfileMenu />

          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
