type AboutPageLocalizationStrings = {
	howWeWorkTitle: string;
	howWeWorkText: string;
	smallTeams: string;
	smallTeamsText: string[];
	clientAsPartner: string;
	clientAsPartnerText: string[];
	simpleProcess: string;
	learn: string;
	iterate:string;
	success: string;
	[key: string]: string | string[];
}

const sr: AboutPageLocalizationStrings = {
	clientAsPartner: "Klijent kao partner",
	clientAsPartnerText: [
		"Klijenti učestvuju u timu i razvoju da bi najefikasnije došli do željenih rezultata.",
		"Stavljanje klijenta na prvo mesto transformiše način na koji mi radimo.",
	],
	howWeWorkText: "Mali tim koji radi na velikim izazovima uz konstantnu saradnju sa klijentima.",
	howWeWorkTitle: "Kako mi radimo?",
	iterate: "Iteracija",
	success: "Uspeh",
	learn: "Istraživanje",
	simpleProcess: "Jednostavan, iterativni process.",
	smallTeams: "Mali tim",
	smallTeamsText: [
		"Interdisciplinarni tim sa velikim idejama.",
		"Dizajn i prototajp od prvog dana.",
		"Korišćenje savremenih i pouzdanih tehnologija u svakom projektu."
	]
};

const en: AboutPageLocalizationStrings = {
	clientAsPartner: "Client as a partner",
	clientAsPartnerText: [
		"Clients are involved in the team and the development to most efficiently reach desired results.",
		"Putting client first transforms the way we operate.",
	],
	howWeWorkText: "Small team working on big ideas with constant collaboration with clients.",
	howWeWorkTitle: "How we work?",
	iterate: "Iterate",
	success: "Success",
	learn: "Research",
	simpleProcess: "Simple, iterative process",
	smallTeams: "Small teams",
	smallTeamsText: [
		"Interdisciplinary team with big ideas.",
		"Design and prototyping from day one.",
		"Using the most modern and reliable technologies in every project"
	]
};

const localization: Localized<AboutPageLocalizationStrings> = {en, sr};

export default localization;
