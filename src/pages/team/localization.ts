type TeamPageLocalizationStrings = {
	title: string;
	[key: string]: string;
}

const rs: TeamPageLocalizationStrings = {
	title:"Naš tim"
};

const en: TeamPageLocalizationStrings = {
	title:"Our team"
};

const localization: Localized<TeamPageLocalizationStrings> = {en, rs};

export default localization;
