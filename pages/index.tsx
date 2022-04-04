import { clusterApiUrl } from "@solana/web3.js";
import type { NextPage } from "next";
import React from "react";
import { HeroBanner } from "../components/Home/HeroBanner";
import { NotConnectedMessage } from "../components/Home/NotConnectedMessage";
import { useVerification } from "../hooks/useVerification";
import { getMints } from "../utils/get-mints";
import Light from "../components/Home/Light";
import Factions from "../components/Home/Factions";
import Basics from "../components/Home/Basics";
import Heroes from "../components/Home/Heroes";
import Slider from "../components/Home/Slider";
import Mint from "../components/Home/Mint";
import Perks from "../components/Home/Perks";
import Team from "../components/Home/Team";
import Roadmap from "../components/Home/Roadmap";
import Utilities from "../components/Home/Utilities";
import VideoBackground from "../components/Home/VideoBackground";

const Home: NextPage = () => {
	const [connected, setconnected] = React.useState(true);

	return (
		<>
			{/* 
      {!connected && <NotConnectedMessage />}
      {connected && <HeroBanner />} */}
			<VideoBackground />
			{/* <HeroBanner /> */}
			<Light />
			{/* <Factions /> */}
			<Basics />
			<Utilities />
			<Heroes />
			<Slider />
			<Mint />
			<Perks />
			<Team />
			<Roadmap />
		</>
	);
};

export default Home;
