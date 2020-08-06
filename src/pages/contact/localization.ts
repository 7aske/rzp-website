type ContactPageLocalizationStrings = {
	title: string;
	text: string;
	[key: string]: string;
}

const rs: ContactPageLocalizationStrings = {
	title: "Kontaktirajte nas",
	text: "RS - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur distinctio ducimus error eveniet facilis, fuga impedit iste maxime minus perspiciatis quam quas saepe tenetur ullam vitae, voluptas voluptate. Libero.",
};

const en: ContactPageLocalizationStrings = {
	title: "Contact us",
	text: "EN - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur distinctio ducimus error eveniet facilis, fuga impedit iste maxime minus perspiciatis quam quas saepe tenetur ullam vitae, voluptas voluptate. Libero.",
};

const localization: Record<string, ContactPageLocalizationStrings> = {en, rs};

export default localization;
