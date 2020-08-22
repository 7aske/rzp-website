import * as React from "react";
import { useEffect, useState } from "react";
import { BlogPostItem, BlogPostPlaceholder } from "./BlogPostItem";

type BlogPostListProps = {
	title: string;
	service: (params:any) => Promise<Post[]>
};
export const BlogPostList = ({title, service}: BlogPostListProps) => {
	const [posts, setPosts] = useState<Post[]>([]);
	const postCount = 5
	const getPosts = () => {
		setPosts(new Array(postCount).fill(null))
		service({count: postCount}).then(newPosts => {
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
			{posts.map((post, i) => {
				if (post === null) {
					return <BlogPostPlaceholder key={i}/>
				} else {
					return <BlogPostItem key={i} post={post}/>
				}
			})}
		</ul>
	);
};
