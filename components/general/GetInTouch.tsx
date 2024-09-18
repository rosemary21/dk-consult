import React from "react";
import Button from "./Button";
import SectionContainer from "../layouts/SectionContainer";

const GetInTouch = () => {
  return (
    <SectionContainer className="grid md:grid-cols-2 gap-20 grid-cols-1">
      <div className="space-y-3">
        <p>Consult. Innovate. Succeed.</p>
        <h2 className="text-3xl ">
          We Create solutions that align <br /> with your business vision.
        </h2>
        <ul>
          <li>Email: AbrahamElebute@gmail.com</li>
          <li>Social Media: </li>
        </ul>
        <Button variant="primary" className="text-white">
          Book a Session:
        </Button>
      </div>
      <div>
        <div className="text-white relative p-6 space-y-4 bg-primary rounded-lg before:absolute before:bg-[#18F2B8] before:h-full before:w-full before:top-0 before:left-0 before:-z-10 before:rounded-lg before:rotate-6  | after:absolute after:bg-[#11224E] after:h-full after:w-full after:top-0 after:left-0 after:-z-10 after:rounded-lg after:-rotate-6">
          <p className="text-xl">
            Employee <br /> engagement
          </p>
          <p>Engage, attract & retain talent</p>
          <Button variant="secondary" className="!rounded-full !border-white">
            Learn more
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default GetInTouch;
