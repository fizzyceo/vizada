import React from "react";
import { Switch } from "@material-tailwind/react";

const Pricing = () => {
  return (
    <div id="pricing" className="">
      <h1 className="text-4xl teko-400 text-center my-10">
        Start learning <span className="text-orange-800">Now!</span>{" "}
      </h1>
      <p className="w-[90%] mx-auto text-center text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem
        repellat quam numquam deleniti ratione eaque quo animi? Rem, autem,
        eligendi perspiciatis dolores at repudiandae cum molestiae doloribus,
        voluptates maiores quo rerum. Adipisci, fugit quidem sunt nihil
        repellendus fugiat in nam?
      </p>

      <div className="switch teko-400 text-3xl flex flex-row items-center justify-center gap-5">
        <h2>Monthly</h2>
        <Switch
          color="orange"
          onSelect={(e) => {
            console.log(e.currentTarget.value);
          }}
        />
        <h2>Yearly</h2>
      </div>
    </div>
  );
};

export default Pricing;
