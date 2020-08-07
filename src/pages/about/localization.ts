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

const rs: AboutPageLocalizationStrings = {
	clientAsPartner: "Klijent kao partner",
	clientAsPartnerText: [
		"Klijenti učestvuju u timu i razvoju da bi najefikasnije došli do željenih rezultata.",
		"Stavljanje klijenta na prvo mesto transformiše način na koji mi radimo."
	],
	howWeWorkText: "Mali tim koji radi na velikim izazovima uz pouzdanu kolaboraciju sa klijentima.",
	howWeWorkTitle: "Kako mi radimo?",
	iterate: "Iteracija",
	success: "Uspeh",
	learn: "Istraživanje",
	simpleProcess: "Jednostavan, iterativni process.",
	smallTeams: "Mali tim",
	smallTeamsText: [
		"Interdisciplinarni tim sa velikim idejama.",
		"Dizajni i prototajping od prvog dana."
	]
};

const en: AboutPageLocalizationStrings = {
	clientAsPartner: "Client as a partner",
	clientAsPartnerText: [
		"Clients are involved in the team and the development to most efficiently reach desired results.",
		"Putting client first transforms the way we operate."
	],
	howWeWorkText: "Small team working on big ideas with reliable collaboration with clients.",
	howWeWorkTitle: "How we work?",
	iterate: "Iterate",
	success: "Success",
	learn: "Research",
	simpleProcess: "Simple, iterative process",
	smallTeams: "Small teams",
	smallTeamsText: [
		"Interdisciplinary team with big ideas.",
		"Design and prototyping from day one."
	]
};

const localization: Localized<AboutPageLocalizationStrings> = {en, rs};

export default localization;
