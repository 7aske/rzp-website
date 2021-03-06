import * as React from "react";
import "./Footer.scss";
import localization from "./localization";
import useLocale from "../../hooks/useLocale";
import routes from "../../router/localization";
import { scrollToTop, scrollTo } from "../../utils/utils";

export const Footer = () => {
	const [locale] = useLocale();

	const menuItems = [
		<li key={0}><a className="sidenav-close" onClick={scrollTo} href="#header">{routes[locale].home}</a></li>,
		<li key={1}><a className="sidenav-close" onClick={scrollTo} href="#about">{routes[locale].about}</a></li>,
		<li key={2}><a className="sidenav-close" onClick={scrollTo} href="#work">{routes[locale].work}</a></li>,
		// <li key={2}><Link className="sidenav-close" to="/team">{routes[locale].team}</Link></li>,
		<li key={3}><a className="sidenav-close" onClick={scrollTo} href="#contact">{routes[locale].contact}</a></li>,
		// <li key={4}><a className="sidenav-close" target="blank" href={blogUrl}>{routes[locale].blog}</a></li>,
	];

	return (
		<footer id="footer" className="page-footer">
			<div className="container to-top">
				<a className="grey-text text-lighten-4 right" href="#" onClick={scrollToTop}>{localization[locale].toTop}</a>
			</div>
			<div className="container footer-content">
				<div className="row">
					<div className="col l6 s12">
						<h5>{localization[locale].company}</h5>
						{localization[locale].text.map(text => <p key={text}>{text}</p>)}
					</div>
					<div className="col l4 offset-l2 s12 resources">
						<h5 className="white-text">{localization[locale].resources}</h5>
						<ul>
							{menuItems}
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-copyright">
				<div className="container">
					{localization[locale].copyright}
				</div>
			</div>
		</footer>
	);
};
