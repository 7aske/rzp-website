type BloPostListLocalizationStrings = {
	noNewPosts: string;
	[key: string]: string;
}

const sr: BloPostListLocalizationStrings = {
	noNewPosts: "Nema novih objava"
};

const en: BloPostListLocalizationStrings = {
	noNewPosts: "No new posts"
};

const localization: Localized<BloPostListLocalizationStrings> = {en, sr};

export default localization;
