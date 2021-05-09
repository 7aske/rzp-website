type ContactFormLocalizationStrings = {
	nameLabel: string;
	namePlaceholder: string;
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
	nameLabel: "Ime",
	namePlaceholder: "Ivana Ivanović",
	submit: "Pošalji",
	availableSoon: "Dostupno uskoro",
};

const en: ContactFormLocalizationStrings = {
	emailLabel: "Email",
	emailPlaceholder: "jane.doe@example.com",
	messageLabel: "Message",
	messagePlaceholder: "Your message...",
	nameLabel: "Name",
	namePlaceholder: "Jane Doe",
	submit: "Submit",
	availableSoon: "Available soon"
};

const localization: Localized<ContactFormLocalizationStrings> = {en, sr};

export default localization;
