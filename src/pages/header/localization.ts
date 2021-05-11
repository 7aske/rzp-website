type HeaderLocalizationStrings = {
	title: string;
	text: string;
	latestPosts: string;
	[key: string]: string;
}

const sr: HeaderLocalizationStrings = {
	title: "Digitalizujte vaš biznis sa ",
	text: "Tim entuzijasta okupljen sa idejom da digitalizuje Vaš brend.",
	latestPosts: "Najnovije objave",
};

const en: HeaderLocalizationStrings = {
	title: "Digitize your business with ",
	text: "Team of enthusiasts with an idea to digitize your brand.",
	latestPosts: "Latest posts",
};

const localization: Localized<HeaderLocalizationStrings> = {en, sr};

export default localization;
