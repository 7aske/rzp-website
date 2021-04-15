import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { ContactPage } from "../pages/contact/ContactPage";
import { TeamPage } from "../pages/team/TeamPage";
import { AboutPage } from "../pages/about/AboutPage";
import { IndexPage } from "../pages/index/IndexPage";

export const Router = () => {
	return (
		<Switch>
			{/*<Route exact path="/contact" component={ContactPage} />*/}
			{/*<Route exact path="/team" component={TeamPage} />*/}
			{/*<Route exact path="/about" component={AboutPage} />*/}
			<Route exact component={IndexPage} />
		</Switch>
	);
};
