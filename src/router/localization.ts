type RoutesLocalizationStrings = {
	home: string;
	about: string;
	team: string;
	contact: string;
	blog: string;
	[key: string]: string;
}

const sr: RoutesLocalizationStrings = {
	about: "O Nama",
	blog: "Blog",
	contact: "Kontakt",
	home: "Početna",
	team: "Naš tim"
};

const en: RoutesLocalizationStrings = {
	about: "About",
	blog: "Blog",
	contact: "Contact",
	home: "Home",
	team: "Team"
};

const localization: Localized<RoutesLocalizationStrings> = {en, sr};

export default localization;
