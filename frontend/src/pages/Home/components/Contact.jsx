import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Input,
  Button,
  Textarea,
} from "@material-tailwind/react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [emailValidity, setEmailValidity] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setEmailValidity(validateEmail(value));
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (!validateEmail(email)) {
      // If email is not valid, display an error message or handle it as needed
      alert("Please enter a valid email address.");
      return;
    }
    try {
      await axios.post("/send-email", { name, email, message });
      alert("Email sent successfully");
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email");
    } finally {
      setLoading(false);
    }
    // Send email using your preferred technology here
    // For example, you can use an API call or a library like Nodemailer for Node.js
  };

  return (
    <div id="contact" className="bg-gray-50 p-5 space-y-5">
      <div>
        <h1 className="teko-400 text-4xl text-center">
          Your Question is unique?{" "}
        </h1>
        <div className="w-4/5 lg:w-2/5 mx-auto my-10 ">
          <Card className="bg-gray-50">
            <CardHeader>
              <h1 className="teko-400 text-3xl text-center">Contact us </h1>
            </CardHeader>

            <CardBody className="space-y-5">
              {isSubmitted ? (
                <React.Fragment>
                  <Input
                    color="orange"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    error={!emailValidity}
                  />
                  <Input color="orange" label="Your name" type="text" />
                  <Textarea
                    draggable={"true"}
                    color="orange"
                    label="Your message"
                    type="text"
                  />
                  <Button
                    className="hover:bg-transparent hover:text-orange-800  bg-orange-800"
                    onClick={handleSubmit}
                    loading={false}
                  >
                    Submit
                  </Button>
                </React.Fragment>
              ) : (
                <div className="w-fit mx-auto">
                  <h1 className="text-xl">
                    Message successfully{" "}
                    <strong className="text-orange-800 ">transmitted!</strong>
                  </h1>
                  <p className="text-sm text-center my-2 ">
                    You'll hear from us as soon as possible.
                  </p>

                  <CheckBadgeIcon className="w-72 text-orange-800 self-center" />
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
