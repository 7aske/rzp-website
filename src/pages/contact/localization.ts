type ContactPageLocalizationStrings = {
	title: string;
	text: string;
	[key: string]: string;
}

const sr: ContactPageLocalizationStrings = {
	title: "Kontaktirajte nas",
	text: "Pošaljite nam kratku poruku vezanu za Vaš projekat I kontaktiraćemo Vas u što kraćem roku.",
};

const en: ContactPageLocalizationStrings = {
	title: "Contact us",
	text: "Sends a short message describing your porject and we will contact you as soon as possible.",
};

const localization: Localized<ContactPageLocalizationStrings> = {en, sr};

export default localization;
