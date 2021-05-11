type ContactFormLocalizationStrings = {
	senderLabel: string;
	senderPlaceholder: string;
	emailLabel: string;
	emailPlaceholder: string;
	messageLabel: string;
	messagePlaceholder: string;
	submit: string;
	availableSoon: string;
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
};

const en: ContactFormLocalizationStrings = {
	emailLabel: "Email",
	emailPlaceholder: "jane.doe@example.com",
	messageLabel: "Message",
	messagePlaceholder: "Your message...",
	senderLabel: "Name",
	senderPlaceholder: "Jane Doe",
	submit: "Submit",
	availableSoon: "Available soon"
};

const localization: Localized<ContactFormLocalizationStrings> = {en, sr};

export default localization;
