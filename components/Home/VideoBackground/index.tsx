import React from "react";
import ReactPlayer from "react-player";

function Index() {
	return (
		<div className="video-container">
			<ReactPlayer
				className="react-player"
				url={
					"https://drive.google.com/uc?export=download&id=1xijpxvKZsNjV6DTtzGlO22GlYj8tKZwj"
				}
				width="100%"
				height=""
				playing={true}
				volume={0}
				loop={true}
			/>
		</div>
	);
}

export default Index;
