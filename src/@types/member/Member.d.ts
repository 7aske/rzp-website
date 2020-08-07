declare type Member = {
	firstName: string;
	lastName: string;
	picture: string;
	about: Localized<string>;
	role: Localized<string>
	socialMedia: SocialMedia[];
}
