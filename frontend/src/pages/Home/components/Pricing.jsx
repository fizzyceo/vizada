import React, { useEffect, useState } from "react";
import { Switch } from "@material-tailwind/react";
import PricingCard from "./ManagementPricingCard";
import ItPricingCard from "./ItPricingCard";
import ManagementPricingCard from "./ManagementPricingCard";
import ItCard from "./Cards/ItCard";
import ManagementCard from "./Cards/ManagementCard";
import GratuitCard from "./Cards/GratuitCard";
const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [price, setPrice] = useState("5000");
  const [loading, setLoading] = useState(false);
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
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-blue-700 poppins text-center my-10">
        Formez-vous en illimité aux compétences de demain
      </h1>
      <p className="w-[80%] mx-auto text-center text-sm text-gray-700  ">
        Choisissez l’abonnement qui vous convient{" "}
        <a className="text-light-blue-600" href="tel:+213540974762">
          (+213) 540 974 762
        </a>
      </p>

      {/* <div className="switch poppins text-3xl flex flex-row items-center justify-center gap-5">
        <h2>Monthly</h2>
        <Switch
          color="orange"
          checked={isYearly}
          onChange={handleSwitchChange}
        />
        <h2>Yearly</h2>
      </div> */}
      <div className="py-10 options flex flex-row gap-10 items-center justify-center flex-wrap">
        <GratuitCard />

        <ItCard />
        <ManagementCard />
      </div>
      {/* <div className="options flex flex-row gap-5 items-center justify-center flex-wrap">
        <ItPricingCard
          price={price}
          isYearly={isYearly}
          loading={loading}
          setLoading={setLoading}
        />
        <ManagementPricingCard
          loading={loading}
          setLoading={setLoading}
          isYearly={isYearly}
          price={price}
        />
      </div> */}
    </div>
  );
};

export default Pricing;
