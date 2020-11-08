export const blogUrl = process.env.NODE_ENV === "development" ?
	"http://localhost:3000" : "https://blog.rzp.7aske.xyz";
export const backendUrl = process.env.NODE_ENV === "development" ?
	"http://localhost:8080/rzp-blog" : "https://api.rzp.7aske.xyz";
