import * as React from "react";
import { useEffect } from "react";
import { Header } from "../header/Header";
import { scrollToTop } from "../../utils/utils";
import { ContactPage } from "../contact/ContactPage";
import { TeamPage } from "../team/TeamPage";
import { AboutPage } from "../about/AboutPage";
import { WorkPage } from "../work/WorkPage";

export const IndexPage = () => {
	useEffect(scrollToTop, []);

	return (
		<div id="index-page" className="animate__animated animate__fadeIn animate__slow">
			<Header/>
			<AboutPage/>
			<WorkPage/>
			{/*<TeamPage/>*/}
			<ContactPage/>
		</div>
	);
};
