type TeamPageLocalizationStrings = {
	title: string;
	[key: string]: string;
}

const sr: TeamPageLocalizationStrings = {
	title:"Naš tim"
};

const en: TeamPageLocalizationStrings = {
	title:"Our team"
};

const localization: Localized<TeamPageLocalizationStrings> = {en, sr};

export default localization;
