import React from "react";
import Map from "./Map";
import FAQs from "./FAQs";
import Steps from "../Steps/index";
import Perks from "../Perks";
import Dev from "./Dev";

export default function Roadmap() {
	return (
		<div id="roadmap" className="section pt-0 wf-section">
			<div className="container">
				<h3 className="roadmap-heading">Roadmap</h3>
				<h4 className="roadmap-subtitle">DEVELOPMENT ROADMAP</h4>
				<Dev />
				<Map />
				<Perks />
				<Steps />
				<FAQs />
			</div>
		</div>
	);
}
