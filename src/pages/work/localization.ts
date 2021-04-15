type WorkPageLocalizationStrings = {
	[key: string]: string;
}

const sr: WorkPageLocalizationStrings = {
	title: "Naši radovi"
};

const en: WorkPageLocalizationStrings = {
	title: "Our work"
};

const localization: Record<string, WorkPageLocalizationStrings> = {en, sr};

export default localization;
