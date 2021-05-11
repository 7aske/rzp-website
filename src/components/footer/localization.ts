type FooterLocalizationStrings = {
	company: string;
	text: string[];
	resources: string;
	copyright: string;
	toTop: string;
	[key: string]: string | string[];
}

const sr: FooterLocalizationStrings = {
	company: "Digitize.rs",
	copyright: ``,
	// copyright: `© ${new Date().getFullYear()} Digitize.rs. Sva prava zadržana.`,
	resources: "Resursi",
	text: [
		"\"People who avoid failure, also avoid success\"",
		"- Kiyosaki",
	],
	toTop: "Nazad na vrh",
};

const en: FooterLocalizationStrings = {
	company: "Digitize.rs",
	copyright: ``,
	// copyright: `© ${new Date().getFullYear()} Digitize.rs. All rights reserved.`,
	resources: "Resources",
	text: [
		"\"People who avoid failure, also avoid success\"",
		"- Kiyosaki",
	],
	toTop: "Back to top",

};

const localization: Localized<FooterLocalizationStrings> = {en, sr};

export default localization;
