import * as React from "react";
import { useEffect } from "react";
import * as M from "materialize-css";
import localization from "./localization";
import useLocale from "../../hooks/useLocale";

type ContactFormProps = {};
export const ContactForm = (props: ContactFormProps) => {
	const [locale] = useLocale();

	useEffect(() => {
		M.updateTextFields();

	});

	return (
		<div className="row">
			<form className="col s12">
				<div className="row">
					<div className="input-field col s12">
						<input placeholder={localization[locale].namePlaceholder} id="name" type="text"
						       className="validate"/>
						<label htmlFor="name">{localization[locale].nameLabel}</label>
					</div>
				</div>

				<div className="row">
					<div className="input-field col s12">
						<input id="email" placeholder={localization[locale].emailPlaceholder} type="email"
						       className="validate"/>
						<label htmlFor="email">{localization[locale].emailLabel}</label>
					</div>
				</div>

				<div className="row">
					<div className="input-field col s12">
						<textarea id="message" className="materialize-textarea"/>
						<label htmlFor="message">{localization[locale].messageLabel}</label>
					</div>
				</div>
				<div className="row">
					<div className="col s12">
						<input type="submit" value={localization[locale].submit} className="btn"/>
					</div>
				</div>
			</form>
		</div>

	);
};
