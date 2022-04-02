import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const Logo = () => {
	return (
		<Link href="/">
			<div className="custom-button primary secondary w-inline-block cursor-pointer">
				<div className="custom-button-text-2">MONKAI</div>
			</div>
		</Link>
	);
};
