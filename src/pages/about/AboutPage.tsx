import * as React from "react";
import { useEffect } from "react";
import { scrollToTop } from "../../utils/utils";
import "./AboutPage.css";

export const AboutPage = () => {
	useEffect(scrollToTop, []);
	return (
		<div id="about-page" className="container">
			<h2 className="white-text">About</h2>
		</div>
	);
};
