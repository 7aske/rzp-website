type FooterLocalizationStrings = {
	company: string;
	text: string;
	resources: string;
	copyright: string;
	toTop: string;
	[key: string]: string;
}

const sr: FooterLocalizationStrings = {
	company: "Digitize.rs",
	copyright: ``,
	// copyright: `© ${new Date().getFullYear()} Digitize.rs. Sva prava zadržana.`,
	resources: "Resursi",
	text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque cupiditate in incidunt laudantium quasi quibusdam quod, sequi! Debitis eligendi illo inventore itaque pariatur quibusdam quisquam recusandae, sequi suscipit voluptatum.",
	toTop: "Nazad na vrh",
};

const en: FooterLocalizationStrings = {
	company: "Digitize.rs",
	copyright: ``,
	// copyright: `© ${new Date().getFullYear()} Digitize.rs. All rights reserved.`,
	resources: "Resources",
	text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque cupiditate in incidunt laudantium quasi quibusdam quod, sequi! Debitis eligendi illo inventore itaque pariatur quibusdam quisquam recusandae, sequi suscipit voluptatum.",
	toTop: "Back to top",

};

const localization: Localized<FooterLocalizationStrings> = {en, sr};

export default localization;
