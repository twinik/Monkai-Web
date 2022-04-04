import React from "react";
import divider from "./../../../../public/images/divider.svg";
import Image from "next/image";

export default function Map() {
	return (
		<div
			data-w-id="1e6e6fbe-53d5-87c6-5696-406ea1dc304e"
			style={{
				opacity: "1",
				transform:
					"translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
				transformStyle: "preserve-3d"
			}}
			className="section-inner primary-bordered"
		>
			<div className="corner-black bordered-primary top-left"></div>
			<div className="corner-black bordered-primary bottom-right large"></div>
			<h4 className="roadmap-title">SEASON 1 ROADMAP COMPLETION</h4>
			<Image
				src={divider}
				loading="lazy"
				width={200}
				height={10}
				alt=""
				className="mb-20 red"
			/>
			<div className="row w-row">
				<div className="mobile-mb-20 w-col w-col-6 w-col-medium-6">
					<h6 className="text-white">10% MILESTONE</h6>
					<ul
						role="list"
						className="text-white-opacity text-small mb-0 w-list-unstyled"
					>
						<li className="roadmap-tick">
							Site and contract build
						</li>
						<li className="roadmap-tick">Game theory finalized</li>
						<li className="roadmap-tick">
							Presale whitelisting complete
						</li>
						<li className="roadmap-tick">
							Storyline introduced
							<br />
						</li>
					</ul>
				</div>
				<div className="w-col w-col-6 w-col-medium-6">
					<h6 className="text-white">25% MILESTONE</h6>
					<ul
						role="list"
						className="text-white-opacity text-small mb-0 w-list-unstyled"
					>
						<li>Game roadmap introduced</li>
						<li>New NFT mechanics revealed</li>
						<li className="roadmap-tick">
							Community building and empire selection
						</li>
						<li className="roadmap-tick">
							Mint date determined
							<br />
						</li>
					</ul>
				</div>
			</div>
			<div className="row w-row">
				<div className="mobile-mb-20 w-col w-col-6">
					<h6 className="text-white">50% MILESTONE</h6>
					<ul
						role="list"
						className="text-white-opacity text-small mb-0 w-list-unstyled"
					>
						<li>Mintings begins</li>
						<li>Minting sold out and game dates set</li>
						<li>
							Fair play analysis and AMA
							<br />
						</li>
						<li>
							Rarity gallery created
							<br />
						</li>
					</ul>
				</div>
				<div className="column-14 w-col w-col-6">
					<h6 className="text-white">100% MILESTONE</h6>
					<ul
						role="list"
						className="text-white-opacity text-small mb-0 w-list-unstyled"
					>
						<li>Factions settled</li>
						<li>Verdicts begins after countdown</li>
						<li>Community challenges begin</li>
						<li>
							Divine Judgement is cast
							<br />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
