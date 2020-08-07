import * as React from "react";
import { useEffect } from "react";
import iterate from "../../assets/img/about/iterate.svg";
import learn from "../../assets/img/about/learn.svg";
import success from "../../assets/img/about/success.svg";
import team from "../../assets/img/about/team.svg";
import teamwork from "../../assets/img/about/teamwork.svg";
import useLocale from "../../hooks/useLocale";
import { scrollToTop } from "../../utils/utils";
import "./AboutPage.css";
import localization from "./localization";

export const AboutPage = () => {
	useEffect(scrollToTop, []);
	const [locale] = useLocale();

	return (
		<div id="about-page" className="container animate__animated animate__fadeIn animate__slow">
			<h2 className="how-we-work-title">{localization[locale].howWeWorkTitle}</h2>
			<p className="how-we-work-text">{localization[locale].howWeWorkText}</p>
			<div className="row animate__animated animate__slideInRight animate__fast">
				<div className="col s12 m12 l4 text"><h4>{localization[locale].smallTeams}</h4></div>
				<div className="col s12 m12 l4"><img src={teamwork} alt="Team"/></div>
				<div className="col s12 m12 l4 text">
					<ul className="browser-default">
						{(localization[locale].smallTeamsText as string[]).map(str => <li>{str}</li>)}
					</ul>
				</div>
			</div>

			<div className="row animate__animated animate__slideInLeft animate__fast">
				<div className="col s12 m12 l4 text"><h4>{localization[locale].clientAsPartner}</h4></div>
				<div className="col s12 m12 l4"><img src={team} alt="Team"/></div>
				<div className="col s12 m12 l4 text">
					<ul className="browser-default">
						{(localization[locale].clientAsPartnerText as string[]).map(str => <li>{str}</li>)}
					</ul>
				</div>
			</div>

			<div className="row process">
				<div className="col s12 m12 l4">
					<h4>{localization[locale].learn}</h4>
					<img src={learn} alt="Learn"/>
				</div>

				<div className="col s12 m12 l4">
					<h4>{localization[locale].iterate}</h4>
					<img src={iterate} alt="Learn"/>
				</div>
				<div className="col s12 m12 l4">
					<h4>{localization[locale].success}</h4>
					<img src={success} alt="Learn"/>
				</div>
			</div>

		</div>
	);
};
