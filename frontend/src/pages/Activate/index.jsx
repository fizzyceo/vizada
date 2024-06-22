import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Common/Loader";
import { useAuth } from "../../stores";
import withRouter from "../../Components/Common/withRouter";

const Activation = (props) => {
  let { param1, param2 } = useParams();
  const { ActivateUser } = useAuth((state) => state);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    if (!activated) {
      const activateUser = async () => {
        await ActivateUser(param1, param2, props.router);
        setActivated(true);
      };

      activateUser();
    }
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Loader />
    </div>
  );
};

export default withRouter(Activation);
