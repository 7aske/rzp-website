import * as React from "react";
import { useEffect } from "react";
import { scrollToTop } from "../../utils/utils";
import "./TeamPage.css";

export const TeamPage = () => {
	useEffect(scrollToTop, []);
	return (
		<div id="team-page" className="container">
			<h2 className="white-text">Team</h2>
		</div>
	);
};
