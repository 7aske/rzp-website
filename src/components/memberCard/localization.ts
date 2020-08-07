type MemberCardLocalizationStrings = {
	socialMedia: string;
	more: string;
	close: string;
	[key: string]: string;
}

const rs: MemberCardLocalizationStrings = {
	socialMedia: "Društvene mreže",
	more: "Više",
	close: "Zatvori",
};

const en: MemberCardLocalizationStrings = {
	socialMedia: "Social media",
	more: "More",
	close: "Close",
};

const localization: Localized<MemberCardLocalizationStrings> = {en, rs};

export default localization;
