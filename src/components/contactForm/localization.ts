import { strict } from "assert";

type ContactFormLocalizationStrings = {
	senderLabel: string;
	senderPlaceholder: string;
	emailLabel: string;
	emailPlaceholder: string;
	messageLabel: string;
	messagePlaceholder: string;
	submit: string;
	availableSoon: string;
	messageSuccess: string;
	messageFailure: string;
	[key: string]: string;
}

const sr: ContactFormLocalizationStrings = {
	emailLabel: "Email",
	emailPlaceholder: "ivana.ivanovic@example.rs",
	messageLabel: "Poruka",
	messagePlaceholder: "Vaša poruka...",
	senderLabel: "Ime",
	senderPlaceholder: "Ivana Ivanović",
	submit: "Pošalji",
	availableSoon: "Dostupno uskoro",
	messageSuccess: "Uspešno ste poslali poruku",
	messageFailure: "Ups. Došlo je do greške",
};

const en: ContactFormLocalizationStrings = {
	emailLabel: "Email",
	emailPlaceholder: "jane.doe@example.com",
	messageLabel: "Message",
	messagePlaceholder: "Your message...",
	senderLabel: "Name",
	senderPlaceholder: "Jane Doe",
	submit: "Send",
	availableSoon: "Available soon",
	messageSuccess: "Message sent successfully",
	messageFailure:"Oops. Error occurred."
};

const localization: Localized<ContactFormLocalizationStrings> = {en, sr};

export default localization;
