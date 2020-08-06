import * as React from "react";
import { useEffect, useState } from "react";
import { BlogPostItem } from "./BlogPostItem";

type BlogPostListProps = {
	title: string;
	service: () => Promise<Post[]>
};
export const BlogPostList = ({title, service}: BlogPostListProps) => {
	const [posts, setPosts] = useState<Post[]>([]);

	const getPosts = () => {
		service().then(newPosts => {
			setPosts(newPosts);
		}).catch(err => {
			console.error(err);
			setPosts([]);
		});
	};

	useEffect(() => getPosts(), []);

	return (
		<ul className="collection with-header animate__animated animate__slideInRight animate__fast">
			<li className="collection-header">{title}</li>
			{posts.map((post, i) => <BlogPostItem key={i} post={post}/>)}
		</ul>
	);
};
