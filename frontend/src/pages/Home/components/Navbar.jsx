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

const navListMenuItems = [
  {
    title: "Information Technology",
    description: "Numerous Courses in IT, explore!",
    icon: ComputerDesktopIcon,
    link: "/courses/IT",
  },
  {
    title: "Management",
    description: "Numerous Courses in Management, explore!",
    icon: RectangleGroupIcon,
    link: "/courses/Management",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const renderItems = navListMenuItems.map(
    ({ icon: Icon, title, description, link }, index) => (
      <MenuItem
        key={index}
        className="flex items-center gap-3 rounded-lg"
        onClick={() => {
          // Handle navigation logic here
          window.location.href = link;
        }}
      >
        <div className="flex items-center justify-center rounded-lg bg-blue-gray-50 p-2">
          <Icon className="h-6 text-gray-700 w-6" />
        </div>
        <div>
          <Typography
            color="blue-gray"
            className="flex items-center text-sm font-bold"
          >
            {title}
          </Typography>
          <Typography className="text-xs font-medium text-blue-gray-500">
            {description}
          </Typography>
        </div>
      </MenuItem>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography variant="h6" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-600"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Formations
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 items-center justify-center">
      <NavListMenu />

      <ListItem className="flex items-center w-fit justify-center ">
        <a
          href="#pricing"
          className="cursor-pointer w-fit"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById("pricing");
            element.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <Typography variant="small" color="blue-gray" className="font-normal">
            Tarifs
          </Typography>
        </a>
      </ListItem>

      {/* <ListItem className="flex items-center w-fit justify-center ">
        {" "}
        <a
          href="#about"
          className="cursor-pointer w-fit"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById("about");
            element.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal text-gray-700"
          >
            About Us
          </Typography>
        </a>
      </ListItem> */}

      <ListItem className="flex items-center w-fit justify-center ">
        <a
          href="#contact"
          className="cursor-pointer w-fit"
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById("contact");
            element.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal text-gray-700"
          >
            Contact Us
          </Typography>
        </a>
      </ListItem>
    </List>
  );
}

export default function NavbarWithMegaMenu({ isLogged }) {
  const [openNav, setOpenNav] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

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
          {isLogged ? (
            <ProfileMenu />
          ) : (
            <Button
              variant="gradient"
              className=""
              size="md"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Sign In
            </Button>
          )}

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
