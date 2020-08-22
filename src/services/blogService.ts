import { backendUrl, blogUrl } from "../globals";
import axios from "axios";

export const getLatestPosts = async (params?: any): Promise<Post[]> => {
	const posts = (await axios.get(`${backendUrl}/post/getAllPreview`,{params})).data;
	console.log(posts);
	return posts;
};
