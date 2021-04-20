type HeaderLocalizationStrings = {
	title: string;
	text: string;
	latestPosts: string;
	[key: string]: string;
}

const sr: HeaderLocalizationStrings = {
	title: "Digitalizujte vaš biznis sa ",
	text: "RS - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur distinctio ducimus error eveniet facilis, fuga impedit iste maxime minus perspiciatis quam quas saepe tenetur ullam vitae, voluptas voluptate. Libero.",
	latestPosts: "Najnovije objave",
};

const en: HeaderLocalizationStrings = {
	title: "Digitize your business with ",
	text: "EN - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur distinctio ducimus error eveniet facilis, fuga impedit iste maxime minus perspiciatis quam quas saepe tenetur ullam vitae, voluptas voluptate. Libero.",
	latestPosts: "Latest posts",
};

const localization: Localized<HeaderLocalizationStrings> = {en, sr};

export default localization;
