import React from "react";
import Map from "./Map";
import FAQs from "./FAQs";
import Steps from "../Steps/index";
import Perks from "../Perks";

export default function Roadmap() {
	return (
		<div id="roadmap" className="section pt-0 wf-section">
			<div className="container">
				<Map />
				<Perks />
				<Steps />
				<FAQs />
			</div>
		</div>
	);
}
