import * as React from "react";
import { useEffect } from "react";
import iterate from "../../assets/img/about/iterate.svg";
import learn from "../../assets/img/about/learn.svg";
import success from "../../assets/img/about/success.svg";
import team from "../../assets/img/about/team.svg";
import teamwork from "../../assets/img/about/teamwork.svg";
import useLocale from "../../hooks/useLocale";
import { scrollToTop } from "../../utils/utils";
import "./AboutPage.scss";
import localization from "./localization";
import { Container, Row, Col } from "react-materialize";

export const AboutPage = () => {
	useEffect(scrollToTop, []);
	const [locale] = useLocale();

	return (
		<section id="about" className="animate__animated animate__fadeIn animate__slow">
			<Container>
				<h2 className="how-we-work-title">{localization[locale].howWeWorkTitle}</h2>
				<p className="how-we-work-text">{localization[locale].howWeWorkText}</p>
				<Row className="animate__animated animate__slideInRight animate__fast">
					<Col s={12} m={12} l={4} className="text"><h4>{localization[locale].smallTeams}</h4></Col>
					<Col s={12} m={12} l={4}><img src={teamwork} alt="Team"/></Col>
					<Col s={12} m={12} l={4} className="text">
						<ul className="browser-default">
							{(localization[locale].smallTeamsText as string[])
								.map(str => <li key={str}>{str}</li>)}
						</ul>
					</Col>
				</Row>

				<Row className="how-we-work animate__animated animate__slideInLeft animate__fast">
					<Col s={12} m={12} l={4} className="text"><h4>{localization[locale].clientAsPartner}</h4></Col>
					<Col s={12} m={12} l={4}><img src={team} alt="Team"/></Col>
					<Col s={12} m={12} l={4} className="text">
						<ul className="browser-default">
							{(localization[locale].clientAsPartnerText as string[]).map(str => <li key={str}>{str}</li>)}
						</ul>
					</Col>
				</Row>

				<Row className="process">
					<Col s={12} m={12} l={4}>
						<h4>{localization[locale].learn}</h4>
						<img src={learn} alt="Learn"/>
					</Col>

					<Col s={12} m={12} l={4}>
						<h4>{localization[locale].iterate}</h4>
						<img src={iterate} alt="Learn"/>
					</Col>
					<Col s={12} m={12} l={4}>
						<h4>{localization[locale].success}</h4>
						<img src={success} alt="Learn"/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
