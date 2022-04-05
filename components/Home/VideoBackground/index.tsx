import React from "react";
import ReactPlayer from "react-player";

function Index() {
	return (
		<div className="video-container">
			<ReactPlayer
				className="react-player"
				url={"/MONKAI_ANIM_2.mp4"}
				width="100%"
				height=""
				playing={true}
				volume={0}
				loop={true}
				playsinline={true}
			/>
		</div>
	);
}

export default Index;
