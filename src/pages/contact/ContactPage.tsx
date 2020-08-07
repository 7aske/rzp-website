import * as React from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import "./ContactPage.css";
// @ts-ignore
import message from "../../assets/img/contact/message.svg";
import useLocale from "../../hooks/useLocale";
import localization from "./localization";
import { useEffect } from "react";
import { scrollToTop } from "../../utils/utils";

export const ContactPage = () => {
	const [locale] = useLocale();
	useEffect(scrollToTop, []);

	return (
		<div id="contact-page" className="animate__animated animate__fadeIn animate__slow">
			<div className="container row">
				<div className="col s12 m12 l6 animate__animated animate__fadeInDown animate__fast">
					<h4 className="contact-us">{localization[locale].title}</h4>
					<p>{localization[locale].text}</p>
					<ContactForm/>
				</div>
				<div className="col s12 m12 l6 art hide-on-med-and-down animate__animated animate__fadeInUp animate__fast">
					<img src={message} alt="Contact Art"/>
				</div>
			</div>
		</div>
	);
};
