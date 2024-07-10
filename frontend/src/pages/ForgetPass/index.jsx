import { EnvelopeIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { useAuth } from "../../stores";
import NavbarWithMegaMenu from "../Home/components/Navbar";
import { FooterWithLogo } from "../Home/components/Footer";

const ForgetPass = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { sendEmailResetPass } = useAuth((state) => state);
  const submit = async () => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && emailRegex.test(email)) {
      // Email is valid, proceed to send reset password email
      sendEmailResetPass(email);
    } else {
      // Email is either empty or not in a valid format
      setError("Invalid email format");
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-700 to-white">
      <NavbarWithMegaMenu isLogged={false} />
      <div className="flex h-[500px] w-full items-center justify-center">
        <Card className="w-[400px]">
          <CardBody className="flex flex-col gap-5 justify-center items-center">
            <p className="text-red-900"> {error}</p>
            <Input
              icon={<EnvelopeIcon className="w-6 " />}
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-xs text-gray-700">
              Insert your email to receive a Link to Reset your password
            </p>
            <Button onClick={submit}>Send Link</Button>
          </CardBody>
        </Card>
      </div>
      <FooterWithLogo />
    </div>
  );
};

export default ForgetPass;
