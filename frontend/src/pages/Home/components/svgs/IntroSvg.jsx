import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../../../../assets/_.json"; // Replace with the path to your .json file

const LottieAnimation = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      animationData: animationData,
      renderer: "svg", // "svg" or "canvas"
      loop: true, // Optional

      autoplay: true, // Optional
    });

    // Optionally clean up animation when component unmounts
    return () => {
      lottie.destroy();
    };
  }, []);

  return <div style={{ width: "700px" }} ref={container} />;
};

export default LottieAnimation;
