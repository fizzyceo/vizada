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
import { toast } from "react-toastify";
import { useContactStore } from "../../../stores/Contact";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailValidity, setEmailValidity] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { sendContact } = useContactStore((state) => state);
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
      toast.error("Please enter a valid email address.");
      return;
    }
    try {
      if (!message || !email || !subject) {
        toast.error("Please fill all the fields.");
        return;
      }
      sendContact({ subject: subject, sender_email: email, message: message });

      setSubject("");

      setEmail("");

      setMessage("");
      toast.success("email sent successfully");
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email");
    } finally {
      setLoading(false);
    }
    // Send email using your preferred technology here
    // For example, you can use an API call or a library like Nodemailer for Node.js
  };

  return (
    <div id="contact" className="bg-gray-50 p-5 space-y-5">
      <div>
        <h1 className="roboto text-4xl text-center">
          Your Question is unique?{" "}
        </h1>
        <div className="w-4/5 lg:w-2/5 mx-auto my-10 ">
          <Card className="bg-gray-50">
            <CardHeader>
              <h1 className="roboto text-3xl text-center">Contact us </h1>
            </CardHeader>

            <CardBody className="space-y-5">
              {!isSubmitted ? (
                <React.Fragment>
                  <Input
                    color="orange"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    error={!emailValidity}
                  />
                  <Input
                    color="orange"
                    label="Your name"
                    type="text"
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <Textarea
                    draggable={"true"}
                    color="orange"
                    label="Your message"
                    type="text"
                    onChange={(e) => setMessage(e.target.value)}
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
