import React, { useEffect, useState } from "react";
import { Switch } from "@material-tailwind/react";
import PricingCard from "./ManagementPricingCard";
import ItPricingCard from "./ItPricingCard";
const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [price, setPrice] = useState("5000");
  useEffect(() => {
    console.log(isYearly);
  }, [isYearly]);
  const handleSwitchChange = () => {
    setIsYearly(!isYearly);
  };

  useEffect(() => {
    if (!isYearly) {
      setPrice("5 000");
    } else {
      setPrice("34 000");
    }
  }, [isYearly]);
  return (
    <div id="pricing" className="space-y-5 my-5">
      <h1 className="text-4xl poppins text-center my-10">
        Start learning <span className="text-orange-800">Now!</span>{" "}
      </h1>
      <p className="w-[80%] mx-auto text-center text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem
        repellat quam numquam deleniti ratione eaque quo animi? Rem, autem,
        eligendi perspiciatis dolores at repudiandae cum molestiae doloribus,
        voluptates maiores quo rerum. Adipisci, fugit quidem sunt nihil
        repellendus fugiat in nam?
      </p>

      <div className="switch poppins text-3xl flex flex-row items-center justify-center gap-5">
        <h2>Monthly</h2>
        <Switch
          color="orange"
          checked={isYearly}
          onChange={handleSwitchChange}
        />
        <h2>Yearly</h2>
      </div>
      <div className="options flex flex-row gap-5 items-center justify-center flex-wrap">
        <PricingCard isYearly={isYearly} price={price} />
        <ItPricingCard price={price} isYearly={isYearly} />
      </div>
    </div>
  );
};

export default Pricing;
