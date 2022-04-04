/* eslint-disable jsx-a11y/no-redundant-roles */
import * as React from "react";
import steps from "./content";
import Step from "./Step";

const Roadmap = () => {
  return (
    <>
      <div className="container-roadMap">
        {steps.map((step, index) => (
          <Step data={step} key={step.title} index={index} />
        ))}
      </div>
    </>
  );
};

export default Roadmap;
