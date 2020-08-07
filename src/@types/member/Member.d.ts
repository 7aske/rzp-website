declare type Member = {
	firstName: string;
	lastName: string;
	email: string;
	picture: string;
	about: Localized<string>;
	role: Localized<string>
	socialMedia: SocialMedia[];
}
