type MemberCardLocalizationStrings = {
	socialMedia: string;
	more: string;
	close: string;
	[key: string]: string;
}

const sr: MemberCardLocalizationStrings = {
	socialMedia: "Društvene mreže",
	more: "Više",
	close: "Zatvori",
};

const en: MemberCardLocalizationStrings = {
	socialMedia: "Social media",
	more: "More",
	close: "Close",
};

const localization: Localized<MemberCardLocalizationStrings> = {en, sr};

export default localization;
