import React from "react";
import Map from "./Map";
import FAQs from "./FAQs";

export default function Roadmap() {
  return (
    <div id="roadmap" className="section black pt-0 wf-section">
      <div className="container">
        <Map />
        <FAQs />
      </div>
    </div>
  );
}
