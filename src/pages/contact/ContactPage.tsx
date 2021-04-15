import * as React from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import "./ContactPage.scss";
// @ts-ignore
import message from "../../assets/img/contact/message.svg";
import useLocale from "../../hooks/useLocale";
import localization from "./localization";
import { useEffect } from "react";
import { scrollToTop } from "../../utils/utils";
import { Container, Row, Col } from "react-materialize";

export const ContactPage = () => {
	const [locale] = useLocale();
	useEffect(scrollToTop, []);

	return (
		<section id="contact" className="animate__animated animate__fadeIn animate__slow">
			<Row>
				<Container>
					<Col s={12} m={12} l={6} className="animate__animated animate__fadeInDown animate__fast">
						<h4 className="contact-us">{localization[locale].title}</h4>
						<p>{localization[locale].text}</p>
						<ContactForm/>
					</Col>
					<Col s={12} m={12} l={6} className={"art hide-on-med-and-down animate__animated animate__fadeInUp animate__fast"}>
						<img src={message} alt="Contact Art"/>
					</Col>
				</Container>
			</Row>
		</section>
	);
};
