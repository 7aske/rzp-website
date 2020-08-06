const mockPosts: Post[] = [
	{
		title: "Markdown here",
		url: "http://cs230.7aske.xyz:8080/cms-1.0-SNAPSHOT/post/markdown_here",
	},
	{
		title: "Git",
		url: "http://cs230.7aske.xyz:8080/cms-1.0-SNAPSHOT/post/git",
	},
	{
		title: "Pywalfox",
		url: "http://cs230.7aske.xyz:8080/cms-1.0-SNAPSHOT/post/pywalfox",
	},
	{
		title: "Open Source Society University (OSSU)",
		url: "http://cs230.7aske.xyz:8080/cms-1.0-SNAPSHOT/post/open_source_society_university",
	},
	{
		title: "Pystache",
		url: "http://cs230.7aske.xyz:8080/cms-1.0-SNAPSHOT/post/pystache",
	},
	{
		title: "Jekyll",
		url: "http://cs230.7aske.xyz:8080/cms-1.0-SNAPSHOT/post/jekyll",
	},

];

export const getLatestPosts = (): Promise<Post[]> => {
	return new Promise((resolve => resolve(mockPosts)))
};
