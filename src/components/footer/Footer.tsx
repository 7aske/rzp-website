import * as React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { blogUrl } from "../../globals";
import localization from "./localization";
import useLocale from "../../hooks/useLocale";
import routes from "../../router/localization";
import { scrollToTop } from "../../utils/utils";

export const Footer = () => {
	const [locale] = useLocale();

	const menuItems = [
		<li><Link className="sidenav-close" to="/">{routes[locale].home}</Link></li>,
		<li><Link className="sidenav-close" to="/about">{routes[locale].about}</Link></li>,
		<li><Link className="sidenav-close" to="/team">{routes[locale].team}</Link></li>,
		<li><Link className="sidenav-close" to="/contact">{routes[locale].contact}</Link></li>,
		<li><a className="sidenav-close" target="blank" href={blogUrl}>{routes[locale].blog}</a></li>,
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
						<p>{localization[locale].text}</p>
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
