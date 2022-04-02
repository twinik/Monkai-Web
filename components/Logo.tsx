import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const Logo = () => {
	return (
		<Link href="/">
			<div
				className="custom-button primary secondary w-inline-block cursor-pointer"
				style={{ overflow: "visible" }}
			>
				<div className="custom-button-text-2">MONKAI</div>
				<div className="logo-second-rect"></div>
			</div>
		</Link>
	);
};
