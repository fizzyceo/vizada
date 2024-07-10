import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import loaderProfile from "../../Components/Common/loaderProfile.json";
import NavbarWithMegaMenu from "../Home/components/Navbar";
import { useAuth } from "../../stores";
import moment from "moment";
import {
  EnvelopeIcon,
  FingerPrintIcon,
  InboxIcon,
  PencilIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Input,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { FooterWithLogo } from "../Home/components/Footer";
import NavbarAdmin from "../Home/components/NavbarAdmin";

const Profile = () => {
  const {
    user,
    updateProfile,
    changePassword,
    loadChangePass,
    changeCompleted,
    accessToken,
  } = useAuth((state) => state);

  const {
    first_name,
    email,
    last_name,
    ntel,
    date_naissance,
    last_update_profile,
    date_joined,
    role,
  } = user;

  const [openDialog, setOpenDialog] = useState(false);
  // Function to generate random background color
  const [randomColor, setRandomColor] = useState("#EF4444");
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

  const [pageLoading, setPageLoading] = useState(true);
  const [isReadyToUpdate, setIsReadyToUpdate] = useState(false);
  const [oldpass, setOldPass] = useState("");
  const [newpass, setNewPass] = useState("");
  const [renewPass, setRenewPass] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    date_naissance: "",
    ntel: null,
  });
  const [errors, setErrors] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 2500);
  }, []);
  useEffect(() => {
    if (user) {
      let info = user;
      setFormData({
        first_name: info.first_name,
        last_name: info.last_name,
        date_naissance: info.date_naissance,
        ntel: info.ntel,
      });
    }
  }, [user]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loaderProfile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setIsReadyToUpdate(true);
  };

  const sumbitChanges = async () => {
    updateProfile(accessToken, formData);
  };

  const changePass = async () => {
    if (renewPass && newpass && oldpass) {
      console.log(renewPass, newpass, oldpass);
      if (newpass !== renewPass) {
        setErrors("Passwords does not match");
      } else {
        changePassword(oldpass, newpass, renewPass);
      }
    } else {
      setErrors("fill in all the fields!");
    }
  };
  useEffect(() => {
    if (changeCompleted) {
      setOpenDialog(false);
    }
  }, [changeCompleted]);
  return (
    <div className="flex items-center bg-gradient-to-b from-blue-700 to-white justify-center w-full min-h-screen roboto">
      {pageLoading ? (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      ) : (
        <div className="w-full h-screen  overflow-x-hidden ">
          {role === false ? (
            <NavbarWithMegaMenu isLogged={user ? true : false} />
          ) : (
            <NavbarAdmin />
          )}

          <div className="w-full h-full flex mb-36 mt-32 ">
            <div className="flex-1 flex  justify-center  ">
              <div className="relative bg-white rounded-lg p-8 h-fit  shadow-lg w-[400px] lg:w-[550px] ">
                {/* Profile Card Content */}
                {/* <div className="image bg-gray-200 w-32 h-32 rounded-full absolute -top-16 left-1/2 -translate-x-1/2 z-20"> */}
                <div
                  className="cursor-pointer flex items-center justify-center w-32 h-32 rounded-full absolute -top-16 left-1/2 -translate-x-1/2 "
                  style={{
                    backgroundColor: randomColor,
                    color: "#ffffff", // Text color
                    fontWeight: "bold",
                    fontSize: "48px",
                  }}
                >
                  {firstLetter}
                </div>
                {/* </div> */}
                <div className="flex flex-row items-center justify-between my-5">
                  <h1 className="text-2xl font-bold ">
                    {formData.first_name} {formData.last_name}
                  </h1>
                  <Button>
                    <a
                      className="flex flex-row justify-center items-center gap-2 text-xs"
                      href="/dashboard"
                    >
                      <InboxIcon className="w-6 h-6 text-gray-50" />
                      <h2>Dashboard</h2>
                    </a>
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-center gap-5 ">
                  <div className="flex flex-col   gap-2 w-full">
                    {/* <EnvelopeIcon className="h-full  text-gray-800" /> */}
                    <label htmlFor="email" className="text-xs text-gray-700">
                      Email
                    </label>
                    <Input
                      placeholder="email"
                      name="email"
                      type="text"
                      disabled={true}
                      label="Email"
                      className="h-full flex-grow"
                      value={email || undefined}
                    />
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
                    <div className="flex flex-row items-center justify-center h-14 gap-2 w-full">
                      {/* <EnvelopeIcon className="h-full  text-gray-800" /> */}
                      <Input
                        type="text"
                        // disabled={!enableFN}
                        name="first_name"
                        label="First Name"
                        value={formData.first_name || undefined}
                        onChange={handleChange}
                        className="h-full flex-grow"
                      />
                      {/* <PencilSquareIcon
                      className="text-xs w-7 cursor-pointer"
                      onClick={() => setEnableFN(!enableFN)}
                    />{" "} */}
                    </div>
                    <div className="flex flex-row items-center justify-center h-14 gap-2 w-full">
                      {/* <EnvelopeIcon className="h-full  text-gray-800" /> */}
                      <Input
                        type="text"
                        // disabled={!enableLN}
                        name="last_name"
                        label="Last Name"
                        onChange={handleChange}
                        className="h-full flex-grow"
                        value={formData.last_name || undefined}
                      />
                      {/* <PencilSquareIcon
                      className="text-xs w-7 cursor-pointer"
                      onClick={() => setEnableLN(!enableLN)}
                    /> */}
                    </div>
                    <div className="flex flex-row items-center justify-center h-14 gap-2 w-full">
                      {/* <EnvelopeIcon className="h-full  text-gray-800" /> */}
                      <Input
                        type="text"
                        // disabled={!enableLN}
                        name="ntel"
                        label="Numero Telephone"
                        onChange={handleChange}
                        className="h-full flex-grow"
                        value={formData.ntel || undefined}
                      />
                      {/* <PencilSquareIcon
                      className="text-xs w-7 cursor-pointer"
                      onClick={() => setEnableLN(!enableLN)}
                    /> */}
                    </div>
                    <div className="flex flex-row items-center justify-center h-14 gap-2 w-full">
                      {/* <EnvelopeIcon className="h-full  text-gray-800" /> */}
                      <Input
                        type="date"
                        // disabled={!enableLN}
                        name="date_naissance"
                        label="Date de Naissance"
                        onChange={handleChange}
                        className="h-full flex-grow"
                        value={formData.date_naissance || undefined}
                      />
                      {/* <PencilSquareIcon
                      className="text-xs w-7 cursor-pointer"
                      onClick={() => setEnableLN(!enableLN)}
                    /> */}
                    </div>
                  </div>
                </div>
                <Button
                  variant="text"
                  onClick={() => setOpenDialog(true)}
                  data-dialog-backdrop="dialog"
                  className="flex flex-row items-center gap-2 p-2  my-5"
                >
                  <FingerPrintIcon className="w-6 h-6 text-gray-800" />
                  <h2 className="text-xs">Change Password</h2>
                </Button>
                {isReadyToUpdate && (
                  <Button
                    onClick={sumbitChanges}
                    className="bg-orange-900 w-full my-3"
                  >
                    Save Changes
                  </Button>
                )}
                <p className="text-sm text-gray-500">
                  Joined: {moment(date_joined).format("DD MMM Y")} | Last
                  Updated: {moment(last_update_profile).format("DD MMM Y")}
                </p>
              </div>

              <Dialog open={openDialog}>
                <DialogHeader className="flex flex-row items-center gap-2 p-2">
                  <FingerPrintIcon className="w-10 h-10 text-gray-800" />
                  <h2 className="text-xl">Change Password</h2>
                </DialogHeader>
                <DialogBody className="flex flex-col items-start justify-center gap-5 ">
                  <p className="text-red-900">{errors}</p>
                  <Input
                    onChange={(e) => setOldPass(e.target.value)}
                    type="text"
                    name="old_password"
                    label="Old Password"
                    className="h-full flex-grow"
                  />

                  <Input
                    onChange={(e) => setNewPass(e.target.value)}
                    type="text"
                    name="new_password"
                    label="New Password"
                    className="h-full flex-grow"
                  />
                  <Input
                    onChange={(e) => setRenewPass(e.target.value)}
                    type="text"
                    name="re_password"
                    label="Confirm Password"
                    className="h-full flex-grow"
                  />
                  <div className="flex flex-row  items-center justify-center gap-5">
                    <Button
                      loading={loadChangePass}
                      onClick={() => changePass()}
                    >
                      Apply
                    </Button>
                    <Button
                      variant="outlined"
                      className="border-red-800 hover:bg-red-800 hover:text-gray-50 text-red-900"
                      onClick={() => setOpenDialog(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </DialogBody>
              </Dialog>
            </div>
          </div>
          <FooterWithLogo />
        </div>
      )}
    </div>
  );
};

export default Profile;
