import React from "react";
import Map from "./Map";
import FAQs from "./FAQs";
import Steps from "../Steps/index";

export default function Roadmap() {
  return (
    <div id="roadmap" className="section black pt-0 wf-section">
      <div className="container">
        <Map />
        <Steps />
        <FAQs />
      </div>
    </div>
  );
}
