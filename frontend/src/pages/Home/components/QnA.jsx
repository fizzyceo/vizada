import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function AccordionCustomStyles() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="bg-gray-50 p-5 space-y-5">
      <div>
        <h1 className="roboto text-4xl text-center">
          Have some questions for us ?
        </h1>
      </div>
      <div className="w-4/5 mx-auto">
        <Accordion
          open={open === 1}
          className={`mb-2 rounded-lg border ${
            open === 1 ? "border-orange-600" : "border-blue-gray-100"
          }  px-4`}
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`border-b-0 transition-colors ${
              open === 1 ? "text-orange-700 hover:!text-orange-800" : ""
            }`}
          >
            What is Vizada?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            sapiente consequuntur corporis maiores, ut delectus fugiat
            repudiandae vero et dignissimos.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          className={`mb-2 rounded-lg border ${
            open == 2 ? "border-orange-600" : "border-blue-gray-100"
          }  px-4`}
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`border-b-0 transition-colors ${
              open === 2 ? "text-orange-700 hover:!text-orange-800" : ""
            }`}
          >
            Why choose Vizada?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            animi ut quae nemo quia soluta praesentium quas possimus qui
            facilis!
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          className={`rounded-lg border ${
            open === 3 ? "border-orange-700" : "border-blue-gray-100"
          }  px-4`}
        >
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className={`border-b-0 transition-colors ${
              open === 3 ? "text-orange-700 hover:!text-orange-800" : ""
            }`}
          >
            Where is vizada located?
          </AccordionHeader>
          <AccordionBody className="pt-0 text-base font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            mollitia beatae commodi iure quas? Voluptates repellat nemo mollitia
            vero laboriosam.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}
