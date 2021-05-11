import * as React from "react";
import { useEffect, FormEvent } from "react";
import * as M from "materialize-css";
import localization from "./localization";
import useLocale from "../../hooks/useLocale";
import { sendContact } from "../../services/contactService";
import { ContactMessage } from "../../@types/ContactMessage";

type ContactFormProps = {};
export const ContactForm = (props: ContactFormProps) => {
	const [locale] = useLocale();

	useEffect(() => {
		M.updateTextFields();
	});

	const onSubmit = (event: FormEvent) => {
		event.preventDefault();
		const target = event.target as HTMLFormElement;
		const data: ContactMessage = {
			sender: (target["sender"] as unknown as HTMLInputElement).value,
			email: target["email"].value,
			message: target["message"].value,
		};

		sendContact(data)
			.then(console.log);
	}

	return (
		<div className="row contact-form">
			<form className="col s12" autoComplete="off" onSubmit={onSubmit}>
				<div className="row">
					<div className="input-field col s12">
						<input placeholder={localization[locale].senderPlaceholder} id="sender" type="text"
						       className="validate"/>
						<label htmlFor="sender">{localization[locale].senderLabel}</label>
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
						<button type="submit" className="btn theme-primary">{localization[locale].submit}</button>
					</div>
				</div>
			</form>
		</div>

	);
};
