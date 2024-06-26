import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Common/Loader";
import { useAuth } from "../../stores";
import withRouter from "../../Components/Common/withRouter";
import { Button, Card, CardBody, Input } from "@material-tailwind/react";

const Forget = (props) => {
  let { param1, param2 } = useParams();
  const { ForgetPassword } = useAuth((state) => state);
  const [activated, setActivated] = useState(false);
  const [new_pass, setNew_pass] = useState("");
  const [re_new_pass, setRe_New_pass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async () => {
    if (!activated) {
      await ForgetPassword(param1, param2, new_pass, re_new_pass, props.router);
      setActivated(true);
    }
    setIsLoading(true);

    setIsLoading(false);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      {isLoading ? (
        <Loader />
      ) : (
        <Card className="w-[450px]">
          <CardBody className="flex flex-col items-center justify-center gap-5">
            <Input
              onChange={(e) => setNew_pass(e.target.value)}
              name="new_password"
              type="password"
              label="new_password"
            />
            <Input
              onChange={(e) => setRe_New_pass(e.target.value)}
              name="re_new_password"
              type="password"
              label="re_new_password"
            />
            <Button onClick={onSubmit} className="w-full">
              Sumbit
            </Button>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default withRouter(Forget);
