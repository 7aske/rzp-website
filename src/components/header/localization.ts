type HeaderLocalizationStrings = {
	title: string;
	text: string;
	latestPosts: string;
	[key: string]: string;
}

const rs: HeaderLocalizationStrings = {
	title: "RS - Lorem ipsum dolor sit amet",
	text: "RS - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur distinctio ducimus error eveniet facilis, fuga impedit iste maxime minus perspiciatis quam quas saepe tenetur ullam vitae, voluptas voluptate. Libero.",
	latestPosts: "Najnoviji postovi",
};

const en: HeaderLocalizationStrings = {
	title: "EN - Lorem ipsum dolor sit amet",
	text: "EN - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur distinctio ducimus error eveniet facilis, fuga impedit iste maxime minus perspiciatis quam quas saepe tenetur ullam vitae, voluptas voluptate. Libero.",
	latestPosts: "Latest posts",
};

const localization: Localized<HeaderLocalizationStrings> = {en, rs};

export default localization;
