import * as React from "react";
import { useEffect, FormEvent, useState, useRef } from "react";
import * as M from "materialize-css";
import localization from "./localization";
import useLocale from "../../hooks/useLocale";
import { sendContact } from "../../services/contactService";
import { ContactMessage } from "../../@types/ContactMessage";
import { Modal } from "react-materialize";
import "./ContactForm.scss";

export const ContactForm = () => {
	const [locale] = useLocale();
	const [isOpen, setIsOpen] = useState(false);
	const [isErrorOpen, setIsErrorOpen] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);

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
			.then(() => {
				if (formRef.current)
					formRef.current.reset();
				setIsOpen(true);
			});
	};

	return (
		<div className="row contact-form">
			<Modal open={isOpen}
			       id="modal-success-message"
			       actions={[]}
			       options={{
				       onOpenEnd: () => setTimeout(() => setIsOpen(false), 1000),
				       onCloseEnd: () => setIsOpen(false),
			       }}>
				{<p className="center flow-text">{localization[locale].messageSuccess}</p>}
			</Modal>
			<Modal open={isErrorOpen}
			       id="modal-error-message"
			       actions={[]}
			       options={{
				       onOpenEnd: () => setTimeout(() => setIsErrorOpen(false), 1000),
				       onCloseEnd: () => setIsErrorOpen(false),
			       }}>
				{<p className="center flow-text">{localization[locale].messageFailure}<br/>:(</p>}
			</Modal>
			<form ref={formRef} className="col s12" autoComplete="off" onSubmit={onSubmit}>
				<div className="row">
					<div className="input-field col s12">
						<input required placeholder={localization[locale].senderPlaceholder} id="sender" type="text"/>
						<label htmlFor="sender">{localization[locale].senderLabel}</label>
					</div>
				</div>

				<div className="row">
					<div className="input-field col s12">
						<input required id="email" placeholder={localization[locale].emailPlaceholder} type="email"/>
						<label htmlFor="email">{localization[locale].emailLabel}</label>
					</div>
				</div>

				<div className="row">
					<div className="input-field col s12">
						<textarea required id="message" className="materialize-textarea"/>
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
