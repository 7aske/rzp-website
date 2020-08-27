export const blogUrl = process.env.NODE_ENV === "development" ?
	"http://localhost:3000" : "http://blog.rzp.7aske.xyz";
export const backendUrl = process.env.NODE_ENV === "development" ?
	"http://localhost:8080/rzp-blog" : "http://7aske.xyz:8080/rzp-blog";
