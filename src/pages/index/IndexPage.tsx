import * as React from "react";
import { useEffect } from "react";
import { Header } from "../../components/header/Header";
import { scrollToTop } from "../../utils/utils";

export const IndexPage = () => {
	useEffect(scrollToTop, []);

	return (
		<div id="index-page" className="animate__animated animate__fadeIn animate__slow">
			<Header/>
		</div>
	);
};
