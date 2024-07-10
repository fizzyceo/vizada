import React, { useEffect, useState } from "react";
import NavbarWithMegaMenu from "../Home/components/Navbar";
import { FooterWithLogo } from "../Home/components/Footer";
import { useAuth } from "../../stores/Auth";
import withRouter from "../../Components/Common/withRouter";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import loginlottie from "../../Components/Common/loginlottie.json";
import Lottie from "react-lottie";
import vizadaLogo from "../../assets/vizadalogo.png";
const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoading, accessToken, user } = useAuth((state) => state);
  const { email, password } = formData;
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    login(userData, props.router);
  };
  useEffect(() => {
    if (accessToken) {
      if (user?.role) {
        navigate("/analytics1");
      } else {
        navigate("/dashboard");
      }
    }
  }, [accessToken]);
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: loginlottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="h-screen w-full bg-gray-50 ">
      <NavbarWithMegaMenu isLogged={false} />
      {/**body */}
      <div className="w-full my-16 items-center justify-center  gap-10 flex flex-wrap">
        {/**component */}
        <div className="w-fit items-center justify-center p-0  gap-10 flex flex-row flex-wrap bg-gray-50 rounded-xl shadow-xl">
          {/**animation */}
          <div className="w-fit bg-gray-100 p-2">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
          {/**info section */}
          <div className="relative flex flex-col text-gray-700   min-w-96 bg-gray-50 h-full  bg-clip-border">
            {/* <h3 className=" font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-center ">
              Sign In
            </h3> */}
            <img src={vizadaLogo} className="w-32 self-center" alt="" />
            <div className="flex flex-col gap-4 p-6">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  name="email"
                  onChange={handleChange}
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  name="password"
                  type="password"
                  onChange={handleChange}
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
              </div>
              <a className="text-xs hover:underline" href="/forget">
                have you forgotten your Password ?{" "}
              </a>
            </div>
            <div className="p-6 pt-0">
              <Button
                onClick={handleSubmit}
                className="w-full"
                type="button"
                loading={isLoading}
              >
                Sign In
              </Button>
              <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
                Don't have an account?
                <a
                  href="/signup"
                  className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterWithLogo />
    </div>
  );
};

export default withRouter(Login);
