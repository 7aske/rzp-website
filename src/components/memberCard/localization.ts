type MemberCardLocalizationStrings = {
	more: string;
	close: string;
	[key: string]: string;
}

const rs: MemberCardLocalizationStrings = {
	more:"Više",
	close: "Zatvori"
};

const en: MemberCardLocalizationStrings = {
	more: "More",
	close: "Close"
};

const localization: Localized<MemberCardLocalizationStrings> = {en, rs};

export default localization;
