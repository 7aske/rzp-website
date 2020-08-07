type ContactFormLocalizationStrings = {
	nameLabel:string;
	namePlaceholder:string;
	emailLabel:string;
	emailPlaceholder:string;
	messageLabel:string;
	messagePlaceholder:string;
	submit: string;
	[key: string]: string;
}

const rs: ContactFormLocalizationStrings = {
	emailLabel: "Email",
	emailPlaceholder: "ivana.ivanovic@example.rs",
	messageLabel: "Poruka",
	messagePlaceholder: "Vaša poruka...",
	nameLabel: "Ime",
	namePlaceholder: "Ivana Ivanović",
	submit: "Pošalji"
};

const en: ContactFormLocalizationStrings = {
	emailLabel: "Email",
	emailPlaceholder: "jane.doe@example.com",
	messageLabel: "Message",
	messagePlaceholder: "Your message...",
	nameLabel: "Name",
	namePlaceholder: "Jane Doe",
	submit: "Submit"
};

const localization: Localized<ContactFormLocalizationStrings> = {en, rs};

export default localization;
